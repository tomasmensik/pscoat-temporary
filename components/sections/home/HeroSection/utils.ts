// Vimeo Player utility functions

declare global {
  interface Window {
    Vimeo: any;
  }
}

export const loadVimeoPlayer = (
  iframe: HTMLIFrameElement | null,
  onLoad?: (player: any) => void
) => {
  // Load Vimeo Player API script
  const script = document.createElement("script");
  script.src = "https://player.vimeo.com/api/player.js";
  script.async = true;
  document.body.appendChild(script);

  script.onload = () => {
    if (iframe && window.Vimeo) {
      const player = new window.Vimeo.Player(iframe);
      // Set loop to true for infinite repeat
      player.setLoop(true);
      // Autoplay
      player.play();
      if (onLoad) {
        onLoad(player);
      }
    }
  };

  return () => {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }
  };
};

