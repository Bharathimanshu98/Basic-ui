import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
        {
            uid: 1,
            name: 'Bharat Dixit',
            status: 'Founder & CEO at Krinvi Technologies Pvt. Ltd',
            imageUrl: 'https://media.licdn.com/dms/image/D4D03AQEl1SDCEkqyow/profile-displayphoto-shrink_200_200/0/1707815607547?e=1713398400&v=beta&t=NxMA1WCHop0K1Cwso0w0aUDHZMKJHCqz7Wcb6df8BoQ',
        },
        {
            uid: 2,
            name: 'Himanshu Sharma',
            status: 'React Native Devloper',
            imageUrl: 'https://media.licdn.com/dms/image/D4D35AQFuuhkvqIl2Ow/profile-framedphoto-shrink_200_200/0/1686854042196?e=1708610400&v=beta&t=8Cmwy_qtRuL8EP2zY1Ay2yYoqyAY1qQMhaT1QsNYuO4',
        },

        {
            uid: 3,
            name: 'ABC',
            status: 'Making your GPay smooth',
            imageUrl: 'https://cdn.pixabay.com/photo/2024/01/19/05/33/caterpillar-8518113_640.jpg',
        },
        {
            uid: 4,
            name: 'XYZ',
            status: 'Building secure Digital banks',
            imageUrl: 'https://cdn.pixabay.com/photo/2023/04/14/08/47/moss-7924522_640.jpg',
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default ContactList

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4

    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#009999',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12
    }
})