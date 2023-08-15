import React from "react";
import { Text, Button } from 'react-native'
import { connect } from 'react-redux';
import { changeUserName } from '../../Actions';

const HomePage = (props) => {
    console.log('API RESPONSE IS HERE', props)
    const handleTextChange = () => {
        props.changeUserName()
    }
    return (
        <>
            <Text>Hello Home page</Text>
            <Button title='Click to Change via redux' onPress={handleTextChange} />
        </>
    )
}
const mapStateToProps = ({ home }) => {
    const { name } = home;
    return { name }
}
export default connect(mapStateToProps, { changeUserName })(HomePage);