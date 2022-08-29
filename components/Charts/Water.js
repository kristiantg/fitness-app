import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../../config/colors';

function Water() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
            <Ionicons color={colors.green_primary} style={{ position: "relative", top: -8, left: -16 }} size={55} name="water"></Ionicons>
            <Ionicons color={colors.green_primary} style={{ position: "relative", top: -53, right: -12 }} size={30} name="water"></Ionicons>
            <Ionicons color={colors.green_primary} style={{ position: "relative", top: -57 }} size={25} name="water"></Ionicons>
            <View style={{ flexDirection: "row", position: "absolute", top: 60, alignItems: "baseline" }}>
                <Text style={{ color: colors.green_primary, fontWeight: '600', fontSize: 20 }}>750 </Text>
                <Text style={{ color: colors.green_primary, fontWeight: '400', fontSize: 16 }}>ml</Text>
            </View>
        </View>
    );
}

export default Water;