import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../app/globals.css";
import Header from "../../components/header";
import LeftAside from "../../components/leftAside";
import Rightaside from "../../components/rightAside";
import Footer from "../../components/footer";

export default function MyApp({ Component, pageProps }) {
    return (
              <>
                  <Header />
                  <main class="row">
                  <LeftAside />
                      <Component {...pageProps} />
                  <Rightaside />
                  </main>
                  <Footer />
              </>
          ); 
}
