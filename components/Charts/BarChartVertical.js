import React from 'react';
import { View } from 'react-native';
import { VictoryBar, VictoryLabel, VictoryAxis, VictoryChart, } from "victory-native"
import colors from '../../config/colors';

function BarChartVertical(props) {
    const data = [10000, 9400, 2000, 5000, 14000, 4500, 7600].reverse();

    return (
        <View style={{ flex: 1 }}>
            <VictoryBar
                style={{ data: { fill: colors.green_secondary, width: 50 } }}
                padding={{ right: 50, left: 50, bottom: 30 }}
                data={data}
                cornerRadius={{ top: 25, bottom: 25 }}
            />
        </View>
    );
}

export default BarChartVertical;