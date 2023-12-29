const initState = {
    checkedList: [],
    checkAll: false,
    filterState: 'optimal',
    ticketsData: [],
    allDataIsLoaded: false,
    progressSpinScore: 0,
}
const reducer = (state = initState, action) => {
    const plainOptions = ['Без пересадок', '1 пересадки', '2 пересадки', '3 пересадки'];
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
            return {...state,
                ticketsData: [...state.ticketsData, ...action.payload],
                progressSpinScore: state.progressSpinScore + 7,
            }
        case 'allDataIsLoaded':
            return {...state,
                allDataIsLoaded: true,
            }
        default:
            return state;
    }
}
export default reducer;