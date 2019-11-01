import storage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'ole',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducer;
};
