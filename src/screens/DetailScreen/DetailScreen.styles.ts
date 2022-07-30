import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 60,
    minHeight: '100%',
    paddingHorizontal: 10,
  },
  back: {
    fontSize: 36,
    color: '#E9F4ED',
    marginLeft: 10,
    fontWeight: '700',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  infoContainer: {
    alignItems: 'center',
  },
  temp: {
    fontSize: 122,
    fontWeight: '700',
    color: '#E9F4ED',
    marginLeft: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  city: {
    color: '#E9F4ED',
    fontSize: 22,
    marginTop: 20,
    fontWeight: '200',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  desc: {
    color: '#E9F4ED',
    fontSize: 18,
    fontWeight: '100',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  listBox: {
    marginTop: 20,
  },
});
