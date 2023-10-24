const User = require('../models/userModel');
const Auth = require('../models/authModel')

const registerUser = async (req, res) => {
    try {
        console.log(req.body);
        const { firstName, lastName,username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const auth = new Auth({ email, password });
        await auth.save();

        const user = new User({
            authId: auth._id,
            username,
            profile: { firstName, lastName },
        });

        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    registerUser
}
