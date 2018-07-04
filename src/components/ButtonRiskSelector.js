import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { buttonRiskSelectorStyles } from '../styles';

const ButtonRiskSelector = (props) => (
   <TouchableOpacity
      onPress={props.onPress}
      style={[buttonRiskSelectorStyles.buttonRiskSelectorStyle,
         props.selected ? { backgroundColor: 'skyblue' } : null]}
   >
      <Text style={buttonRiskSelectorStyles.buttonRiskSelectorTextStyle}>
         {props.title} 
      </Text>
   </TouchableOpacity>
);

export default ButtonRiskSelector;
