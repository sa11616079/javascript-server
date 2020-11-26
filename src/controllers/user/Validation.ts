let config= 
{ 
    login: {
        email: {
            required: true,
            string: true,
            in: ['body']
        },
        password: {
            required: true,
            string: true,
            in: ['body']
        }
    }
}

export default config;
