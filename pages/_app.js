// pages/_app.js ou _app.tsx
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
