import styles from './Contact.module.css';
import Helmet from '@/components/Helmet/Helmet';

const Contact = () => {
  return (
    <>
    <Helmet title="Обратная связь" />
    <section class={`mb-4 ${styles.contact__page}`}>
    
        <h2 class="h1-responsive font-weight-bold text-center my-4">Обратная связь</h2>
        <p class="text-center w-responsive mx-auto mb-5">У вас есть вопросы? Пожалуйста, не стесняйтесь обращаться к нам напрямую. Наша команда ответит вам в течение
            нескольких часов, чтобы помочь вам.</p>
    
        <div class="row">
    
            <div class="mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
    
                    <div class="row">
    
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <label htmlFor="name" class="">Ваше имя</label>
                                <input type="text" id="name" name="name" class="form-control" />
                            </div>
                        </div>
    
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <label htmlFor="email" class="">Ваша электронная почта</label>
                                <input type="text" id="email" name="email" class="form-control" />
                            </div>
                        </div>
    
                    </div>
   
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                                <label htmlFor="subject" class="">Тема</label>
                                <input type="text" id="subject" name="subject" class="form-control" />
                            </div>
                        </div>
                    </div>
          
                    <div class="row">
    
                        <div class="col-md-12">
    
                            <div class="md-form">
                                <label htmlFor="message">Ваш текст</label>
                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            </div>
    
                        </div>
                    </div>
    
                </form>
    
                <div class={`text-center ${styles.contact__button}`}>
                    <a class="btn btn-primary"> Отправить </a>
                </div>
            </div>
    
        </div>
    
    </section>
    </>
    )
};


export default Contact;
