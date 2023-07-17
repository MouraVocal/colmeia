import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div>
      <h1>Error</h1>
      <i>{error.statusText || error.message}</i>
    </div>
  )
}
