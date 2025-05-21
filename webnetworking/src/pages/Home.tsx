import { useLocation } from 'react-router-dom'

export default function Home() {
  const location = useLocation()
  const message = location.state?.message

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
      <h1 className="text-3xl font-bold">
        {message || 'Bem-vindo à Home'}
      </h1>
    </div>
  )
}
