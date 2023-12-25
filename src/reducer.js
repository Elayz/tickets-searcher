const reducer = (state = 0, action) => {
    const defaultCheckedList = [];
    const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
    switch (action.type) {
        case 'first':
            return state = {
                checkedList: defaultCheckedList,
                indeterminate: false,
                checkAll: false,
            }
        case 'onChange':
            return state = {
                checkedList: action.payload,
                indeterminate: !!state.checkedList.length && (state.checkedList.length < plainOptions.length),
                checkAll: action.payload.length === plainOptions.length,
            };
        case 'onCheckAllChange':
            return state = {
                checkedList: action.payload.target.checked ? plainOptions : [],
                indeterminate: false,
                checkAll: action.payload.target.checked,
            };
        default:
            return state;
    }
}
export default reducer;