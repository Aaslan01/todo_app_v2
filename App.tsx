/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { store, RootState } from './src/app/store';
import Main from './src/screen/Main';


const App = () => {

  // const message = useSelector((state: RootState) => state..value);
  // console.log(message);

  // console.log(reservation);

  return (
    <Provider store={store} >
      <SafeAreaView style={styles.container}>
        <Main/>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "pink"
  }

});

export default App;
