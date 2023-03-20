import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from "@mui/material/styles";

const customTheme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    fontWeightBold: 700,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={customTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
      )
}
