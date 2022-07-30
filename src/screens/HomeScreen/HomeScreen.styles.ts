import { StyleSheet } from 'react-native';
import { hasNotch } from 'react-native-device-info';

const IS_NOTH = hasNotch();

export default StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'center',
  },
  container: {
    paddingBottom: IS_NOTH ? 0 : 70,
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: 10,
  },
  loadingBox: {
    height: '95%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listBox: {
    width: '100%',
    marginTop: 40,
  },
  weekTitle: {
    color: '#E9F4ED',
    fontSize: IS_NOTH ? 38 : 32,
    fontWeight: '800',
    marginBottom: 30,
    marginLeft: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  scroll: {
    paddingTop: IS_NOTH ? 100 : 50,
  },
  wellcomeSubTitle: {
    color: '#E9F4ED',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
    width: 150,
    marginLeft: 20,
    opacity: 0.3,
  },
  wellcomeTitle: {
    color: '#E9F4ED',
    fontSize: IS_NOTH ? 42 : 38,
    fontWeight: '800',
    marginBottom: 30,
    marginLeft: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});
