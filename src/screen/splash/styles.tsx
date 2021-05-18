import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {size} from '../../utils/size';

type Style = {
  tAppName: TextStyle;
  llContainer: ViewStyle;
};
const styles = StyleSheet.create<Style>({
  llContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  tAppName: {
    alignSelf: 'center',
    fontSize: size._28,
  },
});

export default styles;
