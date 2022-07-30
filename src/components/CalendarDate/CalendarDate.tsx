import React, { ReactNode, memo } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './CalendarDate.styles';

const deafultImage = require('../../assets/question-mark.png');

type CalendarDateProps = {
  onPress?: () => void;
  date?: string;
  temp?: number;
  desc?: string;
  icon?: string;
};

const CalendarDate: React.FC<CalendarDateProps> = memo(({ onPress, date, temp, desc, icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={['#9566a9', '#395F99']} style={styles.calendarItem}>
        <Image
          style={styles.icon}
          source={{
            uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
          }}
          defaultSource={deafultImage}
        />
        <Text style={styles.gradus}>{Math.round(temp) ?? 'NoN'}°</Text>
        <Text style={styles.desc}>{desc}</Text>
        <Text style={styles.date}>{date.split(' ')[0]}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
});

export default CalendarDate;
