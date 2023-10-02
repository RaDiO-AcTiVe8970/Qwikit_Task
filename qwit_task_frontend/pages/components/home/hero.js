import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Hero() {
  const router = useRouter();
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  // Define an array of background images
  const backgroundImages = [
    "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg",
    "https://cdn.discordapp.com/attachments/305682290388893696/1158426945311215657/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.png?ex=651c34aa&is=651ae32a&hm=55c49b028cc0343cc4180e1e4ffb11add72d7e8b669f92747b614c7988301a68&",
    "https://media.discordapp.net/attachments/305682290388893696/1158426879557115904/1000_F_276881453_iNF7GLXch7CToyLE1ioGEHQyOBKhtw0R.png?ex=651c349a&is=651ae31a&hm=814901386d152acfabd26231ad27d965d1c56658a31274ad60472392510e65fa&"
    // Add more image URLs here as needed
  ];

  const redirectToDiv = function () {
    const element = document.getElementById("abtdiv");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Function to change the background image
  const changeBackgroundImage = () => {
    setFadeIn(true); // Trigger the fade-in transition
    setTimeout(() => {
      setBackgroundImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
      setFadeIn(false); // Reset the fade-in transition
    }, 1000); // Adjust the delay to match your CSS transition duration
  };

  useEffect(() => {
    // Set an interval to change the background image every 10 seconds
    const intervalId = setInterval(changeBackgroundImage, 5000);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`hero max-h-screen ${fadeIn ? "fade-in" : ""}`}
      style={{
        backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`,
      }}
    >
      <div className="h-12/12 hero-overlay bg-opacity-60"> </div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Buying Products Made Easy!
          </h1>
          <p className="mb-5">
            Discover a world of shopping at Opekkha. Explore top-notch products, 
            from fashion to tech, all at your fingertips. Enjoy secure transactions 
            and exclusive deals for a seamless experience. Elevate your online shopping with us today!
          </p>
          <button
            className="btn btn-primary"
            onClick={redirectToDiv}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

