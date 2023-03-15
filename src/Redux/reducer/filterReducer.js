import { TOGGEL_CATEGORY, TOGGEL_TYPE } from "../actionTypes/actionTypes";

const initialState = {
    filters: {
        category: [],
        type: []
    },
    keyword: ""
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGEL_CATEGORY:
            if (!state.filters.category.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        category: [...state.filters.category, action.payload]
                    }
                }
            } else {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        category: state.filters.category.filter(category => category !== action.payload)
                    }
                }
            }

        case TOGGEL_TYPE:
            if (!state.filters.type.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        type: [...state.filters.type, action.payload]
                    }
                }
            } else {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        type: state.filters.type.filter(type => type !== action.payload)
                    }
                }
            }



        default:
            return state
    }

}