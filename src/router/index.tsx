import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from './routes';

import SplashScreen from '../screen/splash';
import MovieListScreen from '../screen/movielist';
import {Movie} from '../redux/others/types';
import MovieDetailScreen from '../screen/moviedetail';

interface RoutesProps {}
export type RootStackParamList = {
  [ROUTES.Splash]: undefined;
  [ROUTES.MovieList]: undefined;
  [ROUTES.MovieDetail]: {movieDetail: Movie};
};

const Stack = createStackNavigator<RootStackParamList>();

const AppContainer: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={ROUTES.Splash}>
        <Stack.Screen name={ROUTES.Splash} component={SplashScreen} />
        <Stack.Screen name={ROUTES.MovieList} component={MovieListScreen} />
        <Stack.Screen name={ROUTES.MovieDetail} component={MovieDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
