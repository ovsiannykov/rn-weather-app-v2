import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  calendarItem: {
    height: 220,
    padding: 15,
    width: 150,
    borderRadius: 35,
    backgroundColor: '#365A91',
    marginHorizontal: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  icon: {
    width: 100,
    height: 70,
  },
  gradus: {
    fontSize: 42,
    color: '#E9F4ED',
    fontWeight: '800',
    marginLeft: 8,
    marginTop: 5,
  },
  desc: {
    color: '#E9F4ED',
    marginTop: 20,
    fontWeight: '700',
    fontSize: 14,
  },
  date: {
    color: '#E9F4ED',
    marginTop: 5,
    fontWeight: '600',
    fontSize: 10,
  },
});
