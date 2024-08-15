import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Banner from "./components/main/Banner";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* HEADER */}
        <Header />
        {/* MAIN */}
        <main>
          <Banner />
        </main>
        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}

export default App;
