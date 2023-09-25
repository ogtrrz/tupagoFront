import "@/styles/globals.css";
// import "@fontsource/opens-sans/400.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/styles/createEmotionCache";
import Head from "next/head";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/styles/theme";

import { SessionProvider } from "next-auth/react";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      {/* <Script
				strategy='afterInteractive'
				src='https://www.googletagmanager.com/gtag/js?id=G-VNTMQYCYLR'
			/>
			<Script
				id='google-analytics'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-VNTMQYCYLR', {
						page_path: window.location.pathname,
					});
					`,
				}}
			/>  */}

      <SessionProvider session={session}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
            />
          </Head>

          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
            {/* <Analytics /> */}
          </ThemeProvider>
        </CacheProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
