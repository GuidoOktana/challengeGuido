import { StyleSheet } from 'react-native';

export const portfolioUpdateStyles = StyleSheet.create({
   portfolioUpdateContainerStyles: {
      alignItems: 'center',
   },
   topViewStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   headerTableStyle: {
      backgroundColor: '#f8f8f8',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
   },
   tableStyle: {
      backgroundColor: 'white',
      borderWidth: 1,
   },
   inputStyle: {
      marginLeft: 3,
      borderWidth: 1,
      width: 80,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      color: 'black',
   },
   labelStyle: {
      width: 100,
   },
   rowContainerStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 10,
   },
   textStyle: {
      fontSize: 20,
      margin: 15,
   },
   buttonStyle: {
      backgroundColor: 'skyblue',
      width: 150,
      height: 60,
      margin: 20,
      borderWidth: 1,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
   },
   positiveValueStyle: {
      color: 'green',
   },
   negativeValueStyle: {
      color: 'red',
   },
});

export const riskSelectedTableStyles = StyleSheet.create({
  riskSelectedTableContainerStyle: {
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

export const transfersBoxStyles = StyleSheet.create({
   containerStyle: {
     marginTop: 30,
   },
   containerBoxStyle: {
     flexDirection: 'column',
     justifyContent: 'flex-start',
     backgroundColor: 'white',
     borderWidth: 1,
     minHeight: 100,
     width: 300,
     padding: 5,
     borderRadius: 5,
   },
});
