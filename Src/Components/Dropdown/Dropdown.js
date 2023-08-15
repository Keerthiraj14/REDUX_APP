// import React, { useState } from "react";
// import { Text, View, StyleSheet } from "react-native";
// import DropDownPicker from 'react-native-dropdown-picker';

// const Dropdown = () => {
//     // const [selectedValue, setSelectedValue] = useState(null);

//     // const data = [
//     //     { label: 'Option 1', value: 'option1' },
//     //     { label: 'Option 2', value: 'option2' },
//     //     { label: 'Option 3', value: 'option3' },
//     // ];

//     const [open, setOpen] = useState(false);
//     const [value, setValue] = useState(null);
//     console.log(value);
//     const [items, setItems] = useState([
//         { label: 'Apple', value: 'apple' },
//         { label: 'Banana', value: 'banana' }
//     ]);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>Select an option:</Text>
//             {/* <DropDownPicker
//                 items={data}
//                 defaultValue={selectedValue}
//                 containerStyle={styles.dropdownContainer}
//                 style={styles.dropdown}
//                 itemStyle={styles.dropdownItem}
//                 dropDownStyle={styles.dropDown}
//                 onChangeItem={(item) => setSelectedValue(item.value)}
//                 placeholder="Select an option"
//                 dropDownMaxHeight={150}
//             /> */}
//             <DropDownPicker
//                 open={open}
//                 value={value}
//                 items={items}
//                 setOpen={setOpen}
//                 setValue={setValue}
//                 setItems={setItems}
//                 style={{backgroundColor:'red',borderRadius:0,height:50,width:100}}
//                 containerStyle={styles.dropdownContainer}
//             />
//             {/* <Text style={styles.selectedText}>
//                 Selected Value: {selectedValue || 'None'}
//             </Text> */}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#fff',
//     },
//     label: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     dropdownContainer: {
//         height: 40,
//         width: '100%',
//         marginBottom: 10,
//     },
//     dropdown: {
//         backgroundColor: '#fafafa',
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 4,
//     },
//     dropdownItem: {
//         justifyContent: 'flex-start',
//     },
//     dropDown: {
//         backgroundColor: '#fafafa',
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 4,
//     },
//     selectedText: {
//         fontSize: 16,
//         marginTop: 20,
//     },
// });

// export default Dropdown;

import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const Dropdowns = () => {
  const [value, setValue] = useState(null);
  console.log(value)
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <ScrollView style={styles.container}>
      {/* {renderLabel()} */}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        // placeholder={!isFocus ? 'Select item' : '...'}
        placeholder={'Select item'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
        //   setIsFocus(false);
        }}
        // renderLeftIcon={() => (
        //   <AntDesign
        //     style={styles.icon}
        //     color={isFocus ? 'blue' : 'black'}
        //     name="Safety"
        //     size={20}
        //   />
        // )}
      />
    </ScrollView>
  );
};

export default Dropdowns;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});