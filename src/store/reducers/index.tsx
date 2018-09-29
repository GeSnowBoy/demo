import * as types from '../types'
import mock from 'mock'

const initState: any = {
    isWrite: false,
    curReview: -1,
    curControllId: -1,
    ...mock
}
export default (state = initState, action: any) => {
    switch (action.type) {
        case types.CONTROLL_INPUT:
            return {
                ...state,
                isWrite: action.payload
            }
        case types.SET_ACTION_NEWS:
            return {
                ...state,
                curReview: action.payload
            }
        case types.TOOGLE_LIKE:
            const friendBody: any = [...state.friendBody]
            const friendItem: any = friendBody.find((item: any) => item.id === action.payload)
            friendItem.isLike = !friendItem.isLike
            if (friendItem.isLike) {
                friendItem.likes.unshift(mock.user)
            } else {
                friendItem.likes.splice(friendItem.likes.findIndex((item: any) => item.name === mock.user.name), 1)
            }
            return {
                ...state,
                friendBody
            }
        case types.ADD_REVIEW:
            console.log(state.curReview);
            const friendBodyCopy: any = [...state.friendBody]
            const friendItemCopy: any = friendBodyCopy.find((item: any) => item.id === state.curReview)
            friendItemCopy.reviewList.push({
                answer: state.friendHeader.user.name,
                content: action.payload
            })
            return {
                ...state,
                friendBody: friendBodyCopy,
                isWrite: false
            }
        case types.SET_ACTION_CONTROLL:
            return {
                ...state,
                curControllId: action.payload
            }
    }
    return state
}
