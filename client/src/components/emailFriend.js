import React, { useState} from "react";
import emailjs from 'emailjs-com';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useInput} from './useInput';

const useStyles = makeStyles(theme => ({
  root: {
     flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: 30,
  },
  image: {
    padding: 60,
    margin: 30,
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundPosition: 'right',

  },
}));

export default function Friend(props) {

  const { value:user_name, bind:binduser_name, reset:resetuser_name } = useInput('');
  const { value:user_email, bind:binduser_email, reset:resetuser_email } = useInput('');
  const { value:user_message, bind:binduser_message, reset:resetuser_message } = useInput('');

//   const clearFormSubmit = (e) => {
//     e.preventDefault();
//     resetuser_name();
//     resetuser_email();
//     resetuser_message();

// }

  const classes = useStyles();

  function sendEmail(e) {
    
    e.preventDefault();

    emailjs.sendForm('default_service', 'reach_friend', e.target, 'user_6E17hEsOwkfjk6uHyijD7')
    .then((res) => {console.log(res.text);
      resetuser_name();
      resetuser_email();
      resetuser_message(); 
    }, (error) => {console.log(error.text);
    });
  }
  function logoutSubmit (){

    props.history.push("/");
                      
  }
  
  return (    
    <div>
      <Button onClick={logoutSubmit} className={classes.button} variant="contained" color="primary" >Log out</Button> 
      
                <form className="contact-form" onSubmit={sendEmail
                  // ,clearFormSubmit
                  }>
                    <label>name</label>  
                    <input type="text" {...binduser_name} name="user_name" /> 
                    <br />
                    <label>Email</label>            
                    <input type="email" {...binduser_email} name="user_email" />
                    <br />
                    <label>Message</label>            
                    <textarea {...binduser_message} name="message" /> 
                    <input type="submit"  value="Send"  />           
                </form>
    </div>
  );
 }

 