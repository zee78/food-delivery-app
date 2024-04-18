import * as React from "react";
import { customTheme } from "@/utils/theme";
import { StyleSheet, Image, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";

export const CardComponent = ({ imageSource, title, buttonText, onPress }) => {
  const { h, f } = useResponsiveScreen();

  return (
    <Card
      style={[
        styles.container,
        {
          backgroundColor: customTheme.colors.primary,
          width: 200,
          marginLeft: 13,
          height: 240,
        },
      ]}
    >
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={[styles.buttonContainer, { marginBottom: h(1) }]}>
          <Button
            style={styles.button}
            mode="contained"
            onPress={onPress}
            textColor={customTheme.colors.primary}
            uppercase
            labelStyle={styles.buttonLabel}
          >
            {buttonText}
          </Button>
        </View>
        <Card.Content>
          <Text style={[styles.title, { fontSize: f(2.2) }]}>{title}</Text>
        </Card.Content>
      </View>

      <Image
        source={require("../assets/images/fire2.png")}
        style={styles.backgroundImage}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingBottom: 30,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    textTransform: "uppercase",
  },
  imageContainer: {
    width: 235,
    height: 135,
    position: "relative",
  },
  image: {
    position: "absolute",
    right: -35,
    top: -15,
    width: "105%",
    height: "105%",
    alignContent: "center",
    resizeMode: "contain",
  },
  buttonLabel: {
    fontSize: 12,
  },
  backgroundImage: {
    position: "absolute",
    zIndex: -1,
    opacity: 0.2,
    bottom: 0,
    left: -5,
    width: "55%",
    height: "55%",
  },
});
