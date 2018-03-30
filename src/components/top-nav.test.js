import React from 'react';
import { shallow, mount } from 'enzyme';
import { TopNav } from './top-nav';
import { restartGame } from '../actions';

describe('TopNav Tests', () => {

  it('Should render without crashing.', () => {
    shallow(<TopNav />); 
  });

  it('Should dispact restartGame on click.', () => {
    const spyFn = jest.fn();
    const wrapper = shallow(<TopNav dispatch={spyFn} />);
    wrapper.find('a.new').simulate('click');
    expect(spyFn).toHaveBeenCalledWith(restartGame());
  });

});