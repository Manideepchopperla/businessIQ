import { createContext, useContext, useReducer } from 'react';

// Action types
const BUSINESS_ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_BUSINESS_DATA: 'SET_BUSINESS_DATA',
  UPDATE_HEADLINE: 'UPDATE_HEADLINE',
  CLEAR_ERROR: 'CLEAR_ERROR',
  RESET_DATA: 'RESET_DATA',
  SET_REGENERATING_HEADLINE: 'SET_REGENERATING_HEADLINE',
};

// Initial state
const initialState = {
  businessData: null,
  loading: false,
  error: '',
  isRegeneratingHeadline: false,
};

// Reducer function
const businessReducer = (state, action) => {
  switch (action.type) {
    case BUSINESS_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
        error: action.payload ? '' : state.error,
      };

    case BUSINESS_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        isRegeneratingHeadline: false,
      };

    case BUSINESS_ACTIONS.SET_BUSINESS_DATA:
      return {
        ...state,
        businessData: action.payload,
        loading: false,
        error: '',
        isRegeneratingHeadline: false,
      };

    case BUSINESS_ACTIONS.UPDATE_HEADLINE:
      return {
        ...state,
        businessData: state.businessData
          ? { ...state.businessData, headline: action.payload }
          : null,
        isRegeneratingHeadline: false,
        error: '',
      };

    case BUSINESS_ACTIONS.SET_REGENERATING_HEADLINE:
      return {
        ...state,
        isRegeneratingHeadline: true,
      };

    case BUSINESS_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: '',
      };

    case BUSINESS_ACTIONS.RESET_DATA:
      return initialState;

    default:
      return state;
  }
};

// Create context
const BusinessContext = createContext();

// Context provider component
export const BusinessProvider = ({ children }) => {
  const [state, dispatch] = useReducer(businessReducer, initialState);

  // Action creators
  const setLoading = (loading) => {
    dispatch({ type: BUSINESS_ACTIONS.SET_LOADING, payload: loading });
  };

  const setError = (error) => {
    dispatch({ type: BUSINESS_ACTIONS.SET_ERROR, payload: error });
  };

  const setBusinessData = (data) => {
    dispatch({ type: BUSINESS_ACTIONS.SET_BUSINESS_DATA, payload: data });
  };

  const updateHeadline = (headline) => {
    dispatch({ type: BUSINESS_ACTIONS.UPDATE_HEADLINE, payload: headline });
  };

  const clearError = () => {
    dispatch({ type: BUSINESS_ACTIONS.CLEAR_ERROR });
  };

  const resetData = () => {
    dispatch({ type: BUSINESS_ACTIONS.RESET_DATA });
  };

  // API functions
  const fetchBusinessData = async (formData) => {
    dispatch({ type: BUSINESS_ACTIONS.SET_BUSINESS_DATA, payload: null });
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/business-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch business data');
      }

      const data = await response.json();
      setBusinessData({ ...data, ...formData });
    } catch (err) {
      setError('Unable to fetch business data. Please try again.');
      console.error('Error:', err);
    }
  };

  const regenerateHeadline = async () => {
    if (!state.businessData) return;

    dispatch({ type: BUSINESS_ACTIONS.SET_REGENERATING_HEADLINE });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/regenerate-headline?name=${encodeURIComponent(
          state.businessData.name
        )}&location=${encodeURIComponent(state.businessData.location)}`
      );

      if (!response.ok) {
        throw new Error('Failed to regenerate headline');
      }

      const data = await response.json();
      updateHeadline(data.headline);
    } catch (err) {
      setError('Unable to regenerate headline. Please try again.');
      console.error('Error:', err);
    }
  };

  const contextValue = {
    ...state,
    setLoading,
    setError,
    setBusinessData,
    updateHeadline,
    clearError,
    resetData,
    fetchBusinessData,
    regenerateHeadline,
  };

  return <BusinessContext.Provider value={contextValue}>{children}</BusinessContext.Provider>;
};

// Custom hook
export const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
};

export { BUSINESS_ACTIONS };
