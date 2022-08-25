import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LineChartBezier from "../components/Charts/LineChartBezier"
import { Ionicons } from '@expo/vector-icons';

function CardComponent() {
    return (
        <View style={styles.card}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", marginTop: 14 }}>
                <Text style={styles.cardTitle}>Aktivitet</Text>
                <LinearGradient
                    colors={['#9cbebf', '#b4c8c3']}
                    style={styles.cardDot}>
                    <Ionicons name="trending-up-outline" size={20} color="white" />
                </LinearGradient>
            </View>
            <LineChartBezier />
            <View style={{ backgroundColor: "#e4eeed", height: 25, width: 160, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }} />
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
        height: 30,
        width: 30,
        marginLeft: 15,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#a7c9c8'
    },
    cardTitle: {
        fontSize: 14,
        marginLeft: 10,
        fontWeight: '500',
        color: '#b0c3bf'
    }
});

export default CardComponent;