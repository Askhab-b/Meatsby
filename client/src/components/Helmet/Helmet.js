import Head from "next/head";

const Helmet = props => {
  return (
      <Head>
      <title>{props.title}</title>
      <meta name="description" content="Generated by create next app" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <link rel="icon" href="/favicon.ico" />
      {props.children}
    </Head>
    )
}

export default Helmet;
