import AllProducts from "./components/AllProducts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import InnerContainer from "./components/InnerContainer";
import Navbar from "./components/Navbar";
import OuterContainer from "./components/OuterContainer";
import UpperNavbar from "./components/UpperNavbar";
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <OuterContainer>
        <InnerContainer>
          <UpperNavbar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<AllProducts/>}/>
          </Routes>
          <Footer />
        </InnerContainer>
      </OuterContainer>
    </>
  );
}

export default App;
