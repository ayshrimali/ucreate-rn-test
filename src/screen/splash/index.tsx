import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import LinearGradient from 'react-native-linear-gradient';
import string from '../../utils/string';
import CS from '../../utils/styles';
import styles from './styles';
import {ROUTES} from '../../router/routes';
import {RootStackParamList} from '../../router';
import colors from '../../utils/colors';

interface SplashScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(ROUTES.MovieList);
    }, 3000);
  }, []);

  return (
    <LinearGradient
      style={styles.llContainer}
      colors={[colors.black_ll1, colors.black_ll2]}>
      <Text style={[CS.text_white_semibold, styles.tAppName]}>
        {string.app_name}
      </Text>
    </LinearGradient>
  );
};

export default SplashScreen;
