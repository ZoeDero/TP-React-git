import React from 'react';

const ContactForm = () => {
    return (
   
        
        <div className="w-50 m-auto mt-5">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Votre E-Mail</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="formControl" class="form-label">Votre commentaire</label>
                <textarea class="form-control" id="formControl" rows="3"></textarea>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='rounded-2 bg-dark text-light text-center '>Envoyer</button>
            </div>
        </div>
       
    );
};

export default ContactForm;