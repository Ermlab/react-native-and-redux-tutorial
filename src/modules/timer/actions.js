import * as actionTypes from './actionTypes'

export function selectBoilType(type){
    return {
        type: actionTypes.SELECT_BOIL_TYPE
    }
}

export function startTimer(time){
    return {
        type: actionTypes.START_TIMER
    }
}

export function stopTimer() {
    return {
        type: actionTypes.STOP_TIMER
    }
}