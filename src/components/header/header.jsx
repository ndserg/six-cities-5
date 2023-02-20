import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getUserName} from '../../services/user-name';
import {AuthorizationStatus} from '../../const';
import {clearFavoritePlaces} from '../../store/action';
import {logoutAction} from '../../store/api-actions';

const Header = () => {
  const authorizationStatus = useSelector((state) => state.authorizationStatus);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = (authorizationStatus === AuthorizationStatus.Auth);

  const userName = isAuth ? getUserName() : `Login please!`;
  const favoritesCount = favorites ? favorites.length : 0;

  const handleClick = (evt) => {
    evt.preventDefault();

    navigate(`/`);
    dispatch(logoutAction());
    dispatch(clearFavoritePlaces());
  };

  const logOutTemplate = () => {
    return (
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={`/`}
          onClick={handleClick}>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    );
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={`/`}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuth ? `/favorites` : `/login`}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{userName}</span>
                  {!isAuth || <span className="header__favorite-count">{favoritesCount}</span>}
                </Link>
              </li>
              {!isAuth || logOutTemplate()}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
