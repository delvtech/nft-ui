/* eslint-disable @next/next/no-img-element */
import { LoreContainer, StyledSlider } from "components/Lore/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const First = () => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a className="slider-paging">
          <img src={`/assets/png/Lore/First/0${i + 1}.png`} alt="current" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 3500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <LoreContainer>
      <div className="flex-div">
        <h2>
          The skies bellowed <br />
          with thunder
        </h2>
        <p>
          As Wyn and Jannalor jumped in their boat seeking for a new land. For
          days and nights they sailed in the raging Sea of Liquidity, unsure of
          what they’d find.
        </p>
        <p>
          Since the Faorin centralized control of their region, the towers in
          the city had become taller and brighter. Yet tales of arbitrary
          suffering grew as policies designed for the few impacted the many, and
          volatility of the annual harvests increased.
        </p>
        <p>
          Only one thing was certain: there had to be a better way. They found
          adventurers from myriad backgrounds upon exploring. Wyn and Jannalar
          had been researchers, studying the minute details of the origins of
          high elvish magic, but what they found here was new even to them.
        </p>
      </div>
      <div className="flex-div max-width">
        <StyledSlider {...settings}>
          <div>
            <img src={`/assets/png/Lore/First/01.png`} alt="first" />
          </div>
          <div>
            <img src={`/assets/png/Lore/First/02.png`} alt="second" />
          </div>
          <div>
            <img src={`/assets/png/Lore/First/03.png`} alt="third" />
          </div>
          <div>
            <img src={`/assets/png/Lore/First/04.png`} alt="fourth" />
          </div>
          <div>
            <img src={`/assets/png/Lore/First/05.png`} alt="fifth" />
          </div>
        </StyledSlider>
      </div>
    </LoreContainer>
  );
};
