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
            let prevPagNum = state.page;

            if (prevPagNum <= 0) {
                prevPagNum = 0
            } else {
                prevPagNum = prevPagNum - 1
            }
            return {
                ...state,
                page: prevPagNum,
            }
        case "NEXT_PAGE":
            let nextPagNum = state.page + 1
            if (nextPagNum >= state.nbPages) {
                nextPagNum = 0
            }
            return {
                ...state,
                page: nextPagNum,
            }
        default:
            return state;
    }
};
