import { FlatList, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'







const FatchData = () => {

    const [todos, setTodos] = useState([]);


    const url = 'https://jsonplaceholder.typicode.com/todos';

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((res) => setTodos(res))
        // .catch(error => console.error((error)))
        // .finally(() => setLoading(false));
    }, []);



    interface Todos {
        title: string,
        id: number,
        complete: boolean,
        userId: number
    }
    function newFunction(): React.ReactNode {
        return todos.slice(1,4).filter((newTodos: Todos)=> newTodos.id> 1 )
            .map((post: Todos) =>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20, paddingHorizontal: 10, backgroundColor: "pink", marginHorizontal: "5%", borderColor: "Black", borderWidth: 1, borderRadius: 8, }}>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "bold", flex: 1, flexWrap: 'wrap' }}>{post.title}</Text>
                    {/* <Text style={{ color: "black", fontSize: 16, fontWeight: "bold", }}>{post.userId}</Text> */}
                    <Text style={{ color: "red", flex: 1, flexWrap: 'wrap', fontSize: 16, fontWeight: "bold", }}>{post.id}</Text>
                </View>
            )
    }

    // const dataApi = () => {

    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then((res) => {
    //             // setTodos(res["_response"]); 
    //             console.log("response====>", res);
    //             console.log("end====>");

    //         }).catch(
    //             err => console.log(err)
    //         )
    // }
    // GET request using axios inside useEffect React hook

    // empty dependency array means this effect will only run once (like componentDidMount in classes)


    return (
        <View style={{ flex: 1 }}>
            {newFunction()}
        </View>
    )


}


export default FatchData

const styles = StyleSheet.create({})


