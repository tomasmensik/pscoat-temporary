"use client";

export default function FullScreenVideoSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background video that covers the viewport */}
      <div className="absolute inset-0 video-bg" aria-hidden="true">
        <iframe
          src="https://player.vimeo.com/video/1131819990?background=1&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0"
          title="RAL"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          frameBorder={0}
          className="pointer-events-none"
        />
      </div>

      {/* Overlay title */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <h2 className="text-white text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-center drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
          RAL jako standard
        </h2>
      </div>

      <style jsx>{`
        /* Cover behavior: center and scale to fill viewport while keeping 16:9 */
        .video-bg iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 177.78vh; /* 100 * 16/9 */
          height: 100vh;
        }
        @media (min-aspect-ratio: 16/9) {
          .video-bg iframe {
            width: 100vw;
            height: 56.25vw; /* 100 * 9/16 */
          }
        }
      `}</style>
    </section>
  );
}
