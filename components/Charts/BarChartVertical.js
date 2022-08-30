import React from 'react';
import { VictoryBar } from "victory-native"
import colors from '../../config/colors';

function BarChartVertical() {
    const data = [10000, 9400, 2000, 5000, 14000, 4500, 7600].reverse();

    return (
        <VictoryBar
            style={{ flex: 1, data: { fill: colors.green_secondary, width: 15 } }}
            padding={{ right: 30, left: 30, bottom: 20 }}
            data={data}
            width={160} height={110}
            cornerRadius={{ top: 8, bottom: 8 }}
        />
    );
}

export default BarChartVertical;