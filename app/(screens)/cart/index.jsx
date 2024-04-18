import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Text, IconButton } from "react-native-paper";
import { 
  Heading,
  Header,
  AddToCartButton,  
} from "@/components";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { useState } from "react";
import { Link } from "expo-router";

const products = [
  { 
    id: 1, 
    resturantName: 'Beta Life resturant', 
    dateTime: 'June 3 at 3:00 pm', 
    image: require("../../../assets/images/dish.jpg"),
    price: '200', 
  },
  { 
    id: 2,
    resturantName: 'New Flava', 
    dateTime: 'June 1 at 1:30 pm', 
    image: require("../../../assets/images/dish2.jpg"),
    price: '250', 
  },
  { 
    id: 3,
    resturantName: 'Beta Life resturant', 
    dateTime: 'May 30 at 12:00 pm', 
    image: require("../../../assets/images/dish3.jpg"),
    price: '220', 
  },
  { 
    id: 4, 
    resturantName: 'Beta Life resturant', 
    dateTime: 'June 3 at 3:00 pm', 
    image: require("../../../assets/images/dish.jpg"),
    price: '200', 
  },
  { 
    id: 5,
    resturantName: 'New Flava', 
    dateTime: 'June 1 at 1:30 pm', 
    image: require("../../../assets/images/dish2.jpg"),
    price: '250', 
  },
  { 
    id: 6,
    resturantName: 'Beta Life resturant', 
    dateTime: 'May 30 at 12:00 pm', 
    image: require("../../../assets/images/dish3.jpg"),
    price: '220', 
  },
];
export default function CartPage() {
  const { w,h,f } = useResponsiveScreen();
  const [quantities, setQuantities] = useState(1); 

  const incrementQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities(prevQuantities => {
      const newQuantity = (prevQuantities[productId] || 0) - 1;
      return {
        ...prevQuantities,
        [productId]: newQuantity >= 0 ? newQuantity : 0
      };
    });
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} style={{position: 'relative'}}>
        <View 
          style={{ 
            backgroundColor: 'white',
            position: 'relative',
            zIndex: 1,
            
          }}>
          <View 
          style={{
            backgroundColor: customTheme.colors.primary,
            paddingHorizontal: h(2),
            marginHorizontal: w(2),
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            paddingVertical: h(3.2), 
          }}>
            <Header type="innerHeader">
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
                    size={f(3)}
                    color={customTheme.colors.iconColorWhite}
                  ></Icon>
                </Link>
                <Heading text="Cart" alignStyle={{color: customTheme.colors.textWhite, fontSize: f(2.5)}} />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: w(3),
                }}
              >
                <Icon
                  name="delete-outline"
                  size={30}
                  color={customTheme.colors.iconColorWhite}
                />
              </View>
            </Header>
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
            paddingTop: 50,
            paddingBottom: 50,
            marginBottom: h(25),
            minHeight: h(68),
            flex: 1,
          }}>
            <View>
            {products.map((product, index) => (
            <View 
                style={styles.container} key={product.id}
              >
                <View style={{width: '25%', borderRadius: 12}}>
                  <Image source={product.image} resizeMode="cover" style={{width:'100%', height: 80, borderRadius: 10}}></Image>
                </View>
                <View style={{width: '50%', paddingLeft: 10}}>
                  <Heading text={product.resturantName} alignStyle={{fontSize: f(1.8), fontWeight: '700'}} />
                  <Text style={{color: customTheme.colors.primary, fontWeight: '700',fontSize: f(1.8)}}>PKR {product.price}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Heading text="Remove Item"  alignStyle={{fontSize: f(1.8), paddingBottom: h(1.5), color: 'black', marginRight: 10}} />
                    <Icon name="information" size={22} color="lightgray" />
                  </View>
                </View>
                <View  style={{width: '25%',  alignItems: 'center'}}>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <IconButton
                      icon="minus"
                      onPress={() => decrementQuantity(product.id)}
                      
                      containerColor="#f2f2f2"
                      iconColor="black"
                      size={24}
                    />
                    <Text style={{color: 'black',fontSize: 16}}>{quantities[product.id] || 0}</Text>
                    <IconButton 
                      icon="plus"
                      containerColor="#f2f2f2"
                      iconColor="black"
                      size={24}
                      onPress={() => incrementQuantity(product.id)} 
                    />
                  </View>
                </View>
              </View>
            ))}
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: h(3)}}>
              <Text style={{color: customTheme.colors.primary, fontWeight: '800', fontSize: f(1.8)}}>+ Add More Items</Text>
            </View>
            </View>
        </View>
      </ScrollView>
      <View 
          style={{
            display: 'flex', 
            position: 'absolute',
            zIndex: 1000,
            bottom: 0,
            width: '100%',
            backgroundColor: '#f2f2f2',
            paddingTop: h(3),
            paddingBottom: h(2),
            right: 0
          }}>
          <View style={{paddingHorizontal: w(5), marginBottom: 20}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
              <Text style={{color: '#767676', fontSize: f(1.6)}}>SubTitle</Text>
              <Text style={{color: '#767676', fontWeight: '300', fontSize: f(1.6)}}>PKR 1500</Text>
            </View>
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: '#767676', fontSize: f(1.6)}}>GST 15%</Text>
              <Text style={{color: '#767676', fontWeight: '300', fontSize: f(1.6)}}>PKR 150</Text>
            </View>
          </View>

          <AddToCartButton
            buttonLabel="Proceed to Checkout"
            leftContentType="price"
            buttonStyle={{paddingVertical: h(1.2)}}
            labelStyle={{fontSize: f(2), textTransform: 'uppercase'}}
            buttonType="link"

          ></AddToCartButton>
        </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingBottom: 15,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
});
