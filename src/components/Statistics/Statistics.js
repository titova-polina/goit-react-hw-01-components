import {
  List,
  Item,
  Title,
  Desc,
} from 'components/Statistics/Statistics.styled';

const ItemComponent = ({ item }) => {
  return (
    <Item $bgColor={getRandomHexColor()}>
      <Desc>{item.label}</Desc>
      <Desc>{item.percentage}%</Desc>
    </Item>
  );
};

export const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(item => (
          <ItemComponent item={item} key={item.id} />
        ))}
      </List>
    </>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
