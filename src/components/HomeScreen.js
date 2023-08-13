import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import CardView from 'react-native-cardview'
// import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement } from '../redux/reducer/counterSlice'


export default function HomeScreen({ }) {

    // const counter = useSelector((state) => state.counter.value)
    // const dispatch = useDispatch()
    const [quantity, setQuantity] = useState('')

    const incrementQuantity = ({ }) => {
        if (quantity >= 0) {
            setQuantity(quantity + 1)
        } 
    }

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const data = [
        { id: 1, prdName: 'Siamese Hybrid Chicken', prdImage: require('../assets/hybrid.png'), price: '250', sellingPrice: '200', quantity: '', disPercentage: '-20%' },
        { id: 2, prdName: 'Vietnamese Turkey', prdImage: require('../assets/turkey.png'), price: '250', sellingPrice: '200', quantity: '', disPercentage: '-20%' },
        { id: 3, prdName: 'Siamese Hybrid Chicken', prdImage: require('../assets/hybrid.png'), price: '250', sellingPrice: '200', quantity: '', disPercentage: '-20%' },
        { id: 4, prdName: 'Vietnamese Turkey', prdImage: require('../assets/turkey.png'), price: '250', sellingPrice: '200', quantity: '', disPercentage: '-20%' },
        { id: 5, prdName: 'Siamese Hybrid Chicken', prdImage: require('../assets/hybrid.png'), price: '250', sellingPrice: '200', quantity: '', disPercentage: '-20%' },
        { id: 6, prdName: 'Vietnamese Turkey', prdImage: require('../assets/turkey.png'), price: '250', sellingPrice: '200', quantity: '', disPercentage: '-20%' },
        { id: 7, prdName: 'Siamese Hybrid Chicken', prdImage: require('../assets/hybrid.png'), price: '250', sellingPrice: '200', quantity: '', disPercentage: '-20%' },
    ];

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
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('1.7'), margin: hp('1') }}>Rice</Text>
                </View>
                <View>
                    <Image source={require('../assets/tea.png')} />
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('1.7'), margin: hp('1') }}>Tea</Text>
                </View>
                <View>
                    <Image source={require('../assets/drink.png')} />
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('1.7'), margin: hp('1') }}>Drink</Text>
                </View>
                <View>
                    <Image source={require('../assets/others.png')} />
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontSize: hp('1.7'), margin: hp('1') }}>Others</Text>
                </View>
            </View>
            {/* <View style={{ width: wp('90'), alignItems: 'center', justifyContent: 'center', margin: hp('1') }}>
                <Text>Counter: {counter}</Text>
                <TouchableOpacity onPress={() => dispatch(increment())}>
                    <Text>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(decrement())}>
                    <Text>Decrement</Text>
                </TouchableOpacity>
            </View> */}
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={.8} onPress={{}}>
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
                                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '700', fontSize: hp('2') }} >{item.sellingPrice}/kg</Text>
                                    <Text style={{ textAlign: 'center', color: '#B8B8B8', fontWeight: '500', fontSize: hp('2') }}>{item.price}</Text>
                                    <View style={{ height: hp('3'), width: wp('10'), backgroundColor: '#F9C941', alignItems: 'center', justifyContent: 'center', borderRadius: wp('1') }}>
                                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: hp('2') }}>{item.disPercentage}</Text>
                                    </View>
                                </View>
                                <View style={styles.quantityView}>
                                    <TouchableOpacity onPress={decrementQuantity} style={{ borderRadius: wp('1'), height: hp('4'), width: wp('9'), }}>
                                        <Image source={require('../assets/minus.png')} style={{ height: hp('4'), width: wp('8'), alignItems: 'center', justifyContent: 'center', marginLeft: wp('1') }} />
                                    </TouchableOpacity>
                                    <Text style={{ color: '#959595' }}>{quantity} Nos</Text>
                                    <TouchableOpacity onPress={incrementQuantity} style={{ borderRadius: wp('1'), height: hp('4'), width: wp('9'), }}>
                                        <Image source={require('../assets/plus.png')} style={{ height: hp('4'), width: wp('8'), alignItems: 'center', justifyContent: 'center', marginRight: wp('1') }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </CardView>
                    </TouchableOpacity>
                }
            />
        </View>
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