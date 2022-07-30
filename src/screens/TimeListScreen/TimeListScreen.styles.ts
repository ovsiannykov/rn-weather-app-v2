import { StyleSheet } from 'react-native';
import { hasNotch } from 'react-native-device-info';

const IS_NOTH = hasNotch();

export default StyleSheet.create({
  container: {
    minHeight: '100%',
    paddingHorizontal: 10,
  },
  list: {
    paddingTop: IS_NOTH ? 60 : 35,
  },
  defaultText: {
    textAlign: 'center',
    fontSize: 22,
    color: '#E9F4ED',
    fontWeight: '700',
  },
});
