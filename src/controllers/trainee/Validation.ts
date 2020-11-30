let config= 
{ 
    create: 
    { 
        name: 
        { 
            required: true, 
            regex: '([a-zA-Z])+ ?([a-zA-Z])+$', 
            in: ['body'], 
            errorMessage: 'Name is required', 
        },
        role: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Please enter role'
      
        },
        email: {
            required: true,
            regex: /^[A-Za-z.0-9]{3,}@[A-Za-z]{10,10}[.]{1,1}[A-Za-z]{4,4}$/,
            string: true,
            in: ["body"],
            errorMessage: "Email is required",
        },
        password: {
            required: true,
            in: ["body"],
            errorMessage: "password is required"
        }
    }, 
    delete: 
    { 
        id: 
        { 
            required: true, 
            errorMessage: 'Id is required', 
            in: ['body'] 
        } 
    }, 
    get: 
    { 
        skip: 
        { 
            required: false, 
            default: 0, 
            number: true, 
            in: ['query'], 
            errorMessage: 'Skip is invalid', 
        }, 
        limit: 
        { 
            required: false, 
            default: 10,          
            number: true, 
            in: ['query'], 
            errorMessage: 'Limit is invalid', 
        } 
    }, 
    update: 
    { 
        id: 
        {
            required: true, 
            string: true, 
            in:['body'],
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            custom: function (dataToUpdate) { },
        }
    } 
}

export default config;
