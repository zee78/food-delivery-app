import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { setAuthStatus } from "@/store/auth/authSlice";
import { Button } from "react-native-paper";

export default function Page() {
  const auth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>User</Text>
        <Link href={"/"}>Go to home</Link>
      </View>

      <Button mode="contained" onPress={() => dispatch(setAuthStatus(!auth))}>
        auth
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
