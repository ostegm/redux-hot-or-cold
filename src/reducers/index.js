import * as actions from '../actions';

export const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1,
};

export const getFeedback = difference => {
  if (difference >= 50) {
    return 'You\'re Ice Cold...';
  } else if (difference >= 30) {
    return 'You\'re Cold...';
  } else if (difference >= 10) {
    return 'You\'re Warm.';
  } else if (difference >= 1) {
    return 'You\'re Hot!';
  } else {
    return 'You got it!';
  }
}

export const hotColdReducer = (state = initialState, action) => {
  if (action.type === actions.MAKE_GUESS) {
    const guess = parseInt(action.guess, 10);
    const difference = Math.abs(guess - state.correctAnswer);
    const feedback = getFeedback(difference)

    return Object.assign({}, state, {
      guesses: [...state.guesses, guess],
      feedback: feedback,
    });
  }

  if (action.type === actions.RESTART_GAME) {
    return initialState;
  }

if (action.type === actions.UPDATE_AURAL_STATUS) {
   const { guesses, feedback } = state;

    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }
    
    return Object.assign({}, state, {
      auralStatus: action.auralStatus
    }); 
   }
  

  return state;
};

