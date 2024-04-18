import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Divider } from "react-native-paper";
import { Link } from "expo-router";
import { Screen } from "@/components/Screen";
import Icon from "react-native-vector-icons/MaterialIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Heading } from "@/components/Heading";
import { InputComponent } from "@/components/InputComponent";
import { ButtonComponent } from "@/components/ButtonComponent";
import { router } from "expo-router";
import { calculateTextWidth_MENU } from "@/utils/utils";
import { useSelector } from "react-redux";

export default function RegisterPage() {
  const { w, h, f } = useResponsiveScreen();
  const auth = useSelector((state) => state.auth.value);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (!email || !password || !username || !phoneNumber) {
      setError(true);
      return;
    }
    setError(false);
  };
  const handleInputChange = (text) => {
    const numericInput = text.replace(/[^0-9]/g, "");
    setPhoneNumber(numericInput);
  };

  const sideBarItems = ["LOGIN", "SIGNUP"];
  const selecteSideBarItem = (item) => {
    if (item === "login") {
      router.navigate("/login");
    }
  };
  return (
    <Screen
      sideBarItems={sideBarItems}
      selecteSideBarItem={selecteSideBarItem}
      customStyle={{ paddingTop: 0, borderBottomLeftRadius: 0 }}
      sidebarStyle={{
        paddingTop: 80,
      }}
      sidebarItemsMargin={30}
      sideBarItemActive={"signup"}
      calculateTextWidth={calculateTextWidth_MENU}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 50 }}>
          {auth && (
            <Link
              href={"/"}
              style={{
                position: "absolute",
                top: -10,
                right: h(3),
                marginTop: 50,
              }}
            >
              <Icon name="close" size={f(3)} fontWeight="700" />
            </Link>
          )}
          <View style={{ paddingRight: w(7), marginTop: 100 }}>
            <Heading text="Signup" alignStyle={{ textAlign: "center" }} />
            <InputComponent
              mode="outlined"
              label=""
              placeholder="Username"
              value={username}
              onChangeText={setUserName}
              error={error && !username}
              helperText="Username is required"
              style={{
                backgroundColor: "transparent",
                borderRadius: 4,
                fontWeight: "300",
              }}
            />
            <InputComponent
              mode="outlined"
              label=""
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              error={error && !email}
              keyboardType="email-address"
              helperText="Email is required"
              style={{
                backgroundColor: "transparent",
                borderRadius: 4,
                fontWeight: "300",
              }}
            />
            <InputComponent
              mode="outlined"
              label=""
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              error={error && !password}
              helperText="Password is required"
              secureTextEntry
              style={{
                backgroundColor: "white",
                borderRadius: 4,
                fontWeight: "300",
              }}
              iconStyle={{ backgroundColor: "white" }}
            />
            <InputComponent
              mode="outlined"
              label=""
              placeholder="Phone"
              value={phoneNumber}
              onChangeText={handleInputChange}
              error={error && !phoneNumber}
              helperText="Phone is required"
              style={{
                backgroundColor: "white",
                borderRadius: 4,
                fontWeight: "300",
              }}
              keyboardType="numeric"
              iconStyle={{ backgroundColor: "white", color: "black" }}
            />
            <ButtonComponent
              mode="contained"
              label="Sign up"
              textColor="white"
              textTransform="capitalize"
              labelStyle={{ textTransform: "capitalize", fontWeight: 700 }}
              style={{
                color: "white",
                borderRadius: 50,
                paddingVertical: 14,
                paddingHorizontal: 10,
                marginTop: h(3),
              }}
              backgroundColor={customTheme.colors.primary}
              onPress={handleLogin}
            />
            <View style={[styles.lineContainer, { marginVertical: h(2) }]}>
              <Divider style={[styles.divider, { marginTop: h(0.5) }]} />
              <Text style={{ fontSize: f(1.5) }}> or </Text>
              <Divider style={[styles.divider, { marginTop: h(0.5) }]} />
            </View>
            {/* Facebook Button */}
            <ButtonComponent
              mode="contained"
              label="facebook"
              textColor="white"
              textTransform="capitalize"
              labelStyle={{ textTransform: "capitalize", fontWeight: 700 }}
              style={{
                color: "white",
                borderRadius: 50,
                paddingVertical: 14,
                paddingHorizontal: 10,
              }}
              backgroundColor="#395a9d"
              icon="facebook"
              onPress={handleLogin}
            />
            {/* Google Button */}
            <ButtonComponent
              mode="contained"
              label="Google"
              textColor="white"
              textTransform="capitalize"
              labelStyle={{ textTransform: "capitalize", fontWeight: 700 }}
              style={{
                color: "white",
                borderRadius: 50,
                paddingVertical: 14,
                paddingHorizontal: 10,
                marginTop: h(2),
              }}
              backgroundColor="#D92A0D"
              icon="google"
              onPress={handleLogin}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "lightgray",
    marginHorizontal: 10,
  },
});
