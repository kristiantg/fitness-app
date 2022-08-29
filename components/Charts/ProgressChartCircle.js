import React from 'react'
import { View, Text } from 'react-native'

import { VictoryPie } from 'victory-native'



function ProgressChartCircle({ text, value, goal }) {
    return (
        <View style={{ alignSelf: "center", height: 160, width: 160, top: -35 }}>
            <VictoryPie
                padAngle={0}
                labelComponent={<></>}
                innerRadius={75}
                width={220} height={220}
                data={[{ 'key': "", 'y': value }, { 'key': "", 'y': (goal - value) }]}
                colorScale={["#19B3A6", "#EEEEEE"]}
            />
            <Text style={{ position: "absolute", alignSelf: "center", top: 45, fontWeight: "600", fontSize: 40, color: "#a5cec6" }}>{value}</Text>
            <Text style={{ position: "absolute", alignSelf: "center", top: 85, color: "#a5cec6" }}>{text}</Text>
        </View>
    );
}

export default ProgressChartCircle;