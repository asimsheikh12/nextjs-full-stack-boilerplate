import { createTheme, responsiveFontSizes } from '@mui/material';
import type { Theme as ITheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    tertiary: true;
  }
}

declare module '@mui/material/Icon' {
  interface IconPropsColorOverrides {
    tertiary: true;
  }
}

export const theme: ITheme = responsiveFontSizes(
  createTheme({
    palette: {
      secondary: {
        main: '#3f51b5',
        light: '#6573c3',
        dark: '#2c387e',
      },
      primary: {
        main: '#0052cc',
        light: '#ab003c',
        dark: '#f73378',
      },
      tertiary: {
        main: '#007bb2',
        light: '#007bb2',
        dark: '#007bb2',
      },
      background: {
        default: '#ffffff',
      },
      error: {
        main: '#D16947',
        light: '#D16947',
        dark: '#D16947',
      },
      warning: {
        main: '#D7A340',
        light: '#D7A340',
        dark: '#D7A340',
      },
      info: {
        main: '#88A5D4',
        light: '#88A5D4',
        dark: '#88A5D4',
      },
      success: {
        main: '#51A087',
        light: '#6BBEA6',
        dark: '#51A087',
      },
    },
    shape: {
      borderRadius: 0,
    },
    typography: {
      fontFamily: 'Open Sans',
      fontSize: 16,
      body1: {
        fontFamily: 'Open Sans',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '20px',
      },
      body2: {
        fontFamily: 'Open Sans',
        fontSize: 14,
        lineHeight: '18px',
      },
      subtitle1: {
        fontFamily: 'Open Sans',
        lineHeight: 1.5,
        fontWeight: 500,
        fontSize: 17,
      },
      subtitle2: {
        fontFamily: 'Open Sans',
        fontSize: 15,
        lineHeight: 1.2,
      },
      caption: {
        fontFamily: 'Open Sans',
        fontSize: 12,
        lineHeight: 1,
      },
      overline: {
        fontFamily: 'Open Sans',
        fontSize: 10,
      },
      h1: {
        fontFamily: 'Tenor Sans',
        fontWeight: 400,
        fontSize: 21,
      },
      h2: {
        fontFamily: 'Tenor Sans',
        fontSize: 52,
      },
      h3: {
        fontFamily: 'Tenor Sans',
      },
      h4: {
        fontFamily: 'Tenor Sans',
        fontSize: 44,
      },
      h5: {
        fontFamily: 'Tenor Sans',
        fontSize: 36,
        lineHeight: 1.125,
      },
      h6: {
        fontFamily: 'Tenor Sans',
        fontSize: 25,
        lineHeight: 1.125,
      },
    },
  })
);
