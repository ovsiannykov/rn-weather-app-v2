import React, { memo } from 'react';
import { FlatList, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

import TimeItem from '../../components/TimeItem/TimeItem';
import { defaultData } from '../../constants/data';
import styles from './TimeListScreen.styles';

const TimeListScreen = memo(() => {
  //const data = useSelector(state => state.wetcher);
  const data = defaultData;

  const renderItem = ({ item }: any) => (
    <TimeItem
      icon={item.weather[0].icon}
      time={item.dt_txt}
      temp={item.main.temp - 273.15}
      desc={item.weather[0].description}
    />
  );

  return (
    <LinearGradient colors={['#395F99', '#28436B']} style={styles.container}>
      {!data || data.length === 0 ? (
        <Text style={styles.defaultText}>Oops... Failed to load data</Text>
      ) : (
        <FlatList data={data.list} keyExtractor={item => item.dt} renderItem={renderItem} />
      )}
    </LinearGradient>
  );
});

export default TimeListScreen;
