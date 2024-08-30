import type {Action} from 'redux'
import * as D from '../../data'

export type State = D.IRandomUser

// SetUserAction 의 타입이 {type : '@remoteUser/setuser'. payload: D.IRandomUser}
export type SetUserAction = Action<'@remoteUser/setUser'> & {
  payload: D.IRandomUser
}

export type ChangeEmailAction = Action<'@remoteUser/changeEmail'> & {
  payload: string
}

export type NameType = {
  title: string
  first: string
  last: string
}

export type ChangeNameAction = Action<'@remoteUser/changeName'> & {
  payload: NameType
}
export type PictureType = {large: string}
export type ChangePictureAction = Action<'@remoteUser/changePicture'> & {
  payload: PictureType
}

export type Actions =
  | SetUserAction
  | ChangeEmailAction
  | ChangeNameAction
  | ChangePictureAction
