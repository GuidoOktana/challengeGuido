import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { buttonHomeStyles }  from '../styles';

const ButtonHome = (props) => (
   <TouchableOpacity
      onPress={props.onPress}
      style={buttonHomeStyles.buttonContainerStyle}
   >
      <Text style={buttonHomeStyles.buttonTextStyle}>
         {props.title}
      </Text>
   </TouchableOpacity>
);

export default ButtonHome;
