import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Heading } from "@/components/Heading";
import { InputComponent } from "@/components/InputComponent";
import { ButtonComponent } from "@/components/ButtonComponent";

export default function ForgotPage() {
  const { w, h, f } = useResponsiveScreen();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleForgot = () => {
    if (!email) {
      setError(true);
      return;
    }
    setError(false);
    
  };
  return (
    <View>
      <View style={{backgroundColor: customTheme.colors.primary, paddingVertical: h(1.4), flexDirection: 'row', alignItems: 'center'}}>
        <Link href={"/login"} style={{paddingRight: 15, paddingLeft: w(4)}}>
          <Icon name="arrow-left" 
            color={customTheme.colors.textWhite}  size={23}>
          </Icon>
        </Link>
        <Heading text="Forgot Password" alignStyle={{color: customTheme.colors.textWhite, fontWeight: 600, fontSize: f(2.5)}} />
      </View>
      <View style={{paddingVertical: h(7), paddingHorizontal: w(4)}}>
        <Heading text="Please enter you email" alignStyle={{fontWeight: 300, fontSize: f(2), paddingBottom: h(4)}} />
        <InputComponent
          mode="outlined"
          label=""
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          error={error && !email}
          helperText="Email is required"
          style={{ backgroundColor: 'transparent', borderRadius: 4, fontWeight: '300' }}
        />
        <ButtonComponent 
          mode="contained"
          label="Submit"
          textColor="white"
          textTransform="capitalize"
          labelStyle={{ textTransform: 'capitalize', fontWeight: 300 }}
          style={{ color: 'white', borderRadius: 4, paddingVertical: 14, paddingHorizontal: 10, marginVertical: h(6)}}
          backgroundColor={customTheme.colors.primary}
          onPress={handleForgot}
        />
      </View>
    </View>
  );
}

