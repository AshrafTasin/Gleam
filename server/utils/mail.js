import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import {google} from 'googleapis';

dotenv.config({path: '../config.env'});


const oauth2client = new google.auth.OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET,process.env.REDIRECT_URI);
oauth2client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

export const generateToken = () => {
    let token='';

    for(let i=0;i<4;++i){
        const val = Math.round(Math.random()*8);
        token+=val;
    }

    return token;
};

export const mailSender = () =>  {
    console.log("x1");

    try {
        //const accessToken = oauth2client.getAccessToken();
        var transport = nodemailer.createTransport({
            service:'gmail',
            auth: {
              type: 'OAuth2',
              user: process.env.MAIL_USER,
              clientId: process.env.CLIENT_ID,
              clientSecret: process.env.CLIENT_SECRET,
              refreshToken: process.env.REFRESH_TOKEN,
              accessToken: "ya29.a0ARrdaM_ZQ1A4louhF1vwzyc60VuW-x2GWz7VEdNnJMtC6uoBMjIiueJoZT8btGL8aKTm_mzpaTG5QOlEUzsfLftuyY6OMr9JIM7lLX1XU9o9eAcw9zus8z-QOkO7LGRUF4wPv20Jyxp9xDRIpZa3DwO9aUDh"            
            }
        });
        
    } catch (error) {
        console.log(error.message)
    }

    return transport;
};