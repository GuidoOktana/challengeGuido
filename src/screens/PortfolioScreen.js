import React, { Component } from 'react';
import { ScrollView, Button } from 'react-native';
import PortfolioUpdate from '../components/PortfolioUpdate'

class PortfolioScreen extends Component {
   static navigationOptions = ({ navigation }) => ({
      title: 'Personalized Portfolio',
      headerLeft:
      <Button title="Back" onPress={() => { navigation.pop()} }
         backgroundColor="rgba(0,0,0,0)"
         color="rgba(0, 120, 255, 1)"
      />
   });

   render() {
      return (
         <ScrollView>
            <PortfolioUpdate />
         </ScrollView>
      );
   }
}

export default PortfolioScreen;
