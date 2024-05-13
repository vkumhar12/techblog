/* eslint-disable default-case */
export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }
        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            }
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((curElem) => curElem.objectID !== action.payload),
            }
        case "SEACRH_POST":
            return {
                ...state,
                query: action.payload,
            }
        case "PREV_PAGE":
            let prevPageNum = state.page;

            if (prevPageNum <= 0) {
                prevPageNum = 0
            } else {
                prevPageNum = prevPageNum - 1
            }
            return {
                ...state,
                page: prevPageNum,
            }
        case "NEXT_PAGE":
            let nextPageNum = state.page + 1
            if (nextPageNum >= state.nbPages) {
                nextPageNum = 0
            }
            return {
                ...state,
                page: nextPageNum,
            }
        default:
            return state;
    }
};
