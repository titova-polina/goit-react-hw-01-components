import { Title } from 'components/Statistics/Statistics.styled';
import { List, Wrapper, ListItem } from './Profile.styled';

const Stats = ({ stats }) => {
  return (
    <List>
      <ListItem>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </ListItem>
      <ListItem>
        <span>Views</span>
        <span>{stats.views}</span>
      </ListItem>
      <ListItem>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </ListItem>
    </List>
  );
};

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <article>
      <Wrapper>
        <img src={avatar} alt="User avatar"></img>
        <Title>
          <b>{username}</b>
        </Title>
        <p>@{tag}</p>
        <p>{location}</p>
      </Wrapper>
      <Stats stats={stats} />
    </article>
  );
};
