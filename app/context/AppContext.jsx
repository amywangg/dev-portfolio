import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  user: null,
  members: [],
  selectedMood: null,
  status: "quick_mood",
  loading: true,
  isPrivate: false,
  animation: 0,
  error: null,
};

const AppStateReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "AUTH_FAIL":
      return {
        ...state,
        loading: false,
      };
    case "GET_MEMBERS":
      return {
        ...state,
      };
    case "GET_MEMBERS_SUCCESS":
      return {
        ...state,
        members: action.payload,
      };
    case "SELECT_MOOD":
      return {
        ...state,
        selectedMood: action.payload,
      };
    case "ANIMATE_GEM_OPEN":
      return {
        ...state,
        animation: 1,
      };
    case "END_ANIMATION":
      return {
        ...state,
        animation: 0,
      };
    case "RESET_MOOD":
      return {
        ...state,
        selectedMood: null,
      };
    case "TOGGLE_PRIVACY":
      return {
        ...state,
        isPrivate: !state.isPrivate,
      };
    case "LAUNCH_FULL_PR_SURVEY":
      return {
        ...state,
        status: "full_checkin",
      };
    case "CLOSE_FULL_PR_SURVEY":
      return {
        ...state,
        selectedMood: null,
        status: "quick_mood",
      };
    case "SUBMIT_SURVEY":
      return {
        ...state,
        selectedMood: null,
        status: "submitted",
        animation: 2,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const AppStateContext = createContext();
const AppDispatchContext = createContext();

export function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
  return context;
}

export function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }
  return context;
}

export const AppStateProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(AppStateReducer, initialState);

  return (
    <AppStateContext.Provider value={appState}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};
