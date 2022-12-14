
import { useForm } from 'react-hook-form';
import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from '../../store/shopping-cart/authSlice';
import { selectIsAuth } from '../../store/shopping-cart/authSlice';
import styles from './Login.module.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const Login = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const router = useRouter()

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange'
  })

  const notificration = () => toast('Ошибка при авторизации')

  const onSubmit = async (values) => {
    const data = await dispatch(doLogin(values))

    if (!data.payload) {
      return notificration()
      
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }
   
  }

  useEffect(() => {
    if (isAuth) {
      router.push('/admin_panel')
    }
  })
  
  return (
    <>
    <Helmet title="Вход в личный кабинет" />
      <CommonSection title="Войти в личный кабинет" />
      <section>
        <Container>
          <Row>
            <Col lg="6" sm="12" className="m-auto text-center">
              <form className={`${styles.form} mb-5`} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form__group}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Электронный адрес"
                    required
                    {...register('email', { required: true,  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
                  />
                </div>
                <div className={styles.form__group}>
                  <input
                    type="password"
                    placeholder="Пароль"
                    required
                    {...register('password', { required: true, minLength: 6 })}
                  />
                </div>

                <button type="submit" className={styles.addTOCart__btn} disabled={!isValid}>
                  Войти в аккаунт</button>
                <ToastContainer 
                   />
              </form>
              <Link href="/user_register">У вас нет аккаунта?</Link>
            </Col>
          </Row>
        </Container>
      </section>
  </>
);
};

export default Login;
