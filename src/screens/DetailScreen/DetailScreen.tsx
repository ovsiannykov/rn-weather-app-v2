import React, { memo } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';

import TimeItem from '../../components/TimeItem/TimeItem';
import styles from './DetailScreen.styles';
import BackIcon from '../../assets/icons/back.svg';

const DetailScreen = memo(() => {
  const navigation = useNavigation();
  const route = useRoute();
  const thisDate: string = route?.params?.date.split(' ')[0];
  const data = route?.params?.data.filter(item => item.dt_txt.split(' ')[0] === thisDate);

  const renderItem = ({ item }: any) => (
    <TimeItem
      icon={item.weather[0].icon}
      time={item.dt_txt.split(' ')[1]}
      temp={item.main.temp - 273.15}
      desc={item.weather[0].description}
    />
  );

  return (
    <LinearGradient colors={['#395F99', '#28436B']} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon width={44} height={44} stroke="white" />
        {/* <Text style={styles.back}>←</Text> */}
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.city}>{route.params.city.name}</Text>
        <Text style={styles.temp}>{Math.round(data[0].main.temp - 273.15)}°</Text>
        <Text style={styles.desc}>{data[0].weather[0].description}</Text>
      </View>
      <View style={styles.listBox}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.dt}
          renderItem={renderItem}
          style={styles.list}
        />
      </View>
    </LinearGradient>
  );
});

export default DetailScreen;
