import type {CSSProperties, FC} from 'react'

export type IconProps = {
  name: string
  style?: CSSProperties // ?: 는 없어도 된다는 것을 의미함
}

export const Icon: FC<IconProps> = function (props: IconProps) {
  const {name, style} = props
  return (
    <span className="material-symbols-outlined" style={style}>
      {name}
    </span>
  )
}
