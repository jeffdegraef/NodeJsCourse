export const schema = {
    "type": "object",
    "properties": {
        "users": {
            "type": "array",
            "minItems": 1,
            "maxItems": 100,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 1
                    },
                    "firstName": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "lastName": {
                        "type": "string",
                        "faker": "name.lastName"
                    },
                    "jobTitle": {
                        "type": "string",
                        "faker": "name.jobTitle"
                    },
                    "phoneNumber": {
                        "type": "string",
                        "faker": "phone.phoneNumber"
                    },
                    "email": {
                        "type": "string",
                        "faker": "internet.email"
                    },
                    "account": {
                        "type": "string",
                        "faker": "finance.account"
                    },
                    "accountName": {
                        "type": "string",
                        "faker": "finance.accountName"
                    },
                    "companyName": {
                        "type": "string",
                        "faker": "company.companyName"
                    },
                    "zipCode": {
                        "type": "string",
                        "faker": "address.zipCode"
                    },
                    "streetName": {
                        "type": "string",
                        "faker": "address.streetName"
                    },
                    "streetAddress": {
                        "type": "string",
                        "faker": "address.streetAddress"
                    },
                    "country": {
                        "type": "string",
                        "faker": "address.country"
                    }
                },
                "required": ["id", "firstName", "lastName", "jobTitle","phoneNumber","email"]
            }
        }
    },
    "required": ["users"]
};