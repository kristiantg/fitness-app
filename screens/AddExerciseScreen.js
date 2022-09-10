import React from 'react';
import { View, Text, Button, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native';
import Banner from '../components/Banner/Banner';
import { Feather } from '@expo/vector-icons';

import colors from '../config/colors';

function AddExerciseScreen() {
    let hasTemplates = false;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 200, justifyContent: "center", alignItems: "center" }}>
                <Banner />
                <>
                    <Text style={{ textTransform: 'uppercase', color: colors.white, fontSize: 28, fontWeight: "600" }}>opret workout</Text>
                    <Text>Min bentræning 1</Text>
                </>
            </View>
            {hasTemplates ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontStyle: 'italic', color: colors.green_primary }}>Ingen øvelser tilføjet</Text>
                </View> :
                <ScrollView>
                    <View style={{
                        flex: 1, flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-around"
                    }}>
                    </View>
                </ScrollView>
            }
            <TouchableHighlight onPress={() => { }} style={{ alignSelf: "center", position: "absolute", bottom: 40, backgroundColor: "black", height: 90, width: 90, borderRadius: 45, alignItems: "center", justifyContent: "center" }}>
                <Feather name="plus" size={34} color="white" />
            </TouchableHighlight>
        </SafeAreaView>

    );
}

export default AddExerciseScreen;