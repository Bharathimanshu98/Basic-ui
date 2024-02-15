
// import React, { useState } from 'react';
// import { View } from 'react-native';
// import TransactionList from './screens/TransactionList';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';
// import TransactionForm from './screens/TransactionForm';
// // import TransactionList from './screens/TransactionList';

// const Stack = createStackNavigator();

// const App = () => {
//   const [transactions, setTransactions] = useState([]);

//   const handleAddTransaction = (newTransaction) => {
//     setTransactions([...transactions, newTransaction]);
//   };

//   return (
//     <View>
//     <NavigationContainer>
//       <Stack.Navigator>
//       <Stack.Screen name="TransactionList" component={TransactionList} />
//       <Stack.Screen name="TransactionForm" component={TransactionForm} />
//       {/* <Stack.Screen name="Notifications" component={Notifications} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} /> */}
//     </Stack.Navigator>
//     </NavigationContainer>
//     </View>
//   );
// };

// export default App;


import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FlatCards from './src/components/FlatCards';
import ElevatedCards from './src/components/ElevatedCards';
import FancyCards from './src/components/FancyCards';
import ActionCards from './src/components/ActionCards';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCards />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff'
  },
});

export default App;
