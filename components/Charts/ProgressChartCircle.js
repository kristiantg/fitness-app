import React from 'react'
import { View, Text } from 'react-native'

import { VictoryPie } from 'victory-native'



function ProgressChartCircle(props) {
    return (
        <View style={{ alignSelf: "center", height: 140, width: 140, top: -20 }}>
            <VictoryPie
                padAngle={0}
                labelComponent={<></>}
                innerRadius={80}
                width={220} height={220}
                data={[{ 'key': "", 'y': 10 }, { 'key': "", 'y': (100 - 10) }]}
                colorScale={["#19B3A6", "#EEEEEE"]}
            />
            <Text style={{ position: "absolute", alignSelf: "center", top: 35, fontWeight: "600", fontSize: 40, color: "#a5cec6" }}>219</Text>
            <Text style={{ position: "absolute", alignSelf: "center", top: 75, color: "#a5cec6" }}>minutter</Text>
        </View>
    );
}

export default ProgressChartCircle;