import _ from 'lodash';
import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { connect } from 'react-redux';
import { Labels } from './ChartLabels';
import { defaultPortfolioTableDetails } from '../portfolios';

const window = Dimensions.get('window');

class Chart extends Component {
   state = {
      chartData: []
   }

   componentDidMount() {
      this.getCurrentRecomendationForChart(this.props.risk);
   }

   componentWillReceiveProps(newProps) {
      if (this.props.risk !== newProps.risk) {
         this.getCurrentRecomendationForChart(newProps.risk);
      }
   }

   getCurrentRecomendationForChart = (risk) => {
      let recomendation = [];

      for (let i = 0; i < defaultPortfolioTableDetails.length; i++) {
           if (defaultPortfolioTableDetails[i].Risk === parseInt(risk)) {
               recomendation = _.toArray(defaultPortfolioTableDetails[i]);
           }
       }

      recomendation.splice(0, 1);
      this.setState({
         chartData: recomendation
      });
   }

    render() {
        return (
            <View
               style={{
               width: window.width  }}
            >
               {!_.isEmpty(this.state.chartData) ?
                  <PieChart
                     style={{ height: 400, width: '100%' }}
                     valueAccessor={({ item }) => item.value}
                     data={this.state.chartData}
                     innerRadius={ 70 }
                     outerRadius={ 140 }
                     labelRadius={ 150 }
                  >
                     <Labels />
                  </PieChart>
               : null}
            </View>
        )
    }
}

const mapStateToProps = ({ risk }) => {
   return {
      risk: risk.riskSelected
   };
};

export default connect(mapStateToProps)(Chart);
