import React from 'react';
import "./article.css";

const Article = ({ title, value, adress }) => {
    return (
        <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4> {title} </h4>
            <h5>{value}</h5>
            <a href={adress} target="_blank"> Send a message ...</a>
        </article>
    );
};

export default Article;