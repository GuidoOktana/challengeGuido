import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Switch } from 'react-native';
import RiskToleranceScore from '../components/RiskToleranceScore';
import Chart from '../components/Chart';
import TablePortfolio from '../components/TablePortfolio';

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
      showChart: false
   }

   render() {
      return (
         <View style={styles.containerStyle} >
            <RiskToleranceScore />
            <View style={styles.switchContainerStyle}>
               <Text>Table</Text>
               <Switch
                  style={styles.switchStyle}
                  onTintColor='blue'
                  tintColor='green'
                  onValueChange={() => this.setState({ showChart: !this.state.showChart })}
                  value={this.state.showChart}
               />
               <Text> Graph </Text>
            </View>

            { !this.state.showChart ? <TablePortfolio /> :
            <Chart /> }

         </View>
      );
   }
}

const styles = StyleSheet.create({
   containerStyle: {
      flex: 1,
   },
   switchStyle: {
      marginLeft: 10,
      marginRight: 10
   },
   switchContainerStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
   }
});

export default RiskSelectorScreen;
