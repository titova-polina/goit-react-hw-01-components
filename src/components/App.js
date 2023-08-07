import user from '../Data/user.json';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import items from '../Data/transactions.json';

import { Profile } from './Profile/Profile';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Profile/Profile.styled';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Section>
        <Profile {...user} />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <FriendList friends={friends} />
      <Section>
        <TransactionHistory items={items} />
      </Section>
      <GlobalStyle />
    </>
  );
};
