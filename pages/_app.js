import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-TEY9XF1J78"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TEY9XF1J78', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
