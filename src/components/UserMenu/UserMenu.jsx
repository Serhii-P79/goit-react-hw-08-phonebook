import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
// import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from 'img/default-avatar.png';
import Button from '@mui/material/Button';
import { UserMenuCSS } from './UserMenu.styled';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <UserMenuCSS>
      <img src={avatar} alt="" width="32" />
      <span>Welcome, {name}</span>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log off
      </Button>
    </UserMenuCSS>
  );
}
