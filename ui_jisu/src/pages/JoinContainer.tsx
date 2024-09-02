import { Title } from '../components'
import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import type { FormEvent } from 'react'

export default function JoinContainer() {

  //id, pass, repass, mobile, email
  const [id, setId] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const [repass, setRPass] = useState<string>('')
  const [mobile, setMobile] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const refId = useRef<HTMLInputElement>(null)
  const refPass = useRef<HTMLInputElement>(null)
  const refRPass = useRef<HTMLInputElement>(null)
  const refMobile = useRef<HTMLInputElement>(null)
  const refEmail = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login')
  }
  const goToMain = () => {
    navigate('/main')
  }
  const setWidth = (wSize: number): object => {
    return { width: wSize + 'px', display: 'inline-block' }
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() //웹브라우저가 onSubmit이벤트가 발생하면 form페이지를 리렌더링함. 무조건 사용.

    if (refId.current?.value === '') {
      alert('Please Check ID')
      if (refId.current !== null) refId.current.focus()
      return
    }
    if (refPass.current?.value === '') {
      alert('Please Check Password')
      if (refPass.current !== null) {
        refPass.current.focus()
      }
      return
    }
    if (refRPass.current?.value === '') {
      alert('Please Check RPass')
      if (refRPass.current !== null) refRPass.current.focus()
      return
    }
    if (refPass.current?.value !== refRPass.current?.value) {
      alert('password mismatch')
      if (refPass.current !== null) {
        refPass.current.focus()
      }
      return
    }
    if (refMobile.current?.value === '') {
      alert('Please Check Mobile')
      if (refMobile.current !== null) refMobile.current.focus()
      return
    }
    if (refEmail.current?.value === '') {
      alert('Please Check Email')
      if (refEmail.current !== null) refEmail.current.focus()
      return
    }
    goToMain();
  }

  return (
    <section
      className="m-4"
      style={{ background: 'gray', width: '500px', borderRadius: '20px', color: 'white' }}>
      <Title className="mb-5" style={{ color: 'white' }}>
        Join
      </Title>
      <form method="post" onSubmit={onSubmit}>
        <div className="flex items-center justify-center mb-3 ">
          <label htmlFor="id" style={setWidth(80)}>
            ID
          </label>
          <input
            type="ID"
            className="p-1 text-black rounded-md form-control"
            id="id"
            aria-describedby="idHelp"
            ref={refId}
          />
        </div>
        <div className="flex items-center justify-center mb-3 ">
          <label htmlFor="pass" style={setWidth(80)}>
            Pass
          </label>
          <input
            type="password"
            className="p-1 text-black rounded-md form-control"
            id="pass"
            ref={refPass}
            style={{ borderRadius: '5px' }}
          />
        </div>
        <div className="flex items-center justify-center mb-3 ">
          <label htmlFor="repass" style={setWidth(80)}>
            RePass
          </label>
          <input
            type="password"
            className="p-1 text-black rounded-md form-control"
            id="repass"
            ref={refRPass}
            style={{ borderRadius: '5px' }}
          />
        </div>
        <div className="flex items-center justify-center mb-3 ">
          <label htmlFor="mobile" style={setWidth(80)}>
            Mobile
          </label>
          <input
            type="text"
            className="p-1 text-black rounded-md form-control"
            id="mobile"
            ref={refMobile}
            style={{ borderRadius: '5px' }}
          />
        </div>
        <div className="flex items-center justify-center mb-3">
          <label htmlFor="email" style={setWidth(80)}>
            Email
          </label>
          <input
            type="Email"
            className="p-1 text-black rounded-md form-control"
            id="email"
            ref={refEmail}
            style={{ borderRadius: '5px' }}
          />
        </div>
        <div className="flex items-center justify-center mb-3">
          <label style={setWidth(80)}>성별</label>
          <div style={setWidth(185)}>
            <label className="form-radio-label" htmlFor="male">
              남
            </label>
            <input type="radio" className="form-check-input" id="male" name="gender" />
            <label
              style={setWidth(50)}
              className="text-right form-radio-label"
              htmlFor="female">
              여
            </label>
            <input
              type="radio"
              className="form-check-input"
              id="female"
              name="gender"
              defaultChecked
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mb-3 justify-evenly">
          <button type="submit" className="btn btn-warning">
            <span style={setWidth(70)}>가입</span>
          </button>
          <button type="button" className="btn btn-info" onClick={goToLogin}>
            <span style={setWidth(70)}>취소</span>
          </button>
        </div>
      </form>
    </section>
  )
}
