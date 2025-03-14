import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const arrayImagens = [
    {
      url: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
      alt: "Imagem 1",
      link: "#",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      alt: "Imagem 2",
      link: "#",
    },
    {
      url: "https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o",
      alt: "Imagem 3",
      link: "#",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % arrayImagens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [arrayImagens.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % arrayImagens.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + arrayImagens.length) % arrayImagens.length
    );
  };

  return (
    <div className="App">
      <div className="slider">
        <div className="arrows">
          <span
            className="material-icons-outlined arrowLeft"
            onClick={prevSlide}
          >
            expand_circle_down
          </span>
          <span
            className="material-icons-outlined arrowRight"
            onClick={nextSlide}
          >
            expand_circle_down
          </span>
        </div>

        <a href={arrayImagens[currentSlide].link}>
          <img
            className="imagemSlider"
            src={arrayImagens[currentSlide].url}
            alt={arrayImagens[currentSlide].alt}
          />
        </a>

        <div className="dots">
          {arrayImagens.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
