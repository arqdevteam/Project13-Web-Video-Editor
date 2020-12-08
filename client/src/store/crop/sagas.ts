import { put, call, takeLatest } from 'redux-saga/effects';

import video from '@/video/video';
import webglController from '@/webgl/webglController';
import { setThumbnails, moveTo, pause } from '../currentVideo/actions';
import { CROP, error } from '../actionTypes';
import { applyCrop } from '../history/actions';

function* updateThumbnails(action) {
  try {
    yield call(video.pause);
    yield put(pause());
    const thumbnails: string[] = yield call(
      video.makeThumbnails,
      action.payload.start,
      action.payload.end
    );
    yield call(webglController.main);
    yield put(moveTo(action.payload.start));
    yield put(setThumbnails(thumbnails));
    yield put(applyCrop(thumbnails, action.payload.start, action.payload.end));
  } catch (err) {
    console.log(err);
    yield put(error());
  }
}

export default function* watchCrop() {
  yield takeLatest(CROP, updateThumbnails);
}
