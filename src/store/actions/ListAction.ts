
export const init_list= 'init_list'
export const new_pagination= 'new_pagination'
export const select_pelis = 'new_select_pelis'

export const initListAction = (value:any) => {
    return {
        type: init_list,
        payload: value
    }
}
export const newPaginationAction = (value:any) => {
    return {
        type: new_pagination,
        payload: value
    }
}
export const selectPelisAction = (value:any) => {
    return {
        type: select_pelis,
        payload: value
    }
}