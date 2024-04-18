import { View, StyleSheet, ScrollView, Image, ImageBackground } from "react-native";
import { Badge, Text, Card, Button, Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { 
  Header,
  Heading,

} from "@/components";
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

export default function OrderHistory() {
  const { w,h,f } = useResponsiveScreen();
  
  const [expanded, setExpanded] = useState(-1);

  const handlePress = (index) => {
    setExpanded(expanded === index ? -1 : index);
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
              <Heading text="Order History" alignStyle={{color: customTheme.colors.textWhite, fontSize: f(2.8)}} />
            </View>
          </Header>
        </View>
        <View style={{paddingVertical: h(6), paddingHorizontal: w(4), flexDirection: 'column'}}>
          {products.map((product, index) => (
            <>
              { expanded !== index && (
                <View 
                  style={[styles.container, { elevation: 6, marginBottom: h(3.5) }]} key={product.id}
                >
                  <View style={{width: '25%', borderRadius: 12}}>
                    <Image source={product.image} resizeMode="cover" style={{width:'100%', height: 80, borderRadius: 10}}></Image>
                  </View>
                  <View style={{width: '55%', paddingLeft: 10}}>
                    <Heading text={product.resturantName} alignStyle={{fontSize: f(1.5), paddingVertical: h(1)}} />
                    <Heading text={product.dateTime}  alignStyle={{fontSize: f(1.3), paddingBottom: h(1.5), color: 'lightgray'}} />
                  </View>
                  <View  style={{width: '20%', borderStartWidth: 1, borderStartColor: 'gray', alignItems: 'center'}}>
                    <Text style={{color: '#FE5F55', paddingLeft: 4, fontWeight: '700'}}>PKR {product.price}</Text>
                    <Icon 
                      name="chevron-down-circle" 
                      size={25} 
                      color="#B6BEC5" 
                      style={{bottom: -35, right: 0, position: 'absolute'}}
                      xpanded={expanded === index}
                      onPress={() => handlePress(index)}
                    ></Icon>
                  </View>
                </View>
              )}
              { expanded === index && (
                <Card style={[styles.cardContainer,{marginBottom: h(3.5), borderRadius: 12, backgroundColor: 'white'}]} key={index}>
                  <View style={styles.bgImage}>
                    <ImageBackground source={product.image} resizeMode="cover" style={{height: 100,width: '100%'}}>
                    <View 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: 100,
                      backgroundColor: '#00000066',
                      paddingTop: 7,
                    }}>
                      <Text style={{
                        fontSize: f(2.2),
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: h(0),
                        paddingBottom: h(0.5)
                      }}>
                          {product.resturantName} 
                        </Text>
                        <Text style={{
                          fontSize: f(1.4),
                          fontWeight: 'bold',
                          textAlign: 'center',
                          marginBottom: h(2),
                          color: '#C0CACB'
                        }}>
                          {product.dateTime} </Text>
                    </View>
                    
                    <Icon 
                      name="chevron-up-circle" 
                      size={25} 
                      color="#CEBAB7" 
                      style={{right: 5, top: 5, position: 'absolute'}}
                      xpanded={expanded === index}
                      onPress={() => handlePress(index)}
                      ></Icon>
                      </ImageBackground>
                    </View>
                  
                  <Card.Content style={{paddingVertical: 10}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: h(1)}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon
                          name="checkbox-marked-circle-outline"
                          size={25}
                          color="#6DD5C1"
                          style={{paddingRight: 10}}
                        ></Icon>
                        <Text style={{color: '#000', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
                          Order Delivered
                        </Text>
                      </View>
                      <Text style={{color: '#000'}}>
                      {[...Array(5)].map((_, index) => (
                          <Icon name="star" size={20} color="#F1C40E"></Icon>
                      ))}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: h(1)}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Badge style={{color: '#A7A7A7', backgroundColor: '#f5f5f5', marginRight: 7, paddingHorizontal: 10, borderRadius: 5}} size={20}>1x</Badge>
                        <Text style={{color: 'gray', alignItems: 'center', display: 'flex', flexDirection: 'row', fontWeight: '700'}}>
                          Fried Rice
                        </Text>
                      </View>
                      <Text style={{color: 'gray', fontWeight: '700'}}>
                      PKR 350
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: h(1)}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Badge style={{color: '#A7A7A7', backgroundColor: '#f5f5f5', marginRight: 7 ,paddingHorizontal: 10, borderRadius: 5}} size={20}>2x</Badge>
                        <Text style={{color: 'gray', alignItems: 'center', display: 'flex', flexDirection: 'row', fontWeight: '700'}}>
                          Beef
                        </Text>
                      </View>
                      <Text style={{color: 'gray', fontWeight: '700'}}>
                      PKR 350
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: h(1)}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Badge style={{color: '#A7A7A7', backgroundColor: '#f5f5f5', marginRight: 7, paddingHorizontal: 10, borderRadius: 5}} size={20}>3x</Badge>
                        <Text style={{color: 'gray', alignItems: 'center', display: 'flex', flexDirection: 'row', fontWeight: '700'}}>
                          Fanta
                        </Text>
                      </View>
                      <Text style={{color: 'gray', fontWeight: '700'}}>
                      PKR 350
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: h(1)}}>
                      <Text style={{color: '#a7a7a7', alignItems: 'center', display: 'flex', flexDirection: 'row', marginLeft: 40}}>
                        Subtotal
                      </Text>
                      <Text style={{color: '#a7a7a7'}}>
                      PKR 1050
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: h(0)}}>
                      <Text style={{color: '#a7a7a7', alignItems: 'center', display: 'flex', flexDirection: 'row', marginLeft: 40}}>
                        Shipping
                      </Text>
                      <Text style={{color: '#a7a7a7'}}>
                      PKR 0.00
                      </Text>
                    </View>
                  </Card.Content>
                  <Divider style={{backgroundColor: 'lightgray'}} />
                  <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: h(2)}}>
                    <Button style={{backgroundColor: '#FE5F55', borderRadius: 50, paddingHorizontal: w(5)}} labelStyle={{color: 'white', textTransform: 'none'}}>Reorder</Button>
                    <Text style={{color: '#000', fontWeight: '900'}}>PKR 1050</Text>
                  </View>
                </Card>
              )}
            </>
          ))}
        </View>
      </ScrollView>
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
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 12,
    shadowColor: '#171717',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  cardContainer: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#171717',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  bgImage: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    overflow: 'hidden',
  }
});
