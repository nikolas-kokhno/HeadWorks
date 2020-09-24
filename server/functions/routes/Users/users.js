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

exports.addUser = (req, res) => {
    if (req.body.firstName === '' || req.body.lastName === '') {
        return res.status(400).json({
            name: 'Must not be empty'
        });
    }

    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        card: req.body.card === undefined ? 'Card not found' : req.body.card,
        date: new Date().toISOString(),
    };

    db
        .collection('users')
        .add(newUser)
        .then(doc => {
            res.json({ message: `User ${doc.id} created successfully` });
        })
        .catch(error => {
            console.error(error);
            return res.status(500).json({
                message: 'Something went wrong!'
            })
        })
}