import { TOGGEL_CATEGORY, TOGGEL_TYPE } from "../actionTypes/actionTypes"

export const toggleCategory = (categoryName) => {
    return {
        type: TOGGEL_CATEGORY,
        payload: categoryName
    }
}

export const toggleType = (typeName) => {
    return {
        type: TOGGEL_TYPE,
        payload: typeName
    }
}