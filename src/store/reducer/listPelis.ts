
import { init_list, new_pagination, select_pelis } from '../actions/ListAction'
const default_values_list = {
    pagination: '',
    list: '',
    selectPelis:''
}
const ListReducer = (state = default_values_list, action:any) => {
    switch (action.type) {
        case init_list: {
            return {
                ...state,
                init_list: action.payload
            }
        }
        case new_pagination: {
            return {
                ...state,
                new_pagination: action.payload
            }
        }
        case select_pelis: {
            return {
                ...state,
                select_pelis: action.payload
            }
        }
        default: return state
    }
}
export default ListReducer