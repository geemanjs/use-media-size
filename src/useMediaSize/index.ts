import { useMediaSizeQueries } from "../useMediaSizeQueries";
import { useMediaQuery } from "../useMediaQuery";
import { MediaSizesState } from "../useMediaSizeQueries/MediaSizeQueriesContextProvider";

export const useMediaSize = (overrideSizes?: MediaSizesState) => {
  const defaultSizes = useMediaSizeQueries();
  return {
    isSm: useMediaQuery(`(max-width: ${overrideSizes.sm || defaultSizes.sm})`),
    isMd: useMediaQuery(`(max-width: ${overrideSizes.md || defaultSizes.md})`),
    isLg: useMediaQuery(`(max-width: ${overrideSizes.lg || defaultSizes.lg})`),
    isXl: useMediaQuery(`(max-width: ${overrideSizes.xl || defaultSizes.xl})`),
  };
};
