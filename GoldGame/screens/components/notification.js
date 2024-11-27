import React, {useEffect} from "react";
import { TouchableOpacity, View, Text} from "react-native";

import notifee from '@notifee/react-native';

export default function Notification(){
    const displayNotification = async () => {
        await notifee.displayNotification({
            title: 'Oh no!',
            body: 'Your stash is full of gold! Come claim your gold so you can mine more!',
        });
    }

    return(
        <View>
            <TouchableOpacity onPress={displayNotification}>
            <Text>button</Text>
            </TouchableOpacity>
        </View>
    );
}