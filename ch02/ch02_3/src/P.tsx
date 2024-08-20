import type {FC, ReactNode} from 'react'
export type PProps = {children?: ReactNode}

const P: FC<PProps> = function (props: PProps) {
  const {children} = props
  return <p children={children} />
}
