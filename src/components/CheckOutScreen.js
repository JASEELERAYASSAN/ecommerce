import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CardView from 'react-native-cardview'
import { useSelector, useDispatch } from 'react-redux'
import { updateAddToCart, updateRemoveFromCart } from '../redux/reducer/counterSlice'
import Toast from 'react-native-simple-toast'

export default function CheckOutScreen({ navigation: { goBack }, route }) {

    const counter = useSelector((state) => state.counter);
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
            <View style={styles.headerView}>
                <TouchableOpacity style={{ width: wp('20'), justifyContent: 'center', height: hp('4.3') }} onPress={() => goBack()}>
                    <MaterialIcon name="arrow-left" size={hp('3%')} color={'white'} />
                </TouchableOpacity>
                <View style={{ width: wp('55'), justifyContent: 'center', height: hp('4.3') }}>
                    <Text style={styles.headerText}>Your Order</Text>
                </View>
            </View>
            <FlatList
                data={data.filter(item => item.quantity > 0)}
                keyExtractor={item => item.prodId.toString()}
                renderItem={({ item }) =>
                    <CardView style={styles.cardView}
                        cardElevation={5}>
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
            <View style={{ alignItems: 'center', justifyContent: 'center', margin: hp('1') }}>
                <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('2'), margin: hp('1') }}>Recommended</Text>
            </View>
            <TouchableOpacity activeOpacity={.8} onPress={() => Toast.show('Coming Soon')}>
                <View style={{ height: hp('18'), width: wp('96'), alignItems: 'center', justifyContent: 'center', margin: hp('1') }}>
                    <Image source={require('../assets/products.png')} />
                </View>
            </TouchableOpacity>
            {counter.length > 0 ? <View>
                <View style={{ flexDirection: 'row', height: hp('13'), width: wp('96'), alignItems: 'center', justifyContent: 'space-evenly', margin: hp('1') }}>
                    <TouchableOpacity activeOpacity={.8} onPress={() => Toast.show('Coming Soon')}>
                        <View style={{ height: hp('10.5'), width: wp('35'), borderWidth: wp('.4'), borderColor: '#D8D8D8', alignItems: 'center', justifyContent: 'center', borderRadius: wp('2') }}>
                            <Image source={require('../assets/instadel.png')} />
                            <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('1.5'), margin: hp('1') }}>Instant delivery</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: hp('10.5'), width: wp('35'), borderWidth: wp('.4'), borderColor: '#08C25D', alignItems: 'center', justifyContent: 'center', borderRadius: wp('2') }}>
                        <Image source={require('../assets/timedel.png')} />
                        <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('1.5'), margin: hp('1') }}>Scheduled delivery</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', height: hp('7'), width: wp('96'), alignItems: 'center', justifyContent: 'space-evenly', margin: hp('1') }}>
                    <View style={{ height: hp('5'), width: wp('40'), borderWidth: wp('.1'), borderColor: '#D8D8D8', alignItems: 'center', justifyContent: 'center', borderRadius: wp('2'), backgroundColor: '#08C25D' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: '400', fontSize: hp('1.5'), margin: hp('1') }}>Today</Text>
                    </View>
                    <View style={{ height: hp('5'), width: wp('40'), borderWidth: wp('.4'), borderColor: '#D8D8D8', alignItems: 'center', justifyContent: 'center', borderRadius: wp('2') }}>
                        <Text style={{ textAlign: 'center', color: 'black', fontWeight: '400', fontSize: hp('1.5'), margin: hp('1') }}>Tommorrow</Text>
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
                    <TouchableOpacity onPress={() => Toast.show('Coming Soon')}>
                        <Text style={{ textAlign: 'center', color: '#08C25D', fontWeight: '500', fontSize: hp('1.5'), }}> Redeem Now</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ height: hp('10'), width: wp('96'), alignItems: 'center', justifyContent: 'space-evenly', margin: hp('1') }}>
                        <View style={{ flexDirection: 'row', height: hp('5'), width: wp('75'), alignItems: 'center', justifyContent: 'space-between', margin: hp('2') }}>
                            <Text style={{ textAlign: 'left', color: 'black', fontWeight: '400', fontSize: hp('2'), margin: hp('1') }}>Order total</Text>
                            <Text style={{ textAlign: 'right', color: 'black', fontWeight: '400', fontSize: hp('2'), margin: hp('1') }}>₹
                                {(counter[1] || 0) * 200 +
                                    (counter[2] || 0) * 200 +
                                    (counter[3] || 0) * 200 +
                                    (counter[4] || 0) * 200 +
                                    (counter[5] || 0) * 200 +
                                    (counter[6] || 0) * 200 +
                                    (counter[7] || 0) * 200
                                }
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', height: hp('5'), width: wp('75'), alignItems: 'center', justifyContent: 'space-between', margin: hp('2') }}>
                            <Text style={{ textAlign: 'left', color: 'black', fontWeight: '400', fontSize: hp('2'), margin: hp('1') }}>Delivery fee</Text>
                            <Text style={{ textAlign: 'right', color: 'black', fontWeight: '400', fontSize: hp('2'), margin: hp('1') }}>₹20</Text>
                        </View>
                        <View style={{ flexDirection: 'row', height: hp('5'), width: wp('75'), alignItems: 'center', justifyContent: 'space-between', margin: hp('4') }}>
                            <Text style={{ textAlign: 'left', color: 'black', fontWeight: 'bold', fontSize: hp('2.5'), margin: hp('1') }}>Total cost</Text>
                            <Text style={{ textAlign: 'right', color: 'black', fontWeight: 'bold', fontSize: hp('2,5'), margin: hp('1') }}>₹
                                {(counter[1] || 0) * 200 +
                                    (counter[2] || 0) * 200 +
                                    (counter[3] || 0) * 200 +
                                    (counter[4] || 0) * 200 +
                                    (counter[5] || 0) * 200 +
                                    (counter[6] || 0) * 200 +
                                    (counter[7] || 0) * 200 +
                                    20
                                }</Text>
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
                    <View style={{ height: hp('10'), width: wp('100') }}>
                        <TouchableOpacity activeOpacity={.8} onPress={() => Toast.show('Coming Soon')} style={{ alignItems: 'center', justifyContent: 'center', width: wp('90'), height: hp('7'), backgroundColor: '#F5F5F5', borderRadius: wp('2'), marginLeft: wp('5'), borderColor: '#08C25D', borderWidth: wp(.4) }} >
                            <Text style={{ textAlign: 'center', color: '#333333', fontWeight: '500', fontSize: hp('2') }}>Proceed</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> : null}
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
    },
    cardView: {
        flexDirection: 'row',
        height: hp('17.5%'),
        width: wp('90'),
        alignItems: 'center',
        borderRadius: hp('5'),
        backgroundColor: 'white'
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