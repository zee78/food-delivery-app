import { View } from "react-native";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";

export const Header = ({ children, type }) => {
  const { w } = useResponsiveScreen();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: type === 'innerHeader' ? w(0) : w(7),
      }}
    >
      {children}
    </View>
  );
};
