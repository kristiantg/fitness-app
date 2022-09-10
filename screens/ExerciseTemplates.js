import React from 'react';
import { View, Text, Button, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native';
import Banner from '../components/Banner/Banner';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import colors from '../config/colors';
import DropDownSelect from '../components/DropDownSelect';

function ExerciseTemplates() {
    let hasTemplates = false;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 200, justifyContent: "center", alignItems: "center" }}>
                <Banner />
                <>
                    <Text style={{ textTransform: 'uppercase', color: colors.white, fontSize: 28, fontWeight: "600" }}>templates</Text>
                    <View style={{ flexDirection: "row", marginTop: 16 }}>
                        <DropDownSelect lable="Sortér" />
                        <View style={{ backgroundColor: colors.white, alignItems: "center", justifyContent: "center", borderRadius: 15, paddingHorizontal: 10, marginHorizontal: 10 }}>
                            <MaterialIcons name="image-search" size={24} color={colors.green_primary} />
                        </View>
                    </View>
                </>
            </View>
            {hasTemplates ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontStyle: 'italic', color: colors.green_primary }}>Ingen templates fundet</Text>
                </View> :
                <ScrollView>
                    <View style={{
                        flex: 1, flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-around"
                    }}>
                        <TemplateCard />
                        <TemplateCard />
                        <TemplateCard />
                        <TemplateCard />
                    </View>
                </ScrollView>
            }
            <TouchableHighlight onPress={() => { }} style={{ alignSelf: "center", position: "absolute", bottom: 40, backgroundColor: "black", height: 90, width: 90, borderRadius: 45, alignItems: "center", justifyContent: "center" }}>
                <Feather name="plus" size={34} color="white" />
            </TouchableHighlight>
        </SafeAreaView>

    );
}

function TemplateCard(props) {
    return (
        <View style={{
            width: 160, height: 340, backgroundColor: "white", margin: 10,
            backgroundColor: 'white',
            borderRadius: 25,
        }}>
            <View style={{ height: 80, width: 160, backgroundColor: colors.green_secondary, borderTopRightRadius: 25, borderTopLeftRadius: 25, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ textTransform: "uppercase", fontSize: 18, fontWeight: '700', color: colors.green_primary }}>bentræning 1</Text>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ alignContent: "center", alignItems: "center", flex: 1 }}>
                    <Text style={{ color: colors.green_primary, fontStyle: "italic", padding: 10, textAlign: "center", fontSize: 16 }}>
                        Squat, Leg Extension, Walking Lunges, Deadlift
                    </Text>
                </View>
            </View>
            <Button style={{ backgroundColor: 'gray' }} title='start'></Button>
        </View>
    );
}

export default ExerciseTemplates;