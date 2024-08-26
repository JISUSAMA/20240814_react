import {Title} from '../components'

export default function JoinContainer() {
  const setWidth = (wSize: number): object => {
    return {width: wSize + 'px', display: 'inline-block'}
  }
  return (
    <section
      className="m-4"
      style={{background: 'gray', width: '500px', borderRadius: '20px', color: 'white'}}>
      <Title className="mb-5" style={{color: 'white'}}>
        Join
      </Title>
      <form method="post" action="">
        <div className="flex items-center justify-center mb-3 ">
          <label htmlFor="id" style={setWidth(80)}>
            ID
          </label>
          <input
            type="ID"
            className="p-1 text-black rounded-md form-control"
            id="id"
            aria-describedby="idHelp"
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
            style={{borderRadius: '5px'}}
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
            style={{borderRadius: '5px'}}
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
            style={{borderRadius: '5px'}}
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
            style={{borderRadius: '5px'}}
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
          <button type="button" className="btn btn-warning">
            <span style={setWidth(70)}>가입</span>
          </button>
          <button type="button" className="btn btn-info">
            <span style={setWidth(70)}>취소</span>
          </button>
        </div>
      </form>
    </section>
  )
}
