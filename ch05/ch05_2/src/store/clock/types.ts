import type {Action} from 'redux'

export type State = Date //Date는 ineterface
export type SetClockAction = Action<'@clock/setClock'> & {
  payload: State
}
export type Actions = SetClockAction
