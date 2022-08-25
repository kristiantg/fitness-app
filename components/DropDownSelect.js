import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    {
        value: '1',
        label: 'Country 1',
    },
    {
        value: '2',
        label: 'Country 2',
    },
    {
        value: '3',
        label: 'Country 3',
    },
    {
        value: '4',
        label: 'Country 4',
    },
    {
        value: '5',
        label: 'Country 5',
    },
];

const renderItem = (item) => {
    return (
        <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
        </View>
    );
};

const DropDownSelect = _props => {
    const [value, setValue] = useState(null);

    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={_props.lable}
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
                setValue(item.value);
            }}
            renderItem={renderItem}
        />
    );
};

export default DropDownSelect;

const styles = StyleSheet.create({
    dropdown: {
        height: 40,
        width: 110,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 10,
        fontSize: 12,
        marginLeft: 10,
        color: '#b0c3bf'
    },
    item: {
        padding: 8
    },
    imageStyle: {
        width: 24,
        height: 24,
        borderRadius: 15,
    },
    textItem: {
        fontSize: 12,
        marginLeft: 10,
        color: '#b0c3bf'
    },
    placeholderStyle: {
        fontSize: 12,
        marginLeft: 10,
        color: '#b0c3bf'
    },
    selectedTextStyle: {
        fontSize: 12,
        marginLeft: 10,
        color: '#b0c3bf',
        marginLeft: 8,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },

});