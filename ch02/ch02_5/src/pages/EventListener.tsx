document.querySelector('#root')?.addEventListener('click', function (e: Event) {
  const {isTrusted, target, bubbles} = e
  console.log('EventListener::mouse click occurs!', isTrusted, target, bubbles)
})
document.querySelector('root')?.addEventListener('click', function (e: Event) {
  const {isTrusted, target, bubbles} = e
  console.log('EventListener::mouse click also occurs!', isTrusted, target, bubbles)
})
export default function EventListener() {
  return <div>EventListener</div>
}
