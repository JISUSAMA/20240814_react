import * as T from './types'

// types 의 State의 Card[]배열의 내용을 [](빈 배열)로 초기화
const initialState: T.State = []

// reducer에는 함수가 지역변수나 연산의 선언 없이 기능으로만 된값을 리턴
// 그래서 이런 reducer를 순수 함수라고 함
export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@cards/addCard':
      return [action.payload, ...state]
    case '@cards/removeCard':
      // filter 스트림을 통해 각각의 카드와 비교하면서 uuid 부재시 false를 리턴하여 제외
      return state.filter(card => card.uuid !== action.payload)
  }
  return state // 필수
}
