import { createContext, useContext, useReducer } from 'react';

const PostsContext = createContext();

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, posts: action.payload, loading: false };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_SUCCESS':
      return { ...state, posts: [action.payload, ...state.posts], loading: false };
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        posts: state.posts.map((p) => (p.id === action.payload.id ? action.payload : p)),
        loading: false,
      };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.payload),
        loading: false,
      };
    default:
      return state;
  }
};

export const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  return (
    <PostsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);