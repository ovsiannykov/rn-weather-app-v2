import React, { memo } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './SelectCity.styles';

const deafultImage = require('../../assets/question-mark.png');

type SelectCityProps = {
  city: string;
  country: string;
  temp: number;
  icon: string;
  desc: string;
};

const SelectCity: React.FC<SelectCityProps> = memo(({ city, country, temp, icon, desc }) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.infoBox, paddingLeft: 20 }}>
        <Text style={styles.todayText}>Today</Text>
        <Text style={styles.city}>
          {city ?? 'City'}, {country ?? 'World'}
        </Text>
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

export default SelectCity;
