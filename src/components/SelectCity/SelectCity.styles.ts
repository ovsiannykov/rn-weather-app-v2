import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '98%',
    padding: 15,
    borderRadius: 35,
    backgroundColor: '#274169',
    minHeight: 180,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  temp: {
    fontSize: 78,
    color: '#E9F4ED',
    fontWeight: '800',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.05,
    elevation: 1,
  },
  infoBox: {
    width: '50%',
  },
  city: {
    fontSize: 12,
    color: '#E9F4ED',
    fontWeight: '400',
  },
  icon: {
    width: 140,
    height: 140,
  },
  todayText: {
    color: '#E9F4ED',
    fontSize: 14,
    fontWeight: '800',
  },
  desc: {
    fontSize: 12,
    color: '#E9F4ED',
    fontWeight: '600',
  },
});
