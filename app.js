const express = require('express');
const app = express();
const htmlRoutes = require('./routes/htmlRoutes.js');
const notesRoutes = require('./routes/notesRoutes.js');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use the HTML routes in your application
app.use('/', htmlRoutes);

// Use the API routes in your application
app.use('/api/notes', notesRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
