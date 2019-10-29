import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createDrawerNavigator } from 'react-navigation-drawer';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createDrawerNavigator({
          Dashboard: createStackNavigator(
            {
              Dashboard,
            },
            {
              defaultNavigationOptions: {
                headerStyle: {
                  backgroundColor: '#CE0E0F',
                },
                headerTitleStyle: {
                  alignSelf: 'center',
                  backgroundColor: 'blue',
                },
              },
              navigationOptions: {
                title: 'Dashboard',
              },
            }
          ),
          Profile,
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
