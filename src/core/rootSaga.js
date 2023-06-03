import { all } from "redux-saga/effects";
import { githubSaga } from "../common/Portfolio/github/githubSaga";

export default function* rootSaga() {
  yield all([githubSaga()]);
}
