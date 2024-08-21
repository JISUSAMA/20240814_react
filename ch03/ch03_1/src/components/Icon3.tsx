import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'

// prettier-ignore
// react 프레임워크에서 한꺼번에 특정 html 요소의 모든 속성들을 추가 할 수있는
// DetailedHTMLProps, HTMLAttributes
//<span></span> 의 모든 속성을 표현하는 타입
type ReactSpanProps = 
      DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// & 기호는 교집합, | 기호는 합집합
export type IconProps3 = ReactSpanProps & {name: string}
//ClassName은 span태그의 속성 가눙ㄴ데 className 속성을 직접 받은 변수
export const Icon3: FC<IconProps3> = function (iconProps: IconProps3) {
  // className: _className는 변수 이름을 className에서 _className으로 변경.
  const {name, className: _className, ...props} = iconProps
  const className = 'material-symbols-outlined'
  return (
    <span className={className} {...props}>
      {name}
    </span>
  )
}
