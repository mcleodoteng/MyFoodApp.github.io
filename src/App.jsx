import Body1 from "./components/Body1";
import Food from "./components/Food";
import NavBar from "./components/NavBar";
import craft1 from "./assets/craft1.jpg";
import craft2 from "./assets/craft2.jpg";
import chicken from "./assets/chicken.jpg";
import burger from "./assets/burger.jpg";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Body1 />
      <Food bgImage1={craft1} bgImage2={craft2} />
      <Food
        bgImage={chicken}
        className="bg-no-repeat bg-center bg-cover h-full w-full sm:py-5"
      />
      <Food
        bgImage={burger}
        className="bg-no-repeat bg-center bg-cover h-[100px] w-[100px]"
      />
      <Footer />
    </>
  );
}

export default App;
