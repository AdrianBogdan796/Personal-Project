import { useDispatch, useSelector } from "react-redux";
import {
  fetchGithubRepos,
  selectRepos,
  selectReposStatus,
} from "./github/githubSlice";
import { useEffect } from "react";
import GitHubTile from "./Tile/index";
import {
  WrapperPortfolio,
  HeaderPortfolio,
  LinkPortfolio,
  SubHeaderPortfolio,
  GitHubIcon,
  WrapperRepos,
} from "./styled";
import { github } from "../.././personalInfo";
import Loading from "./Loading";
import Error from "./Error";

const SectionPortfolio = () => {
  const reposStatus = useSelector(selectReposStatus);
  const repos = useSelector(selectRepos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGithubRepos());
  }, [dispatch]);

  return (
    <WrapperPortfolio>
      <LinkPortfolio href={github} rel="noreferrer" target="_blank">
        <GitHubIcon title="github" />
      </LinkPortfolio>

      <HeaderPortfolio>Portfolio</HeaderPortfolio>
      <SubHeaderPortfolio>My recent projects</SubHeaderPortfolio>
      <WrapperRepos notSuccess={reposStatus !== "success"}>
        {reposStatus === "error" ? (
          <Error />
        ) : reposStatus === "loading" ? (
          <Loading />
        ) : (
          repos.map((repo) => (
            <GitHubTile
              as="li"
              key={repo.id}
              description={repo.description}
              name={repo.name}
              demo={repo.homepage}
              gitUrl={repo.html_url}
            />
          ))
        )}
      </WrapperRepos>
    </WrapperPortfolio>
  );
};

export default SectionPortfolio;
