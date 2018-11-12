import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the quizboard state domain
 */

const selectQuizboardDomain = state => state.get('quizboard', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Quizboard
 */

const makeSelectQuizboard = () =>
  createSelector(selectQuizboardDomain, substate => substate.toJS());

export default makeSelectQuizboard;
export { selectQuizboardDomain };
