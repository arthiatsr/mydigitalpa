import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import API from "../utils/API";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  image: {
    padding: 60,
    margin: 10,
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  },
  signinbutton: {
    background: 'linear-gradient(45deg, green, 95%, #FF8E53 5%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  signupbutton: {
    background: 'linear-gradient(45deg, red, 95%, #FF8E53 5%)',
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
  copyRig: {
    padding: 60,

  },
});

function Copyright() {
  return (
    <div align="center">
      {'Copyright © '}      
      {new Date().getFullYear()}
    </div>
  );
}

class Auth extends Component {
  state = {
    Authen: [],
    email: "",
    password: "",
    valid: false
  };

signInChange = event => {
const { name, value } = event.target;
this.setState({
    [name]: value
});
};
  
signUpSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      console.log(this.state.email,this.state.password)
      API.saveAuth({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.setState({ Authen: res.data, email: "", password: "" }),
        this.props.history.push("/loggedin")
        )
        .catch(err => console.log(err));
    }
};

signInSubmit = event => {
  event.preventDefault();
  if ((this.state.email) && (this.state.password)) {

    API.getAuth(this.state.email,this.state.password)

        .then(res => { res.data.length > 0 ? this.props.history.push("/loggedin") : alert(`Login Failed`)})
        .catch(err => alert(`Login Failed`));
    } 
};

render() {
  const { classes } = this.props;
  return (      
    <div className={classes.root}>
        <Grid  className={classes.image} container direction="column" spacing={3}>
            <Grid item xs={8} sm={4}>
              <Paper className={classes.paper}>
                <h3>Authentication Please</h3>
                <form  className={classes.root} noValidate autoComplete="off">
                  <TextField id="emainsignup" required fullWidth label="Enter Email" type="email" 
                  value={this.state.email}
                  onChange={this.signInChange}
                  name="email" 
                    />
                  <TextField id="passwordsignup" required fullWidth label="Enter Password" type="password" 
                  onChange={this.signInChange}
                  name="password" 
                  value={this.state.password} />
                  <Button onClick={this.signInSubmit}  className={classes.signinbutton} fullWidth variant="contained" color="primary" >Sign In</Button> 
                  <Button onClick={this.signUpSubmit} className={classes.signupbutton} fullWidth variant="contained" color="primary" >Sign Up</Button> 
                </form>
              </Paper>
            </Grid>
        </Grid>  
        <Grid>
          <Copyright className={classes.copyRig} />
        </Grid>                      
    </div>      
    );
  }
}

export default withStyles(useStyles)(Auth);
