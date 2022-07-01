/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable quote-props */
/* eslint-disable no-else-return */
// TRES FORMAS PARA GENERAR UN REDUCER PARA ESTADOS COMPUESTOS

// ESTADO INICIAL O BASICO
const initialState = {
  loading: false,
  error: false,
  value: '',
};

// 1. FORMA MAS BASICA SEGUNDA MAS USADA
export const reducerBasic = (state, action) => {
  if (action.type === 'ERROR') {
    return {
      ...state, // Spread Operator
      error: true,
      loading: false,
    };
  } if (action.type === 'LOADING') {
    return {
      ...state, // Spread Operator
      loading: true,
      error: false,
    };
  } if (action.type === 'WRITE') {
    return {
      ...state, // Spread Operator
      loading: false,
      error: false,
      value: action.payload,
    };
  } else {
    return {
      ...state, // Spread Operator
    };
  }
};
// 2. FORMA MAS USADA
export const reducerSwitch = (state, action) => {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state, // Spread Operator
        error: true,
        loading: false,
      };
    case 'LOADING':
      return {
        ...state, // Spread Operator
        loading: true,
        error: false,
      };
    case 'WRITE':
      return {
        ...state, // Spread Operator
        loading: false,
        error: false,
        value: action.payload,
      };
    default:
      return {
        ...initialState, // Spread Operator
      };
  }
};
// 3. FORMA ELEGANTE PERO MENOS USADA (RECOMENDADA)
const reducerObject = (state, payload) => ({
  'ERROR': {
    ...state, // Spread Operator
    error: true,
    loading: false,
  },
  'LOADING': {
    ...state, // Spread Operator
    loading: true,
    error: false,
  },
  'WRITE': {
    ...state, // Spread Operator
    loading: false,
    error: false,
    value: payload,
  },
});

export const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};
