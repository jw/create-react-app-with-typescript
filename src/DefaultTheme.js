import { createTheme } from '@material-ui/core/styles'
import createPalette from '@material-ui/core/styles/createPalette'
import createTypography from '@material-ui/core/styles/createTypography'

const DefaultTheme = (() => {
  const palette = createPalette({
    type: 'light',
    primary: { main: "#666666" },
    secondary: { main: "#999999" },
  });

  const typography = createTypography(palette, {fontFamily: 'montserrat'});

  return createTheme({
    palette: palette,
    typography: typography,
  });
})();

export default DefaultTheme;
