import { Image } from "expo-image";
import { useState } from "react";

import fallbackImage from "./default-fallback-image.png";

type TImageWithFallback = {
  uri: string;
  testId?: string;
};

export function ImageWithFallback({ uri, testId }: TImageWithFallback) {
  const [source, setSource] = useState({ uri, isAnimated: true });

  return (
    <Image
      testID={testId}
      source={source}
      contentFit="cover"
      accessibilityLabel="Product image"
      onError={() => setSource(fallbackImage)}
      transition={1000}
      style={{
        width: "100%",
        height: 180,
      }}
    />
  );
}
