import React, { Component } from 'react';
import {
   ScrollView,
   View,
   Text,
   StyleSheet,
   Button,
   Switch,
   Dimensions
} from 'react-native';
import RiskToleranceScore from '../components/RiskToleranceScore';
import Chart from '../components/Chart';
import TablePortfolio from '../components/TablePortfolio';
import { riskSelectorScreenStyles }  from '../styles';

class RiskSelectorScreen extends Component {
   static navigationOptions = ({ navigation }) => ({
      title: 'Risk Selector',
      headerLeft:
      <Button
         title="Back" onPress={() => { navigation.pop() }}
         backgroundColor="rgba(0,0,0,0)"
         color="rgba(0, 120, 255, 1)"
      />,
      headerRight:
      <Button
         title="Portfolio" onPress={() => { navigation.navigate('portfolio') }}
         backgroundColor="rgba(0,0,0,0)"
         color="rgba(0, 120, 255, 1)"
      />
   });

   state = {
      showChart: false,
      changeOnWidth: false
   }

   onLayout = (e) => {
      this.setState({ changeOnWidth: !this.state.changeOnWidth })
   }

   render() {
      return (
         <ScrollView
            style={riskSelectorScreenStyles.containerStyle}
            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            onLayout={this.onLayout}
         >
            <RiskToleranceScore />
            <View style={riskSelectorScreenStyles.switchContainerStyle}>
               <Text>Table</Text>
               <Switch
                  style={riskSelectorScreenStyles.switchStyle}
                  onTintColor='blue'
                  tintColor='green'
                  onValueChange={() => this.setState({ showChart: !this.state.showChart })}
                  value={this.state.showChart}
               />
               <Text> Chart </Text>
            </View>

            { !this.state.showChart ? <TablePortfolio /> :
            <Chart /> }

         </ScrollView>
      );
   }
}

export default RiskSelectorScreen;
