import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FancyCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://media.istockphoto.com/id/585283414/photo/alstom-tilting-high-speed-train-on-the-gotthard-railway.jpg?s=2048x2048&w=is&k=20&c=jq7DyGQvBPCR7HtyV7Aht-ob1kpA-n5ZUPZhAJkG638='
                    }}
                    style={styles.cardImage}
                />
              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Jammu</Text>
                <Text style={styles.cardLabel}>Kashmir , Jammu, Railways</Text>
                <Text style={styles.cardDescription}>Intercity train at the Gotthard railway. The traffic will be diverted to the Gotthard Base Tunnel in December 2016.</Text>
                <Text style={styles.cardFooter}>12 min away</Text>
              </View>
            </View>
        </View>
    )
}

export default FancyCards

const styles = StyleSheet.create({
    cardImage: {
        height: 180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
        
       
    },
    headingText: {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card: {
        height:340,
        width:350,
        borderRadius: 6,
        marginHorizontal:12,
        marginVertical:16
    },
    cardElevated: {
        backgroundColor:'#50DBB4',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
        marginRight:10
    },
    cardDescription:{
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardLabel:{
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardFooter:{
        color:'#000000'
    },
    cardTitle:{
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    }
})