import { Text } from "react-native";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";

export const Heading = ({ text, alignStyle }) => {
  const { f } = useResponsiveScreen();
  return (
    <Text
      style={{
        color: customTheme.colors.textDark,
        fontSize: f(3.1),
        fontWeight: "700",
        ...alignStyle
      }}
    >
      {text}
    </Text>
  );
};
