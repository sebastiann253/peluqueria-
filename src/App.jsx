import { Navbar, Hero, Services, Gallery, Reviews, Faq, Contact, Footer, Fab } from "./sections";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
