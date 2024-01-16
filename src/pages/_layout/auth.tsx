import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <h1>aqui 2</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
