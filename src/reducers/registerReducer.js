export const registerReducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME":
      return {
        ...state,
        name: payload.value,
      };
    case "EMAIL":
      return {
        ...state,
        email: payload.value,
      };
    case "PASSWORD":
      return {
        ...state,
        password: payload.value,
      };
    default:
      return state
  }
};
