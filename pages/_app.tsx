import '../style/styles.css';
import { UserContextProvider } from 'context';

export default function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}
