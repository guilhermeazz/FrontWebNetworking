import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MultiSelect from '../components/multiSelect'
import { skills, interests, fieldsOfWork } from '../data/options'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    skills: [] as { id: string; name: string }[],
    interests: [] as { id: string; name: string }[],
    fieldsOfWork: [] as { id: string; name: string }[],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const registerResponse = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!registerResponse.ok) {
        throw new Error('Erro ao cadastrar usuário.')
      }

      const loginResponse = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password }),
      })

      if (!loginResponse.ok) {
        throw new Error('Erro ao realizar login automático.')
      }

      const { token } = await loginResponse.json()

      localStorage.setItem('token', token)

      navigate('/home', { state: { message: 'Cadastro e login realizados com sucesso!' } })
    } catch (error: any) {
      console.error(error)
      alert(error.message || 'Erro ao processar sua solicitação.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Cadastrar-se</h1>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8">
          {/* Coluna Esquerda: Dados Pessoais */}
          <div className="flex-1 space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Nome"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              name="password"
              type="password"
              placeholder="Senha"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Coluna Direita: Seleções */}
          <div className="flex-1 space-y-4">
            <MultiSelect
              label="Skills"
              options={skills}
              selected={form.skills}
              onChange={skills => setForm({ ...form, skills })}
            />

            <MultiSelect
              label="Interesses"
              options={interests}
              selected={form.interests}
              onChange={interests => setForm({ ...form, interests })}
            />

            <MultiSelect
              label="Área de Atuação"
              options={fieldsOfWork}
              selected={form.fieldsOfWork}
              onChange={fieldsOfWork => setForm({ ...form, fieldsOfWork })}
            />
          </div>
        </form>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full mt-6 bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Cadastrar
        </button>
      </div>
    </div>
  )
}
