import {Title} from '../components'
import {useNavigate} from 'react-router-dom'
import {useState, useRef} from 'react'
import type {FormEvent} from 'react'
export default function LoginContainer() {
  const [email, setEmail] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const refEmail = useRef<HTMLInputElement>(null)
  const refPass = useRef<HTMLInputElement>(null)

  const setLabel = function (wSize: number): object {
    return {width: wSize + 'px', display: 'inline-block'}
  }
  const navigate = useNavigate()
  const goToJoin = () => {
    navigate('/join')
  }
  const goToLogin = ()=>{
    navigate('/main')
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() //웹브라우저가 onSubmit이벤트가 발생하면 form페이지를 리렌더링함. 무조건 사용.

    if (refEmail.current?.value === '') {
      alert('Please Check Email')
      if (refEmail.current !== null) refEmail.current.focus()
      return
    }
    if (refPass.current?.value === '') {
      alert('Please Check Password')
      if (refPass.current !== null) {
        refPass.current.focus()
      }
      return
    }
    goToLogin();
  }

  return (
    <section
      className="mt-4"
      style={{background: 'gray', width: '300px', borderRadius: '20px', color: 'white'}}>
      <Title className="mb-5" style={{color: 'white'}}>
        Login
      </Title>
      <form method="post" onSubmit={onSubmit}>
        <div className="flex items-center justify-center mb-3 ">
          <label htmlFor="email" style={setLabel(80)}>
            Email
          </label>
          <input
            type="email"
            ref={refEmail}
            className="p-1 text-black rounded-md form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="flex items-center justify-center mb-3 ">
          <label htmlFor="pass" style={setLabel(80)}>
            Password
          </label>
          <input
            type="password"
            ref={refPass}
            className="p-1 text-black rounded-md form-control"
            id="pass"
          />
        </div>
        <div className="flex flex-row items-center justify-end pr-6 mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="flex flex-row items-center mb-3 justify-evenly">
          <button type="submit" className="btn btn-warning">
            <span style={setLabel(70)}>Login</span>
          </button>

          <button type="button" className="btn btn-info" onClick={goToJoin}>
            <span style={setLabel(70)}>Join</span>
          </button>
        </div>
      </form>
    </section>
  )
}
