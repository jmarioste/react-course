import moment from "moment";

//filters reducer
const filtersReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};


const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY':
      return {
        ...state,
        sortBy: action.sortBy
      }
    case 'SET_START_DATE':
      const { startDate } = action;
      return {
        ...state,
        startDate
      };
    
    case 'SET_END_DATE':
      const { endDate } = action;
      return {
        ...state,
        endDate
      };
    default:
      return state;
  }
};

export default filtersReducer;