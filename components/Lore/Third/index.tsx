import { LoreContainer } from "components/Lore/styles";
import Image from "next/image";

export const Third = () => {
  return (
    <LoreContainer>
      <div className="flex-div">
        <h2>Hearing of this prosperous harvest outside</h2>
        <p>
          Hearing of this prosperous harvest outside of their direct control,
          the Faorin quickly acted to halt all shipping and impose an embargo on
          all spice shipments across the Sea of Liquidity.
        </p>
        <p>
          “This aggression will not stand! The spice must flow!” raged Jannalor,
          determined to share their findings with their ancestors back home.
          Channeling their newfound powers, the Elfi summoned a Portal right
          outside the tower city of the Faorin.
        </p>
        <p>
          An open challenge to ancient tradition invited all those who dared
          walk a new path. And it was then when their true adventure began.
        </p>
      </div>
      <div className="flex-div max-width">
        <Image src={`/assets/png/Lore/Third/third.png`} alt="third" />
      </div>
    </LoreContainer>
  );
};
