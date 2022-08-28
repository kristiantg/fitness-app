
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CardComponent from "../components/ChartCard"

import { Ionicons } from '@expo/vector-icons';
import LineChartBezier from "../components/Charts/LineChartBezier"
import ProgressChartCircle from '../components/Charts/ProgressChartCircle';
import BarChartHorizontal from '../components/Charts/BarChartHorizontal'

import colors from '../config/colors';
import Banner from '../components/Banner/Banner';
import ProfileDisplay from '../components/Banner/ProfileDisplay';

function DashboardScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Banner />
            <ProfileDisplay name="Kristian Theilmann" />
            <View>
                <Text style={styles.contentTitle}>DENNE UGE</Text>
                <View style={styles.cardContainer}>
                    <CardComponent bottomPadding={true} graph={<LineChartBezier />} title={"Aktivitet"} icon={<Ionicons name="trending-up-outline" size={20} color="white" />} />
                    <CardComponent bottomPadding={false} graph={<ProgressChartCircle />} title={"Træning"} icon={<Ionicons name="timer-outline" size={20} color="white" />} />
                    <CardComponent bottomPadding={false} graph={<BarChartHorizontal />} title={"Kategorier"} icon={<Ionicons name="body-outline" size={20} color="white" />} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg_primary,
    },
    contentTitle: {
        color: colors.green_primary,
        fontWeight: 'bold',
        paddingTop: 40,
        paddingLeft: 20,
        fontSize: 24,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",
        margin: 10
    }
});

export default DashboardScreen;