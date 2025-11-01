export type SquareItem = {
  id: string;
  label: string; // left small square main label
  sublabel?: string; // smaller line in the small square
  images: string[]; // 1-2 images for the large square content
  contentTitle: string; // large square heading
  contentText?: string; // paragraph under heading
  imageLayout?:
    | "leftRight"
    | "twoStack"
    | "single"
    | "imageLeftTextRight"
    | "imageTopLeft"; // arrangement for big square
};

