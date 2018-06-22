import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonRiskSelector = (props) => (
   <TouchableOpacity
      onPress={props.onPress} style={[styles.btnStyle,
         props.selected ? { backgroundColor: 'skyblue' } : null]}
   >
      <Text style={styles.textStyle}> {props.title} </Text>
   </TouchableOpacity>
);

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: 'black',
  },
  btnStyle: {
    width: 28,
    height: 28,
    margin: 3,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
});

export default ButtonRiskSelector;
