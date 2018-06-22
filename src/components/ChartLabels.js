import React from 'react';
import { Text } from 'react-native-svg';

export const Labels = ({ slices, height, width }) => {
   return slices.map((slice, index) => {
     const { labelCentroid, pieCentroid, data } = slice;
     if (data.value > 0) {
        return (
            <Text
               key={index}
               x={pieCentroid[ 0 ]}
               y={pieCentroid[ 1 ]}
               fill={'black'}
               textAnchor={'middle'}
               alignmentBaseline={'middle'}
               fontSize={16}
               stroke={'white'}
               strokeWidth={0.1}
               style={{ padding: 10 }}
            >
               {data.label} 
            </Text>);
         } else {
            return null;
         }
   });
};
