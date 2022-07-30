import React, { useEffect, useState, memo, useCallback } from 'react';
import { View, ActivityIndicator, FlatList, Text, ScrollView, RefreshControl } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import SelectCity from '../../components/SelectCity/SelectCity';
import { setDataFetching } from '../../store/weatcher/weatcher-actions';
import CalendarDate from '../../components/CalendarDate/CalendarDate';
import styles from './HomeScreen.styles';

/*
  ----------------------------------------
  If api not working, use sample data:
  ----------------------------------------

  1. import {defaultData} from '../../constants/data';
  2. const data = defaultData;

  Thanks!
  P.S.: The same on the timeList Screen
  */

const HomeScreen = memo(() => {
  const [fetching, setFetching] = useState(false);
  const data = useSelector(state => state.wetcher);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const fetchingData = useCallback(async () => {
    setFetching(true);
    await dispatch(setDataFetching());
    setFetching(false);
  }, [dispatch]);

  useEffect(() => {
    fetchingData();
  }, [fetchingData]);

  const renderItem = ({ item }: any) => (
    <CalendarDate
      icon={item.weather[0].icon}
      date={item.dt_txt}
      temp={item.main.temp - 273.15}
      desc={item.weather[0].description}
      onPress={() =>
        navigation.navigate('Detail', {
          item: item,
          date: item.dt_txt,
          data: data.list,
          city: data.city,
        })
      }
    />
  );

  return (
    <LinearGradient colors={['#395F99', '#28436B']} style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={fetching} onRefresh={fetchingData} />}
      >
        <View style={styles.container}>
          <View style={styles.wrapper}>
            {fetching ? (
              <View style={styles.loadingBox}>
                <ActivityIndicator size="large" color="white" />
              </View>
            ) : null}
            <Text style={styles.wellcomeSubTitle}>Wellcome to</Text>
            <Text style={styles.wellcomeTitle}>WeatcherApp</Text>
            <SelectCity
              city={data?.city?.name}
              country={data?.city?.country}
              temp={data && data.list ? data.list[0].main.temp - 273.15 : null}
              icon={data && data.list ? data.list[0].weather[0].icon : null}
              desc={data && data.list ? data.list[0].weather[0].description : null}
            />
          </View>
          <View style={styles.listBox}>
            <Text style={styles.weekTitle}>This{'  '}Week</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data?.list?.filter(item => item.dt_txt.split(' ')[1] === '15:00:00')}
              keyExtractor={item => item.dt}
              renderItem={renderItem}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
});

export default HomeScreen;
