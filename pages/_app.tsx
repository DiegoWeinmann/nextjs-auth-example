import '../style/styles.css';
import { useAuthUser } from 'utils/useAuthUser';

export default function MyApp({ Component, pageProps }) {
  useAuthUser();
  return <Component {...pageProps} />;
}
