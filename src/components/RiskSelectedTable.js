import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { defaultPortfolioTable, portfolioTableHeader } from '../portfolios';
import { riskSelectedTableStyles } from '../styles';

class RiskSelectedTable extends Component {
   renderTableHeader = () => {
      return portfolioTableHeader.map((item, index) =>
         <Text key={index} style={[riskSelectedTableStyles.rowCellStyle,
         riskSelectedTableStyles.rowHeaderStyle]}
         >
            {item}
         </Text>
      )
   }

   renderTableItems = () => {
      let rowFix = _.toArray(defaultPortfolioTable[this.props.risk - 1]);
      return rowFix.map((item, index) =>
         <Text
            key={index} style={riskSelectedTableStyles.rowCellStyle}
         >
            {item}
         </Text>
      )
   }

  render() {
    return (
      <View style={riskSelectedTableStyles.riskSelectedTableContainerStyle}>
         {this.renderTableHeader()}
         {this.renderTableItems()}
      </View>
    )
  }
}

const mapStateToProps = ({ risk }) => {
   return {
      risk: risk.riskSelected
   };
};

export default connect(mapStateToProps)(RiskSelectedTable);
