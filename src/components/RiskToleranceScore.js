import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ButtonRiskSelector from './ButtonRiskSelector';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { riskToleranceScoreStyles } from '../styles';

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
         <View
            style={riskToleranceScoreStyles.riskToleranceScoreContainerStyle}
         >
            <Text
               style={riskToleranceScoreStyles.riskToleranceScoreTextStyle}
            >
               Please Select A Risk Level For Your Investment Portfolio:
            </Text>
            {this.renderButtons()}
         </View>
      );
   }
}

const mapStateToProps = ({ risk }) => {
   return {
      riskSelected: risk.riskSelected
   };
};

export default connect(mapStateToProps, actions)(RiskToleranceScore);
