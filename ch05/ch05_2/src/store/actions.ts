import type {Action} from 'redux'
//Action reducer 함수로 연결된다
//'setToday'라는 type을 정의하고 {today:Date} 객체를 추가
export type SetTodayAction = Action<'setToday'> & {
  today: Date
}
export type Actions = SetTodayAction
