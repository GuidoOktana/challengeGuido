import React from 'react';
import { Text } from 'react-native-svg';
import { Circle, G, Line } from 'react-native-svg'

export const Labels = ({ slices, height, width }) => {
   return slices.map((slice, index) => {
      console.log(slice);
     const { labelCentroid, pieCentroid, data } = slice;
     if (data.value > 0) {
        return (
          <G key={ index }>
              <Line
                  x1={ labelCentroid[ 0 ] }
                  y1={ labelCentroid[ 1 ] }
                  x2={ pieCentroid[ 0 ] }
                  y2={ pieCentroid[ 1 ] }
                  stroke={ 'black' }
              />
              <Circle
                  cx={ labelCentroid[ 0 ] }
                  cy={ labelCentroid[ 1 ] }
                  r={ 35 }
                  fill={ '#c9c9c9' }
              /> 
               
              <Text x={labelCentroid[ 0 ] + 2.5}
                    y={labelCentroid[ 1 ]} 
                    textAnchor={'middle'} 
                    fontSize={14} 
                    stroke={'black'} 
                    strokeWidth={0.1} 
                    alignmentBaseline={'central'} 
                    textAlign={'center'} 
              >
                {data.label.replace('%', ' ')}
              </Text>
                                
          </G> );
         } else {
            return null;
         }
   });
};
