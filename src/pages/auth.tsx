import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
 
export default function LoginPage() {
  const router = useRouter()
 
  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
 
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
 
    if (response.ok) router.push('/')
  }

  async function handleLogout() {
    const response = await fetch(`/api/auth/logout`, {
      method: 'POST'
    })

    if (response.ok) router.push('/')
  }

  const [isSession, setIsSession] = useState<boolean>(false)
  const [sessionEmail, setSessionEmail] = useState(null)

  const getSessionFunc = async () => {
    const getSession = await fetch(`/api/getSession`, {})
    if (getSession.status === 200) {
      setIsSession(true)
      const sessionData = await getSession.json()
      setSessionEmail(sessionData.email.session)
    }
  }

  getSessionFunc()
 
  return (
    isSession
    ? <div>
        <h1>{sessionEmail}</h1>
        <button onClick={handleLogout} className="lgo-btn">Log out</button>
      </div>
    : <form onSubmit={handleLogin} className="lgn-form">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit" className="lgn-btn">Login</button>
      </form>
  )
}