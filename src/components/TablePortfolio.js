import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { defaultPortfolioTable, portfolioTableHeader } from '../portfolios';

class TablePortfolio extends Component {
   renderTableHeader = () => {
      const header = portfolioTableHeader.map((item, index) =>
         <Text key={index} style={[styles.rowCellStyle, styles.rowHeaderStyle]} >
            {item}
         </Text>
      )
      return (
         <View style={{ flexDirection: 'row' }}>
            {header}
         </View>
      )
   }
   renderTableRows = () => {
      return defaultPortfolioTable.map((row, index) =>
         this.renderTableItems(row, index)
      );
   }

   renderTableItems = (row, index) => {
      let rowFix = _.toArray(row);
      let selected = this.props.risk === row.risk ? true : false;
      const rowToRender = rowFix.map((item, index) =>
            <Text
               key={index} style={[styles.rowCellStyle, selected
                  ? styles.selectedRowStyle : '']}
            >
               {item}
            </Text>
      )
      return (
         <View style={{ flexDirection: 'row' }} key={index} >
            {rowToRender}
         </View>
      )
   }

  render() {
    return (
      <View style={styles.containerStyle}>
         {this.renderTableHeader()}
         {this.renderTableRows()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
     marginTop: 30,
     alignSelf: 'center',
     minWidth: 360,
     flex:1,
     maxWidth: 800,
   },
   rowHeaderStyle: {
      backgroundColor: 'skyblue',
      fontSize: 12,
      height: 25,
      lineHeight: 25,
   },
   rowCellStyle: {
      borderWidth: 1,
      borderColor: 'black',
      flex: 1,
      height: 30,
      fontSize: 18,
      textAlign: 'center',
      backgroundColor: '#c9c9c9',
      lineHeight: 30,
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

export default connect(mapStateToProps)(TablePortfolio);
