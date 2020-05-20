import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import Search from '../Components/Search'
import affiche from '../Components/affiche'
import test from '../Components/test'
/*import TabBarIcon from '../components/TabBarIcon';
*/

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Search';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  //navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <NavigationContainer >
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
     
      <BottomTab.Screen
        name="affiche"
        component={affiche}
        
      />
       <BottomTab.Screen
        name="Search"
        component={Search}
        
      />
      <BottomTab.Screen
        name="test"
        component={test}
        
      />
    </BottomTab.Navigator>
     </NavigationContainer>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}