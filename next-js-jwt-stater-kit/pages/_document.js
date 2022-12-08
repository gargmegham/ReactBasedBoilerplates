import Document, {Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en" data-direction="rtl">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link rel="stylesheet" href="/vendors/gaxon/styles.css"/>
        <link rel="stylesheet" href="/vendors/flag/sprite-flags-24x24.css"/>
        <link rel="stylesheet" href="/vendors/noir-pro/styles.css"/>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
      </Html>
    );
  }
}

export default MyDocument;
