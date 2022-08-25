import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LineChartBezier from "../components/Charts/LineChartBezier"

function CardComponent() {
    const onLayout = (event) => {
        const { x, y, height, width } = event.nativeEvent.layout;
    }

    return (
        <View onLayout={onLayout} style={styles.card}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", marginTop: 14 }}>
                <Text style={styles.cardTitle}>Aktivitet</Text>
                <LinearGradient
                    colors={['#9cbebf', '#b4c8c3']}
                    style={styles.cardDot}>
                </LinearGradient>
            </View>
            <View style={{ position: "absolute", left: -64, top: 50 }}>
                <LineChartBezier width={258} height={100} />
            </View>
            <View style={{ backgroundColor: "#f6f9f9", height: 20, width: 160, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 160,
        height: 160,
        marginTop: 20,
        marginLeft: 20,
        backgroundColor: 'white',
        borderRadius: 25
    },
    cardDot: {
        height: 24,
        width: 24,
        marginLeft: 12,
        borderRadius: 40,
        backgroundColor: '#a7c9c8'
    },
    cardTitle: {
        fontSize: 14,
        marginLeft: 10,
        fontWeight: '400',
        color: '#b0c3bf'
    }
});

export default CardComponent;