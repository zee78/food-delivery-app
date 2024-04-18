import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Text, Snackbar } from "react-native-paper";
import { Screen } from "@/components/Screen";
import { Heading } from "@/components/Heading";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { Header } from "@/components/Header";
import { InputComponent } from "@/components/InputComponent";
import { ItemComponent } from "@/components/ItemComponent";
import { useState } from "react";
import { OptionComponent } from "@/components";
import { AddToCartButton } from "@/components";
import { Link } from "expo-router";

export default function MenuPage() {
  const { w,h,f } = useResponsiveScreen();

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
        <View 
          style={{ 
            backgroundColor: customTheme.colors.primary,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            paddingTop: h(5), 
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
              <Link href={"/menu"}>
                <Icon 
                  name="chevron-left"
                  size={f(4)}
                  color={customTheme.colors.iconColorWhite}
                ></Icon>
              </Link>
              <Heading text="Swiss Mushroom" alignStyle={{color: customTheme.colors.textWhite, fontSize: f(2.5)}} />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: w(3),
              }}
            >
              <Icon
                name="cart-outline"
                size={35}
                color={customTheme.colors.iconColorWhite}
              />
            </View>
          </Header>
          <View 
            style={{
              width: '100%',
              height: 200,
              display: 'block', 
              position: 'relative',
            }}
          >
              <Image source={require("../../../assets/images/burger1.png")} style={{ width: '100%', height: '100%', bottom: -40, marginHorizontal: "auto", resizeMode:"contain"}}></Image>
            </View>
        </View>
        
        <View 
          style={{ 
            paddingHorizontal: w(5), 
            paddingVertical: h(3), 
            backgroundColor: 'white',
            borderBottomLeftRadius: 70,
            borderBottomRightRadius: 70,
            marginTop: -40,
            paddingTop: 100,
            paddingBottom: 50,
            marginBottom: h(10)
          }}>
          <Heading text="Swiss Mushroom" alignStyle={{fontSize: f(2.5), marginBottom: 20}}></Heading>
          <Text style={{color: 'black', fontWeight: 300, color: 'gray', fontSize: f(1.6), marginBottom: h(2)}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia nam eum eligendi ea molestiae ipsam laborum cumque? Tenetur facere reiciendis debitis illo nostrum dignissimos sed accusamus magni necessitatibus quod?</Text>
          <View style={{ marginVertical: h(1)}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Heading text="Choose your Dip" alignStyle={{fontSize: f(1.8)}}></Heading>
              <Text style={{ fontSize: f(1.3), color: 'black'}}>Choose only 1 (Required)</Text>
            </View>
            <View style={{marginTop: h(1)}}>
              <OptionComponent text="Single Patty Beef" price="650"></OptionComponent>
              <OptionComponent  text="Double Patty Beef" price="910"></OptionComponent>
              <OptionComponent  text="Triple Patty Beef" price="1170"></OptionComponent>
            </View>
          </View>
          <View style={{ marginVertical: h(1)}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Heading text="Choose your Dip" alignStyle={{fontSize: f(1.8)}}></Heading>
              <Text style={{ fontSize: f(1.3), color: 'black'}}>Choose only 1 (Optional)</Text>
            </View>
            <View style={{marginTop: h(1)}}>
              <OptionComponent text="Single Patty Beef" price="650"></OptionComponent>
              <OptionComponent  text="Double Patty Beef" price="910"></OptionComponent>
              <OptionComponent  text="Triple Patty Beef" price="1170"></OptionComponent>
            </View>
          </View>
          <View style={{ marginVertical: h(1)}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Heading text="Choose your Dip" alignStyle={{fontSize: f(1.8)}}></Heading>
              <Text style={{ fontSize: f(1.3), color: 'black'}}>Choose only 1 (Optional)</Text>
            </View>
            <View style={{marginTop: h(1)}}>
              <OptionComponent text="Single Patty Beef" price="650"></OptionComponent>
              <OptionComponent  text="Double Patty Beef" price="910"></OptionComponent>
              <OptionComponent  text="Triple Patty Beef" price="1170"></OptionComponent>
            </View>
          </View>
          <View style={{ marginVertical: h(1)}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Heading text="Choose your Dip" alignStyle={{fontSize: f(1.8)}}></Heading>
              <Text style={{ fontSize: f(1.3), color: 'black'}}>Choose only 1 (Optional)</Text>
            </View>
            <View style={{marginTop: h(1)}}>
              <OptionComponent text="Single Patty Beef" price="650"></OptionComponent>
              <OptionComponent  text="Double Patty Beef" price="910"></OptionComponent>
              <OptionComponent  text="Triple Patty Beef" price="1170"></OptionComponent>
            </View>
          </View>
          <View style={{ marginVertical: h(1)}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Heading text="Choose your Dip" alignStyle={{fontSize: f(1.8)}}></Heading>
              <Text style={{ fontSize: f(1.3), color: 'black'}}>Choose only 1 (Optional)</Text>
            </View>
            <View style={{marginTop: h(1)}}>
              <OptionComponent text="Single Patty Beef" price="650"></OptionComponent>
              <OptionComponent  text="Double Patty Beef" price="910"></OptionComponent>
              <OptionComponent  text="Triple Patty Beef" price="1170"></OptionComponent>
            </View>
          </View>
        </View>
      </ScrollView>
      <View 
        style={{
          backgroundColor: customTheme.colors.primary, 
          paddingVertical: h(3), 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'center',
          position: 'absolute',
          zIndex: 1000,
          bottom: 0,
          width: '100%'
        }}>
          <Text>Cart is currently not available!</Text>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
  
});
