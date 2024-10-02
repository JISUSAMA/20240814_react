import '../../pages/feeds/List'
import React, {useState} from 'react'

function LoginForm() {
  // 상태 관리
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // 로그인 버튼 클릭 시 호출되는 함수
  const handleLogin = e => {
    e.preventDefault() // 폼 제출 방지

    // 간단한 검증
    if (email === 'test@example.com' && password === 'password') {
      alert('로그인 성공!')
    } else {
      setError('잘못된 이메일 또는 비밀번호입니다.')
    }
  }

  return (
    <div style={styles.container}>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>이메일:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label>비밀번호:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          로그인
        </button>
      </form>
    </div>
  )
}

// 간단한 스타일링 객체
const styles = {
  container: {
    maxWidth: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    fontSize: '14px'
  }
}

export default LoginForm
