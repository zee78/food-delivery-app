import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { customTheme } from "@/utils/theme";
import DaiyDeliLogo from "@/assets/images/daily-deli.png";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import { setUserLocation } from "@/store/user/userSlice";

export const Location = () => {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState(
    "Choose Your Nearest Branch"
  );
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const locations = [
    "Cantt Lahore",
    "Beverly Center Islamabad",
    "Johar Town Lahore",
    "DHA Lahore",
    "Model Town Lahore",
  ];
  const setLocation = (location) => {
    setSelectedLocation(location);
    setDropdownVisible(false);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: "20%",
        backgroundColor: customTheme.colors.primary,
      }}
    >
      <Image style={{ width: 200, height: 200 }} source={DaiyDeliLogo} />
      <Text style={styles.text}>
        Choose your nearest branch to proceed further
      </Text>

      <View style={{ marginTop: 15, paddingHorizontal: 30, width: "100%" }}>
        <View>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.dropdown}
            onPress={() => setDropdownVisible(!dropdownVisible)}
          >
            <Text style={styles.dropdownText}>{selectedLocation}</Text>
            <Text>
              <Icon
                name="keyboard-arrow-down"
                size={25}
                color={"lightslategrey"}
              />
            </Text>
          </TouchableOpacity>
          {dropdownVisible && (
            <View
              style={{
                width: "100%",
                position: "absolute",
                backgroundColor: "white",
                padding: 10,
                top: 20,
                borderRadius: 2,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
                zIndex: 1000,
              }}
            >
              {locations.map((item) => {
                return (
                  <Text
                    key={item}
                    onPress={() => setLocation(item)}
                    style={{ fontSize: 16, padding: 10, color: "gray" }}
                  >
                    {item}
                  </Text>
                );
              })}
            </View>
          )}
        </View>

        <TouchableOpacity
          disabled={selectedLocation === "Choose Your Nearest Branch"}
          onPress={() => dispatch(setUserLocation(selectedLocation))}
          activeOpacity={0.8}
          style={styles.confirmButton}
        >
          <Text style={{ fontSize: 20, color: "lightslategrey" }}>Confirm</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontWeight: "300",
          position: "absolute",
          bottom: 15,
          color: "white",
          fontSize: 18,
        }}
      >
        Powered by tossdown.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    width: "100%",
    backgroundColor: "white",
    height: 80,
    paddingHorizontal: 25,
    borderRadius: 50,
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  confirmButton: {
    width: "100%",
    backgroundColor: "white",
    height: 80,
    borderRadius: 50,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  dropdownText: {
    color: "lightslategrey",
  },
  text: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
});
