import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import * as React from 'react';

import Signup1 from './Screens/signup1';
// import HomeStack from './Routes/homeStack'
// import {MaterialIcons} from '@expo/vector-icons';
import Signup2 from './Screens/signup2';
import First from './Screens/first';
import Payment from './Screens/Payment';
import Transaction from './Screens/Transaction'
// import Signup3 from './Screens/Signup3';
import Profile3 from './Screens/profile3';
import Profile4_img from './Screens/profile4_img';
import Signin from './Screens/signin';
import Signup3 from './Screens/Signup3';
import Profile1 from './Screens/profile1';
// // import Header from './Shared/header';
import Profile2 from './Screens/profile2';

import DisplayProf from './Screens/displayprof';
// import AppLoading from 'expo-app-loading';
// import Navigator from './Routes/drawer';
import Feed from './Screens/Feed';




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
  return (
      <Drawer.Navigator useLegacyImplementation={true}>
          <Drawer.Screen
              name='First'
              component={First}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' }
              }}
          />
          <Drawer.Screen
              name='Signup1'
              component={Signup1}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' }
                  
              }}
          />
          <Drawer.Screen
              name='Signup2'
              component={Signup2}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' }
              }}
          />
          <Drawer.Screen
              name='Signup3'
              component={Signup3}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' }
              }}
          />
          <Drawer.Screen
              name='Profile1'
              component={Profile1}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' }
                  
              }}
          />
          <Drawer.Screen
              name='Profile2'
              component={Profile2}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' }
              }}
          />
          <Drawer.Screen
              name='Profile3'
              component={Profile3}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' }
              }}
          />
          <Drawer.Screen
              name='Profile4'
              component={Profile4_img}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' }
              }}
          />
          <Drawer.Screen
              name='Signin'
              component={Signin}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' }
                  
              }}
          />
          <Drawer.Screen
              name='Feed'
              component={Feed}
              options={{
                title: 'Feed',
                headerTintColor: '#FFF',
                headerStyle: {
                  backgroundColor: '#EF3D4E'}
                  
              }}
          />
          <Drawer.Screen
              name='Displayprof'
              component={DisplayProf}
              options={{
                headerShown: false,
                drawerItemStyle: { display: 'none' }
                  
              }}
          />
          <Drawer.Screen
              name='Payments'
              component={Payment}
              options={{
                title: 'Payment Plans',
                headerTintColor: '#FFF',
                headerStyle: {
                  backgroundColor: '#EF3D4E'}
                  
                  
              }}
          />
           <Drawer.Screen
              name='Verify Transactions'
              component={Transaction}
              options={{
                title: 'Verify Transactions',
                headerTintColor: '#FFF',
                headerStyle: {
                  backgroundColor: '#EF3D4E'}
                  
                  
              }}
          />
      </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs"
          screenOptions={{
            headerShown: false,
        }}
      >
        
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Signup1></Signup1>
  );
}


