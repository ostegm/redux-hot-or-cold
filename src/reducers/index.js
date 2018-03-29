import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1,
};

export const hotColdReducer = (state = initialState, action) => {
  if (action.type === actions.MAKE_GUESS) {
    return Object.assign({}, state, {
      guesses: [state.guesses, action.guess],
      feedback: action.feedback,
    });
  }

  if (action.type === actions.RESTART_GAME) {
    return initialState;
  }
  return state;
};

