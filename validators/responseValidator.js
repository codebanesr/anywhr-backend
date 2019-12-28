var Ajv = require('ajv');

// bypass all 
module.exports = (schema, data) => {
    // const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
    // const validate = ajv.compile(schema);
    // const valid = validate(data);
    // if (!valid) {
    //     console.log(validate);
    //     return validate.errors;
    // }
    // console.log(data);
    return data;
}