import React, { useState } from "react";
import { FlatList, SafeAreaView, View, Image, TouchableHighlight, StyleSheet, Text, TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import DropDownSelect from "../components/DropDownSelect"
import colors from "../config/colors"
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

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
        <View style={{ alignItems: 'flex-end' }}>
            <Text style={[styles.title, textColor]}>{item.title}</Text>
            <Text style={[styles.subTitle, textColor]}>{item.subTitle} </Text>
        </View>
        <Ionicons name="information-circle" size={24} style={{ marginHorizontal: 5 }} color="black" />
    </TouchableOpacity>
);

const ExerciseListView = ({ route }) => {
    const { setExercises } = route.params;
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState([]);
    const anySelected = selectedId.length > 0;

    const renderItem = ({ item }) => {
        const { title, id } = item;
        const isSelected = selectedId.filter((i) => i === id).length > 0;


        const backgroundColor = isSelected ? colors.secondary : "#fefefe";
        const color = isSelected ? '#b5cbc5' : '#b5cbc5';

        return (
            <Item
                item={item}
                onPress={() => {
                    if (isSelected) {
                        setSelectedId((prev) => prev.filter((i) => i !== id));
                    } else {
                        setSelectedId(prev => [...prev, id])
                    }
                }}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };


    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={{ backgroundColor: "#f3f3f3", borderTopLeftRadius: 40, borderTopRightRadius: 40, marginTop: 60, flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: 10, marginVertical: 20 }}>
                        <DropDownSelect lable="Kropsdel" />
                        <DropDownSelect lable="Type" />
                        <DropDownSelect lable="Søg" />
                    </View>

                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                    />
                </View>
                {anySelected ? <TouchableHighlight onPress={() => { setExercises(selectedId); navigation.goBack(); }} style={{ alignSelf: "center", position: "absolute", bottom: 30, backgroundColor: "black", height: 90, width: 90, borderRadius: 45, alignItems: "center", justifyContent: "center" }}>
                    <Feather name="check" size={34} color="white" />
                </TouchableHighlight> : <></>}

            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.95,
        backgroundColor: colors.green_primary
    },
    image: {
        flex: 0.5,
        resizeMode: "contain",
        height: '100%',
        width: '100%',
    },
    item: {
        padding: 10,
        paddingVertical: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        borderRadius: 15,
        alignItems: "center",
        flex: 1, flexDirection: "row", justifyContent: "space-between"
    },
    title: {
        fontWeight: '500',
        fontSize: 18,
        color: '#b0c3bf'
    },
    subTitle: {
        fontSize: 12,
        marginLeft: 10,
        color: '#b0c3bf'
    }
});

export default ExerciseListView;