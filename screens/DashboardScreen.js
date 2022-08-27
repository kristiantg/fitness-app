
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CardComponent from "../components/CardComponent"
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import LineChartBezier from "../components/Charts/LineChartBezier"
import ProgressChartCircle from '../components/Charts/ProgressChartCircle';
import BarChartHorizontal from '../components/Charts/BarChartHorizontal'

function DashboardScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <LinearGradient colors={['#9cbebf', '#b4c8c3']} style={styles.nameArea} />
                <View style={{ height: 150, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.profileText}>
                            @krisser
                        </Text>
                        <View style={styles.profilePic} />
                    </View>
                </View>

                <View>
                    <Text style={styles.contentTitle}>DENNE UGE</Text>
                    <View style={styles.cardContainer}>
                        <CardComponent bottomPadding={true} graph={<LineChartBezier />} title={"Aktivitet"} icon={<Ionicons name="trending-up-outline" size={20} color="white" />} />
                        <CardComponent bottomPadding={false} graph={<ProgressChartCircle />} title={"Træning"} icon={<Ionicons name="timer-outline" size={20} color="white" />} />
                        <CardComponent bottomPadding={false} graph={<BarChartHorizontal />} title={"Kategorier"} icon={<Ionicons name="body-outline" size={20} color="white" />} />
                        <View style={styles.card} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",
    },
    profilePic: {
        height: 80,
        width: 80,
        marginLeft: 40,
        borderRadius: 40,
        backgroundColor: 'white'
    },
    profileText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    nameArea: {
        backgroundColor: "#a7c9c8",
        borderRadius: 200,
        height: 400,
        transform: [{ scaleX: 1.4 }],
        top: -225,
        width: '100%',
        position: 'absolute'
    },
    contentTitle: {
        color: '#b9d4cc',
        fontWeight: 'bold',
        paddingTop: 40,
        paddingLeft: 20,
        fontSize: 24,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    card: {
        width: 160,
        height: 160,
        marginTop: 20,
        marginLeft: 20,
        backgroundColor: 'white',
        borderRadius: 25
    }
});

export default DashboardScreen;