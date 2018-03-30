import * as actions from '../actions';

describe('Actions', () => {

  it('should return the restartGame Action', () => {
    const action = actions.restartGame();
    expect(action.type).toEqual(actions.RESTART_GAME);
  });

  it('should return the updateAuralStatus Action', () => {
    const action = actions.updateAuralStatus();
    expect(action.type).toEqual(actions.UPDATE_AURAL_STATUS);
  });

  it('should return the makeGuess Action', () => {
    const guess = 10;
    const action = actions.makeGuess(guess);
    expect(action.type).toEqual(actions.MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });

});