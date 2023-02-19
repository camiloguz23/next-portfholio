import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--roboto'
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
