import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Kanit:400,700,200"
            rel="stylesheet"
          />
          
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.12.1/css/all.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
