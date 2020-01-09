import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  
  }));
  
export default function Signin(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const classes = useStyles();

    function loginSubmit (event){

        event.preventDefault();        
        // if((email === "arthiatsr@gmail.com") && (password === "america")){
        //     console.log("hiinside");
        //     props.history.push("/login");
        // }
        // else{
        //     alert(`Login Failed`);
        // }           
        
    }
               
    return (

    <div className={classes.root}>
        <Grid container direction="column" spacing={3}>
            <Grid item xs={8} sm={4}>
                <Paper className={classes.paper}>
                <h3>Sign in</h3>
                <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" required fullWidth label="Enter Email" type="email" onChange={e => setEmail(e.target.value)} name="email" value={email} />
                <TextField id="standard-basic" required fullWidth label="Enter Password" type="password" onChange={e => setPassword(e.target.value)} name="password" value={password} />
                <Button onClick={loginSubmit} className={classes.button} fullWidth variant="contained" color="primary" >Log in</Button> 
                </form>
                </Paper>
            </Grid>        
        </Grid>
    </div>
    );

}

