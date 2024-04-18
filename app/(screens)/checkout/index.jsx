import { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, RadioButton, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { customTheme } from "@/utils/theme";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { 
  Header,
  Heading,
  ButtonComponent,
  InputComponent,

} from "@/components";
import SelectDropdown from 'react-native-select-dropdown'
import { Link } from "expo-router";

export default function CheckoutPage() {
  const { w,h,f } = useResponsiveScreen();
  const [cityName, setCityName] = useState('');
  const [area , setArea] = useState('');
  const [completeAddress , setCompleteAddress] = useState('');
  const [specialNote , setSpecialNote] = useState('');
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [phoneNumber , setPhoneNumber] = useState('');
  const [addPhoneNumber , setAddPhoneNumber] = useState('');
  const [error , setError] = useState(false);
  const [checkoutType, setCheckoutType] = useState('delivery');
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [paymentType, setPaymentType] = useState('cod');

  const handlePlaceOrder = () => {
    alert('Place ORder Pressed')
  };
  const toggleSummaryVisibility = () => {
    setIsSummaryVisible(!isSummaryVisible);
  };
  const cities = ["Islamabad", "Lahore"]
  const areaData = ["DHA Lahore", "Johar Town", "Model Town", "Cantt Lahore"]
  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
        <View 
          style={{ 
            backgroundColor: '#fff',
            position: 'relative',
            zIndex: 1,
          }}>
          <View 
          style={{
            backgroundColor: customTheme.colors.primary,
            marginHorizontal: w(2),
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            paddingVertical: h(3.2), 
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
                <Link href={"/cart"}>
                  <Icon 
                    name="chevron-left"
                    size={f(4)}
                    color={customTheme.colors.iconColorWhite}
                  ></Icon>
                </Link>
                <Heading text="Checkout" alignStyle={{color: customTheme.colors.textWhite, fontSize: f(2.8)}} />
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
            // minHeight: h(68),
            flex: 1,
          }}
        >
          <View>
            <RadioButton.Group onValueChange={newValue => setCheckoutType(newValue)} value={checkoutType}>
              <View style={{flexDirection: 'row'}}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton value="delivery" color={customTheme.colors.primary} uncheckedColor={customTheme.colors.primary} />
                  <Text style={{color: 'black', fontSize: f(1.5)}}>Delivery</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton value="pickup" color={customTheme.colors.primary} uncheckedColor={customTheme.colors.primary} />
                  <Text style={{color: 'black', fontSize: f(1.5)}}>Pick up</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          { checkoutType === 'delivery' ?
            <View>
              <SelectDropdown
                data={cities}
                onSelect={(selectedItem, index) => {
                  setCityName(selectedItem)
                }}
                defaultButtonText={'Select City'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
              <SelectDropdown
                data={areaData}
                onSelect={(selectedItem, index) => {
                  setArea(selectedItem)
                }}
                defaultButtonText={'Select Area'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                searchPlaceHolderColor={{color: 'red'}}
              />
              <InputComponent
                mode="outlined"
                label=""
                placeholder="Write complete address"
                value={completeAddress}
                onChangeText={setCompleteAddress}
                error={error && !completeAddress}
                helperText="Complete address is required"
                placeholderTextColor="lightgray"
                style={{
                  backgroundColor: "transparent",
                  fontWeight: "300",
                }}
                outlineStyle={{ outlineColor: 'lightgray', borderColor: 'lightgray', borderWidth: 1.5, borderRadius: 6 }}
              />
              <InputComponent
                mode="outlined"
                label=""
                placeholder="Write special note"
                value={specialNote}
                onChangeText={setSpecialNote}
                error={error && !specialNote}
                helperText="Special note is required"
                placeholderTextColor="lightgray"
                style={{
                  backgroundColor: "transparent",
                  fontWeight: "300",
                }}
                outlineStyle={{ outlineColor: 'lightgray', borderColor: 'lightgray', borderWidth: 1.5, borderRadius: 6 }}
              />
            </View> : <View>
              <Text style={{color: 'black', fontSize: f(3), textAlign: 'center', marginTop: h(4)}}>Pickup</Text>
            </View>
          }
          <View style={{marginVertical: h(2)}}>
            <RadioButton.Group onValueChange={newValue => setPaymentType(newValue)} value={paymentType}>
              <View style={{flexDirection: 'row'}}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton value="cod" color={customTheme.colors.primary} uncheckedColor={customTheme.colors.primary} />
                  <Text style={{color: 'black', fontSize: f(1.5), fontWeight: 700}}>Cash on Delivery</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton value="online" color={customTheme.colors.primary} uncheckedColor={customTheme.colors.primary} />
                  <Text style={{color: 'black', fontSize: f(1.5), fontWeight: 700}}>Pay online (Credit/Debit)</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <View style={{marginVertical: 15}}>
            <Heading text="Personal Information" alignStyle={{fontSize: f(2)}} />
          </View>
          { paymentType === 'cod' ?
            <View>
              <InputComponent
                mode="outlined"
                label=""
                placeholder="Write Name"
                value={name}
                onChangeText={setName}
                error={error && !name}
                helperText="name is required"
                placeholderTextColor="lightgray"
                style={{
                  backgroundColor: "transparent",
                  fontWeight: "300",
                }}
                outlineStyle={{ outlineColor: 'lightgrey', borderColor: 'lightgray', borderWidth: 1.5, borderRadius: 6 }}
              />
              <InputComponent
                mode="outlined"
                label=""
                placeholder="Enter email address"
                value={email}
                onChangeText={setEmail}
                error={error && !email}
                helperText="email is required"
                placeholderTextColor="lightgray"
                style={{
                  backgroundColor: "transparent",
                  fontWeight: "300",
                }}
                outlineStyle={{ outlineColor: 'lightgrey', borderColor: 'lightgray', borderWidth: 1.5, borderRadius: 6 }}
              />
              <InputComponent
                mode="outlined"
                label=""
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                error={error && !phoneNumber}
                helperText="name is required"
                placeholderTextColor="lightgray"
                style={{
                  backgroundColor: "transparent",
                  fontWeight: "300",
                }}
                outlineStyle={{ outlineColor: 'lightgray', borderColor: 'lightgray', borderWidth: 1.5, borderRadius: 6 }}
                keyboardType="numeric"
                iconStyle={{ backgroundColor: "white", color: "black" }}
              />
              <InputComponent
                mode="outlined"
                label=""
                placeholder="Additional Phone Number(optional)"
                value={addPhoneNumber}
                onChangeText={setAddPhoneNumber}
                error={error && !addPhoneNumber}
                helperText="name is required"
                placeholderTextColor="lightgray"
                style={{
                  backgroundColor: "transparent",
                  fontWeight: "300",
                }}
                outlineStyle={{ outlineColor: 'lightgray', borderColor: 'lightgray', borderWidth: 1.5, borderRadius: 6 }}
                keyboardType="numeric"
                iconStyle={{ backgroundColor: "white", color: "black" }}
              />
            </View>
            : 
            <View>
              <Text style={{color: 'black', fontSize: f(2), textAlign: 'center', marginTop: h(4)}}>Card Details will show here</Text>
            </View>
              }
        </View>
      </ScrollView>
      <View 
          style={{
            display: 'flex', 
            position: 'absolute',
            zIndex: 1000,
            bottom: 0,
            width: '100%',
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: 'lightgrey'
          }}>
            <View 
              style={{
                flexDirection: 'row', 
                justifyContent: 'space-between',
                alignItems: 'center', 
                paddingHorizontal: w(3), 
                backgroundColor: '#ebebeb', 
                paddingVertical: h(1.8)
              }}
            >
              <Heading text="Redeem Loyality Points" alignStyle={{fontSize: f(1.8)}}></Heading>
              <Icon name="plus" size={30} />
            </View>
            <View 
              style={{
                flexDirection: 'row', 
                justifyContent: 'space-between',
                alignItems: 'center', 
                paddingHorizontal: w(3), 
                backgroundColor: '#f2f2f2', 
                paddingVertical: h(2)
              }}
            >
              <View style={{flexDirection: 'row'}}>
                <Heading text="Cart Summary" alignStyle={{fontSize: f(1.8), color: '#44a0df'}}></Heading>
                <TouchableOpacity onPress={toggleSummaryVisibility}>
                  <Icon name={isSummaryVisible ? "chevron-up" : "chevron-down"} size={30} color="#44a0df" />
                </TouchableOpacity>
              </View>
              <Heading text="PKR 999" alignStyle={{fontSize: f(1.8), fontWeight: 800}}></Heading>
            </View>
            { isSummaryVisible  &&
            <View 
              style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                paddingHorizontal: w(3), 
                backgroundColor: '#ddd', 
                paddingVertical: h(2)
              }}
            >
              <Text style={{color: '#000'}}>Cart Summary will show here</Text>
            </View>
            }
          <View style={{paddingHorizontal: w(3), marginBottom: 20, marginTop: 20, backgroundColor: 'white'}}>
            <ButtonComponent 
              mode="contained"
              label="Place Order"
              textColor="white"
              textTransform="uppwercase"
              labelStyle={{ textTransform: 'uppercase', fontWeight: 300, fontSize: 20 }}
              style={{ color: 'white', borderRadius: 50, paddingVertical: 10, paddingHorizontal: 10 }}
              backgroundColor={customTheme.colors.primary}
              onPress={handlePlaceOrder}
            />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    width: '100%',
    height: 64,
    backgroundColor: '#FFF',
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: 'lightgray',
    marginTop: 15,
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  // dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
});
