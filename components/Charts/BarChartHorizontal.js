import React from 'react';
import { VictoryBar, VictoryLabel, VictoryAxis, VictoryChart, } from "victory-native"

function BarChartHorizontal(props) {
    const data = [
        { name: "Arme", value: 10, percent: "20%" },
        { name: "Ben", value: 16, percent: "35%" },
        { name: "Ryg", value: 12, percent: "20%" }
    ].reverse();

    return (
        <VictoryChart width={400} padding={{ left: 110, right: -50 }}
            domainPadding={{ y: 50, x: 50 }}>
            <VictoryAxis
                offsetX={50}
                labelComponent={
                    <VictoryLabel />
                }
                style={{
                    axis: { stroke: "transparent" },
                    ticks: { stroke: "transparent" },
                    tickLabels: { fill: "#aabeba", fontSize: 35, textAnchor: "middle" }
                }}
            />

            <VictoryBar
                data={data}
                horizontal={true}
                cornerRadius={{ bottom: 25, top: 25 }}
                style={{ data: { fill: "#414141", width: 60, }, labels: { fill: "white", fontSize: 35, fontWeight: '600', textAnchor: "middle" } }}
                x="name"
                y="value"
                labels={({ datum }) => datum.percent}
                labelComponent={<VictoryLabel dx={-70} />}
            />

        </VictoryChart>

    );
}

export default BarChartHorizontal;