import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import PhoneInput from "react-native-phone-number-input";
import Toast from "react-native-simple-toast";
import auth from '@react-native-firebase/auth';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function LoginActivity({ navigation, route }) {

    const [number, setNumber] = useState('')
    const [confirm, setConfirm] = useState('')
    const [code, setCode] = useState('')
    const phoneInput = useRef(null);
    const [country, setCountry] = useState('+91')

    // phone number authentication

    async function signInWithPhoneNumber(number) {
        try {
            const confirmation = await auth().signInWithPhoneNumber(number)
            if (confirmation.state != 'error') {
                Toast.show('OTP Sented')
            }
            setConfirm(confirmation)
        } catch (error) {
            console.log(error, 'mobile');
            Toast.show('Failed to Sent OTP')
        }
    }

    const getOTP = () => {
        signInWithPhoneNumber(country + number)
    }

    async function confirmCode() {
        try {
            await confirm.confirm(code).then(() => {
                Toast.show('Login successfull')
                navigation.navigate('HomeScreen')
                setConfirm(confirm)
            }).catch(() => {
                Toast.show('Please Check Your OTP')
            })
        } catch (error) {
            console.log(error, 'login');
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <View style={{ marginBottom: hp('4') }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: hp('2.5'), textAlign: 'center' }} >e-Commerce</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: hp('2') }}>Enter Your Mobile Number</Text>
            </View>
            <View>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={number}
                    defaultCode="IN"
                    codeTextStyle={{ fontSize: hp('1.75%'), marginBottom: hp(0.2) }}
                    textInputStyle={{ fontSize: hp('1.75%'), }}
                    textContainerStyle={{ borderRadius: 10, paddingVertical: 0, backgroundColor: '#fff', height: hp('5.9') }}
                    onChangeText={text => setNumber(text)}
                    containerStyle={{ height: hp('6'), width: wp('90'), borderWidth: wp('.1'), borderColor: 'gray', borderRadius: hp('1'), margin: hp('1.5'), textAlign: 'center' }}
                    onChangeCountry={text => {
                        setCountry(text.callingCode.join(','))
                    }}
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => getOTP()}
                    style={{ height: hp('5'), width: wp('90'), backgroundColor: 'green', justifyContent: 'center', borderRadius: wp('2.5') }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: hp('2'), textAlign: 'center' }}>GET OTP</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: hp('5') }}>
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
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}
                    style={{ height: hp('5'), width: wp('20'), backgroundColor: 'white', justifyContent: 'center', borderRadius: wp('2.5') }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: hp('2'), textAlign: 'center' }}>SKIP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})