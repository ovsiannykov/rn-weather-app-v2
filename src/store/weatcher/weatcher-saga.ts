import { put, call, takeEvery } from 'redux-saga/effects';

import { setWeatcher } from './weatcher-actions';

import { weatcherTypes } from './weatcher-types';

function* workerSaga() {
  //const data = yield call(fetchData);
  // yield put(setWeatcher(data));
  // // console.log('saga');
}

// function* watcherSaga() {
//   yield takeEvery(weatcherTypes.SET_DATA, workerSaga);
// }

function* rootSaga() {
  // yield watcherSaga();
}

export default rootSaga;
