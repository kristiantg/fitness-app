import React, { useState } from "react";
import { FlatList, SafeAreaView, View, Image, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "AB FOAM ROLL",
        subTitle: "Skuldre, bryst, triceps"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "AB FOAM ROLL",
        subTitle: "Skuldre, bryst, triceps"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "TEST",
        subTitle: "Skuldre, bryst, triceps"
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Image style={styles.image} source={require("../assets/testExercise.png")}></Image>
        <View style={{ marginLeft: 20, alignItems: 'flex-end' }}>
            <Text style={[styles.title, textColor]}>{item.title}</Text>
            <Text style={[styles.subTitle, textColor]}>{item.subTitle} </Text>
        </View>
        <Ionicons name="information-circle" size={24} style={{ marginLeft: 20 }} color="black" />
    </TouchableOpacity>
);

const ExerciseListView = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#fefefe" : "#fefefe";
        const color = item.id === selectedId ? '#b5cbc5' : '#b5cbc5';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: "#f3f3f3", borderTopLeftRadius: 40, borderTopRightRadius: 40, marginTop: 60, flex: 1 }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#a7c9c8"
    },
    image: {
        flex: 0.8,
        resizeMode: "contain",
        height: '100%',
        width: '100%',
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontWeight: 600,
        fontSize: 20,
        color: '#b0c3bf'
    },
    subTitle: {
        fontSize: 12,
        marginLeft: 10,
        color: '#b0c3bf'
    }
});

export default ExerciseListView;