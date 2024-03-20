
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export function useNotAuthenticated() {
  const history = useHistory();
  const accessToken = useSelector((state) => state.USER.accessToken);
  console.log("accessToken",accessToken);
  if (accessToken) {
    history.push('/');
  }
}

