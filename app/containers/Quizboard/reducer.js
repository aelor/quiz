/*
 *
 * Quizboard reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, QUESTIONS_LOADED, SAVE_ANSWER } from './constants';

export const initialState = fromJS({});

function quizboardReducer(state = initialState, action) {
  const questions = state.get('questions');

  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case QUESTIONS_LOADED:
      return state
        .set('questions', action.questions)
        .set('current', action.questions[0]);
    case SAVE_ANSWER:
      const q = questions[action.questionId];
      q["userAnswer"] = action.answer;
      questions[action.questionId] = q;
      let newCurrent = state.get('questions').find((q) => {
        return q.questionId == action.questionId + 1;
      });
      if (newCurrent === undefined) {
        newCurrent = 'final';
      }
      console.log(newCurrent);
      return state.set('questions', questions).set('current', newCurrent);
    default:
      return state;
  }
}

export default quizboardReducer;
