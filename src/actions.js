export const onChange  = (payload) => {return {type: 'onChange', payload}};
export const onCheckAllChange  = (payload) => {return {type: 'onCheckAllChange', payload}};
export const onSortTickets = (payload) => {return{type: 'sort', payload}};

export const loadTicketsData = (payload) => {return{type: 'loadTicketsData', payload}};

export const allDataIsLoaded = () => {return{type: 'allDataIsLoaded', }};