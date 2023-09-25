import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../styles/createEmotionCache";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='es'>
				<Head>
					{this.props.emotionStyleTags}
					<link rel="icon" href="/favicon.ico"></link>
					<meta name='X-Frame-Options' content='DENY' />
					<meta
						name='Content-Security-Policy'
						content="default-src 'self'; image-src 'self'; script-src 'self' https://www.google-analytics.com; font-src 'self'; connect-src vitals.vercel-insights.com"
					/>
					<meta name='X-Content-Type-Options' content='nosniff' />
					<meta
						name='Permissions-Policy'
						content='camera=(); battery=(); geolocation=(); microphone=()'
					/>
					<meta
						name='Feature-Policy'
						content="geolocation 'none'; microphone 'none'"
					/>

					<meta name='Referrer-Policy' content='origin-when-cross-origin' />
					<meta httpEquiv='X-XSS-Protection' content='1; mode=block'/>
					<meta name="referrer" content="no-referrer"/>
					<meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload"/>

				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const originalRenderPage = ctx.renderPage;

	const cache = createEmotionCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />;
				},
		});

	const initialProps = await Document.getInitialProps(ctx);

	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(" ")}`}
			key={style.key}
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		//emotionStyleTags,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [
			...React.Children.toArray(initialProps.styles),
			...emotionStyleTags,
		],
	};
};
