import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ListView, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { addReservation, removeReservation } from '../features/reservationSlice';
// import FatchData from './FatchData';
// import { useTodosQuery } from '../../src/services/TodoApi';


const Main = () => {


    // const {data, isLoading, error, isFetching, isSuccess} =useTodosQuery();
    // {
    //     if(isLoading){console.log("Not Loading")}
    // }
    // console.log("data is---> ", data);



    const reservation = useSelector((state: RootState) => state.reservations.value);
    const [reservationNameInput, setReservationNameInput] = useState("");
    const dispatch = useDispatch();
    const handleReservation = () => {
        if (!reservationNameInput) return;
        // console.log(reservationNameInput);
        dispatch(addReservation(reservationNameInput));
        setReservationNameInput("");
    }


    return (
        <View style={{ flex: 1,}}>
            <Text style={{ color: "black", fontSize: 30, fontWeight: "bold", alignSelf: "center", marginTop: 20, letterSpacing: 3, }}> TODO LIST</Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20, paddingHorizontal: 10, backgroundColor: "pink", marginHorizontal: "5%", borderColor: "Black", borderWidth: 1, borderRadius: 8, }}>
                <TextInput
                    onChangeText={setReservationNameInput}
                    value={reservationNameInput}
                    placeholder='Add Todo'
                    placeholderTextColor={"black"}
                    style={{ color: "black", flex: 1, flexWrap: 'wrap' }}>

                </TextInput>
                <TouchableOpacity onPress={handleReservation}>
                    <Text style={{ color: "Black", fontSize: 16, fontWeight: "bold", marginLeft: 30 }}>Add</Text>
                </TouchableOpacity>

            </View>
            <ScrollView  >
                <View style={{ justifyContent: "center", marginTop: 5, }}>
                    {
                        reservation.map((name: string, index: number) => {
                            return (
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: "5%", paddingVertical: "2%", marginTop: 5, backgroundColor: "pink", marginHorizontal: "5%", borderColor: "Black", borderWidth: 1, borderRadius: 8, }}>
                                    <Text style={{ flex: 1, flexWrap: 'wrap' }}>{name}</Text>
                                    <TouchableOpacity onPress={() => dispatch(removeReservation(index))}>
                                        <Image style={{ height: 25, width: 25 }} source={require("../image/remove.png")} />
                                    </TouchableOpacity>
                                </View>
                            );
                        })
                    }
                </View>
            </ScrollView>
            {/* <FatchData/> */}
        </View>
    )
}

export default Main

const styles = StyleSheet.create({})