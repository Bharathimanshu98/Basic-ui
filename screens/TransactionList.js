// import React from 'react';
// import { View, Text, FlatList } from 'react-native';

// const TransactionList = ({ transactions }) => {
//   return (
//     <View>
//       <FlatList
//         data={transactions}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View>
//             <Text>{item.title}</Text>
//             <Text>{item.amount}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default TransactionList;


import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const TransactionList = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1, borderStartColor:'blue', }}>
    <SafeAreaView>
       <View style={{flex:'row', justifyContent:'flex-start'}}>
          <TouchableOpacity>
          onPress={()=>Navigation.goBack()}
            <Text>Back</Text>
          </TouchableOpacity>
       </View>

       //------------------- 2nd  --------------------

       <View style={{flex:'row', justifyContent:'center'}}>
       <Image source={require('../assets/124.png')} style={{width:200, height:200}}/>
        </View>
    </SafeAreaView>

    //------------------- 3rd --------------------
    <View style={{flex:1, backgroundColor:'white', padding:8,borderTopLeftRadius:50}}>

    </View>
    </View>
  )
}

export default TransactionList

const styles = StyleSheet.create({})
