import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../Logo'
import { logout, setStatus } from '../../redux/slices/authSlice'
import { STATUS } from '../../redux/slices/authSlice'
import SearchForm from '../Forms/SearchForm'
import './header.scss'

const Header = () => {
    const { authLogin } = useSelector((state) => state.authSlice)
    const dispatch = useDispatch()

    const onClickLogout = () => {
        localStorage.removeItem('token')
        dispatch(logout(null))
        dispatch(setStatus(STATUS.LOADING))
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link className="header__logo" to={'/'}>
                        <Logo />
                    </Link>
                    <SearchForm />
                    {authLogin ? (
                        <div className="header__links">
                            <Link
                                to={'/create-post'}
                                className="header__btn-create"
                            >
                                Создать пост
                            </Link>
                            <button
                                onClick={onClickLogout}
                                className=" header__btn-logout"
                            >
                                Выйти
                            </button>
                        </div>
                    ) : (
                        <div className="header__links">
                            <Link className="header__link" to={'auth/login'}>
                                Войти
                            </Link>
                            <Link
                                className="header__link"
                                to={'auth/registration'}
                            >
                                Создать аккаунт
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
