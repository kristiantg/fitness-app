
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CardComponent from "../components/ChartCard"

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import LineChartBezier from "../components/Charts/LineChartBezier"
import ProgressChartCircle from '../components/Charts/ProgressChartCircle';
import BarChartHorizontal from '../components/Charts/BarChartHorizontal'
import { Foundation } from '@expo/vector-icons';

import colors from '../config/colors';
import Banner from '../components/Banner/Banner';
import ProfileDisplay from '../components/Banner/ProfileDisplay';
import Water from '../components/Charts/Water';
import BarChartVertical from '../components/Charts/BarChartVertical';
import { ScrollView } from 'react-native-web';

function DashboardScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: 200 }}>
                <Banner />
                <ProfileDisplay name="Kristian Theilmann" />
            </View>
            <Text style={styles.contentTitle}>DENNE UGE</Text>
            <ScrollView>
                <View style={styles.cardContainer}>
                    <CardComponent bottomPadding={true} graph={<LineChartBezier />} title={"Aktivitet"} icon={<Ionicons name="trending-up-outline" size={20} color="white" />} />
                    <CardComponent graph={<ProgressChartCircle goal={1000} value={219} text={"minutter"} />} title={"Træning"} icon={<Ionicons name="timer-outline" size={20} color="white" />} />
                    <CardComponent graph={<BarChartHorizontal />} title={"Kategorier"} icon={<Ionicons name="body-outline" size={20} color="white" />} />
                    <CardComponent graph={<Water />} title={"Vand"} icon={<Ionicons name="water-outline" size={20} color="white" />} />
                    <CardComponent graph={<BarChartVertical />} title={"Skridt"} icon={<Foundation name="foot" size={20} color="white" />} />
                    <CardComponent graph={<ProgressChartCircle value={332} goal={600} text={"kcal"} />} title={"Forbrændt"} icon={<FontAwesome5 name="head-side-cough" size={16} color="white" />} />
                    <CardComponent graph={<ProgressChartCircle value={332} goal={600} text={"kcal"} />} title={"Forbrændt"} icon={<FontAwesome5 name="head-side-cough" size={16} color="white" />} />
                    <CardComponent graph={<ProgressChartCircle value={332} goal={600} text={"kcal"} />} title={"Forbrændt"} icon={<FontAwesome5 name="head-side-cough" size={16} color="white" />} />
                </View>
            </ScrollView>
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
        paddingLeft: 20,
        paddingBottom: 5,
        fontSize: 24,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",
        margin: 10
    }
});

export default DashboardScreen;