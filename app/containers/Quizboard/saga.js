import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_QUESTIONS } from 'containers/Quizboard/constants';
import {
  questionsLoaded,
  questionLoadingError,
} from 'containers/Quizboard/actions';

import request from 'utils/request';

export function* getQuestions() {
  const requestURL = `https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json`;

  try {
    // Call our request helper (see 'utils/request')
    let questions = yield call(request, requestURL);
    questions.forEach((question, i) => question['questionId'] = i);
    yield put(questionsLoaded(questions));
  } catch (err) {
    yield put(questionLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* questionData() {
  yield takeLatest(FETCH_QUESTIONS, getQuestions);
}
