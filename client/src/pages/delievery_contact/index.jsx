import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section class={`mb-4 ${styles.contact__page}`}>
    
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</p>
    
        <div class="row">
    
            <div class="mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
    
                    <div class="row">
    
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <label htmlFor="name" class="">Your name</label>
                                <input type="text" id="name" name="name" class="form-control" />
                            </div>
                        </div>
    
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <label htmlFor="email" class="">Your email</label>
                                <input type="text" id="email" name="email" class="form-control" />
                            </div>
                        </div>
    
                    </div>
   
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                                <label htmlFor="subject" class="">Subject</label>
                                <input type="text" id="subject" name="subject" class="form-control" />
                            </div>
                        </div>
                    </div>
          
                    <div class="row">
    
                        <div class="col-md-12">
    
                            <div class="md-form">
                                <label htmlFor="message">Your message</label>
                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            </div>
    
                        </div>
                    </div>
    
                </form>
    
                <div class={`text-center text-md-left ${styles.contact__button}`}>
                    <a class="btn btn-primary"> Отправить </a>
                </div>
            </div>
    
        </div>
    
    </section>
  
    )
};


export default Contact;
