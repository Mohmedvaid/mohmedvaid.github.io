import useMediaQuery from "@mui/material/useMediaQuery";
import { mobileSize } from "../config/responsiveSizes";

/**
 * Custom hook to determine if the current screen is a mobile viewport.
 * By default, checks against a width of 768px.
 * @returns {boolean} True if the screen width is less than 768px.
 */
export const useIsMobile = () => {
  const isMobile = useMediaQuery(`(max-width:${mobileSize})`);
  return isMobile;
};
