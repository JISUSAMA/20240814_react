import type * as T from './types'

//5-! 차이점 : 객체를 변수에 할당
//5-2 는 객체를 리턴해주는 함수를 정의
export const setClock = (payload: T.State): T.SetClockAction => ({
  type: '@clock/setClock',
  payload: payload
})
