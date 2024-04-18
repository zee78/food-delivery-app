import { View, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { LinearGradient } from "expo-linear-gradient";

export const HomeComponent = ({ mainLabel, subLabel, href = "/" }) => {
  const { w, f, h } = useResponsiveScreen();

  return (
    <TouchableOpacity activeOpacity={1} onPress={() => router.navigate(href)}>
      <LinearGradient
        colors={["rgba(74,74,74,1)", "rgba(0,0,0,1)"]}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: w(4.2),
          borderTopLeftRadius: 25,
          borderBottomLeftRadius: 25,
          paddingHorizontal: w(5),
          marginTop: h(3.5),
          shadowColor: "#171717",
          shadowOffset: { width: 3, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <View style={{ display: "block", paddingLeft: 20 }}>
          <Text
            style={{
              color: "#f29434",
              textTransform: "uppercase",
              fontSize: f(3),
              fontWeight: 800,
            }}
          >
            {mainLabel}
            <Text
              style={{
                color: customTheme.colors.textWhite,
                textTransform: "uppercase",
                fontSize: f(3),
                fontWeight: 800,
              }}
            >
              {" "}
              {subLabel}
            </Text>
          </Text>
        </View>
        <Icon
          name="chevron-right"
          size={f(3)}
          color={customTheme.colors.iconColorWhite}
        ></Icon>
      </LinearGradient>
    </TouchableOpacity>
  );
};
