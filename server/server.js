const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/api/customers", (req, res) => {
    const customers = [
        {id: 1, firstName: "John", lastName: "Doe"},
        {id: 2, firstName: "Steve", lastName: "Smith"},
        {id: 3, firstName: "Mary", lastName: "Swanson"}
    ]
  res.json(customers);

});


app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
