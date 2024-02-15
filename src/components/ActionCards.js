import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCards = () => {
    function openWebsite(websiteLink) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in JavaScript 23
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYZoQ2VT3C9LNX620nmKlOpoeLBiD2Snwfg&usqp=CAU'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={5}>
                        As JavaScript continues to evolve, developers like us eagerly anticipate the new features introduced in each ECMAScript update. In this blog, we will take a closer look at some exciting new functionalities of ECMAScript 2023. Let’s explore the latest additions to the JavaScript language.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => { openWebsite('https://blog.saeloun.com/2023/08/11/2023-ECMAScript-2023-new-features/') }}
                    >
                        <Text style={styles.socialLinks} >Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { openWebsite('https://javascript.plainenglish.io/my-boss-its-2023-you-know-es6-but-why-don-t-you-use-it-c15ccac5a28f') }}
                    >
                        <Text style={styles.socialLinks} >Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ActionCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    card: {
        margin: 10,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5
    },
    elevatedCard: {
        
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 150, 
        resizeMode: 'cover',
        borderRadius: 8
    },
    bodyContainer: {
        padding: 10
    },
    socialLinks:{
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,
        border:30,
        backgroundColor:'#3366cc'
    },
    footerContainer:{
        padding: 8,
        flexDirection: 'row',  // It will align both button in the same row
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})
