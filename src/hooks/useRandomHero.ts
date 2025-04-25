import { useState } from "react";
import heroDummyData from "../data/heroDummyData.json";
// Define the type for a hero item
interface HeroItem {
  headline: string;
  subtext: string;
  image: string;
}

// Type for the return value of the hook
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

  // Type assertion for heroDummyData
  const hero = heroDummyData[idx] as HeroItem;

  return {
    headline: hero.headline,
    subtext: hero.subtext,
    image: hero.image,
    regenerate,
  };
}
