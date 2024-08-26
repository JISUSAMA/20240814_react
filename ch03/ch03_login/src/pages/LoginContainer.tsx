import {Title} from '../components'
import {useNavigate} from 'react-router-dom'
export default function LoginContainer() {
  const setLabel = (wSize: string): object => {
    return {
      width: wSize + 'px',
      display: 'inline-block'
    }
  }
  const setInput = () => {
    return {
      padding: '7px',
      borderRadius: '5px'
    }
  }
  const navigate = useNavigate()
  const goToJoin = () => {
    navigate('/join')
  }

  return (
    <section
      className="mt-4"
      style={{background: 'gray', width: '300px', borderRadius: '20px', color: 'white'}}>
      <Title className="mb-5" style={{color: 'white'}}>
        Login
      </Title>
      <form method="post" action="">
        <div className="flex items-center justify-center mb-3 ">
          <label htmlFor="exampleInputEmail1" style={setLabel('75')}>
            Email
          </label>
          <input
            type="email"
            className="text-black form-control"
            id="exampleInputEmail1"
            style={setInput()}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="flex items-center justify-center mb-3 ">
          <label htmlFor="exampleInputPassword1" style={setLabel('75')}>
            Password
          </label>
          <input
            type="password"
            className="text-black form-control"
            style={setInput()}
            id="exampleInputPassword1"
          />
        </div>
        <div className="flex flex-row items-center justify-end pr-6 mb-3 form-check">
          <input type="checkbox" className="form-check-input " id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="flex flex-row items-center justify-center mb-3">
          <button type="button" className="btn btn-warning">
            <span style={setLabel('70')}>Login</span>
          </button>
          <label htmlFor="exampleInputPassword1" style={setLabel('20')}></label>
          <button type="button" className="btn btn-info" onClick={goToJoin}>
            <span style={setLabel('70')}>Join</span>
          </button>
        </div>
      </form>
    </section>
  )
}
