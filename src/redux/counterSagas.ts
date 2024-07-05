import { all, delay, put, takeEvery } from 'redux-saga/effects'
import { increment, incrementAsync, decrementAsync } from './counterSlice.ts'

function* incrementSaga() {
    yield delay(500)
    yield put(increment(1))
}

function* decrementSaga() {
    yield delay(500)
    yield put(increment(-1))
}

function* watchCounterSaga() {
    yield takeEvery(incrementAsync.type, incrementSaga)
    yield takeEvery(decrementAsync.type, decrementSaga)
}

export default function* rootSaga() {
    yield all([watchCounterSaga()])
}