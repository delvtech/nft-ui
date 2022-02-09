import { LoreContainer, VideoContainer } from "components/Lore/styles";

export const Second = () => (
  <LoreContainer align="center">
    <div className="flex-div">
      <VideoContainer>
        <video controls>
          <source src="/assets/video/video.mp4" />
        </video>
      </VideoContainer>
    </div>
    <div className="flex-div max-width">
      <h2>
        They were soon joined <br /> by Corym
      </h2>
      <p>
        They were soon joined by Corym, a High Elf from the Nordic faction,
        wielding a Bo staff made of Mallorn tree. Hailing from the House of
        Chadtham, he taught them ways of governing both the duties and the
        spoils of harvest. “We’ll teach them the way of the high elves, and
        we’ll learn from them.
      </p>
      <p>
        Our magic will grow stronger together,” Jannalor replied. Experimenting
        with spices from their new neighbours, they turned to a crop called
        Bacchae, long outlawed in the Old World for being too degenerate.
      </p>
      <p>
        With these elements combined, they tamed the harvest’s boom and bust
        cycles, allowing spices to flow at a steady rate. This brought stability
        to their farming efforts, and to their newfound way of life.
      </p>
    </div>
  </LoreContainer>
);
