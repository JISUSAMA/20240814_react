import {useMemo, useCallback} from 'react'
import {Title} from '../components'
import {Button} from '../theme/daisyui'
import * as D from '../data'

export default function HighOrderCallback() {
  // 고차 함수는 콜백함수에 어떤 정보를 추가로 전달하려고 할 때 사용
  const onClick = useCallback(function (name: string) {
    return function () {
      return alert(`${name} clicked`)
    }
  }, [])

  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            onClick={onClick(name)}
            className="normal-case btn-primary btn-wide btn-xs">
            {name}
          </Button>
        )),
    [onClick]
  )

  return (
    <div className="mt-4">
      <Title>HighOrderCallback</Title>
      <div className="flex mt-4 justify-evenly">{buttons}</div>
    </div>
  )
}
