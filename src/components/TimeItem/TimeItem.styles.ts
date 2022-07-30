import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '98%',
    backgroundColor: '#2A4670',
    height: 140,
    marginBottom: 15,
    padding: 15,
    borderRadius: 35,
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
    fontSize: 66,
    color: '#E9F4ED',
    fontWeight: '800',
    marginLeft: -15,
  },
  infoBox: {
    alignItems: 'flex-start',
  },
  city: {
    fontSize: 12,
    color: '#E9F4ED',
    fontWeight: '400',
  },
  icon: {
    width: 120,
    height: 120,
  },
  time: {
    color: '#E9F4ED',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: -10,
  },
  desc: {
    fontSize: 12,
    color: '#E9F4ED',
    fontWeight: '400',
    //marginLeft: -10,
  },
});
