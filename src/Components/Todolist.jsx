import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Todolist = () => {
    const [todo, settodo] = useState('');
    const [db, setDb] = useState([]);
    const [editId, setEditId] = useState(null);

    const dataPost = () => {
        axios.post("http://localhost:3000/posts", { todo })
            .then(() => {
                alert("Data has been posted");
                settodo('');
                getData(); // Refresh the list after posting
            })
            .catch(() => {
                alert("Data has not been posted");
            });
    };

    const getData = () => {
        axios.get("http://localhost:3000/posts")
            .then((res) => {
                setDb(res.data);
            })
            .catch(() => {
                alert("Data could not be read");
            });
    };

    const newData = (id) => {
        // Placeholder for edit functionality
        const itemToEdit = db.find(item => item.id === id);
        settodo(itemToEdit.todo);
        setEditId(id);
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:3000/posts/${editId}`, { todo })
            .then(() => {
                alert("Data has been updated");
                settodo('');
                setEditId(null);
                getData(); // Refresh the list after updating
            })
            .catch(() => {
                alert("Data could not be updated");
            });
    };

    return (
        <div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Todo"
                    variant="outlined"
                    value={todo}
                    onChange={(ref) => settodo(ref.target.value)}
                />
            </div>
            <div>
                {editId ? (
                    <Button variant="contained" onClick={handleUpdate}>Update</Button>
                ) : (
                    <Button variant="contained" onClick={dataPost}>Post</Button>
                )}
                <Button variant="contained" onClick={getData}>Get</Button>
                <div>
                    <ul>
                        {db.map((item) => (
                            <li key={item.id}>
                                {item.todo}
                                <Button onClick={() => newData(item.id)}>Edit</Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todolist;
