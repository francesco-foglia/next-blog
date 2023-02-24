import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" />
  </>
);

export default App;
