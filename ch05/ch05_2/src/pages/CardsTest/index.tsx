import {useCallback, useMemo} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Icon} from '../../theme/daisyui'
import * as D from '../../data'
import type {AppState} from '../../store'
import * as C from '../../store/cards' //리덕스스토어로부터 가져옴
import {Title} from '../../components'
import Card from './Card'

// prettier-ignore
const makeCard = () =>
  D.makeCard(D.randomUUID(),D.makeRandomUser(),D.randomImage(200, 200),
     '', '', '', '') // Card 객체를 리턴

export default function CardsTest() {
  const dispatch = useDispatch()
  const cards = useSelector<AppState, C.State>(({cards}) => cards)
  const addCard = useCallback(() => {
    dispatch(C.addCard(makeCard()))
  }, [dispatch]) // 함수 실행하면 사용자 추가
  const removeCard = useCallback(
    // 고차 함수: 다른함수를 반환하는 함수,
    // 리액트에서 고차함수는 어떤 정보를 추가로 전달하려고 할때
    // 함수의 타입 불일치를 해결하기 위해서 사용
    // 예) onClick은 ()=>void 타입의 함수를 반환해야 하는데
    // 이때 매개변수를 전달할 수 없기에 함수를 하나 더 적용함.
    function (id: string) {
      return function () {
        //C.removeCard()는 리덕스스토어에 Action.
        dispatch(C.removeCard(id))
      }
    },
    [dispatch]
  )
  const children = useMemo(
    () =>
      // prettier-ignore
      cards.map(card => (
        <Card key={card.uuid} card={card} 
            onRemove={removeCard(card.uuid)} />
      )),
    [cards, removeCard]
  )
  return (
    <section className="mt-4">
      <Title>CardsTest</Title>
      <div className="flex justify-center mt-4">
        <Icon name="add" className="btn-primary" onClick={addCard} />
      </div>
      <div className="flex flex-wrap mt-4">{children}</div>
    </section>
  )
}
