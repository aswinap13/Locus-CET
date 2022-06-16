import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './QueryForm.module.css';
import Form from './Form';


function QueryForm() {
  return (
    <div className='container'>
        <div className={`${classes.contact} row`}>

            <div className={`col-md-6 ${classes.form}`}>
                <Form/>
            </div>

            <div className={`col-md-6 ${classes.connect}`}>
                <h2>Contact US</h2>
                <div className={`mt-4 ${classes.calling}`}>
                    <div className={classes.callus}>
                        <i class="fa-solid fa-phone fa-2x"></i>
                        <p>Call Us</p>
                        <a href='tel:+917994325113'>+917994325113</a>
                    </div>
                    <div className={classes.mailus}>
                        <i class="fa-solid fa-envelope fa-2x"></i>
                        <p>Mail Us</p>
                        <a href='mailto:locuscet@gmail.com'>locuscet@gmail.com</a>                        
                    </div>
                </div>
                <div className={`mt-5 ${classes.footer}`}>
                        <a href='' className={classes.ig}>
                        <i class="fa-brands fa-instagram fa-2x"></i>
                        </a>
                        <a href={classes.fb}>
                        <i class="fa-brands fa-facebook-square fa-2x"></i>
                        </a>
                    </div>
            </div>
        </div>
    </div>
    
  )
}

export default QueryForm