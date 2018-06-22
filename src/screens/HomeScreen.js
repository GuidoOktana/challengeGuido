import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonHome from '../components/ButtonHome';

class HomeScreen extends Component {

   static navigationOptions = ({ navigation }) => ({
      title: 'Challenge'
   });

   onButtonPress = (path) => {
      this.props.navigation.navigate(path);
   }

   render() {
      return (
         <View style={styles.containerStyle}>
            <View style={styles.buttonsContainer}>
               <ButtonHome
                  title='Select Risk'
                  onPress={() => this.onButtonPress('risk')}
               />
               <ButtonHome
                  title='Portfolio'
                  onPress={() => this.onButtonPress('portfolio')}
               />
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   containerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8'
   },
   buttonsContainer: {
      flex: 2,
      position: 'relative',
      flexWrap: 'wrap'
   }
});

export default HomeScreen;
