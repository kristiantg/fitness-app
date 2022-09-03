import React from 'react';
import { View, Text, Button, TouchableHighlight, SafeAreaView } from 'react-native';
import Banner from '../components/Banner/Banner';
import { Feather } from '@expo/vector-icons';

import colors from '../config/colors';

function ExerciseTemplates() {
    let hasTemplates = true;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 200 }}>
                <Banner />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontStyle: 'italic', color: colors.green_primary }}>Ingen templates fundet</Text>
            </View>
            <TouchableHighlight onPress={() => { }} style={{ alignSelf: "center", margin: 40, backgroundColor: "black", height: 90, width: 90, borderRadius: 45, alignItems: "center", justifyContent: "center" }}>
                <Feather name="plus" size={34} color="white" />
            </TouchableHighlight>
        </SafeAreaView>

    );
}

export default ExerciseTemplates;