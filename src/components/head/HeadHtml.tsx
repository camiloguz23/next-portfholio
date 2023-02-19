import Head from 'next/head';

interface Prop {
  title?: string;
}

function HeadHtml({ title = 'Jeyson Guzman' }: Prop): JSX.Element {
  return (
    <Head>
      <title>{`${title}`}</title>
      <meta name='description' content='Esta es mi pagina personal' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/img/JR.svg' />
    </Head>
  );
}

export default HeadHtml;
