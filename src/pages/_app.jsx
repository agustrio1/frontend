import AppShell from "@/components/layouts/AppShell";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}
