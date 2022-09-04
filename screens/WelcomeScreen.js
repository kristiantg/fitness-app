import React from 'react';
import { Ionicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';

function WelcomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: "center", paddingTop: 70 }}>
                    <Text style={{ fontWeight: '600', fontSize: 26, color: colors.green_primary }}>VELKOMMEN TIL</Text>
                    <Text style={{ fontWeight: '700', fontSize: 50, color: colors.green_primary }}>EXERCERE</Text>
                </View>
                <Image style={{ width: 150, height: 150, alignSelf: "center", marginTop: 20 }} source={require("../assets/logo.png")}></Image>
                <View>
                    <View style={{ flexDirection: "row", padding: 30, paddingHorizontal: 50 }}>
                        <Ionicons style={{ marginRight: 20 }} name="body-outline" size={24} color={colors.green_primary} />
                        <Text style={{ marginRight: 40 }}>Opdag nye træningsplaner eller del dine egne med andre</Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: '70%',
                            alignSelf: "center"
                        }}
                    />
                    <View style={{ flexDirection: "row", padding: 30, paddingHorizontal: 50 }}>
                        <FontAwesome style={{ marginRight: 20 }} name="star" size={24} color={colors.green_primary} />
                        <Text style={{ marginRight: 40 }}>Opnå præmier og rabatter ved at fuldføre vores challenges alene eller sammen med andre</Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: '70%',
                            alignSelf: "center"
                        }}
                    />
                    <View style={{ flexDirection: "row", padding: 30, paddingHorizontal: 50 }}>
                        <SimpleLineIcons style={{ marginRight: 20 }} name="graph" size={24} color={colors.green_primary} />
                        <Text style={{ marginRight: 40 }}>Track din progresssion og bliv motiveret</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignSelf: "center", padding: 26, marginBottom: 10, paddingHorizontal: 50, backgroundColor: colors.green_primary, borderRadius: 30 }}>
                <Text style={{ color: "white", fontWeight: '700', fontSize: 26 }}>KOM IGANG!</Text>
            </View>
        </SafeAreaView>
    );
}

export default WelcomeScreen;