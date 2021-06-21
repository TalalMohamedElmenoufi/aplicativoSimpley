import React from 'react';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './app.style';
import AppNavigator from './app/app.navegaitor';

import {Provider} from 'react-redux';
import store from './app/store';

const App = () => {
        
  return (   
      <PaperProvider theme={theme}>
      <Provider store={store}><AppNavigator /></Provider>
      </PaperProvider>
  ); 
};

export default App;