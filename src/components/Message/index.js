import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const Message = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate iste
        voluptas velit ex aperiam nihil atque. Repudiandae qui dicta quo illo
        cupiditate earum harum, nemo, dignissimos voluptatem, nostrum accusamus
        est?
      </Text>
      <Text style={styles.learnmore}>Learn more</Text>
    </View>
  );
};

export default Message;
