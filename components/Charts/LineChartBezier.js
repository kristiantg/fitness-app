import React from 'react'
import { VictoryArea } from 'victory-native'

function LineChartBezier(props) {
    const data = [14, 1, 14, 40, 85, 10, 35, 53, 24, 50]

    return (
        <VictoryArea
            y0={() => -15}
            padding={{ right: 0, left: 0, top: 30, bottom: 24 }}
            width={160} height={130}
            interpolation="natural"
            groupComponent={<></>}
            style={{ flex: 1, data: { stroke: "#b1c4c0", strokeWidth: 3, strokeLinecap: "round", fill: "#e4eeed" } }}
            data={data}
        />
    )
}

export default LineChartBezier;