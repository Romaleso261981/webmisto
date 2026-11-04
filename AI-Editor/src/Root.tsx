import { Composition } from "remotion";
import { ShortVideo, shortVideoSchemaDefaults, ShortVideoProps } from "./ShortVideo";

// Vertical 9:16 format for Reels, TikTok and YouTube Shorts.
export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="ShortVideo"
      component={ShortVideo}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
      defaultProps={shortVideoSchemaDefaults}
      // Video length follows the props: the last caption's end or durationInSeconds.
      calculateMetadata={({ props }: { props: ShortVideoProps }) => {
        const lastCaptionEnd = props.captions.reduce((max, c) => Math.max(max, c.end), 0);
        const seconds = Math.max(props.durationInSeconds, lastCaptionEnd);
        return { durationInFrames: Math.ceil(seconds * FPS) };
      }}
    />
  );
};
