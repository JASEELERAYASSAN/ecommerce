import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import CardView from 'react-native-cardview'
import { useSelector, useDispatch } from 'react-redux'
import { updateAddToCart, updateRemoveFromCart } from '../redux/reducer/counterSlice'


export default function HomeScreen({ navigation }) {

    const counter = useSelector((state) => state.counter); // Use the entire counter state
    const dispatch = useDispatch()
    const data = [
        { prodId: 1, prdName: 'Siamese Hybrid Chicken', prdImage: require('../assets/hybrid.png'), price: '250', prdTotalPrice: counter[1] ? counter[1] * 200 : 200, quantity: counter[1] || 0, prdDiscount: '-20%' },
        { prodId: 2, prdName: 'Vietnamese Turkey', prdImage: require('../assets/turkey.png'), price: '250', prdTotalPrice: counter[2] ? counter[2] * 200 : 200, quantity: counter[2] || 0, prdDiscount: '-20%' },
        { prodId: 3, prdName: 'Siamese Hybrid Chicken', prdImage: require('../assets/hybrid.png'), price: '250', prdTotalPrice: counter[3] ? counter[3] * 200 : 200, quantity: counter[3] || 0, prdDiscount: '-20%' },
        { prodId: 4, prdName: 'Vietnamese Turkey', prdImage: require('../assets/turkey.png'), price: '250', prdTotalPrice: counter[4] ? counter[4] * 200 : 200, quantity: counter[4] || 0, prdDiscount: '-20%' },
        { prodId: 5, prdName: 'Siamese Hybrid Chicken', prdImage: require('../assets/hybrid.png'), price: '250', prdTotalPrice: counter[5] ? counter[5] * 200 : 200, quantity: counter[5] || 0, prdDiscount: '-20%' },
        { prodId: 6, prdName: 'Vietnamese Turkey', prdImage: require('../assets/turkey.png'), price: '250', prdTotalPrice: counter[6] ? counter[6] * 200 : 200, quantity: counter[6] || 0, prdDiscount: '-20%' },
        { prodId: 7, prdName: 'Siamese Hybrid Chicken', prdImage: require('../assets/hybrid.png'), price: '250', prdTotalPrice: counter[7] ? counter[7] * 200 : 200, quantity: counter[7] || 0, prdDiscount: '-20%' },
    ];

    return (
        <ScrollView contentContainerStyle={{ marginBottom: hp('2%'), flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }} nestedScrollEnabled={true} >
            <View style={{ height: hp('10'), width: wp('90'), alignItems: 'center', justifyContent: 'center', margin: hp('1') }}>
                <Image source={require('../assets/profile.png')} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('CheckOutScreen', { counter })}>
                <View style={{ height: hp('10'), width: wp('90'), alignItems: 'center', justifyContent: 'center', margin: hp('1') }}>
                    <Image source={require('../assets/store.png')} />
                </View>
            </TouchableOpacity>
            <View style={{ height: hp('10'), width: wp('100'), alignItems: 'flex-end', justifyContent: 'center', margin: hp('1') }}>
                <Image source={require('../assets/banner.png')} />
            </View>
            <View style={{ height: hp('10'), width: wp('90'), alignItems: 'center', justifyContent: 'space-between', margin: hp('2'), flexDirection: 'row' }}>
                <View>
                    <Image source={require('../assets/rice.png')} />
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('1.7'), margin: hp('1') }}>Rice</Text>
                </View>
                <View>
                    <Image source={require('../assets/tea.png')} />
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('1.7'), margin: hp('1') }}>Tea</Text>
                </View>
                <View>
                    <Image source={require('../assets/drink.png')} resizeMode='cover' />
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('1.7'), margin: hp('1') }}>Drink</Text>
                </View>
                <View>
                    <Image source={require('../assets/others.png')} />
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('1.7'), margin: hp('1') }}>Others</Text>
                </View>
            </View>
            <FlatList
                data={data}
                keyExtractor={item => item.prodId.toString()}
                renderItem={({ item }) =>
                    <CardView style={styles.cardView}>
                        <View style={styles.imageView}>
                            <Image source={item.prdImage} style={{ width: wp('30'), height: hp('9') }} />
                        </View>
                        <View style={styles.detailsView}>
                            <View style={{ height: hp('3%'), width: wp('40') }}>
                                <Text style={{ color: 'black', fontWeight: '500', fontSize: hp('1.7'), }}>{item.prdName}</Text>
                            </View>
                            <View style={{ height: hp('5%'), width: wp('40'), flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ textAlign: 'center', color: 'black', fontWeight: '700', fontSize: hp('2') }} >{item.prdTotalPrice}/kg</Text>
                                <Text style={{ textAlign: 'center', color: '#B8B8B8', fontWeight: '500', fontSize: hp('2') }}>{item.price}</Text>
                                <View style={{ height: hp('3'), width: wp('10'), backgroundColor: '#F9C941', alignItems: 'center', justifyContent: 'center', borderRadius: wp('1') }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: hp('2') }}>{item.prdDiscount}</Text>
                                </View>
                            </View>
                            <View style={styles.quantityView}>
                                <TouchableOpacity onPress={() => { dispatch(updateRemoveFromCart({ prodId: item.prodId })) }} style={{ borderRadius: wp('1'), height: hp('4'), width: wp('9') }}>
                                    <Image source={require('../assets/minus.png')} style={{ height: hp('4'), width: wp('8'), alignItems: 'center', justifyContent: 'center', marginLeft: wp('1') }} />
                                </TouchableOpacity>
                                <Text style={{ color: '#959595' }}>{item.quantity} Nos</Text>
                                <TouchableOpacity onPress={() => { dispatch(updateAddToCart({ prodId: item.prodId })) }} style={{ borderRadius: wp('1'), height: hp('4'), width: wp('9') }}>
                                    <Image source={require('../assets/plus.png')} style={{ height: hp('4'), width: wp('8'), alignItems: 'center', justifyContent: 'center', marginRight: wp('1') }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </CardView>
                }
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    cardView: {
        flexDirection: 'row',
        height: hp('17.5%'),
        width: wp('90'),
        alignItems: 'center',
        borderRadius: hp('4'),
    },
    imageView: {
        height: hp('8%'),
        width: wp('40'),
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    detailsView: {
        height: hp('14%'),
        width: wp('55'),
        justifyContent: 'flex-end',
    },
    quantityView: {
        flexDirection: 'row',
        height: hp('5'),
        width: wp('40'),
        backgroundColor: '#F5F5F5',
        justifyContent: 'space-between',
        borderRadius: wp('1'),
        alignItems: 'center'
    }
})