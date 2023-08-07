import { HeadTable, HeadTitle, Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <HeadTable>
        <tr>
          <HeadTitle>Type</HeadTitle>
          <HeadTitle>Amount</HeadTitle>
          <HeadTitle>Currency</HeadTitle>
        </tr>
      </HeadTable>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
