import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { addReservation, removeReservation } from '../features/reservationSlice';



const Main = () => {
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
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20, paddingHorizontal: 10, backgroundColor: "pink", marginHorizontal: "5%", borderColor: "Black", borderWidth: 1, borderRadius: 8, }}>
                <TextInput
                    onChangeText={setReservationNameInput}
                    placeholder='Add Todo'
                    placeholderTextColor={"black"}
                    style={{ color: "black", flex: 1, flexWrap: 'wrap' }}>

                </TextInput>
                <TouchableOpacity onPress={handleReservation}>
                    <Text style={{ color: "Black", fontSize: 16, fontWeight: "bold" }}>Add</Text>
                </TouchableOpacity>

            </View>

            <View style={{ justifyContent: "center", marginTop: 5, }}>
                {
                    reservation.map((name: string, index: number) => {
                        return (
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: "5%", paddingVertical: "2%", marginTop: 5, backgroundColor: "pink", marginHorizontal: "5%", borderColor: "Black", borderWidth: 1, borderRadius: 8, }}>
                                <Text style={{ flex: 1, flexWrap: 'wrap' }}>{name}</Text>
                                <TouchableOpacity onPress={
                                    () => dispatch(removeReservation(index))
                                }>
                                    <Text style={{ color: "red", marginLeft: 3 }} >Delete</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    })
                }
            </View>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({})