import React from 'react';
import { VictoryBar, VictoryLabel, VictoryAxis, VictoryChart, } from "victory-native"

function BarChartHorizontal(props) {
    const data = [
        { name: "Arme", value: 10, percent: "20%" },
        { name: "Ben", value: 16, percent: "35%" },
        { name: "Ryg", value: 12, percent: "22%" }
    ].reverse();

    return (
        <VictoryChart width={160} height={100} padding={{ left: 55, right: 10, top: 0, bottom: 0 }}
            domainPadding={{ x: 20 }}>
            <VictoryAxis
                offsetX={44}
                labelComponent={
                    <VictoryLabel />
                }
                style={{
                    axis: { stroke: "transparent" },
                    ticks: { stroke: "transparent" },
                    tickLabels: { fill: "#aabeba", fontSize: 14, textAnchor: "middle" }
                }}
            />

            <VictoryBar
                data={data}
                horizontal={true}
                cornerRadius={{ bottom: 10, top: 10 }}
                style={{ data: { fill: "#414141", width: 20, }, labels: { fill: "white", fontSize: 14, fontWeight: '600', textAnchor: "middle" } }}
                x="name"
                y="value"
                labels={({ datum }) => datum.percent}
                labelComponent={<VictoryLabel dx={-20} />}
            />

        </VictoryChart>

    );
}

export default BarChartHorizontal;