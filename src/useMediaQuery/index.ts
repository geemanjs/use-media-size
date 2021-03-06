import { useState, useEffect } from "react";

const isClient = typeof window === "object";
// Based upon a mix of:
// https://github.com/streamich/react-use
// https://github.com/bence-toth/react-hook-media-query

export const useMediaQuery = (query: string) => {
  const [isMatch, setIsMatch] = useState(
    isClient ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    let mounted = true;
    const onMediaMatchChange = ({
      matches,
    }: MediaQueryListEvent | MediaQueryList) => {
      if (!mounted) {
        return;
      }
      setIsMatch(matches);
    };
    const matcher = window.matchMedia(query);
    const isModernBrowser = !!!matcher.addEventListener;

    if (isModernBrowser) {
      matcher.addEventListener("change", onMediaMatchChange);
    } else {
      matcher.addListener(onMediaMatchChange);
    }

    onMediaMatchChange(matcher);

    return () => {
      mounted = false;
      if (isModernBrowser) {
        matcher.removeEventListener("change", onMediaMatchChange);
      } else {
        matcher.removeListener(onMediaMatchChange);
      }
    };
  }, [query]);

  return isMatch;
};
