const { db } = require('../../util/admin');

exports.getAllUsers = (req, res) => {
    db
        .collection('users')
        .get()
        .then(data => {
            let users = [];

            data.forEach(doc => {
                users.push({
                    id: doc.id,
                    firstName: doc.data().firstName,
                    lastName: doc.data().lastName,
                    date: doc.data().date
                })
            })

            return res.status(200).json(users);
        })
        .catch(error => {
            console.error(error);
            return res.status(500).json({
                message: 'Something went wrong!'
            })
        })
}

