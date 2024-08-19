import type {FC} from 'react'
export type ArrowComponentProps = {
  href: string
  text: string
}
// 상용구 코드 (boiler palte) 가 없어서 좀 더 간결하게 구현 가능
const ArrowComponent: FC<ArrowComponentProps> = props => {
  const {href, text} = props
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  )
}
export default ArrowComponent
