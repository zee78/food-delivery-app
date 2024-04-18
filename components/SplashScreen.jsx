import { View, Image } from "react-native";
import { customTheme } from "@/utils/theme";
import { ActivityIndicator } from "react-native-paper";
import DaiyDeliLogo from "@/assets/images/daily-deli.png";

export const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: customTheme.colors.primary,
      }}
    >
      <Image style={{ width: 200, height: 200 }} source={DaiyDeliLogo} />
      <View style={{ position: "absolute", bottom: 30 }}>
        <ActivityIndicator animating={true} color={"white"} size={35} />
      </View>
    </View>
  );
};
