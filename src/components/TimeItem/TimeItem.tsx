import React, { memo } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './TimeItem.styles';

const deafultImage = require('../../assets/question-mark.png');

type TimeItemProps = {
  icon?: string;
  time?: string;
  temp?: number;
  desc?: string;
};

const TimeItem: React.FC<TimeItemProps> = memo(({ icon, time, temp, desc }) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.infoBox, paddingLeft: 20 }}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.temp}>{Math.round(temp) ?? 'NoN'}°</Text>
        <Text style={styles.desc}>{desc ?? 'description'}</Text>
      </View>
      <View style={{ ...styles.infoBox, alignItems: 'flex-end' }}>
        <Image
          style={styles.icon}
          source={{
            uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
          }}
          defaultSource={deafultImage}
        />
      </View>
    </View>
  );
});

export default TimeItem;
