export const RESTART_GAME = 'RESTART_GAME';
export const MAKE_GUESS = 'MAKE_GUESS';
export const UPDATE_AURAL_STATUS = 'UPDATE_AURAL_STATUS';

export const restartGame = () => ({
  type: RESTART_GAME,
});

export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess,
});

export const updateAuralStatus = () => ({
  type: UPDATE_AURAL_STATUS,
});
