import { FC, useState, useRef, SyntheticEvent, useCallback } from 'react';
import { InputLabel, Avatar, Box } from '@mui/material';
import { useMutation } from 'react-query';

import cameraImg from '@assets/camera.svg';
import { LinkButton } from '@atoms';
import { Axios } from '@helpers';
import { palette } from '@styles/palette';
import { useProfile } from '@hooks/useProfile';

interface UploadImageProps {
  apiRoute: string;
  label: string;
  defaultImage?: string;
}

export const UploadImage: FC<UploadImageProps> = ({ apiRoute, label, defaultImage }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | ArrayBuffer>(defaultImage || '');
  const { fetchProfile } = useProfile();

  const { mutate: uploadImage, isLoading } = useMutation<unknown, unknown, unknown>(
    (data) => Axios.put(apiRoute, data),
    { onSuccess: () => fetchProfile() },
  );

  const imageChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.currentTarget.files[0]);

      const formData = new FormData();
      formData.set('file', e.currentTarget.files[0]);
      uploadImage(formData);

      fileReader.onload = (event: ProgressEvent<FileReader>) => {
        if (event?.target?.result) {
          setImage(event.target.result);
        }
      };
    }
  }, []);

  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <Box display="flex" alignItems="center">
        <Avatar
          alt="Avatar"
          sx={{ width: 72, height: 72, mr: '20px', background: palette.text.white }}
          sizes="large"
          src={(image as string) || cameraImg}
        />
        <LinkButton disabled={isLoading} onClick={() => fileInputRef?.current?.click()}>
          Upload picture
        </LinkButton>
        <input
          onChange={imageChange}
          ref={fileInputRef}
          accept="image/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          type="file"
        />
      </Box>
    </div>
  );
};
