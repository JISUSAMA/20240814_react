import type {FC, ReactNode} from 'react'

// PProps 객체이고 children이라는 원소를 가진다. 이때 ?:
export type PProps = {children?: ReactNode}

const P: FC<PProps> = function (props: PProps) {
  const {children} = props
  return <p children={children} />
}

export default P
