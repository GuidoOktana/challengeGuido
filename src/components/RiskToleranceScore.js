import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ButtonRiskSelector from './ButtonRiskSelector';
import { connect } from 'react-redux';
import * as actions from '../actions';

class RiskToleranceScore extends Component {

   onButtonPress = (risk) => {
      this.props.setRiskSelected(risk);
   }

   renderButtons = () => {
      const risks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

      return risks.map(i =>
         <ButtonRiskSelector
            title={i}
            key={i}
            onPress={() => this.onButtonPress(i)}
            selected={this.props.riskSelected === i}
         />
      );
   }

   render() {
      return (
         <View style={styles.containerStyle}>
            <Text style={styles.textStyle}> Please Select A Risk Level For Your Investment Portfolio: </Text>
            {this.renderButtons()}
         </View>
      );
   }
}

const styles = StyleSheet.create({
   containerStyle: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 15,
      justifyContent: 'center'
   },
   textStyle: {
      fontSize: 18,
      marginBottom: 10,
      width: '100%',
      textAlign: 'center',
   },
});

const mapStateToProps = ({ risk }) => {
   return {
      riskSelected: risk.riskSelected
   };
};

export default connect(mapStateToProps, actions)(RiskToleranceScore);
