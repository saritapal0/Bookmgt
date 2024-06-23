import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const SimpleBoxWithTextField = () => {
    const [bookName, setBookName] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [books, setBooks] = useState([]);
    const [errors, setErrors] = useState({
        bookName: false,
        bookAuthor: false,
        description: false
    });
    const [editMode, setEditMode] = useState(false);
    const [currentBook, setCurrentBook] = useState(null); // To store the book being edited

    const handleSubmit = () => {
        // Validate inputs
        if (bookName.trim() === '') {
            setErrors({ ...errors, bookName: true });
            return;
        }
        if (bookAuthor.trim() === '') {
            setErrors({ ...errors, bookAuthor: true });
            return;
        }
        if (description.trim() === '') {
            setErrors({ ...errors, description: true });
            return;
        }

        if (editMode) {
            // Update existing book
            const updatedBooks = books.map(book =>
                book.id === currentBook.id ? { ...book, bookName, bookAuthor, description } : book
            );
            setBooks(updatedBooks);
            setEditMode(false); // Exit edit mode
        } else {
            // Add new book
            const id = Date.now(); // Using timestamp as a simple unique ID
            const newBook = { id, bookName, bookAuthor, description };
            setBooks([...books, newBook]);
        }

        // Clear form fields and errors
        setBookName('');
        setBookAuthor('');
        setDescription('');
        setErrors({
            bookName: false,
            bookAuthor: false,
            description: false
        });
    };

    const handleClear = () => {
        // Clear form fields and errors
        setBookName('');
        setBookAuthor('');
        setDescription('');
        setErrors({
            bookName: false,
            bookAuthor: false,
            description: false
        });
        setEditMode(false); // Exit edit mode
        setCurrentBook(null); // Clear currentBook state
    };

    const handleEdit = (id) => {
        // Find the book by id
        const bookToEdit = books.find(book => book.id === id);
        if (bookToEdit) {
            // Populate form fields with the book data
            setBookName(bookToEdit.bookName);
            setBookAuthor(bookToEdit.bookAuthor);
            setDescription(bookToEdit.description);
            setCurrentBook(bookToEdit);
            setEditMode(true); // Enter edit mode
        }
    };

    const handleDelete = (id) => {
        // Handle delete functionality here
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
        // Exit edit mode if the book being edited is deleted
        if (currentBook && currentBook.id === id) {
            setEditMode(false);
            setCurrentBook(null);
        }
    };

    return (
        <div>
            <Box sx={{ m: 2, p: 2, border: "1px solid grey" }}>
                <Paper elevation={3} sx={{ padding: '30px' }}>
                    <TextField
                        variant="outlined"
                        label="Book Name"
                        name="bookName"
                        fullWidth
                        value={bookName}
                        onChange={(e) => {
                            setBookName(e.target.value);
                            // Clear validation error once user starts typing
                            if (errors.bookName && e.target.value.trim() !== '') {
                                setErrors({ ...errors, bookName: false });
                            }
                        }}
                        error={errors.bookName}
                        helperText={errors.bookName ? 'Book Name is required' : ''}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        variant="outlined"
                        label="Book Author"
                        name="bookAuthor"
                        fullWidth
                        value={bookAuthor}
                        onChange={(e) => {
                            setBookAuthor(e.target.value);
                            // Clear validation error once user starts typing
                            if (errors.bookAuthor && e.target.value.trim() !== '') {
                                setErrors({ ...errors, bookAuthor: false });
                            }
                        }}
                        error={errors.bookAuthor}
                        helperText={errors.bookAuthor ? 'Book Author is required' : ''}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        variant="outlined"
                        label="Description"
                        name="description"
                        fullWidth
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                            // Clear validation error once user starts typing
                            if (errors.description && e.target.value.trim() !== '') {
                                setErrors({ ...errors, description: false });
                            }
                        }}
                        error={errors.description}
                        helperText={errors.description ? 'Description is required' : ''}
                        sx={{ mb: 2 }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mr: 1 }}>
                            {editMode ? 'Update' : 'Submit'}
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleClear}>
                            Clear
                        </Button>
                    </Box>
                </Paper>
            </Box>
            <Box sx={{ m: 2, p: 2, border: "1px solid grey", overflowX: 'auto' }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Book Name</TableCell>
                            <TableCell>Book Author</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((book, index) => (
                            <TableRow key={book.id}>
                                <TableCell>{book.bookName}</TableCell>
                                <TableCell>{book.bookAuthor}</TableCell>
                                <TableCell>{book.description}</TableCell>
                                <TableCell>
                                    <IconButton color="primary" onClick={() => handleEdit(book.id)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="secondary" onClick={() => handleDelete(book.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </div>
    );
};

export default SimpleBoxWithTextField;
