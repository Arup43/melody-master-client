import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/home/slider/slider1.jpg";
import img2 from "../../../assets/home/slider/slider2.jpg";
import img3 from "../../../assets/home/slider/slider3.jpg";
import img4 from "../../../assets/home/slider/slider4.jpg";
import img5 from "../../../assets/home/slider/slider5.jpg";
import img6 from "../../../assets/home/slider/slider6.jpg";

const Slider = () => {
  return (
    <Carousel className="max-[600px]:mt-24">
      <div>
        <img src={img1} />
        <div className="legend p-10">
          <h1 className="text-6xl text-purple-300 max-[600px]:text-lg">
            Melody Master
          </h1>
          <p className="mt-3 max-[600px]:mt-0">Brings music to life!</p>
          <p className="text-[0.9rem] mt-10 w-2/6 mx-auto max-[600px]:hidden">
            Want to learn{" "}
            <span className="text-3xl text-fuchsia-600">Guitar</span>? We have
            some awesome teachers to guide you. Be with us and fulfil your
            dreams to learn guitar
          </p>
          <button className="btn btn-sm md:mt-8 max-[600px]:text-xs max-[600px]:mt-2">
            Explore Our classes
          </button>
        </div>
      </div>
      <div>
        <img src={img2} />
        <div className="legend p-10">
          <h1 className="text-6xl text-purple-300 max-[600px]:text-lg">
            Melody Master
          </h1>
          <p className="mt-3 max-[600px]:mt-0">Brings music to life!</p>
          <p className="text-[0.9rem] mt-10 w-2/6 mx-auto max-[600px]:hidden">
            Want to learn{" "}
            <span className="text-3xl text-fuchsia-600">Violin</span>? We have
            some awesome teachers to guide you. Be with us and fulfil your
            dreams to learn guitar
          </p>
          <button className="btn btn-sm md:mt-8 max-[600px]:text-xs max-[600px]:mt-2">
            Explore Our classes
          </button>
        </div>
      </div>
      <div>
        <img src={img3} />
        <div className="legend p-10">
          <h1 className="text-6xl text-purple-300 max-[600px]:text-lg">
            Melody Master
          </h1>
          <p className="mt-3 max-[600px]:mt-0">Brings music to life!</p>
          <p className="text-[0.9rem] mt-10 w-2/6 mx-auto max-[600px]:hidden">
            Want to learn{" "}
            <span className="text-3xl text-fuchsia-600">Piano</span>? We have
            some awesome teachers to guide you. Be with us and fulfil your
            dreams to learn guitar
          </p>
          <button className="btn btn-sm md:mt-8 max-[600px]:text-xs max-[600px]:mt-2">
            Explore Our classes
          </button>
        </div>
      </div>
      <div>
        <img src={img4} />
        <div className="legend p-10">
          <h1 className="text-6xl text-purple-300 max-[600px]:text-lg">
            Melody Master
          </h1>
          <p className="mt-3 max-[600px]:mt-0">Brings music to life!</p>
          <p className="text-[0.9rem] mt-10 w-2/6 mx-auto max-[600px]:hidden">
            Want to learn{" "}
            <span className="text-3xl text-fuchsia-600">Flute</span>? We have
            some awesome teachers to guide you. Be with us and fulfil your
            dreams to learn guitar
          </p>
          <button className="btn btn-sm md:mt-8 max-[600px]:text-xs max-[600px]:mt-2">
            Explore Our classes
          </button>
        </div>
      </div>
      <div>
        <img src={img5} />
        <div className="legend p-10">
          <h1 className="text-6xl text-purple-300 max-[600px]:text-lg">
            Melody Master
          </h1>
          <p className="mt-3 max-[600px]:mt-0">Brings music to life!</p>
          <p className="text-[0.9rem] mt-10 w-2/6 mx-auto max-[600px]:hidden">
            Want to learn{" "}
            <span className="text-3xl text-fuchsia-600">Drum Set</span>? We have
            some awesome teachers to guide you. Be with us and fulfil your
            dreams to learn guitar
          </p>
          <button className="btn btn-sm md:mt-8 max-[600px]:text-xs max-[600px]:mt-2">
            Explore Our classes
          </button>
        </div>
      </div>
      <div>
        <img src={img6} />
        <div className="legend p-10">
          <h1 className="text-6xl text-purple-300 max-[600px]:text-lg">
            Melody Master
          </h1>
          <p className="mt-3 max-[600px]:mt-0">Brings music to life!</p>
          <p className="text-[0.9rem] mt-10 w-2/6 mx-auto max-[600px]:hidden">
            Want to learn{" "}
            <span className="text-3xl text-fuchsia-600">Saxophone</span>? We
            have some awesome teachers to guide you. Be with us and fulfil your
            dreams to learn guitar
          </p>
          <button className="btn btn-sm md:mt-8 max-[600px]:text-xs max-[600px]:mt-2">
            Explore Our classes
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
