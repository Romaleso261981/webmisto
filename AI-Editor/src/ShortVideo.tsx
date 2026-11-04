import {
  AbsoluteFill,
  OffthreadVideo,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Captions, CaptionSegment } from "./Captions";

export type ShortVideoProps = {
  /** File name inside the public/ folder, e.g. "clip.mp4". Empty = gradient background. */
  videoFile: string;
  title: string;
  subtitle: string;
  /** Minimum length in seconds (the video gets longer if captions run past it). */
  durationInSeconds: number;
  captions: CaptionSegment[];
};

export const shortVideoSchemaDefaults: ShortVideoProps = {
  videoFile: "",
  title: "Your title here",
  subtitle: "AI-Editor · Remotion",
  durationInSeconds: 6,
  captions: [
    { start: 0.5, end: 2.5, text: "Hi! This is a vertical video template." },
    { start: 2.5, end: 4.5, text: "Put your clip into the public folder." },
    { start: 4.5, end: 6, text: "Captions can come straight from Whisper." },
  ],
};

export const ShortVideo: React.FC<ShortVideoProps> = ({ videoFile, title, subtitle, captions }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const titleIn = spring({ frame, fps, config: { damping: 200 } });
  const titleY = interpolate(titleIn, [0, 1], [-80, 0]);
  const fadeOut = interpolate(frame, [durationInFrames - 15, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "black", opacity: fadeOut }}>
      {videoFile ? (
        <OffthreadVideo src={staticFile(videoFile)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <AbsoluteFill style={{ background: "linear-gradient(160deg, #1e3a8a 0%, #7c3aed 55%, #db2777 100%)" }} />
      )}

      <AbsoluteFill style={{ alignItems: "center", paddingTop: 220 }}>
        <div
          style={{
            transform: `translateY(${titleY}px)`,
            opacity: titleIn,
            textAlign: "center",
            color: "white",
            fontFamily: "Helvetica, Arial, sans-serif",
            textShadow: "0 4px 24px rgba(0,0,0,0.5)",
            padding: "0 60px",
          }}
        >
          <div style={{ fontSize: 96, fontWeight: 900, lineHeight: 1.05 }}>{title}</div>
          <div style={{ fontSize: 44, fontWeight: 500, marginTop: 24, opacity: 0.85 }}>{subtitle}</div>
        </div>
      </AbsoluteFill>

      <Captions captions={captions} />
    </AbsoluteFill>
  );
};
