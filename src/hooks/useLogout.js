import { auth } from "../firebase/config"
import { signOut } from 'firebase/auth'

export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('user logout');
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return { logout }
}