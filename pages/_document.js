import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id=GTM-KT8CFBQT'+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KT8CFBQT');</script>
<!-- End Google Tag Manager -->
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}