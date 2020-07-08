import React, {useState} from 'react';

const Counter = () => {
    
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        setNotes( [
            ...notes,
            {title, body}
        ])
        setTitle('')
        setBody('')
    }


    const book = {
        title: 'ego',
        author: 'ryan',
        publisher: {
            name: 'Penguin'
        }
    };

    const item = ['Iced coffe (cold)', '$2.00', '$3.00', '$4.00'];

    const [beverage, , price] = item;
    console.log(`A medium ${beverage} costs ${price}`);


    const removeNote = (title) => {
        setNotes(notes.filter((note) => note.title !== title))
    }

    return (
        <div>
            <h2>Notes</h2>
            {notes.map((note) => (
                <div key={note.title}>
                    <h3>{note.title}</h3>
                    <p>{note.body}</p>
                    <button onClick={() => removeNote(note.title)}>x</button>
                </div>
                    
            ))}
            <form onSubmit={addNote}>
                <input value={title} onChange={ (e) => setTitle(e.target.value)}/>
                <textarea value={body} onChange = {(e) => setBody(e.target.value)}/>
                <button >add note</button>
            </form>
            
        </div>
    );
}

export default Counter;