import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './RegBody.module.css';
import QueryForm from './QueryForm';

function RegBody() {
  return (
    <>
      <div className={classes.homepage}>
          <div className={classes.hpcontent}>
            <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            </h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s
            </p>
            <button className='btn'>Register Now {'\u00A0'} ➤</button>
          </div>
          <div className={classes.hpimg}>
            <img src={require('../img/5834.jpg')}>
            </img>
          </div>
      </div>

      <div className={classes.whoarewe}>
        <div className={classes.whead}>
            <h1>Who  Are  We?
            </h1>
        </div>
        <div className={classes.wcontent}>
            <p>An initiative by KSU UNION, College Of Engineering Trivandrum
            </p>
        </div>
      </div>

      <div className="footer">
        <QueryForm></QueryForm>
      </div>
      
    </>
  )
}

export default RegBody