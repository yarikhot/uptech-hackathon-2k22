import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { Path, PathValue, UnpackNestedValue } from 'react-hook-form';
import { IProps } from './IProps';
import { FileInfo, ImageName, ImageWrap, StyledButton } from './styles';
import { IFile } from './types';

const blockStyles = { display: 'flex', alignItems: 'center', justifyContent: 'space-between' };

export const ImageFileUpload = <T extends object>({
  register,
  setValue,
  fieldName,
  imageURL,
  onStartLoad,
  onFinishLoad,
  isDisabled = false,
}: IProps<T>) => {
  const [loadedFile, setLoadedFile] = React.useState<IFile | null>(null);
  const [loadedImageURL, setLoadedImageURL] = React.useState(imageURL);
  let loadedImageFileName = '';

  const onDrop = React.useCallback(
    (acceptedFiles) => {
      if (onStartLoad) {
        onStartLoad();
      }
      const file = acceptedFiles[0];
      setLoadedFile(
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );
    },
    [setValue, fieldName, onStartLoad, onFinishLoad],
  );

  const deleteFile = React.useCallback(() => {
    if (imageURL) {
      setLoadedImageURL('');
    }
    setLoadedFile(null);
    setValue(fieldName, '' as UnpackNestedValue<PathValue<T, Path<T>>>, {
      shouldDirty: true,
    });
  }, [imageURL, fieldName, setValue]);

  const { getRootProps, getInputProps, open } = useDropzone({
    // accept: 'image/jpeg,image/png',
    noClick: true,
    maxFiles: 1,
    onDrop,
    disabled: isDisabled,
  });

  React.useEffect(() => {
    // revoking the data uri to avoid memory leaks
    if (loadedFile) {
      URL.revokeObjectURL(loadedFile.preview);
    }
  }, [loadedFile]);

  if (imageURL) {
    loadedImageFileName = new URL(imageURL).pathname.replace('/', '');
  }

  return (
    <Box
      {...getRootProps({ className: 'dropzone' })}
      sx={{
        pt: '24px',
        pb: '24px',
        border: '1px dashed grey',
        borderRadius: '8px',
        transition: 'background-color 0.4s ease-in-out',
        padding: 2,
      }}
    >
      {loadedFile || loadedImageURL ? (
        <Box sx={blockStyles}>
          <FileInfo>
            <ImageWrap>
              <img src={loadedFile?.preview || loadedImageURL} alt="preview" />
            </ImageWrap>
            <ImageName variant="body1">{loadedFile?.name || loadedImageFileName}</ImageName>
          </FileInfo>
          <StyledButton variant="outlined" onClick={deleteFile} disabled={isDisabled}>
            Delete picture
          </StyledButton>
        </Box>
      ) : (
        <Box sx={blockStyles}>
          <input {...getInputProps()} disabled={isDisabled} />
          <input type="hidden" {...register(fieldName)} />
          <Typography
            variant="body1"
            sx={{
              marginRight: '16px',
            }}
          >
            Перетягніть фото або додайте файл із компютера
          </Typography>
          <StyledButton variant="outlined" onClick={open} disabled={isDisabled}>
            Завантаження фото
          </StyledButton>
        </Box>
      )}
    </Box>
  );
};
