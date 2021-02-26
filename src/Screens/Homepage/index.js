import React from 'react';
import {Text, View} from 'react-native';

//Components
import HomeMap from '../../components/HomeMap';
import Message from '../../components/Message';
import Destination from '../../components/Destination';

const Homescreen = (props) => {
  return (
    <View>
      <HomeMap />
      <Message />
      <Destination />
      <Text>Getting Started Bitches</Text>
    </View>
  );
};

export default Homescreen;
