import {Icon, Icon2} from '../components'

export default function UsingIcon() {
  return (
    <div>
      <h3>UsingIcon</h3>
      <Icon name="home" style={{color: 'blue'}} />
      <Icon name="sentiment_satisfied" style={{color: 'yellow', fontSize: '50px'}} />
      <Icon2 name="rocket_launch" style={{color: 'blue'}} data-role="USER" />
    </div>
  )
}
