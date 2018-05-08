import {
  setStartDate,
  setEndDate,
  setTextFilter,
  _sortBy
} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(1000));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(1000)
  })
});

test('should generate set text filter action with provided text', () => {
  const action = setTextFilter("rent");
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: "rent"
  })
})

test('should generate set text filter action with default text', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ""
  })
});

test('should generate sort by amount action object', () => {
  const action = _sortBy('amount');
  expect(action).toEqual({
    type: 'SORT_BY',
    sortBy: 'amount'
  });
});

test('should generate sort by date action object', () => {
  const action = _sortBy('date');
  expect(action).toEqual({
    type: 'SORT_BY',
    sortBy: 'date'
  })
})