import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import _ from 'lodash';

export const TransfersBox = (props) => {
   return (
      <View style={styles.containerStyle}>
         <Text style={{ fontSize: 20 }}> Recommended Transfers: </Text>
         <View style={styles.containerBoxStyle}>
            <RenderRowsTransfersBox props={props.transfers} />
         </View>
      </View>
   );
}

export const RenderRowsTransfersBox = ({ props }) => {
  if (!_.isEmpty(props)) {
    return props.map((item, index) =>
      <Text key={index}> {item} </Text>
     );
  } else {
    return null;
   }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 30,
  },
  containerBoxStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderWidth: 1,
    minHeight: 100,
    width: 300,
    padding: 5,
    borderRadius: 5,
  },
});
