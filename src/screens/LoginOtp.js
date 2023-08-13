import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-simple-toast";

export default function LoginOtp({ navigation, route }) {

    const [code, setCode] = useState(route.params.confirm.code ? route.params.confirm.code : '')
    const [confirm, setConfirm] = useState(route.params.confirm)

    async function confirmCode() {
        try {
            await confirm.confirm(code).then(() => {
                Toast.show('Login successfull')
                navigation.navigate('HomeScreen')
            }).catch(() => {
                Toast.show('Please Check Your OTP')
            })
        } catch (error) {
            Toast.show('Failed To Verify OTP')
        }
    }

    const onSubmit = () => {
        if (code.length === 6) {
            confirmCode()
        } else if (code.length === 0) {
            Toast.show('OTP cannot be empty', Toast.SHORT);
        } else {
            Toast.show('OTP cannot be empty', Toast.SHORT);
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: hp('2') }}>Enter OTP</Text>
            </View>
            <View>
                <TextInput
                    value={code}
                    onChangeText={text => setCode(text)}
                    secureTextEntry={true}
                    inputMode='numeric'
                    style={{ height: hp('5'), width: wp('90'), borderWidth: wp('.1'), borderColor: 'gray', borderRadius: hp('1'), margin: hp('1.5'), textAlign: 'center' }}
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => onSubmit()}
                    style={{ height: hp('5'), width: wp('90'), backgroundColor: 'green', justifyContent: 'center', borderRadius: wp('2.5') }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: hp('2'), textAlign: 'center' }}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})