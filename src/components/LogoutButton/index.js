// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const buttonOnClick = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <button type="button" onClick={buttonOnClick}>
        Logout
      </button>
    </>
  )
}

export default withRouter(LogoutButton)
