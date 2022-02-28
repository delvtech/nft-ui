import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import { LoreContainer, StyledSlider } from "components/Lore/styles";

export const First = () => (
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
        Since the Faorin centralized control of their region, the towers in the
        city had become taller and brighter. Yet tales of arbitrary suffering
        grew as policies designed for the few impacted the many, and volatility
        of the annual harvests increased.
      </p>
      <p>
        Only one thing was certain: there had to be a better way. They found
        adventurers from myriad backgrounds upon exploring. Wyn and Jannalar had
        been researchers, studying the minute details of the origins of high
        elvish magic, but what they found here was new even to them.
      </p>
    </div>
    <div className="flex-div max-width">
      <StyledSlider {...settings}>
        <div>
          <Image
            src="/assets/png/Lore/First/01.png"
            alt="first"
            height={100}
            width={110}
            layout="responsive"
            quality={100}
          />
        </div>
        <div>
          <Image
            src="/assets/png/Lore/First/02.png"
            alt="second"
            height={100}
            width={110}
            layout="responsive"
            quality={100}
          />
        </div>
        <div>
          <Image
            src={`/assets/png/Lore/First/03.png`}
            alt="third"
            height={100}
            width={110}
            layout="responsive"
            quality={100}
          />
        </div>
        <div>
          <Image
            src={`/assets/png/Lore/First/04.png`}
            alt="fourth"
            height={100}
            width={110}
            layout="responsive"
            quality={100}
          />
        </div>
        <div>
          <Image
            src={`/assets/png/Lore/First/05.png`}
            alt="fifth"
            height={100}
            width={109}
            layout="responsive"
            quality={100}
          />
        </div>
      </StyledSlider>
    </div>
  </LoreContainer>
);

const settings = {
  customPaging: (i: number) => (
    <a className="slider-paging">
      <Image
        src={`/assets/png/Lore/First/0${i + 1}.png`}
        alt="current"
        height={100}
        width={109}
      />
    </a>
  ),
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
