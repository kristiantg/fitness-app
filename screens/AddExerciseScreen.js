import React, { useState } from 'react';
import { View, Text, Pressable, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native';
import Banner from '../components/Banner/Banner';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from "react-native";

import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import CancelButton from '../components/CancelButton';

import Accordion from 'react-native-collapsible/Accordion';
import CollapsibleTest from '../components/collapsible';

function AddExerciseScreen() {
    const navigation = useNavigation();
    const [exercises, setExercises] = useState([])
    let hasExercises = exercises.length > 0;
    let isCollapsed = false;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 200, justifyContent: "center", alignItems: "center" }}>
                <Banner />
                <CancelButton top={10} />
                <>
                    <Text style={{ textTransform: 'uppercase', color: colors.white, fontSize: 28, fontWeight: "600" }}>opret workout</Text>
                    <Text style={{ color: colors.white, fontWeight: '200', fontSize: 24 }}>Min bentræning 1</Text>
                </>
            </View>
            {hasExercises ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', top: -100 }}>
                    <Text style={{ fontStyle: 'italic', color: colors.green_primary }}>Ingen øvelser tilføjet</Text>
                </View> :
                <ScrollView>
                    <View style={{
                        flex: 1, flexDirection: 'row', flexWrap: "wrap", alignSelf: 'center'
                    }}>

                        <CollapsibleTest />
                    </View>
                </ScrollView>
            }
            <TouchableHighlight onPress={() => {
                navigation.navigate('AddExerciseToTemplate', {
                    setExercises
                })
            }} style={{ alignSelf: "center", position: "absolute", bottom: 40, backgroundColor: "black", height: 90, width: 90, borderRadius: 45, alignItems: "center", justifyContent: "center" }}>
                <Feather name="plus" size={34} color="white" />
            </TouchableHighlight>
        </SafeAreaView>

    );
}

export default AddExerciseScreen;