import * as actions from '../actions';
import { hotColdReducer, getFeedback, initialState } from './index';


describe('Reducer Tests', () => {

  it('Should return initialState when nothing is passed', () => {
    const state = hotColdReducer(undefined, {type: '__UNKNOWN'})
    expect(state).toEqual(initialState)
  })

  it('Should increment Guesses array each time user guesses.', () => {
    let state = initialState;
    for (let i = 1; i<5; i++) {
       state = hotColdReducer(state, actions.makeGuess(10))
       expect(state.guesses.length).toEqual(i);
    }
  })

  it('Should reset state when restart game is dispatched.', () => {
    let state = initialState;
    state = hotColdReducer(state, actions.makeGuess(10));
    state = hotColdReducer(state, actions.restartGame());
    expect(state).toEqual(initialState);
  })

  it('Should set the correct feedback when user guesses.', () => {
    let state = initialState;
    let difference;
    for (let guess =0; guess <= 100; guess++) {
      state = hotColdReducer(state, actions.makeGuess(guess));
      difference = Math.abs(state.correctAnswer - guess);
      expect(state.feedback).toEqual(getFeedback(difference))
    }
  })

});