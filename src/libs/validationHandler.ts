import {Request,Response,NextFunction} from "express";

export default ( config ) => ( req:Request, res:Response, next:NextFunction  ) => {
    const errors = [];
    let val1;
    console.log( 'Inside ValidationHandler Middleware' );
    const keys = Object.keys( config );
    keys.forEach((key) => {
        const obj = config[key];
        console.log('key is' , key);
        const values = obj.in.map( ( val ) => {
            val1=val;
            return req[ val ][ key ];
        });

        if (obj.required) {
            if (isNull(values)) {
                errors.push({
                    key: {key},
                    location: {val1},
                    message: obj.errorMessage || `${key} is required`,
                });
            }
        }
        // Checking for string
        if (obj.string) {
            if ( !( typeof ( values ) === 'string' ) ) {
                errors.push({
                    key: {key},
                    location: {val1},
                    message: obj.errorMessage || `${key} Should be a String`,
                });
            }
        }
        // Checking for object
        if (obj.isObject) {
            if ( !( typeof ( values ) === 'object' ) ) {
                errors.push({
                    key: {key},
                    location: {val1},
                    message: obj.errorMessage || `${key} Should be an object`,
                });
            }
        }
        // Checking for regex
        if (obj.regex) {
            const regex = /^[a-zA-Z ]{2,30}$/;
            if (!regex.test(values)) {
                errors.push({
                    key: {key},
                    location: {val1},
                    message: obj.errorMessage || `${key} is not valid expression` ,
                });
            }
        }
        // Checking for default
        if (obj.default) {
            if (isNull(values)) {
                values[0] === obj.default;
            }
        }
        // Checking for number
        if (obj.number) {
            if (isNaN(values) || values === undefined) {
                errors.push({
                    key: {key},
                    location: {val1},
                    message: obj.errorMessage || `${key}  must be an number` ,
                });
            }
        }
    });
    if (errors.length > 0) {
        res.send(errors);
    }
    else {
        next();
    }
};

function isNull( obj ) {
    const a = ( obj === undefined || obj === null );
    return a;
}