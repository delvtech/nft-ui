import { LoreContainer, VideoContainer } from "components/Lore/styles";
import content from "../content.json";

export const Second = ({ isMeme }: { isMeme: boolean }) => (
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
        {isMeme ? content.meme.partTwo.header : content.original.partTwo.header}
      </h2>
      {isMeme
        ? content.meme.partTwo.body.map((paragraph) => <p>{paragraph}</p>)
        : content.original.partTwo.body.map((paragraph) => <p>{paragraph}</p>)}
    </div>
  </LoreContainer>
);
