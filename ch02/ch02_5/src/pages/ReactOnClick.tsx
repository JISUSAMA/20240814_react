import type {SyntheticEvent} from 'react'
export default function ReactOnClick() {
  const onClick = function (e: SyntheticEvent) {
    const {isTrusted, target, bubbles} = e
    console.log('ReactOnClick::mouse click occurs!', isTrusted, target, bubbles)
  }
  return (
    <>
      <span>ReactOnClick</span>
      <button onClick={onClick}> Click Me </button>
    </>
  )
}
