import moment from "moment";

const getVisibleExpenses = (expenses, { text = "", sortBy, startDate, endDate }) => {

  return expenses.filter((expense) => {

    const { description } = expense;
    const startDateMatch = startDate? startDate.isSameOrBefore(moment(expense.createdAt), 'day'): true;
    const endDateMatch = endDate? endDate.isSameOrAfter(expense.createdAt, 'day'): true;
    const textMatch = description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch
      && endDateMatch
      && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return b.createdAt - a.createdAt;
    } else if (sortBy === 'amount') {
      return b.amount - a.amount;
    }
  });
}

export default getVisibleExpenses;