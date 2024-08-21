import {Icon, Icon2} from '../components'

export default function UsingIcon() {
  return (
    <div>
      <h3>UsingIcon</h3>
      <Icon name="home" style={{color: 'blue'}}></Icon>
      <Icon
        name="check_circle_outline"
        style={{color: 'yellow', fontSize: '50px'}}></Icon>
      <Icon2 name="favorite" style={{color: 'blue', fontSize: '50px'}}></Icon2>
    </div>
  )
}
