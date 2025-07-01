import React from 'react';
import { Text, View } from 'react-native';
import MainHeading from './components/MainHeading';
import Quote from './components/Quote';

const App = () => {
  return (
    <View>
      <Text>Allah</Text>
      <MainHeading text="Allahamdulillah" />
      <Quote text={'text'} />
      <Quote text={'Allah'} />
    </View>
  );
};

export default App;
