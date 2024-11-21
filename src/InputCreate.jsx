import React, { useState } from 'react';

const InputCreate = () => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            setError('Task title cannot be empty');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            });

            if (response.ok) {

                setTitle('');
                setError('');

                alert('Task created successfully!');
            } else {
                setError('Failed to create task');
            }
        } catch (err) {
            setError('Network error. Please try again.');
            console.error('Error:', err);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter new task"
                    className="flex-grow p-2 border rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Create Task
                </button>
            </form>
            {error && (
                <p className="text-red-500 mt-2">{error}</p>
            )}
        </div>
    );
};

export default InputCreate;