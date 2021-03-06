import _ from 'lodash';
import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { defaultPortfolioTableDetails, initialUserPortfolio } from '../portfolios';
import { TransfersBox } from './TransfersBox';
import RiskSelectedTable from './RiskSelectedTable';
import { portfolioUpdateStyles } from '../styles';

class PortfolioUpdate extends Component {
   state = {
      total: 0,
      recommendation: [],
      userPortfolio: initialUserPortfolio,
      transfers: []
   }

   componentDidMount = () => {
      this.getCurrentRecomendation();
   }

   getCurrentRecomendation = () => {
      for (let i = 0; i < defaultPortfolioTableDetails.length; i++) {
           if (defaultPortfolioTableDetails[i].Risk === this.props.risk) {
               const recommendation = _.toArray(defaultPortfolioTableDetails[i]);
               return this.setState({
                  recommendation: recommendation.splice(1, 5)
               });
           }
       }
   }

   calculateTotal = () => {
      const { userPortfolio } = this.state;
      let totalInvestment = 0;

      for (let i = 0; i < userPortfolio.length; i++) {
         totalInvestment += parseFloat(userPortfolio[i].value);
      }

      if (!isNaN(totalInvestment)) {
         this.setState({
            total: totalInvestment
         }, this.calculateChanges);
      }
   }

   calculateChanges = () => {
      let toTransferArray = [];
      let newObject = this.state.userPortfolio.map((item, index) => {
            const { total, recommendation, userPortfolio } = this.state;
            const userValue = userPortfolio[index].value;
            const recommendationValue = recommendation[index].value;
            const idealAmount = total * parseFloat(recommendationValue) / 100;

            if (parseFloat(userValue) !== idealAmount) {
               let newDifference = parseFloat(idealAmount) -
                  parseFloat(userValue);
               toTransferArray.push({value: parseFloat(newDifference),
                  label: recommendation[index].label.replace(' $', '') })
               newDifference.toFixed(2);

               let newAmount = parseFloat(userValue) + newDifference;
               newAmount.toFixed(2);


               return { ...item,
                  difference: parseFloat(newDifference),
                  newAmount: parseFloat(newAmount) }
            } else {
               return { ...item, difference: 0, newAmount: idealAmount }
            }
         }
      );

      this.setState({
         userPortfolio: newObject,
         toTransferArray: toTransferArray.sort((a , b) => a.value - b.value)
      },this.calculateTransfers);
   }

   calculateTransfers = () => {
      const { toTransferArray } = this.state;
      const givesTransferArray = toTransferArray.filter(item => item.value < 0);
      const needsTransferArray = toTransferArray.filter(item => item.value > 0).reverse();

      if (givesTransferArray.length > 0 && givesTransferArray.length > 0) {
         let transfers = givesTransferArray.map((givesTransfer, index) => {
            return needsTransferArray.map( (needsTransfer, otherIndex) => {
               if (needsTransfer.value > 0 && givesTransfer.value < 0) {
                  let transferAmount = 0;

                  if (Math.abs(parseFloat(givesTransfer.value)) < parseFloat(needsTransfer.value)) {
                     transferAmount = givesTransfer.value;
                     needsTransferArray[otherIndex].value = needsTransfer.value - Math.abs(givesTransfer.value);
                     givesTransferArray[index].value = 0;
                  } else if (Math.abs(parseFloat(givesTransfer.value)) === parseFloat(needsTransfer.value)) {
                     transferAmount = givesTransfer.value;
                     givesTransferArray[index].value = 0;
                     needsTransferArray[otherIndex].value = 0;
                  } else {
                     transferAmount = needsTransfer.value;
                     givesTransferArray[index].value = givesTransfer.value + needsTransfer.value;
                     needsTransferArray[otherIndex].value = 0;
                  }

                  return `- Transfer $ ${Math.abs(transferAmount.toFixed(2))} from ${givesTransfer.label.replace(' %', '')} to ${needsTransfer.label.replace(' %', '')}. \n`
               }
            })
         });
      this.setState({ transfers: transfers });
      }
   }

   renderRows = () => {
      const { recommendation, userPortfolio } = this.state;

      return (recommendation).map((investmentType, index) =>
         <View style={portfolioUpdateStyles.rowContainerStyle} key={index} >
            <Text style={portfolioUpdateStyles.labelStyle}>
               {investmentType.label.replace('%', '$')}
            </Text>
            <TextInput
               style={portfolioUpdateStyles.inputStyle}
               value={String(userPortfolio[index].value)}
               onChangeText={text => this.onUpdateText(text, index)}
            />
            <TextInput
               style={[ portfolioUpdateStyles.inputStyle, userPortfolio[index].difference > 0 ?
               portfolioUpdateStyles.positiveValueStyle: userPortfolio[index].difference < 0 ?
               portfolioUpdateStyles.negativeValueStyle : { color: 'black' }
               ]}
               editable={false}
               value={String(userPortfolio[index].difference)} />
            <TextInput
               style={portfolioUpdateStyles.inputStyle}
               editable={false}
               value={String(userPortfolio[index].newAmount)} />
         </View>
      )
   }

   // TODO Validate negative numbers.
   onUpdateText = (text, index) => {
      let newObject = this.state.userPortfolio.map((item, idx) => {
            if (idx ==  index) {
               return { ...item, value: text }
            } else {
               return { ...item }
            }
         }
      );

      this.setState({
         userPortfolio: newObject
      });
   }

   render() {
      return (
         <View style={portfolioUpdateStyles.portfolioUpdateContainerStyles}>
            <View style={portfolioUpdateStyles.topViewStyle}>
               <RiskSelectedTable table={this.state.recommendation}/>
            </View>

            <Text style={portfolioUpdateStyles.textStyle} >
               Please Enter Your Current Portfolio:
            </Text>

            <View style={portfolioUpdateStyles.tableStyle}>
               <View style={portfolioUpdateStyles.headerTableStyle} >
                  <Text style={{ flex: 2, paddingLeft: 20 }}>Current Amount</Text>
                  <Text style={{ flex: 1 }}>Difference</Text>
                  <Text style={{ flex: 1 }}>New Amount</Text>
               </View>
               <View >
                  {this.renderRows()}
               </View>
            </View>
            <TransfersBox
               transfers={this.state.transfers ?
               this.state.transfers : ['Transfers']}
            />

            <TouchableOpacity
               style={portfolioUpdateStyles.buttonStyle}
               onPress={this.calculateTotal} >
               <Text style={{ fontSize: 20 }}> Rebalance </Text>
            </TouchableOpacity>
         </View>
      );
   }
}

const mapStateToProps = ({ risk }) => {
   return {
      risk: risk.riskSelected
   };
};

export default connect(mapStateToProps)(PortfolioUpdate);
