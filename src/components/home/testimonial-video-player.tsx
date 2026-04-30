"use client";

import { useEffect, useRef, useState } from "react";

type TestimonialVideoPlayerProps = {
  videoSrc: string;
  captionSrc: string;
  captionLabel: string;
};

export function TestimonialVideoPlayer({ videoSrc, captionSrc, captionLabel }: TestimonialVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [captionsEnabled, setCaptionsEnabled] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) {
      return;
    }

    const [firstTrack] = videoElement.textTracks;
    if (!firstTrack) {
      return;
    }

    firstTrack.mode = captionsEnabled ? "showing" : "hidden";
  }, [captionsEnabled]);

  function handleToggleCaptions() {
    setCaptionsEnabled((current) => !current);
  }

  return (
    <div className="relative">
      <video ref={videoRef} className="block h-full max-h-[640px] w-full bg-black object-contain" controls preload="metadata" playsInline>
        <source src={videoSrc} type="video/mp4" />
        <track src={captionSrc} kind="captions" srcLang="en" label={captionLabel} default={captionsEnabled} />
        Your browser does not support the video tag.
      </video>
      <button
        type="button"
        className="testimonial-captions-toggle focus-ring absolute top-3 right-3 rounded-full px-3 py-1.5 text-xs font-semibold sm:top-4 sm:right-4 sm:text-sm"
        aria-pressed={captionsEnabled}
        onClick={handleToggleCaptions}
      >
        Captions: {captionsEnabled ? "On" : "Off"}
      </button>
    </div>
  );
}
