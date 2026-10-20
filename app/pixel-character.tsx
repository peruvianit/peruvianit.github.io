"use client";

import { useEffect, useState } from "react";

export default function PixelCharacter() {
  const [stage, setStage] = useState<"intro" | "running">("intro");

  useEffect(() => {
    const introTimer = window.setTimeout(() => setStage("running"), 1500);
    return () => window.clearTimeout(introTimer);
  }, []);

  return (
    <div className={`pixel-character pixel-character-${stage}`} aria-hidden="true">
      <div className="pixel-character-sprite" />
    </div>
  );
}
