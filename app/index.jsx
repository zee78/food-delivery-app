import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import {
  Screen,
  Heading,
  Header,
  HomeComponent,
  CardComponent,
  Location,
} from "@/components";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { useSelector, useDispatch } from "react-redux";
import { setDrawer } from "@/store/drawer/drawerSlice";
import { router } from "expo-router";
import { calculateTextWidth_HOME } from "@/utils/utils";

const SideBarIcons = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            dispatch(setDrawer(true));
          }}
        >
          <Text>
            <Icon
              name="menu"
              size={30}
              color={customTheme.colors.iconColorWhite}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function HomePage() {
  const { w, h, f } = useResponsiveScreen();
  const userLocation = useSelector((state) => state.user.location);

  const cardData = [
    {
      id: 1,
      imageSource: require("../assets/images/burger1.png"),
      title: "Swiss Mushroom",
      buttonText: "Top Seller",
    },
    {
      id: 2,
      imageSource: require("../assets/images/burger1.png"),
      title: "Sunny Rocket",
      buttonText: "Top Seller",
    },
  ];

  const sideBarItems = ["HOME", "MENU", "CART"];
  const selecteSideBarItem = (item) => {
    if (item === "menu") {
      router.navigate("/menu");
    }
    if(item === "cart"){
      router.navigate("/cart");
    }
  };

  if (!userLocation) {
    return <Location />;
  }

  return (
    <Screen
      SideBarIcons={SideBarIcons}
      sideBarItems={sideBarItems}
      sidebarItemsMargin={30}
      sideBarItemActive={"home"}
      selecteSideBarItem={selecteSideBarItem}
      calculateTextWidth={calculateTextWidth_HOME}
    >
      <Header>
        <Heading text="Welcome Back!" />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: w(3),
          }}
        >
          <Icon
            name="cart-outline"
            size={30}
            color={customTheme.colors.iconColorDark}
          />
          <Icon
            name="bell-outline"
            size={30}
            color={customTheme.colors.iconColorDark}
          />
        </View>
      </Header>
      <View>
        <ScrollView
          style={{
            display: "flex",
            flexDirection: "row",
            gap: w(4),
            paddingTop: h(3),
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {cardData.map((item, key) => (
            <View
              style={{
                marginRight: w(10),
                marginVertical: h(2),
              }}
              key={key}
            >
              <CardComponent
                imageSource={item.imageSource}
                title={item.title}
                buttonText={item.buttonText}
                onPress={() => console.log("Button pressed")}
                style={{
                  marginHorizontal: "10px",
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ marginTop: 10 }}>
        <HomeComponent
          mainLabel="Our"
          subLabel="Menu"
          href="/menu"
        ></HomeComponent>
        <HomeComponent
          mainLabel="Appy"
          subLabel="Deal"
          href="/menu"
        ></HomeComponent>
        <HomeComponent
          mainLabel="What's"
          subLabel="New"
          href="/menu"
        ></HomeComponent>
      </View>
    </Screen>
  );
}
