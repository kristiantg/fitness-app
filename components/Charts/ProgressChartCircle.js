import React from 'react'
import { View, Text } from 'react-native'

import { VictoryPie } from 'victory-native'

import colors from '../../config/colors';



function ProgressChartCircle({ text, value, goal }) {
    return (
        <View style={{ alignSelf: "center", flex: 1, top: -10 }}>
            <VictoryPie
                padAngle={0}
                labelComponent={<></>}
                innerRadius={45}
                padding={{ right: 0, left: 0, top: 0, bottom: 0 }}
                width={110} height={110}
                data={[{ 'key': "", 'y': value }, { 'key': "", 'y': (goal - value) }]}
                colorScale={[colors.green_primary, "#EEEEEE"]}
            />
            <Text style={{ position: "absolute", alignSelf: "center", top: 28, fontWeight: "600", fontSize: 32, color: "#a5cec6" }}>{value}</Text>
            <Text style={{ position: "absolute", alignSelf: "center", top: 65, color: "#a5cec6" }}>{text}</Text>
        </View>
    );
}

export default ProgressChartCircle;