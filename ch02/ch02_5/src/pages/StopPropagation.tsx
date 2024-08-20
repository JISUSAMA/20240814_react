import type {SyntheticEvent} from 'react'
export default function StopPropagation() {
  const onDivClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, currentTaget} = e
    // prettier-ignore
    console.log('onDivClick::mouse click on <button>', isTrusted, target, bubbles)
  }
  const onButtonClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles} = e
    // prettier-ignore
    console.log('onButtonClick::', isTrusted, target, bubbles)
  }
  return (
    <div onClick={onDivClick}>
      <span>StopPropagation</span>
      <button onClick={onButtonClick}> Click Me </button>
    </div>
  )
}
