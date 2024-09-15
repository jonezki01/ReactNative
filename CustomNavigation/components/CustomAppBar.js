import * as React from 'react';
import { Appbar } from 'react-native-paper';

const CustomAppBar = ( {navigation, back} ) => (
    <Appbar.Header>
    {back ? (
      <Appbar.BackAction onPress={navigation.goBack} />
    ) : null}
    <Appbar.Content title="CustomAppBar" />
    {!back ? (
      <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('SecondScreen')} />
    ) : null}
  </Appbar.Header>
);

export default CustomAppBar;