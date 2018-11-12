/*
 *
 * Quizboard actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_QUESTIONS,
  QUESTIONS_LOADED,
  QUESTIONS_LOADING_ERROR,
  SAVE_ANSWER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchQuestions() {
  return {
    type: FETCH_QUESTIONS,
  };
}

export function questionsLoaded(questions) {
  return {
    type: QUESTIONS_LOADED,
    questions,
  };
}

export function questionLoadingError(err) {
  return {
    type: QUESTIONS_LOADING_ERROR,
    err,
  };
}

export function updateAnswers(questionId, answer) {
  return {
    type: SAVE_ANSWER,
    questionId,
    answer,
  };
}
