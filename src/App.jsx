import { useState } from "react";
import web3ImageDesktop from "../assets/images/image-web-3-desktop.jpg";
import web3ImageMobile from "../assets/images/image-web-3-mobile.jpg";
import Cards from "./components/Cards";
import Content from "./components/Content";
import Header from "./components/Header";
import News from "./components/News";
import Title from "./components/Title";
function App() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="relative px-5 lg:mx-auto lg:max-w-4xl xl:max-w-6xl xl:py-10">
      <Header openNav={openNav} setOpenNav={setOpenNav} />
      <main className="pb-16 font-inter">
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:gap-6">
          <picture className="inline-block lg:order-1 lg:col-[1/3]">
            <source srcSet={web3ImageDesktop} media="(min-width: 1024px)" />
            <img
              src={web3ImageMobile}
              alt="web 3 image"
              className="mx-auto bg-cover bg-center min-[500px]:max-w-sm lg:mx-0 lg:max-w-full"
            />
          </picture>
          <Title />
          <Content />
          <News />
        </div>
        <Cards />
      </main>
    </div>
  );
}

export default App;
