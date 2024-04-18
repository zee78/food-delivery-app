import React, { useEffect, useState } from "react";
import { SplashScreen as CustomSplashScreen } from "@/components/SplashScreen";
import { Stack } from "expo-router";
import { store } from "@/store";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import { customTheme } from "@/utils/theme";
import { useSelector } from "react-redux";
import { router, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Route auth
const RouteAuth = ({ children }) => {
  const auth = useSelector((state) => state.auth.value);
  useEffect(() => {
    if (!auth) {
      router.replace("/login");
    }
  }, [auth]);

  return children;
};

const RootLayout = () => {
  const [loaded, error] = useFonts({
    "Montserrat-Bold": require("@/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Thin": require("@/assets/fonts/Montserrat-Thin.ttf"),
    "Montserrat-SemiBold": require("@/assets/fonts/Montserrat-SemiBold.ttf"),
  });
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    const delay = 3000;
    const hideSplashScreen = async () => {
      setTimeout(async () => {
        if (loaded) {
          await SplashScreen.hideAsync();
          setShowSplash(false);
        }
      }, delay);
    };
    hideSplashScreen();
  }, [loaded]);

  if (!loaded || showSplash) {
    return <CustomSplashScreen />;
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={customTheme}>
        <RouteAuth>
          <StatusBar translucent hidden />
          <Stack screenOptions={{ headerShown: false }} />
        </RouteAuth>
      </PaperProvider>
    </Provider>
  );
};

export default RootLayout;
