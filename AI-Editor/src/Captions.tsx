import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

// Same shape as the "segments" in Whisper's JSON output (times in seconds).
export type CaptionSegment = {
  start: number;
  end: number;
  text: string;
};

export const Captions: React.FC<{ captions: CaptionSegment[] }> = ({ captions }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const time = frame / fps;

  const current = captions.find((c) => time >= c.start && time < c.end);
  if (!current) return null;

  const startFrame = Math.round(current.start * fps);
  const pop = spring({ frame: frame - startFrame, fps, config: { damping: 14, mass: 0.6 } });
  const scale = interpolate(pop, [0, 1], [0.85, 1]);

  return (
    <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", paddingBottom: 420 }}>
      <div
        style={{
          maxWidth: 920,
          padding: "18px 32px",
          borderRadius: 24,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 800,
          fontSize: 64,
          lineHeight: 1.2,
          textAlign: "center",
          transform: `scale(${scale})`,
        }}
      >
        {current.text.trim()}
      </div>
    </AbsoluteFill>
  );
};
