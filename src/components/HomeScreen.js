import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList, ScrollView, Modal } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import CardView from 'react-native-cardview'
import { useSelector, useDispatch } from 'react-redux'
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast'
import { updateAddToCart, updateRemoveFromCart } from '../redux/reducer/counterSlice'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeScreen({ navigation }) {

    const counter = useSelector((state) => state.counter); // Use the entire counter state
    const dispatch = useDispatch()
    const [isCheckout, setIsCheckout] = useState('false') // for modal popup

    const checkoutPopup = () => {
        setIsCheckout(!isCheckout);
    };

    const data = [
        { prodId: 1, prdName: 'Siamese Hybrid Chicken', prdImage: require('../assets/hybrid.png'), price: '-250-', prdTotalPrice: counter[1] ? counter[1] * 200 : 200, quantity: counter[1] || 0, prdDiscount: '-20%' },
        { prodId: 2, prdName: 'Vietnamese Turkey', prdImage: require('../assets/turkey.png'), price: '250', prdTotalPrice: counter[2] ? counter[2] * 200 : 200, quantity: counter[2] || 0, prdDiscount: '-20%' },
        { prodId: 3, prdName: 'Siamese Hybrid Chicken', prdImage: require('../assets/hybrid.png'), price: '250', prdTotalPrice: counter[3] ? counter[3] * 200 : 200, quantity: counter[3] || 0, prdDiscount: '-20%' },
        { prodId: 4, prdName: 'Vietnamese Turkey', prdImage: require('../assets/turkey.png'), price: '250', prdTotalPrice: counter[4] ? counter[4] * 200 : 200, quantity: counter[4] || 0, prdDiscount: '-20%' },
        { prodId: 5, prdName: 'Siamese Hybrid Chicken', prdImage: require('../assets/hybrid.png'), price: '250', prdTotalPrice: counter[5] ? counter[5] * 200 : 200, quantity: counter[5] || 0, prdDiscount: '-20%' },
        { prodId: 6, prdName: 'Vietnamese Turkey', prdImage: require('../assets/turkey.png'), price: '250', prdTotalPrice: counter[6] ? counter[6] * 200 : 200, quantity: counter[6] || 0, prdDiscount: '-20%' },
        { prodId: 7, prdName: 'Siamese Hybrid Chicken', prdImage: require('../assets/hybrid.png'), price: '250', prdTotalPrice: counter[7] ? counter[7] * 200 : 200, quantity: counter[7] || 0, prdDiscount: '-20%' },
    ];

    const handleLogOut = async () => {
        try {
            await AsyncStorage.removeItem('userLoggedIn');
            await auth().signOut();
            navigation.reset({
                index: 0,
                routes: [{ name: 'LoginActivity' }],
            });
            Toast.show('User LoggedOut Succesfully');
        } catch (error) {
            Toast.show('Error logging Out');
        }
    };


    return (
        <ScrollView contentContainerStyle={{ marginBottom: hp('2%'), flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }} nestedScrollEnabled={true} >
            <View style={styles.headerView}>
                <View style={{ width: wp('70'), justifyContent: 'center', height: hp('7.7'), alignItems: 'center', marginLeft: wp(10) }}>
                    <Text style={styles.headerText}>Home</Text>
                </View>
                <TouchableOpacity style={{ width: wp('15'), justifyContent: 'center', alignItems: 'center', height: hp('7.7') }} onPress={handleLogOut}>
                    <MaterialIcon name="logout" size={hp('3%')} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: wp('20'), justifyContent: 'center', alignItems: 'center', height: hp('7.7') }} onPress={() => navigation.navigate('CheckOutScreen')}>
                    <MaterialIcon name="cart" size={hp('3%')} color={'white'} />
                </TouchableOpacity>
            </View>
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
                    <TouchableOpacity activeOpacity={1} onPress={() => checkoutPopup()} >
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
                    </TouchableOpacity>
                }
            />
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={isCheckout}
                presentationStyle='overFullScreen'>
                <TouchableOpacity activeOpacity={1} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => { setIsCheckout(!isCheckout) }}>
                    <View style={styles.popUp} >
                        <View style={{ height: hp('6%'), width: wp('30'), alignItems: 'center', justifyContent: 'center', marginRight: wp('5') }}>
                            <Text style={{ color: 'white', fontWeight: '300', fontSize: hp('2') }}>
                                {(counter[1] || 0) +
                                    (counter[2] || 0) +
                                    (counter[3] || 0) +
                                    (counter[4] || 0) +
                                    (counter[5] || 0) +
                                    (counter[6] || 0) +
                                    (counter[7] || 0)
                                } Items</Text>
                            <Text style={{ color: 'white', fontWeight: '300', fontSize: hp('2') }}>₹
                                {(counter[1] || 0) * 200 +
                                    (counter[2] || 0) * 200 +
                                    (counter[3] || 0) * 200 +
                                    (counter[4] || 0) * 200 +
                                    (counter[5] || 0) * 200 +
                                    (counter[6] || 0) * 200 +
                                    (counter[7] || 0) * 200
                                }</Text>
                        </View>
                        <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('CheckOutScreen')}>
                            <View style={styles.cartView}>
                                <Text style={{ color: 'black', fontWeight: '300', fontSize: hp('2'), margin: hp('1') }}>Checkout</Text>
                                <Image source={require('../assets/cart.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
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
        margin: hp('1'),
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
    },
    popUp: {
        flexDirection: 'row',
        position: "absolute",
        top: hp('70%'),
        left: wp('10%'),
        elevation: 10,
        height: hp('10%'),
        width: wp('80'),
        backgroundColor: "#08C25D",
        borderRadius: wp('5'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartView: {
        flexDirection: 'row',
        elevation: 10,
        height: hp('6%'),
        width: wp('40'),
        backgroundColor: "#fff",
        borderRadius: wp('5'),
        alignItems: 'center',
        justifyContent: 'center',
    }
})