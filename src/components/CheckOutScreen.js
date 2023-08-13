import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function CheckOutScreen({ navigation: { goBack }, navigation }) {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.headerView}>
                <TouchableOpacity style={{ width: wp('20'), justifyContent: 'center', height: hp('4.3') }} onPress={() => goBack()}>
                    <MaterialIcon name="arrow-left" size={hp('3%')} color={'white'} />
                </TouchableOpacity>
                <View style={{ width: wp('55'), justifyContent: 'center', height: hp('4.3') }}>
                    <Text style={styles.headerText}>Your Order</Text>
                </View>
            </View>
            {/* <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item})=>{
                    <CardView>
                        <Text>Hello</Text>
                    </CardView>

                }}
            /> */}
            <View style={{ alignItems: 'center', justifyContent: 'center', margin: hp('1') }}>
                <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('2'), margin: hp('1') }}>Recommended</Text>
            </View>
            <View style={{ height: hp('18'), width: wp('96'), alignItems: 'center', justifyContent: 'center', margin: hp('1') }}>
                <Image source={require('../assets/products.png')} resizeMode='cover' />
            </View>
            <View style={{ flexDirection: 'row', height: hp('13'), width: wp('96'), alignItems: 'center', justifyContent: 'space-evenly', margin: hp('1') }}>
                <View style={{ height: hp('10.5'), width: wp('35'), borderWidth: wp('.4'), borderColor: '#D8D8D8', alignItems: 'center', justifyContent: 'center', borderRadius: wp('2') }}>
                    <Image source={require('../assets/instadel.png')} />
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('1.5'), margin: hp('1') }}>Instant delivery</Text>
                </View>
                <View style={{ height: hp('10.5'), width: wp('35'), borderWidth: wp('.4'), borderColor: '#08C25D', alignItems: 'center', justifyContent: 'center', borderRadius: wp('2') }}>
                    <Image source={require('../assets/timedel.png')} />
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('1.5'), margin: hp('1') }}>Scheduled delivery</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', height: hp('7'), width: wp('96'), alignItems: 'center', justifyContent: 'space-evenly', margin: hp('1') }}>
                <View style={{ height: hp('5'), width: wp('40'), borderWidth: wp('.1'), borderColor: '#D8D8D8', alignItems: 'center', justifyContent: 'center', borderRadius: wp('2'), backgroundColor: '#08C25D' }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: '400', fontSize: hp('1.5'), margin: hp('1') }}>Instant delivery</Text>
                </View>
                <View style={{ height: hp('5'), width: wp('40'), borderWidth: wp('.4'), borderColor: '#D8D8D8', alignItems: 'center', justifyContent: 'center', borderRadius: wp('2') }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '400', fontSize: hp('1.5'), margin: hp('1') }}>Scheduled delivery</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', height: hp('13'), width: wp('96'), alignItems: 'center', justifyContent: 'space-evenly', margin: hp('1') }}>
                <View style={{ height: hp('9'), width: wp('25'), borderWidth: wp('.4'), borderColor: '#08C25D', alignItems: 'center', justifyContent: 'center', borderRadius: wp('2') }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'black', fontWeight: '400', fontSize: hp('1.5'), margin: hp('1') }}>Morning</Text>
                        <Image source={require('../assets/morning.png')} />
                    </View>
                    <Text style={{ textAlign: 'center', color: '#A6A6A6', fontWeight: '400', fontSize: hp('1.5'), margin: hp('1') }}>10AM to 11AM</Text>
                </View>
                <View style={{ height: hp('9'), width: wp('25'), alignItems: 'center', justifyContent: 'center', borderRadius: wp('2') }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'black', fontWeight: '400', fontSize: hp('1.5'), margin: hp('1') }}>Evening</Text>
                        <Image source={require('../assets/evening.png')} />
                    </View>
                    <Text style={{ textAlign: 'center', color: '#A6A6A6', fontWeight: '400', fontSize: hp('1.5'), margin: hp('1') }}>2PM to 3PM</Text>
                </View>
                <View style={{ height: hp('9'), width: wp('25'), alignItems: 'center', justifyContent: 'center', borderRadius: wp('2') }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'black', fontWeight: '400', fontSize: hp('1.5'), margin: hp('1') }}>Evening</Text>
                        <Image source={require('../assets/evening.png')} />
                    </View>
                    <Text style={{ textAlign: 'center', color: '#A6A6A6', fontWeight: '400', fontSize: hp('1.5'), margin: hp('1') }}>6PM to 7PM</Text>
                </View>
            </View>
            <View style={{ height: hp('8'), width: wp('96'), }}>
                <Text style={{ color: '#A6A6A6', fontWeight: '500', fontSize: hp('2'), margin: hp('1') }}>Delivery address</Text>
                <View style={{ flexDirection: 'row', height: hp('8'), width: wp('90'), alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ height: hp('8'), width: wp('39'), textAlign: 'center', color: 'black', fontWeight: '300', fontSize: hp('2') }}>416 Grandrose Ave. Des Plaines, IL 60016</Text>
                    <Image source={require('../assets/write.png')} style={{ marginBottom: hp('2.5') }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', height: hp('7'), width: wp('75'), alignItems: 'center', justifyContent: 'center', margin: hp('2') }}>
                <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('1.5'), }}>Do you have a promo code ? </Text>
                <Text style={{ textAlign: 'center', color: '#08C25D', fontWeight: '500', fontSize: hp('1.5'), }}> Redeem Now</Text>
            </View>
            <View style={{ height: hp('10'), width: wp('96'), alignItems: 'center', justifyContent: 'space-evenly', margin: hp('1') }}>
                <View style={{ flexDirection: 'row', height: hp('5'), width: wp('75'), alignItems: 'center', justifyContent: 'space-between', margin: hp('2') }}>
                    <Text style={{ textAlign: 'left', color: 'black', fontWeight: '400', fontSize: hp('2'), margin: hp('1') }}>Order total</Text>
                    <Text style={{ textAlign: 'right', color: 'black', fontWeight: '400', fontSize: hp('2'), margin: hp('1') }}>580</Text>
                </View>
                <View style={{ flexDirection: 'row', height: hp('5'), width: wp('75'), alignItems: 'center', justifyContent: 'space-between', margin: hp('2') }}>
                    <Text style={{ textAlign: 'left', color: 'black', fontWeight: '400', fontSize: hp('2'), margin: hp('1') }}>Delivery fee</Text>
                    <Text style={{ textAlign: 'right', color: 'black', fontWeight: '400', fontSize: hp('2'), margin: hp('1') }}>20</Text>
                </View>
                <View style={{ flexDirection: 'row', height: hp('5'), width: wp('75'), alignItems: 'center', justifyContent: 'space-between', margin: hp('4') }}>
                    <Text style={{ textAlign: 'left', color: 'black', fontWeight: 'bold', fontSize: hp('2.5'), margin: hp('1') }}>Total cost</Text>
                    <Text style={{ textAlign: 'right', color: 'black', fontWeight: 'bold', fontSize: hp('2,5'), margin: hp('1') }}>600</Text>
                </View>
            </View>
            <View style={{ height: hp('10'), width: wp('90'), alignItems: 'center', justifyContent: 'space-evenly', margin: hp('1') }}>
                <View style={{ flexDirection: 'row', height: hp('10'), width: wp('80'), alignItems: 'center', justifyContent: 'space-evenly', }}>
                    <View style={{ height: hp('4'), width: wp('8'), backgroundColor: '#A8A8A8', borderRadius: wp('1'), alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/ok.png')} />
                    </View>
                    <View style={{ height: hp('5'), width: wp('70'), alignItems: 'center', justifyContent: 'space-evenly', margin: hp('1') }}>
                        <Text style={{ textAlign: 'center', color: '#A8A8A8', fontWeight: '400', fontSize: hp('2'), margin: hp('1') }}>By placing an order you agree to our</Text>
                        <Text style={{ textAlign: 'center', color: '#333333', fontWeight: '400', fontSize: hp('2'), margin: hp('1') }}>Terms and Conditions</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: hp('10'),width: wp('100')}}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center',width: wp('90'),  height: hp('7'), backgroundColor: 'gray', borderRadius: wp('2') ,marginLeft:wp('5')}} >
                    <Text style={{ textAlign: 'center', color: '#333333', fontWeight: '500', fontSize: hp('2') }}>Proceed</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerView: {
        height: hp('7.70%'),
        width: wp('100%'),
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#08C25D'
    },
    headerText: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: 'white',
        lineHeight: 21,
        letterSpacing: wp('.10'),
    }
})