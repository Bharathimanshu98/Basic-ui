import { StyleSheet, Text, View, Linking, Image } from 'react-native'
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
                        uri:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcolorlib.com%2Fwp%2Fwp-content%2Fuploads%2Fsites%2F2%2Fwordpress-blog-themes-2.jpg&tbnid=5VV1eo8CrJCyvM&vet=12ahUKEwiu6pHhr62EAxU6pWMGHd6NBNkQMygEegQIARBY..i&imgrefurl=https%3A%2F%2Fcolorlib.com%2Fwp%2Fbest-personal-blog-wordpress-themes%2F&docid=HfqrvfQAz5iM3M&w=1200&h=928&q=blog%20image%20regarding%20es%2023&ved=2ahUKEwiu6pHhr62EAxU6pWMGHd6NBNkQMygEegQIARBY'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    {/* Add content for the body of the card here */}
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
        // Additional styling for the elevated card
    },
    headingContainer: {
        marginBottom: 10
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardImage:{
        height: 200, // Adjust as per your requirement
        resizeMode: 'cover',
        borderRadius: 8
    },
    bodyContainer: {
        // Add styles for the body container
    }
})
