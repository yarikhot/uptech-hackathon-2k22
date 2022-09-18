import { CSSProperties } from 'react';
import { createTheme } from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';

import { palette } from './palette';
import { typography } from './typography';
import { breakpoints } from './breakpoints';

declare module '@mui/material/styles' {
  interface Palette {
    status: {
      inProgress: CSSProperties['color'];
      scheduled: CSSProperties['color'];
      finished: CSSProperties['color'];
      draft: CSSProperties['color'];
    };
    backgrounds: {
      primary: CSSProperties['color'];
      secondary: CSSProperties['color'];
    };
  }
  interface PaletteOptions {
    status: {
      inProgress: CSSProperties['color'];
      scheduled: CSSProperties['color'];
      finished: CSSProperties['color'];
      draft: CSSProperties['color'];
    };
    backgrounds: {
      primary: CSSProperties['color'];
      secondary: CSSProperties['color'];
    };
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true;
  }
}

export const theme = createTheme({
  typography,
  palette,
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderColor: palette.divider,
          height: '24px',
          fontWeight: 400,
          fontSize: '13px',
          lineHeight: '18px',

          '& svg': {
            fill: palette.divider,
          },

          '&.Mui-disabled': {
            opacity: 1,
          },

          '& .MuiChip-avatar': {
            color: palette.text.white,
            height: '18px',
            width: '18px',
            fontSize: '9px',
          },

          '& .MuiChip-deleteIcon': {
            height: '13px',
            width: '13px',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '13px',
          lineHeight: '174%',
          color: palette.primary.main,
          textDecoration: 'underline',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: `1px solid ${palette.divider}`,
          background: '#BDBDBD',
          color: palette.text.white,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          '& .Mui-completed': {
            color: `${palette.success.main} !important`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: '100%',
          borderRadius: '8px',
          height: '44px',
          background: palette.text.white,

          '& fieldset': {
            borderRadius: '8px',
            borderColor: palette.divider,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.divider,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.primary.main,
            borderWidth: '1px',
          },

          input: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },

          '&.Mui-disabled': {
            background: palette.action.selected,
            color: palette.text.secondary,
            WebkitTextFillColor: palette.text.secondary,

            '& .MuiSelect-outlined': {
              color: palette.text.secondary,
              WebkitTextFillColor: palette.text.secondary,
            },

            '& input': {
              WebkitTextFillColor: palette.text.secondary,
            },
            '& fieldset': {
              borderColor: 'transparent !important',
            },
            '& .MuiOutlinedInput-input': {
              color: palette.text.secondary,
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '13px',
          lineHeight: '161%',
          marginBottom: '8px',
          color: palette.text.primary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          height: '51px',
          textDecoration: 'none',
          borderRadius: '10px',
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '15px',
          lineHeight: '26px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',

          '& .MuiOutlinedInput-root': {
            background: palette.text.white,
            minHeight: '44px',
            height: '44px',
            borderRadius: '10px',
            transition: 'all .2s linear',

            '&.Mui-disabled': {
              background: palette.action.selected,
              color: palette.text.secondary,
              WebkitTextFillColor: palette.text.secondary,

              '& input': {
                WebkitTextFillColor: palette.text.secondary,
              },

              '& fieldset': {
                borderColor: 'transparent',
              },
              '& .MuiOutlinedInput-input': {
                color: palette.text.secondary,
              },
            },

            '& fieldset': {
              borderColor: palette.divider,
            },

            '&:hover': {
              borderWidth: '1px',
              borderColor: palette.primary.main,
            },
            '&:hover fieldset': {
              borderColor: palette.primary.main,
            },
            '&.Mui-focused fieldset': {
              borderWidth: '1px',
            },
            '& .MuiOutlinedInput-input': {
              borderRadius: '10px',
              fontSize: '13px',
              height: '44px',
              lineHeight: '24px',

              '&::placeholder': {
                color: palette.text.disabled,
                fontWeight: 400,
                fontSize: '13px',
                opacity: 1,
              },
            },
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',
          '& .MuiDataGrid-columnHeaders': {
            boxShadow: 'inset 0px -1px 0px rgba(0, 0, 0, 0.12)',
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            boxShadow: 'inset 0px -1px 0px rgba(0, 0, 0, 0.12)',
            border: 'none',
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
          borderRadius: '6px',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minHeight: '38px',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${palette.divider}`,
          width: '100%',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '24px',
          textTransform: 'none',
          padding: '12px 8px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          color: palette.error.main,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            padding: '3px 3px 3px 9px',

            '& .MuiOutlinedInput-input': {
              height: 'auto !important',
            },
          },
        },
      },
    },
  },
  breakpoints,
});
