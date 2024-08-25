const express = require('express');
const cors = require('cors'); 

const app = express();

app.use(cors());  

function getHighestLowercaseAlphabet(alphabets) {
    const lowercaseAlphabets = alphabets.filter(char => char >= 'a' && char <= 'z');
    if (lowercaseAlphabets.length === 0) return [];
    return [lowercaseAlphabets.sort().pop()];
}

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input data" });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercaseAlphabet = getHighestLowercaseAlphabet(alphabets);

    const user_id = "hariharan_s_01082003";
    const email = "hariharan.s2021@vitstudent.ac.in";
    const roll_number = "21BIT0224";

    const response = {
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    res.status(200).json(response);
});

app.get('/bfhl', (req, res) => {
    const response = {
        operation_code: 1
    };

    res.status(200).json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
