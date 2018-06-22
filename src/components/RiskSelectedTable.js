import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { defaultPortfolioTable, portfolioTableHeader } from '../portfolios';

class RiskSelectedTable extends Component {
   renderTableHeader = () => {
      return portfolioTableHeader.map((item, index) =>
         <Text key={index} style={[styles.rowCellStyle, styles.rowHeaderStyle]} >
            {item}
         </Text>
      )
   }

   renderTableItems = () => {
      let rowFix = _.toArray(defaultPortfolioTable[this.props.risk - 1]);
      return rowFix.map((item, index) =>
         <Text
            key={index} style={styles.rowCellStyle}
         >
            {item}
         </Text>
      )
   }

  render() {
    return (
      <View style={styles.containerStyle}>
         {this.renderTableHeader()}
         {this.renderTableItems()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
     flexDirection: 'row',
     justifyContent: 'center',
     flexWrap: 'wrap',
     marginTop: 30,
     width: 60*6
   },
   rowHeaderStyle: {
      backgroundColor: 'skyblue',
      fontSize: 12,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: 20,
   },
   rowCellStyle: {
      borderWidth: 1,
      borderColor: 'black',
      width: 60,
      height: 20,
      fontSize: 14,
      textAlign: 'center',
      padding: 2,
      backgroundColor: '#c9c9c9',
      justifyContent: 'center',
      alignItems: 'center',
   },
   selectedRowStyle: {
      backgroundColor: 'rgba(0, 255, 0, 0.6)',
   },
});

const mapStateToProps = ({ risk }) => {
   return {
      risk: risk.riskSelected
   };
};

export default connect(mapStateToProps)(RiskSelectedTable);
