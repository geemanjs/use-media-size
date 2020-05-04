import { useMediaSizeQueries } from "../useMediaSizeQueries";
import { useMediaQuery } from "../useMediaQuery";
import { MediaSizesState } from "../useMediaSizeQueries/MediaSizeQueriesContextProvider";

export const useMediaSize = (overrideSizes?: MediaSizesState) => {
  const defaultSizes = useMediaSizeQueries();
  let joinedSizes;
  if(!overrideSizes) {
    joinedSizes = defaultSizes;
  } else {
    joinedSizes = {
      ...defaultSizes,
      ...overrideSizes
    }
  }
  return {
    isSm: useMediaQuery(`(max-width: ${joinedSizes.sm})`),
    isMd: useMediaQuery(`(max-width: ${joinedSizes.md})`),
    isLg: useMediaQuery(`(max-width: ${joinedSizes.lg})`),
    isXl: useMediaQuery(`(max-width: ${joinedSizes.xl})`),
  };
};
