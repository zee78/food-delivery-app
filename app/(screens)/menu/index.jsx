import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { Screen } from "@/components/Screen";
import { Heading } from "@/components/Heading";
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Header } from "@/components/Header";
import { InputComponent } from "@/components/InputComponent";
import { ItemComponent } from "@/components/ItemComponent";
import { useState } from "react";
import { calculateTextWidth_MENU } from "@/utils/utils";
import { router } from "expo-router";

export default function MenuPage() {
  const { w } = useResponsiveScreen();
  const [search, setSearch] = useState();
  const [error, setError] = useState();

  const menuItems = [
    {
      id: 1,
      image: require("../../../assets/images/menu/chicken_fry.png"),
      name: "Fried Chicken",
      price: "170",
    },
    {
      id: 2,
      image: require("../../../assets/images/menu/fingers.jpg"),
      name: "Fried Fingers",
      price: "500",
    },
    {
      id: 3,
      image: require("../../../assets/images/menu/chicken_fry.png"),
      name: "Crispy Chicken",
      price: "350",
    },
    {
      id: 4,
      image: require("../../../assets/images/menu/fingers.jpg"),
      name: "Spicy Fries",
      price: "200",
    },
    {
      id: 5,
      image: require("../../../assets/images/menu/chicken_fry.png"),
      name: "Garlic Chicken",
      price: "450",
    },
    {
      id: 6,
      image: require("../../../assets/images/menu/fingers.jpg"),
      name: "BBQ Fingers",
      price: "380",
    },
    {
      id: 7,
      image: require("../../../assets/images/menu/chicken_fry.png"),
      name: "Honey Glazed Chicken",
      price: "420",
    },
    {
      id: 8,
      image: require("../../../assets/images/menu/fingers.jpg"),
      name: "Cheesy Fingers",
      price: "300",
    },
    {
      id: 9,
      image: require("../../../assets/images/menu/chicken_fry.png"),
      name: "Spicy Chicken",
      price: "320",
    },
    {
      id: 10,
      image: require("../../../assets/images/menu/fingers.jpg"),
      name: "Crunchy Fingers",
      price: "280",
    },
  ];

  const renderMenuItem = ({ item }) => (
    <ItemComponent
      key={item.id}
      name={item.name}
      price={item.price}
      imageSource={item.image}
    />
  );

  const SideBarIcons = () => {
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
              router.back();
            }}
          >
            <Text>
              <AntIcon name="arrowleft" size={30} color={"white"} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Screen
      SideBarIcons={SideBarIcons}
      sideBarItems={["All", ...menuItems.map((items) => items.name)]}
      sidebarItemsMargin={5}
      calculateTextWidth={calculateTextWidth_MENU}
      sidebarTopMargin={10}
      sideBarItemActive={"All"}
    >
      <Header>
        <Heading text="Our Menu" />
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
        </View>
      </Header>
      <View style={{ paddingRight: w(7) }}>
        <InputComponent
          mode="outlined"
          label=""
          placeholder="Search Item here"
          value={search}
          onChangeText={setSearch}
          error={error && !search}
          keyboardType="default"
          type="search"
          placeholderTextColor="lightgray"
          outlineStyle={{ borderRadius: 12 }}
          style={{
            backgroundColor: "transparent",
            borderRadius: "14px",
            fontWeight: "300",
          }}
          iconStyle={{ backgroundColor: "white" }}
        />
      </View>
      <View style={[style.container, { marginRight: w(7) }]}>
        <FlatList
          data={menuItems}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          containerStyle={{ marginBottom: "20px" }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Screen>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingLeft: 0,
    justifyContent: "center",
  },
  SideBarText: {
    transform: [{ rotate: "-90deg" }],
    color: "white",
    fontFamily: "Montserrat-SemiBold",
  },
  SideBarTextContainer: {
    display: "flex",
    flex: 1,
  },
});
