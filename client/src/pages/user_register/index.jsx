import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../store/shopping-cart/authSlice';
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { selectIsAuth } from '../../store/shopping-cart/authSlice';
import styles from './Register.module.css';

const Register = () => {
  const isAuth = useSelector(selectIsAuth)
  console.log(isAuth)
  const dispatch = useDispatch()
  const router = useRouter()

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    },
    mode: 'onChange'
  })

  const onSubmit = async (values) => {
    const data = await dispatch(createUser(values))

    if (!data.payload) {
      return alert('Не удалось зарегистрироваться!')
    }
    console.log(data);
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }

  }

  useEffect(() => {
    console.log(isAuth)
    if (isAuth) {
      console.log(true);
      router.push('/')
    }
  }, [])

  return (
    <>
    <Helmet title="Регистрация аккаунта" />
      <CommonSection title="Регистрация нового аккаунта" />
      <section>
        <Container>
          <Row>
            <Col lg="6" sm="12" className="m-auto text-center">
              <form className={`${styles.form} mb-5`} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form__group}>
                  <input
                    type="text"
                    placeholder="Имя"
                    {...register('firstname', { required: true })}
                  />
                </div>
                <div className={styles.form__group}>
                  <input
                    type="text"
                    placeholder="Фамилие"
                    {...register('lastname', { required: true })}
                  />
                </div>
                <div className={styles.form__group}>
                  <input
                    type="email"
                    placeholder="Электронный адрес"
                    {...register('email', { required: true,  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
                  />
                {errors.email && "Введите корректную электронную почту"}
                </div>
                <div className={styles.form__group}>
                  <input
                    type="password"
                    placeholder="Пароль"
                    {...register('password', { required: true, minLength: 6})}
                  />
                  {errors.password && "Минимальная длина пароля 6 символов"}
                </div>
                <button
                  type="submit"
                  className={styles.addTOCart__btn}
                  disabled={!isValid}
                >
                  Войти
                </button>
              </form>
              <Link href="/user_login">Уже есть аккаунт?</Link>
            </Col>
          </Row>
        </Container>
      </section>
      </>
  );
};

export default Register;
