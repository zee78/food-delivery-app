import React, { useState } from "react";
import { View } from "react-native";
import { RadioButton, Text, HelperText } from "react-native-paper";
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen";
import { customTheme } from "../utils/theme";

export const OptionComponent = ({
  text,
  price
}) => {



  const { w, h } = useResponsiveScreen();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  return (
    <View style={{ marginBottom: h(1) }}>
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton value="first" color={customTheme.colors.primary} uncheckedColor={customTheme.colors.primary} />
            <Text style={{color: 'black'}}>{text}</Text>
          </View>
          <View>
            <Text style={{color: 'black'}}>PKR {price}</Text>
          </View>
        </View>
      </RadioButton.Group>
      {error && <HelperText type="error">{helperText}</HelperText>}
    </View>
  );
};
