import React from 'react';

const ContactForm = () => {


    const handleFormSubmit = (evt)=>{
        evt.preventDefault();
        const form=evt.target;//recupération du form
        const formData= new FormData(form);
        const jsonData = Object.fromEntries(formData.entries()); //je recupere l'ensemble des inputs ayant un "name"
        // version une seule ligne :
        // const jsonData2=Object.fromEntries(new FormData(evt.target));
        console.log(jsonData);
    };

    return (
   
        <form onSubmit={handleFormSubmit}>
        <div className="w-50 m-auto mt-5">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Votre E-Mail</label>
                <input name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="formControl" className="form-label">Votre commentaire</label>
                <textarea name="messageForm" className="form-control" id="formControl" rows="3"></textarea>
            </div>
            <div className='d-flex justify-content-center'>
                <button type="submit" className='rounded-2 bg-dark text-light text-center '>Envoyer</button>
            </div>
        </div>
        </form>
    );
};

export default ContactForm;