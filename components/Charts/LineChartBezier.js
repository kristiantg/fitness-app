import React from 'react'
import { Path } from 'react-native-svg'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

function LineChartBezier(props) {
    const data = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50]

    const Line = ({ line }) => (
        <Path
            key={'line'}
            d={line}
            stroke={'#b3c8c3'}
            fill={'none'}
            style={{}}
        />
    )

    return (
        <AreaChart
            style={{ height: 100, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
            data={data}
            contentInset={{ top: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: '#e4eeed' }}
        >
            <Line />
        </AreaChart>
    )
}

export default LineChartBezier;