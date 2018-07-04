import { StyleSheet } from 'react-native';

export const riskSelectorScreenStyles = StyleSheet.create({
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
      margin: 5
   }
});

export const riskToleranceScoreStyles = StyleSheet.create({
   riskToleranceScoreContainerStyle: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 15,
      justifyContent: 'center'
   },
   riskToleranceScoreTextStyle: {
      fontSize: 18,
      marginBottom: 10,
      width: '100%',
      textAlign: 'center',
   },
});

export const buttonRiskSelectorStyles = StyleSheet.create({
   buttonRiskSelectorTextStyle: {
     fontSize: 18,
     color: 'black',
   },
   buttonRiskSelectorStyle: {
     width: 28,
     height: 28,
     margin: 3,
     justifyContent: 'center',
     backgroundColor: 'white',
     borderWidth: 1,
     borderColor: 'black',
     borderRadius: 5,
   },
});

export const tablePortfolioStyles = StyleSheet.create({

   tablePortfolioContainerStyle: {
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
