import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepos } from "../getRepos";
import {
  fetchGithubRepos,
  fetchGithubReposSuccess,
  fetchGithubReposError,
} from "./githubSlice";

function* fetchGithubHandler() {
  try {
    yield delay(1000);
    const repos = yield call(getRepos);
    yield put(fetchGithubReposSuccess(repos));
  } catch (error) {
    yield put(fetchGithubReposError(error));
    yield call(console.error);
  }
}

export function* githubSaga() {
  yield takeLatest(fetchGithubRepos.type, fetchGithubHandler);
}
