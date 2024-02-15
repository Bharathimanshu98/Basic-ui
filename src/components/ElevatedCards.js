import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.cards, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.cards, styles.cardElevated]}>
                    <Text>Tap1</Text>
                </View>
                <View style={[styles.cards, styles.cardElevated]}>
                    <Text>Tap2</Text>
                </View>
                <View style={[styles.cards, styles.cardElevated]}>
                    <Text>Tap3</Text>
                </View>
                <View style={[styles.cards, styles.cardElevated]}>
                    <Text>Tap4</Text>
                </View>
                <View style={[styles.cards, styles.cardElevated]}>
                    <Text>Tap5</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default ElevatedCards;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        padding:8
    },
    cards: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:100,
        width:100,
        borderRadius:4,
        margin:8
    },
    cardElevated: {
        backgroundColor:'#50DBB4',
        shadowOpacity:'0.8',
        elevation:8,
        shadowOffset:{
            width:5,
            height:5
        },
      shadowColor:'yellow',
      shadowOpacity: 0.4,
      shadowRadius: 2
    }
});






// import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';

// const ElevatedCards = () => {
//     const [cards, setCards] = useState([
//         { id: 1, text: 'Tap' },
//         { id: 2, text: 'Tap1' },
//         { id: 3, text: 'Tap2' },
//         { id: 4, text: 'Tap3' },
//         { id: 5, text: 'Tap4' },
//         { id: 6, text: 'Tap5' }
//     ]);

//     const addMoreCards = () => {
//         const newCards = [
//             ...cards,
//             { id: cards.length + 1, text: `Tap${cards.length + 1}` }
//         ];
//         setCards(newCards);
//     };

//     return (
//         <View>
//             <Text style={styles.headingText}>ElevatedCards</Text>
//             <ScrollView horizontal={true} style={styles.container}>
//                 {cards.map((card, index) => (
//                     <View key={index} style={[styles.cards, styles.cardElevated]}>
//                         <Text>{card.text}</Text>
//                         {index === cards.length - 1 && (
//                             <TouchableOpacity style={styles.forwardIcon} onPress={addMoreCards}>
//                                 <Text style={{ fontSize: 24 }}>▶️</Text>
//                             </TouchableOpacity>
//                         )}
//                     </View>
//                 ))}
//             </ScrollView>
//         </View>
//     );
// };

// export default ElevatedCards;

// const styles = StyleSheet.create({
//     headingText: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         paddingHorizontal: 8
//     },
//     container: {
//         padding: 8
//     },
//     cards: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: 100,
//         width: 100,
//         borderRadius: 4,
//         margin: 8,
//         position: 'relative'
//     },
//     cardElevated: {
//         backgroundColor: '#50DBB4',
//         elevation: 8,
//         shadowOffset: {
//             width: 5,
//             height: 5
//         },
//         shadowColor: 'yellow',
//         shadowOpacity: 0.4,
//         shadowRadius: 2
//     },
//     forwardIcon: {
//         position: 'absolute',
//         bottom: 0,
//         right: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         padding: 8,
//         borderTopLeftRadius: 8
//     }
// });
