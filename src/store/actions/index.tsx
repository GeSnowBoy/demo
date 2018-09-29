import * as types from '../types'

export const constrolInput = (isShow: boolean) => {
    return {
        type: types.CONTROLL_INPUT,
        payload: isShow
    }
}
export const toggleLike = (newsId: number) => {
    return {
        type: types.TOOGLE_LIKE,
        payload: newsId
    }
}
export const setActionNews = (newsId: number) => {
    return {
        type: types.SET_ACTION_NEWS,
        payload: newsId
    }
}
export const addReview = (input: string) => {
    return {
        type: types.ADD_REVIEW,
        payload: input
    }
}
export const setActionControll = (id: number) => {
    return {
        type: types.SET_ACTION_CONTROLL,
        payload: id
    }
}

