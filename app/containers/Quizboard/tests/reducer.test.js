import { fromJS } from 'immutable';
import quizboardReducer from '../reducer';

describe('quizboardReducer', () => {
  it('returns the initial state', () => {
    expect(quizboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
