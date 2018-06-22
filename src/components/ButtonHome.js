import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonHome = (props) => (
   <TouchableOpacity onPress={props.onPress} style={styles.containerStyle}>
      <Text style={styles.textStyle}> {props.title} </Text>
   </TouchableOpacity>
);

const styles = StyleSheet.create({
  containerStyle: {
    width: 200,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
    margin: 10,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default ButtonHome;
