import type {CSSProperties, FC} from 'react'

export type IconProps2 = {
  name: string
  style?: CSSProperties // ?: 는 없어도 된다는 것을 의미함
}

//typeScript 에서는 ...연산자를 제공(전개연산자, 잔여연산자)
//data-set 같은 경우를 처리 할 수 있다
export const Icon2: FC<IconProps2> = function (iconProps: IconProps2) {
  const {name, ...remains} = iconProps
  return (
    <span className="material-symbols-outlined" {...remains}>
      {name}
    </span>
  )
}
