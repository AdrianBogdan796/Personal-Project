import spinner from "./spinner.svg";
import { Wrapper, Info, Spinner } from "./styled";

const Loading = () => (
  <Wrapper>
    <Info>Please wait, projects are begin loaded...</Info>
    <Spinner src={spinner} alt="spinner"></Spinner>
  </Wrapper>
);

export default Loading;
