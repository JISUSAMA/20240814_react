import type * as T from './types'

export const addCard = function (payload: T.Card): T.AddCardAction {
  return {
    type: '@cards/addCard',
    payload
  }
}
export const removeCard = (payload: string): T.RemoveCardAction => ({
  type: '@cards/removeCard',
  payload: payload
})
