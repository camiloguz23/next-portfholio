import Head from "next/head";
import React from "react";

type Prop = {
  title?: string;
};

function HeadHtml({ title }: Prop) {
  return (
    <Head>
      <title>{`Jeyson Guzman ${title ?? `- ${title}`}`}</title>
      <meta name="description" content="Esta es mi pagina personal" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/img/JR.svg" />
    </Head>
  );
}

export default HeadHtml;
