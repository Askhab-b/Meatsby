import styles from './Admin.module.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '@/store/shopping-cart/authSlice';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import axios from '../../api/axios'

const Admin = () => {
  const isAuth = useSelector(selectIsAuth)
  const router = useRouter()
  const dispatch = useDispatch()
  const [image, setImageUrl] = useState('');

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData()
      const file = event.target.files[0]
      formData.append('image', file)
      const { data } = await axios.post('/upload', formData)
      setImageUrl(data.url)
    } catch (e) {
      console.warn(e);
    }
  };

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      title: '',
      text: '',
    },
    mode: 'onChange'
  })
  const onSubmit = async (values) => {
    const data = await dispatch(addNews({ values, image }))
    // Здесь должно быть уведомление
    return data
  }

  useEffect(() => {
    if (!isAuth) {
      router.push('/error')
    }
  }, [])

  return (
    <>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className={styles.tabs_width}
        fill
      >

        <Tab eventKey="home" title="Еда">
          <div className={`${styles.tabs_width} ${styles.margin_b}`}>
          <form onSubmit={handleSubmit(onSubmit)}> 
            <div className="form-floating mb-3">
              <input type="email" 
              className={`form-control ${styles.input_width}`} 
              id="floatingInput" 
              placeholder="name@example.com" 

              />
                <label htmlFor="floatingInput">Название товара</label>
            </div>
            <div className="form-floating">
              <input type="number" 
              className={`form-control ${styles.input_width}`} 
              id="floatingNumber" 
              placeholder="Цена" 
              {...register('price', { required: true })}
              defaultValue={''}
              />
                <label htmlFor="floatingPassword">Цена</label>
            </div>

            <div className={`form-floating mt-4 ${styles.comment_block}`}>
              <textarea 
              className="form-control" 
              placeholder="Leave a comment here" 
              id="floatingTextarea"
              {...register('text', { required: true })}
              defaultValue={''}
              />
              <label htmlFor="floatingTextarea">Описание</label>
            </div>
            
            <div className="form-group">
              <input 
              type="file" 
              className={styles.file__input} 
              id="exampleFormControlFile1" 
              {...register('ImageUrl', { required: true })}
              onChange={handleChangeFile}
              />
            </div>

            <button className={`${styles.add_button} d-flex align-items-center justify-content-between`}>Добавить</button>
          </form>

          </div>
        </Tab>
        <Tab eventKey="profile" title="*Разработка*">
          <div className={`${styles.tabs_width} ${styles.margin_b}`}>
            <h1>dsdsadasdsadadd</h1>
          </div>
        </Tab>
        <Tab eventKey="contact" title="*Разработка*">
          <div className={`${styles.tabs_width} ${styles.margin_b}`}>
            <h1>dsdsad</h1>
          </div>
        </Tab>
      </Tabs>
    </>
  )
};


export default Admin;
