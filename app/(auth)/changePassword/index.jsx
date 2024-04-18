import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { 
  Header,
  Heading,
  ButtonComponent,
  InputComponent,

} from "@/components";
import { useState } from "react";
import { Link } from "expo-router";

export default function MenuPage() {
  const { w,h,f } = useResponsiveScreen();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(false);

  const handleReset = () => {
    if (!oldPassword || !newPassword) {
      setError(true);
      return;
    } 
    setError(false);
    
  };
  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
        <View 
          style={{ 
            backgroundColor: customTheme.colors.primary,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            paddingVertical: h(3.2), 
            position: 'relative',
            zIndex: 1,
            paddingLeft: w(3),
          }}>
          <Header>
            <View 
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: w(3),
              }}>
              <Link href={"/"}>
                <Icon 
                  name="chevron-left"
                  size={f(4)}
                  color={customTheme.colors.iconColorWhite}
                ></Icon>
              </Link>
              <Heading text="Change Password" alignStyle={{color: customTheme.colors.textWhite, fontSize: f(2.8)}} />
            </View>
          </Header>
        </View>
        
        <View style={{paddingVertical: h(6), paddingHorizontal: w(4)}}>
          <Heading text="Enter your password" alignStyle={{fontWeight: 300, fontSize: f(2), paddingBottom: h(3)}} />
          <InputComponent
            mode="outlined"
            label=""
            placeholder="Old Password"
            value={oldPassword}
            onChangeText={setOldPassword}
            error={error && !oldPassword}
            helperText="Old password is required"
            placeholderTextColor="lightgray"
            style={{ 
              backgroundColor: 'transparent', 
              fontWeight: '300',
            }}
            outlineStyle={{ outlineColor: 'black', borderWidth: 1.5, borderRadius: 6}}
            secureTextEntry
            iconStyle={{ backgroundColor: "white" }}
          />
          <InputComponent
            mode="outlined"
            label=""
            placeholder="New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            error={error && !newPassword}
            helperText="New password is required"
            placeholderTextColor="lightgray"
            style={{ 
              backgroundColor: 'transparent', 
              fontWeight: '300' 
            }}
            outlineStyle={{ outlineColor: 'black', borderWidth: 1.5, borderRadius: 6 }}
            secureTextEntry
            iconStyle={{ backgroundColor: "white" }}
          />
          <ButtonComponent 
            mode="contained"
            label="Change Password"
            textColor="white"
            textTransform="capitalize"
            labelStyle={{ textTransform: 'capitalize', fontWeight: '300', fontSize: f(2) }}
            style={{ color: 'white', borderRadius: 8, paddingVertical: 14, paddingHorizontal: 10, marginVertical: h(3)}}
            backgroundColor={customTheme.colors.primary}
            onPress={handleReset}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  
});
