import React from "react";
import emailjs from 'emailjs-com';

import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


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

  const classes = useStyles();

  function sendEmail(e) {
    
    e.preventDefault();

    emailjs.sendForm('default_service', 'reach_F', e.target, 'user_6E17hEsOwkfjk6uHyijD7')
    .then((res) => {console.log(res.text);
    }, (error) => {console.log(error.text);
    });
  }
  function logoutSubmit (){

    props.history.push("/");
                      
  }

  return (
    <div className={classes.root}>
      <Grid  className={classes.image} container spacing={8}>
        <Grid item xs={8} sm={4}>
            <Paper className={classes.paper}>
                <form className="contact-form" onSubmit={sendEmail}>
                    <label>name</label>  
                    <input type="text" name="user_name" /> 
                    <br />
                    <label>Email</label>            
                    <input type="email" name="user_email" />
                    <br />
                    <label>Message</label>            
                    <textarea name="message" />            
                </form>
            </Paper>
        </Grid>
      </Grid>
      <Button onClick={logoutSubmit} className={classes.button} variant="contained" color="primary" >Log out</Button> 

    </div>
  );
// }


// export default function F() {



// return (
//     <form className="contact-form" onSubmit={sendEmail}>
//     <input type="hidden" name="contact_number" />
//     <label>F</label>      
//     <input type="text" name="user_name" /> 
//     <label>Email</label>
//     <input type="email" name="user_email" />
//     <label>Message</label>
//     <textarea name="message" />
//     <input type="submit" value="Send" />
//     </form>
// );
}