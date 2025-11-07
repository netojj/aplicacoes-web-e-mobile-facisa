import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [remember, setRemember] = useState(false)

  function validate() {
    if (!email) return 'Preencha o e-mail.'
    // simples validação de e-mail
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return 'E-mail inválido.'
    if (!password) return 'Preencha a senha.'
    if (password.length < 4) return 'Senha muito curta.'
    return ''
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSuccess('')
    const v = validate()
    if (v) {
      setError(v)
      return
    }

    setLoading(true)
    // simula request
    setTimeout(() => {
      setLoading(false)
      // mock: aceita qualquer credencial
      const token = btoa(email + ':' + password)
      try {
        if (remember) localStorage.setItem('token', token)
      } catch (_) {}
      setSuccess('Login efetuado com sucesso.')
      setEmail('')
      setPassword('')
    }, 900)
  }

  return (
    <div className="login-container" role="main">
      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <h1>Entrar</h1>

        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <label className="field">
          <span>E-mail</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@exemplo.com"
            autoComplete="email"
            required
          />
        </label>

        <label className="field">
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
            required
          />
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <span>Lembrar de mim</span>
        </label>

        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>

        <div className="helper">
          <a href="#" onClick={(e) => e.preventDefault()}>
            Esqueci a senha
          </a>
        </div>
      </form>
    </div>
  )
}
