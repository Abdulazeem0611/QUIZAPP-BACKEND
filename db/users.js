const { v4: uuid } = require("uuid");

const userdata = {
    "users": [
        {
            id: uuid(),
            username: "Abdulazeem",
            password: "az12345",
            emailId: "ab@gmail.com",
        },
        {
            id: uuid(),
            username: "Owais",
            password: "ow12345",
            emailId: "ow@gmail.com",
        },
    ]
}

module.exports = userdata;