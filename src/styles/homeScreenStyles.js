import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
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

export const buttonHomeStyles = StyleSheet.create({
   buttonContainerStyle: {
      width: 200,
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      borderColor: 'black',
      margin: 10,
   },
    buttonTextStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
   },
});
