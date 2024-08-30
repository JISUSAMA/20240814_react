import {combineReducers} from 'redux'

import * as Clock from './clock'
import * as Counter from './counter'
import * as RemoteUser from './remoteUser'
import * as Cards from './cards'

export const rootReducer = combineReducers({
  clock: Clock.reducer,
  counter: Counter.reducer,
  remoteUser: RemoteUser.reducer,
  cards: Cards.reducer
})
