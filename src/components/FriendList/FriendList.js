import { List, ListItem, OnlineCircle, Text } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <ListItem key={friend.id}>
          <OnlineCircle $isOnline={friend.isOnline} />
          <img src={friend.avatar} alt="User avatar"></img>
          <Text>{friend.name}</Text>
        </ListItem>
      ))}
    </List>
  );
};
