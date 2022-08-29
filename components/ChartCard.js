import { StyleSheet, View, Text } from 'react-native';

import CardIcon from './CardIcon';


function CardComponent({ graph, icon, title, bottomPadding = false }) {
    return (
        <View style={styles.card}>
            <View style={{ flex: 0.2, flexDirection: "row", justifyContent: "space-around", marginTop: 14 }}>
                <Text style={styles.cardTitle}>{title}</Text>
                <CardIcon icon={icon} />
            </View>
            <View style={{ flex: 0.8, justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <View style={{ width: 160, height: 100 }}>
                    {graph}
                </View>
                {bottomPadding && <View style={{ backgroundColor: "#e4eeed", height: 25, width: 160, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }} />}

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 160,
        height: 160,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 25,
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