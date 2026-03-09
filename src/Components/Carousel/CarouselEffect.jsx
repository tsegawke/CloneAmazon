import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Classes from "./Carousel.module.css";
import { img } from "./img/data";



function CarouselEffect() {
  return (
    <div className={Classes.hero__wrapper}>
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className={`${Classes.amazonArrow} ${Classes.amazonArrowLeft}`}
            >
              ❮
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className={`${Classes.amazonArrow} ${Classes.amazonArrowRight}`}
            >
              ❯
            </button>
          )
        }
      >
        {img.map((singleImage, i) => (
          <img src={singleImage} key={i} alt={`slide-${i}`} />
        ))}
      </Carousel>

      {/* Gradient overlay */}
      <div className={Classes.hero__img}></div>
    </div>
  );
}

export default CarouselEffect;
