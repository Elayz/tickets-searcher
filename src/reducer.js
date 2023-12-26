const initState = {
    checkedList: [],
    indeterminate: false,
    checkAll: false,
    filterState: null,
}
const reducer = (state = initState, action) => {
    const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
    switch (action.type) {
        case 'onChange':
            return {...state,
                checkedList: action.payload,
                indeterminate: !!state.checkedList.length && (state.checkedList.length < plainOptions.length),
                checkAll: action.payload.length === plainOptions.length,
            };
        case 'onCheckAllChange':
            return {...state,
                checkedList: action.payload.target.checked ? plainOptions : [],
                indeterminate: false,
                checkAll: action.payload.target.checked,
            };
        case 'sort':
            return {...state,
                filterState: action.payload.target.id,
            }
        default:
            return state;
    }
}
export default reducer;