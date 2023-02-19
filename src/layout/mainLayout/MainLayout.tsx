import { HeadHtml, Header } from '@/components';

interface Prop {
  title?: string;
  children: React.ReactNode;
}

function MainLayout({ title, children }: Prop): JSX.Element {
  return (
    <>
      <HeadHtml title={title} />
      <Header />
      {children}
    </>
  );
}

export default MainLayout;
