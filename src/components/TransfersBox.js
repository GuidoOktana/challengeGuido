import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import _ from 'lodash';
import { transfersBoxStyles } from '../styles';

export const TransfersBox = (props) => {
   return (
      <View style={transfersBoxStyles.containerStyle}>
         <Text style={{ fontSize: 20 }}> Recommended Transfers: </Text>
         <View style={transfersBoxStyles.containerBoxStyle}>
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
