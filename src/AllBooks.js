import React, { useEffect, useState } from "react";
import sanityClient from './client.js';

export default function AllBooks() {
    const [allBooksData, setAllBooks] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "book"]{
                title,
                rating,
                author,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
            }`
        )
        .then((data) => setAllBooks(data))
        .catch(console.error);
    }, [])
    return (
        <div>
            <p className="mb-4 mt-4">A list of the better books I have read.</p>
                {allBooksData && allBooksData.map((book, index) =>
                <span key={index}>
                        <ul>
                        <li><img 
                        src={book.mainImage.asset.url}
                        alt='front cover of book'/></li>
                        <p className="text-2xl font-bold pb-1 ...">{book.title}</p>
                        <div className="pr-4 ...">
                        <li>{book.rating}</li>
                        </div>
                        <li>{book.author}</li>
                        </ul>
                </span>)}
        </div>
    ) 
}