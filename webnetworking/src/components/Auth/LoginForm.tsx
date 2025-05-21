import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (res.ok) {
        const data = await res.json()
        localStorage.setItem('token', data.token)
        navigate('/home', { state: { message: 'Login concluído!' } })
      } else {
        alert('Falha no login')
      }
    } catch (error) {
      console.error('Erro:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="border p-2 w-full"
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        type="password"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Entrar
      </button>
    </form>
  )
}

export default LoginForm
