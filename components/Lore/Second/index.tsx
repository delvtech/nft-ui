import { LoreContainer, VideoContainer } from "components/Lore/styles";
import content from "../content.json";

export const Second = ({ isMeme }: { isMeme: boolean }) => (
  <LoreContainer align="center">
    <VideoContainer>
      <video controls>
        <source src="/assets/video/Launch-clip.mp4" />
      </video>
    </VideoContainer>
    <div className="flex-div max-width">
      <h2>
        {isMeme ? content.meme.partTwo.header : content.original.partTwo.header}
      </h2>
      {isMeme
        ? content.meme.partTwo.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        : content.original.partTwo.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
    </div>
  </LoreContainer>
);
