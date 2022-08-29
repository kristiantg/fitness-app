import React from 'react';
import { Text, View } from 'react-native';

import colors from '../../config/colors';

function Sleep() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "baseline", paddingTop: 24 }}>
                <Text style={{ color: colors.green_primary, fontWeight: '600', fontSize: 24 }}>54 </Text>
                <Text style={{ color: colors.green_primary, fontWeight: '400', fontSize: 20 }}>timer</Text>
            </View>
            <View style={{ top: -10, right: -5 }}>
                <Text style={{ position: 'relative', top: 0, left: 45, color: colors.green_primary, fontWeight: '400', fontSize: 24, transform: [{ rotate: "25deg" }] }}>Z</Text>
                <Text style={{ position: 'relative', top: -40, left: 60, color: colors.green_primary, fontWeight: '500', fontSize: 16, transform: [{ rotate: "22deg" }] }}>Z</Text>
                <Text style={{ position: 'relative', top: -70, left: 50, color: colors.green_secondary, fontWeight: '600', transform: [{ rotate: "20deg" }] }}>Z</Text>
            </View>

        </View>
    );
}

export default Sleep;