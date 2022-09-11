import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text } from 'react-native';
import colors from '../config/colors';

function CancelButton({ top }) {
    const navigation = useNavigation();
    return (
        <Pressable style={{ position: 'absolute', right: 20, top: top, backgroundColor: "white", padding: 10, borderRadius: 25 }} onPress={() => { navigation.goBack() }}>
            <Text style={{ color: colors.green_primary, fontWeight: '600' }}>Afbryd</Text>
        </Pressable>
    );
}

export default CancelButton;