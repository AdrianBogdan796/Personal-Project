import {
  WrapperTile,
  Title,
  Descriprion,
  LinksWrapper,
  LinkWrapper,
  Link,
} from "./styled";

const GitHubTile = ({ name, descriprion, gitUrl, demo }) => {
  const formattedName = (name[0].toUpperCase() + name.substring(1)).replaceAll(
    "-",
    " "
  );

  return (
    <WrapperTile title={`repository name: ${name}`}>
      <Title>{formattedName}</Title>
      <Descriprion>{descriprion}</Descriprion>
      {demo && (
        <LinksWrapper>
          <dt>Repo:</dt>
          <LinkWrapper>
            <Link href={demo} target="_blank" rel="noreferrer">
              {demo}
            </Link>
          </LinkWrapper>
        </LinksWrapper>
      )}
      {gitUrl && (
        <LinksWrapper>
          <dt>Repo:</dt>
          <LinkWrapper>
            <Link href={gitUrl} target="_blank" rel="noreferrer">
              {gitUrl}
            </Link>
          </LinkWrapper>
        </LinksWrapper>
      )}
    </WrapperTile>
  );
};

export default GitHubTile;
