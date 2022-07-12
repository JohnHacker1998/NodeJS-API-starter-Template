const ajvInstance = require('./ajv-instance')

const schema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',

        },
        age: {
            type: 'integer',


        },
        gender: {
            type: 'string',
            enum: ['M', 'F']

        },
        grade: {
            type: 'integer',

        }



    },
    required: ['name', 'age', 'gender', 'grade'],
    additionalProperties: false
}

module.exports = ajvInstance.compile(schema)