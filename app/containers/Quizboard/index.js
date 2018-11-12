/**
 *
 * Quizboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Question from 'components/Question';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import GreenBoard from 'components/GreenBoard';
import makeSelectQuizboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchQuestions } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Quizboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.props.fetchQnA();
  }

  refresh(){
    window.location.reload();
  }

  render() {
    return (
      <GreenBoard>
        {this.props.quizboard.current && this.props.quizboard.current !== 'final' && (
          <Question questionId={this.props.quizboard.current.questionId} question={this.props.quizboard.current} sequence={this.props.quizboard.current.questionId+1} total={this.props.quizboard.questions.length}/>
        )}
        {this.props.quizboard.current && this.props.quizboard.current == 'final' && (
          <div className="container">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Text</th>
                  <th>status</th>
                </tr>
              </thead>
              {this.props.quizboard.questions.map(
                question => (
                  <tr>
                    <td>{question.questionId}</td>
                    <td>{question.text}</td>
                    <td>{question.answer == question.userAnswer ? "correct" : "wrong"}</td>
                  </tr>
                )
              )}
            </table>
            <div className="center">
              <button onClick={this.refresh}>START AGAIN</button>
            </div>
          </div>
        )}
      </GreenBoard>
    );
  }
}

Quizboard.propTypes = {
  fetchQnA: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  quizboard: makeSelectQuizboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchQnA: () => dispatch(fetchQuestions()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'quizboard', reducer });
const withSaga = injectSaga({ key: 'quizboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Quizboard);
