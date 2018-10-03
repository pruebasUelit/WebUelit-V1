const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2', 
        user: 'pruebasuelit@gmail.com',
        clientId: '878709611903-r10tjakb0o7s5cc5o4begs9ftp9ome7h.apps.googleusercontent.com',
        clientSecret: 'TMGFsVaChkAq4BZ4YrMJFR8a',
        refreshToken: '1/IS64gn3K7qNP-Q9MdrRxi8kRla2wSA10lTs_TMVOAaJeGFSm2T30MHpqxhiOqnz3',
        accessToken: 'ya29.GlsjBtoWvz3X_SaQE0Rm8GvcTFmumi6zUES6qtus4dcwC_gG1icofwAxFy-Mt1GGDDHxbDUqlXZXIIvrXP4eKkh4evj_boVK6tC1ZIJ98JgUrrmTcCQ8tv50fQYn',
    },
});

var mailOption = {
    from: 'Alejandro <franciscoalejandrotorresortiz@gmail.com>',
    to: 'pruebasuelit@gmail.com',
    subject: 'PruebaCorreo',
    text: 'Funciona!!!!!!!'
}

transporter.sendMail(mailOption, function (err, res) {
    if (err)
        console.log(err);
    else
        console.log('Email Send');
})