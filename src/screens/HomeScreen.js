import React from 'react';
import {View, Text, Button} from 'react-native';
// import MyTabs from '../components/MyTabs'

const HomeScreen = ({navigation}) => {
    
    return(
        <View>
            {/* <MyTabs /> */}
            <Text style={{color: '#00b300'}}>Welcome to the Next Street Mobile App.  This app will assist you with getting your permit and your license.</Text>
            
        </View>
    )
}

export default HomeScreen