import { View, ScrollView } from "react-native";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Drawer } from "./Drawer";
import Svg, { Text } from "react-native-svg";

export function Screen({
  children,
  SideBarIcons = null,
  customStyle,
  sideBarItems = [],
  sidebarItemsMargin = 20,
  sideBarItemActive = "",
  sidebarStyle = {},
  sidebarTopMargin = 50,
  selecteSideBarItem = () => {},
  calculateTextWidth = () => {},
}) {
  const { w, h } = useResponsiveScreen();

  return (
    <View
      style={{
        backgroundColor: customTheme.colors.primary,
        flex: 1,
      }}
    >
      <View>
        <Drawer />
      </View>

      <View
        style={{
          width: w(17),
          flex: 1,
          alignItems: "center",
          paddingTop: h(6),
        }}
      >
        {SideBarIcons && <SideBarIcons />}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: "transparent",
            flex: 1,
            marginTop: sidebarTopMargin,
            marginBottom: 50,
            ...sidebarStyle,
          }}
        >
          {sideBarItems?.map((item, index) => {
            const textWidth = calculateTextWidth(item.length);

            const containerHeight = textWidth;

            return (
              <Svg
                key={index}
                width="50"
                height={containerHeight}
                style={{
                  marginBottom: sidebarItemsMargin,
                }}
                onPress={() => selecteSideBarItem(item.toLocaleLowerCase())}
              >
                <Text
                  x="50"
                  y={textWidth - 25}
                  fill="white"
                  fontSize="24"
                  transform={`rotate(-90, 50, ${textWidth - 10})`}
                  fontWeight={
                    sideBarItemActive.toLocaleLowerCase() ===
                    item.toLocaleLowerCase()
                      ? 700
                      : 200
                  }
                >
                  {item}
                </Text>
              </Svg>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: "white",
          position: "absolute",
          right: w(0),
          width: w(83),
          height: "100%",
          borderTopLeftRadius: 50,
          borderBottomLeftRadius: 50,
          paddingTop: h(6),
          paddingLeft: w(7),
          ...customStyle,
        }}
      >
        {children}
      </View>
    </View>
  );
}
