import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
  :root {
  --color-fiery-rose: #f25a70;
  --color-primary-medium: #ee3f3f;
  --color-very-green: #009b14;
  --color-black-dark: #3a4042;
  --color-black: #000000;
  --color-contact: #151515;
  --color-black-less: #111;
  --color-grey: #333;
  --color-gold: #cab56a;
  --color-gold-one: #ab975b;
  --color-gold-two: #97834c;
  --color-gold-three: #b1995a;
  --color-gold-four: #ab9256;
  --color-black-medium: rgba(0, 0, 0, 0.6);
  --color-white-light: #f5f5f5;
  --color-white: #ffffff;
  --color-strong-blue: #11354f;
  --color-pomp-and-power: #7c5e99;
  --color-wine: #850d48;
  --color-blue-baby: #6bd1ff;
  --color-news: #6b5be2;
  --color-yellow: #ffba05;
  --color-yellow-two: #fada22;
  --color-cane: #9cd33b;
  --color-orange: #ff8c2a;
  --color-red: #f91c24;
  --color-primary: #285639;
  --color-text: rgb(16, 16, 16);
  --color-text-light: #4f5969;
  --color-heading: #345b43;
  --color-flag: linear-gradient(
    to bottom,
    #fb0404,
    #ff3f66,
    #ff76ac,
    #ffa7df,
    #f7d1fb,
    #e1d8ff,
    #cddeff,
    #c0e3ff,
    #66d6f2,
    #00c8c7,
    #00b47d,
    #009b14
  );
}
`;

export default Colors;
