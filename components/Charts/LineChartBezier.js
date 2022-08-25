import { LineChart } from "react-native-chart-kit";

function LineChartBezier(props) {
    const data = {
        datasets: [
            {
                data: [20, 45, 28, 65, 32, 43],
                strokeWidth: 2 // optional
            }
        ],
    };

    const chartConfig = {
        backgroundGradientFrom: "transparent",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "transparent",
        backgroundGradientToOpacity: 1,
        color: () => "#a7c9c8",
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16,
        }
    }

    return (
        <LineChart
            data={data}
            width={props.width}
            height={props.height}
            withShadow={true}
            withInnerLines={false}
            withOuterLines={false}
            withDots={false}
            withHorizontalLabels={false}
            withVerticalLabels={false}
            chartConfig={chartConfig}
            bezier
        />
    );
}

export default LineChartBezier;