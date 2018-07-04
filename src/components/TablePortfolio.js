import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { defaultPortfolioTable, portfolioTableHeader } from '../portfolios';
import { tablePortfolioStyles } from '../styles';

class TablePortfolio extends Component {
   renderTableHeader = () => {
      const header = portfolioTableHeader.map((item, index) =>
         <Text key={index} style={[tablePortfolioStyles.rowCellStyle, tablePortfolioStyles.rowHeaderStyle]} >
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
               key={index} style={[tablePortfolioStyles.rowCellStyle, selected
                  ? tablePortfolioStyles.selectedRowStyle : '']}
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
      <View style={tablePortfolioStyles.tablePortfolioContainerStyle}>
         {this.renderTableHeader()}
         {this.renderTableRows()}
      </View>
    )
  }
}

const mapStateToProps = ({ risk }) => {
   return {
      risk: risk.riskSelected
   };
};

export default connect(mapStateToProps)(TablePortfolio);
