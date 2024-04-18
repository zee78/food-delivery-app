import * as React from "react";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";


export const ButtonComponent = ({
  mode,
  label,
  backgroundColor,
  textColor,
  labelStyle,
  style,
  onPress,
  disabled,
  icon
}) => (
  <Button
    mode={mode}
    onPress={onPress}
    buttonColor={backgroundColor}
    style={style}
    textColor={textColor}
    labelStyle={labelStyle}
    disabled={disabled}
  >
   <Icon name={icon} size={15}></Icon> {label}
  </Button>
);

