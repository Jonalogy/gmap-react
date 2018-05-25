export function RootReducer (state, action) {
  switch (action.type) {
    case "GMAP_API_LOADED":
      return Object.assign({}, state, {googleApiLoaded: true});
    default:
      return state;
  }
}
