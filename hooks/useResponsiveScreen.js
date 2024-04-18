import {
  responsiveScreenHeight as h,
  responsiveScreenWidth as w,
  responsiveScreenFontSize as f
} from "react-native-responsive-dimensions";

export const useResponsiveScreen = () => {
  return { h, w, f };
};
