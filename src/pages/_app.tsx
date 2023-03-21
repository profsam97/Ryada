import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

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
    const client = new QueryClient();
  return (
      <QueryClientProvider client={client}>
      <ThemeProvider theme={customTheme}>
              <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
      </ThemeProvider>
      </QueryClientProvider>
  )
}
