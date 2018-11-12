/**
 *
 * Question
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { updateAnswers } from 'containers/Quizboard/actions';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Question extends React.PureComponent {
  constructor(props) {
    super(props);


    this.state = {
      checked: false,
    }
    this.updateAnswers = this.updateAnswers.bind(this);
  }

  componentDidMount(){

  }

  updateAnswers(selected) {
    const qId = this.props.question.questionId;
    this.props.updateAnswers(qId, selected);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8} className="greenboard">
            <div>
              Quiz {this.props.sequence} of {this.props.total}
            </div>
            <div className="questionText">
              {this.props.question.text}
              <ol>
              {this.props.question.options.map(
                (option) => (
                  <li>{option}</li>
                )
              )}
              </ol>
            </div>
            <div className="options">
              {this.props.question && this.props.question.options.map(
                (option, i) => (
                  <label>
                    <input 
                      type="radio" 
                      name={`question${this.props.question.questionId}`}
                      onChange={() => this.updateAnswers(i)}
                      checked={this.state.checked}
                    />
                    {option}
                  </label>
                )
              )}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Question.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    updateAnswers: (qId, answer) => dispatch(updateAnswers(qId, answer)),
  };
}

export default connect(null, mapDispatchToProps)(Question);
