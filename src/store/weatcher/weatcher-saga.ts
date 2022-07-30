import { put, call, takeEvery } from 'redux-saga/effects';
import { opendataKey } from '../../constants/apiKeys';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';

import { setWeatcher } from './weatcher-actions';

import { weatcherTypes } from './weatcher-types';

const fetchData = async () => {
  try {
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
      params: { q: 'san francisco,us' },
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': opendataKey,
      },
    };

    let res = await axios.request(options);

    if (res.status === 200) {
      const data = res.data;
      return data;
    } else {
      showMessage({
        message: 'Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️',
        type: 'danger',
      });
    }
  } catch (error) {
    console.log(`Error: ${error.response.data.message}`);
    showMessage({
      message: `Opps.. ${error.response.data.message}`,
      type: 'danger',
    });
  }
};

function* workerSaga() {
  const data = yield call(fetchData);
  yield put(setWeatcher(data));
}

function* watcherSaga() {
  yield takeEvery(weatcherTypes.SET_DATA, workerSaga);
}

function* rootSaga() {
  yield watcherSaga();
}

export default rootSaga;
