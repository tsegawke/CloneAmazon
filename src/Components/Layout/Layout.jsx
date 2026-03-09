import Footer from "../Footer/Footer";
import Header from "../Header/Header";
function LayOut({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LayOut;
