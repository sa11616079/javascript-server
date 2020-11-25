let config= 
{ 
    login: {
        email: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Email is required', 
        },
        password: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Password is required', 
        }
    }   
}

export default config;
