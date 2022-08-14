import styles from './Admin.module.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Admin = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className={`mb-3 justify-content-center ${styles.tabs_width}`}
        fill
      >
        <Tab eventKey="home" title="Еда">
          <div className={styles.tabs_width}>
            <div class="form-floating mb-3">
              <input type="email" class={`form-control ${styles.input_width}`} id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Название товара</label>
            </div>
            <div class="form-floating">
              <input type="password" class={`form-control ${styles.input_width}`} id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Цена</label>
            </div>

            <div className={`form-floating mt-4 ${styles.comment_block}`}>
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              <label for="floatingTextarea">Описание</label>
            </div>
            
          </div>
        </Tab>
        <Tab eventKey="profile" title="*Разработка*">
          <div className={styles.tabs_width}>
            <h1>dsdsadasdsadadd</h1>
          </div>
        </Tab>
        <Tab eventKey="contact" title="*Разработка*">
          <div className={styles.tabs_width}>
            <h1>dsdsad</h1>
          </div>
        </Tab>
      </Tabs>
    </>
  )
};


export default Admin;
