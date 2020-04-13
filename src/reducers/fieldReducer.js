const initState = [];

export default function fieldReducer(state = initState, action) {
  switch (action.type) {
    case 'REMOVE_PLAYER':
      return state.filter((player) => player.id !== action.payload.id);

    case 'ADD_PLAYER':
      return [...state, action.payload];

    case 'POSITION_PLAYER':
      const playerIndex = state.findIndex(
        (player) => player.id === action.payload.id,
      );
      return [
        ...state.slice(0, playerIndex),
        {
          ...state[playerIndex],
          x: (state[playerIndex].x || 0) + action.payload.moveX,
          y: (state[playerIndex].y || 0) + action.payload.moveY,
        },
        ...state.slice(playerIndex + 1),
      ];
  }

  return state;
}
