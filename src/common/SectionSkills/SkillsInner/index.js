import {
  WrapperSkills,
  Subheader,
  SkillsList,
  Icon,
  ListItem,
  Point,
  Divider,
} from "./styled.js";

const SkillsInner = ({ title, icon, list }) => {
  return (
    <WrapperSkills>
      <Subheader>
        {title}
        <Icon>{icon}</Icon>
      </Subheader>
      <Divider />
      <SkillsList>
        {list.map((item) => (
          <ListItem key={item}>
            <Point />
            {item}
          </ListItem>
        ))}
      </SkillsList>
    </WrapperSkills>
  );
};

export default SkillsInner;
