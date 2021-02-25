import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Uberrr Apps</Text>
      <Icon name={'up'} size={30} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});

export default App;
