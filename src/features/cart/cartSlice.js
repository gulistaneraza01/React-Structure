const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCart: (state, action) => {
      return state;
    },
  },
});

export const { addCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;

// useSelector -----> state data
//useDispatch ------> action dispatch with function call
