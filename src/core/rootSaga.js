import { all } from "redux-saga/effects";
import { githubSaga } from "../components/SectionPortfolio/githubSaga";

export default function* rootSaga() {
  yield all([githubSaga()]);
}
