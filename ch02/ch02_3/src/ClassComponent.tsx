import {Component, ReactNode} from 'react'

export type ClassComponentProps = {
  href: string
  text: string
}
export default class ClassComponent extends Component<ClassComponentProps> {
  render(): ReactNode {
    const {href, text} = this.props
    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    )
  }
}
