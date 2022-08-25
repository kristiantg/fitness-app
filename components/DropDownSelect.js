import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const local_data = [
    {
        value: '1',
        lable: 'Country 1',
    },
    {
        value: '2',
        lable: 'Country 2',
    },
    {
        value: '3',
        lable: 'Country 3',
    },
    {
        value: '4',
        lable: 'Country 4',
    },
    {
        value: '5',
        lable: 'Country 5',
    },
];

const DropDownSelect = _props => {
    const [country, setCountry] = useState('');

    return (
        <Dropdown
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            maxHeight={200}
            value={country}
            data={local_data}
            valueField="value"
            labelField="lable"
            placeholder={_props.lable}
            containerStyle={{
                fontSize: 17,
                color: '#b0c3bf',
            }
            }
            searchPlaceholder="Search..."
            onChange={e => {
                setCountry(e.value);
            }}
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

    },
    imageStyle: {
        width: 24,
        height: 24,
        borderRadius: 15,
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