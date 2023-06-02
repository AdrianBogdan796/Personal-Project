import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
  name: "github",
  initialState: {
    reposStatus: "loading",
    repos: [],
  },
  reducers: {
    fetchGithubRepos: (state) => {
      state.reposStatus = "loading";
    },

    fetchGithubReposSuccess: (state, { payload: repos }) => {
      state.reposStatus = "success";
      state.repos = repos;
    },

    fetchGithubReposError: (state) => {
      state.reposStatus = "error";
    },
  },
});

export const {
  fetchGithubRepos,
  fetchGithubReposSuccess,
  fetchGithubReposError,
} = githubSlice.actions;
export const selectGithubState = (state) => state.github;
export const selectRepos = (state) => selectGithubState(state).repos;
export const selectReposStatus = (state) =>
  selectGithubState(state).reposStatus;

export default githubSlice.reducer;
