import { useState } from "react";
import heroDummyData from "../data/heroDummyData.json";
interface HeroItem {
  headline: string;
  subtext: string;
  image: string;
}

interface UseRandomHeroReturn {
  headline: string;
  subtext: string;
  image: string;
  regenerate: () => void;
}

export default function useRandomHero(): UseRandomHeroReturn {
  const [idx, setIdx] = useState(0);

  const regenerate = () => {
    setIdx((prevIdx) => (prevIdx + 1) % heroDummyData.length);
  };

  const hero = heroDummyData[idx] as HeroItem;

  return {
    headline: hero.headline,
    subtext: hero.subtext,
    image: hero.image,
    regenerate,
  };
}
