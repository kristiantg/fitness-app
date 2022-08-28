import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

function ProfileDisplay({ name, pic }) {
    return (
        <View style={styles.container}>
            <Text style={styles.profileText}>
                {name}
            </Text>
            <View style={styles.profilePic} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', alignItems: 'center', height: 150, paddingHorizontal: 40, justifyContent: "space-around"
    },
    profilePic: {
        height: 80,
        width: 80,
        marginLeft: 40,
        borderRadius: 40,
        backgroundColor: colors.white
    },
    profileText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default ProfileDisplay;