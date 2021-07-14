import React from 'react';

const Todos = ({topic,author}) => {
    return (
        <article className="container">
            <h3>{topic}</h3>
            <h5>{author}</h5>
        </article>
    )
}



export default Todos;