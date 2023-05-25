import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/footer.css";
import "@/styles/project.css";
import "@/styles/home.page.css";
import "@/styles/projects.page.css";
import "@/styles/about.page.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
