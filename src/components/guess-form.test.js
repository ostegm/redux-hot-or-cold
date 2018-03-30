import React from 'react';
import { shallow, mount } from 'enzyme';
import { GuessForm } from './guess-form';
import { makeGuess } from '../actions';

describe('Guess Form Tests', () => {

  it('Should render without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should dispatch makeGuess when onSubmit is called.', () => {
    const spyFn = jest.fn();
    const guessValue = "10";
    const wrapper = mount(<GuessForm dispatch={spyFn} />);
    wrapper.find('input[type="number"]').instance().value = guessValue;
    wrapper.simulate('submit');
    expect(spyFn).toHaveBeenCalledWith(makeGuess(guessValue));
  });

});
