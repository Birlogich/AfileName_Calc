export const ADD_BARS = "ADD_BARS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADED = "SET_LOADED";

export const addBars = (data) => ({
  type: ADD_BARS,
  payload: data,
});

export const setError = (err) => ({
  type: SET_ERROR,
  err,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setLoaded = () => ({
  type: SET_LOADED,
});

export const getAllBars = (data) => (dispatch) => {
  dispatch(setLoading());

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  })
    .then((data) => {
      dispatch(addBars(data));
      dispatch(setLoaded());
    })
    .catch((err) => dispatch(setError(err)));
};
