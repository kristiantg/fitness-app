import React from 'react'
import { View } from 'react-native'
import { VictoryArea, VictoryClipContainer } from 'victory-native'

function LineChartBezier(props) {
    const data = [14, 1, 14, 40, 85, 10, 35, 53, 24, 50]

    return (
        <View>
            <VictoryArea
                y0={() => -15}
                padding={{ right: 0, left: 0, top: 30, bottom: 25 }}
                interpolation="natural"
                groupComponent={<></>}
                style={{ data: { stroke: "#b1c4c0", strokeWidth: 5, strokeLinecap: "round", fill: "#e4eeed" } }}
                data={data}
            />
        </View>
    )
}

export default LineChartBezier;