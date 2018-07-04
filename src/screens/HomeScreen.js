import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonHome from '../components/ButtonHome';
import { LinearGradient } from 'expo';
import { homeScreenStyles }  from '../styles';

class HomeScreen extends Component {

   static navigationOptions = ({ navigation }) => ({
      title: 'Challenge'
   });

   onButtonPress = (path) => {
      this.props.navigation.navigate(path);
   }

   render() {

      return (
         <View style={homeScreenStyles.containerStyle}>
            <LinearGradient
               colors={['#98e4f2', '#508ced']}
               style={{ flex: 1,  alignItems: 'center', width: '100%' }}>
               <View style={homeScreenStyles.buttonsContainer}>
                  <ButtonHome
                     title='Select Risk'
                     onPress={() => this.onButtonPress('risk')}
                  />
                  <ButtonHome
                     title='Portfolio'
                     onPress={() => this.onButtonPress('portfolio')}
                  />
               </View>
            </LinearGradient>
         </View>
      );
   }
}

export default HomeScreen;
