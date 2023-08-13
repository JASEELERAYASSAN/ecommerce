import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', }}>
            <View style={{ height: hp('10'), width: wp('90'), alignItems: 'center', justifyContent: 'center', margin: hp('1') }}>
                <Image source={require('../assets/profile.png')} />
            </View>
            <View style={{ height: hp('10'), width: wp('90'), alignItems: 'center', justifyContent: 'center', margin: hp('1') }}>
                <Image source={require('../assets/store.png')} />
            </View>
            <View style={{ height: hp('10'), width: wp('100'), alignItems: 'flex-end', justifyContent: 'center', margin: hp('1') }}>
                <Image source={require('../assets/banner.png')} />
            </View>
            <View style={{ height: hp('10'), width: wp('90'), alignItems: 'center', justifyContent: 'space-between', margin: hp('2'), flexDirection: 'row' }}>
                <View>
                    <Image source={require('../assets/rice.png')} />
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('2'), margin: hp('1') }}>Rice</Text>
                </View>
                <View>
                    <Image source={require('../assets/tea.png')} />
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('2'), margin: hp('1') }}>Tea</Text>
                </View>
                <View>
                    <Image source={require('../assets/drink.png')} />
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('2'), margin: hp('1') }}>Drink</Text>
                </View>
                <View>
                    <Image source={require('../assets/others.png')} />
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('2'), margin: hp('1') }}>Others</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})