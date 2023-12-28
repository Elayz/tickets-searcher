const initState = {
    checkedList: [],
    checkAll: false,
    filterState: 'optimal',
    ticketsData: [],

}
const reducer = (state = initState, action) => {
    const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
    switch (action.type) {
        case 'onChange':
            return {...state,
                checkedList: action.payload,
                checkAll: action.payload.length === plainOptions.length,
            };
        case 'onCheckAllChange':
            return {...state,
                checkedList: action.payload.target.checked ? plainOptions : [],
                checkAll: action.payload.target.checked,
            };
        case 'sort':
            return {...state,
                filterState: action.payload.target.id,
            }
        case 'loadTicketsData':
            // console.log(action.payload)
            return {...state,
                ticketsData: action.payload,
            }
        default:
            return state;
    }
}
export default reducer;