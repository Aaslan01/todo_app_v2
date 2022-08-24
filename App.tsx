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
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {

  // const message = useSelector((state: RootState) => state..value);
  // console.log(message);

  // console.log(reservation);
  const persistor = persistStore(store)
  return (
    <Provider store={store} >
      <SafeAreaView style={styles.container}>
        <PersistGate persistor={persistor}>
          <Main />
        </PersistGate>
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
