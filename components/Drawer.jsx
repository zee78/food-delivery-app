import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { View, Image, TouchableOpacity, Animated } from "react-native";
import { customTheme } from "@/utils/theme";
import DaiyDeliLogo from "../assets/images/daily-deli.png";
import { useSelector, useDispatch } from "react-redux";
import { setDrawer } from "@/store/drawer/drawerSlice";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";
import { Text } from "react-native-paper";

export const Drawer = () => {
  const drawerPosition = useState(new Animated.Value(0))[0];
  const overlayOpacity = useState(new Animated.Value(0))[0];
  const { w, h, f } = useResponsiveScreen();
  const drawer = useSelector((state) => state.drawer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    animateDrawer(drawer);
  }, [drawer]);

  const animateDrawer = (isOpen) => {
    Animated.parallel([
      Animated.timing(drawerPosition, {
        toValue: isOpen ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(overlayOpacity, {
        toValue: isOpen ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const drawerTranslateX = drawerPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [-w(85), 0],
  });

  const sideBarItems = [
    {
      name: 'Profile',
      icon: 'account-outline',
      link: '/profile',
    },
    {
      name: 'Order History',
      icon: 'history',
      link: '/orderHistory',
    },
    {
      name: 'Change Password',
      icon: 'lock-open-outline',
      link: '/changePassword',
    },
    {
      name: 'Privacy Policy',
      icon: 'file-document-outline',
      link: '/privacy-policy',
    },
    {
      name: 'Account Deletion',
      icon: 'account-remove-outline',
      link: '/account-deletion',
    },
    {
      name: 'FAQ',
      icon: 'chat-question-outline',
      link: '/faq',
    },
    {
      name: 'LOGOUT',
      icon: 'logout',
      link: '/logout',
    },
  ];

  return (
    <View style={{ flex: 1, zIndex: 999 }}>
      {drawer && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            dispatch(setDrawer(false));
          }}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            height: h(100),
            width: "100%",
            zIndex: -1,
          }}
        ></TouchableOpacity>
      )}
      <Animated.View
        style={{
          transform: [{ translateX: drawerTranslateX }],
          flexDirection: "row",
          backgroundColor: "red",
          width: w(85),
          position: "absolute",
          top: 0,
          bottom: 0,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: w(85),
            height: h(100),
            shadowColor: "#171717",
          }}
        >
          <View
            style={{
              height: h(18),
              backgroundColor: customTheme.colors.primary,
              borderBottomRightRadius: 50,
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              paddingHorizontal: w(3)
            }}
          >
            <Text style={{fontSize: f(2.8)}}>ABC</Text>
            <Text style={{fontSize: f(2), fontWeight: '300'}}>abc@gmail.com</Text>
          </View>
            {sideBarItems.map((item, key) => (
              <View style={{borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingVertical: h(2), paddingHorizontal: w(2.5)}} key={key}>
                <Link href={item.link} onPress={() => dispatch(setDrawer(false))}>
                  <View  style={{width: 35}}>
                    <Icon
                      name={item.icon}
                      color={customTheme.colors.primary}
                      size={30}
                    />
                  </View>
                  <View>
                    <Text style={{color: 'grey', fontSize: 20, textTransform: 'uppercase', paddingLeft: 17}}>{item.name}</Text>
                  </View>
                </Link>
              </View>
            ))}
        </View>
      </Animated.View>
    </View>
  );
};
