import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QueryState {
  currentQuery: string;
  queryHistory: string[];
  isLoading: boolean;
  error: string | null;
  results: any;
  suggestions: string[];
}

const initialState: QueryState = {
  currentQuery: '',
  queryHistory: [],
  isLoading: false,
  error: null,
  results: null,
  suggestions: [
    'Show me the trend of user engagement over the last week',
    'What are the top performing features?',
    'Compare conversion rates between mobile and desktop users',
  ],
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setCurrentQuery: (state, action: PayloadAction<string>) => {
      state.currentQuery = action.payload;
    },
    addToHistory: (state, action: PayloadAction<string>) => {
      state.queryHistory.unshift(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setResults: (state, action: PayloadAction<any>) => {
      state.results = action.payload;
    },
  },
});

export const {
  setCurrentQuery,
  addToHistory,
  setLoading,
  setError,
  setResults,
} = querySlice.actions;

export default querySlice.reducer;