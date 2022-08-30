import React, { useState, useEffect } from 'react';
 import { collection, getDocs } from 'firebase/firestore';
 import { db } from '../lib/init-firebase';

export default function ListMovies(){
    const[books, setBooks] = useState([])
    useEffect(() => {
        getBooks()
// eslint-disable-next-line
        }, [])

        
    //  useEffect(() => {
    //      console.log(books)
    //  },[books])

    function getBooks(){
        const booksCollectionRef = collection(db, 'books')
        getDocs(booksCollectionRef)
        .then(response => {
          //  console.log(response.docs)
            const myBooks = response.docs.map(doc => ({
                data: doc.data(), 
                id: doc.id,
            }))
            setBooks(myBooks)
        })
         .catch(error => console.log(error.message))
    }
    return(
        <section>
            <h2>List of Books</h2>
            <ul>
                {books.map(book => (
                <li key={book.id}>{book.data.author}</li>
                ))}
                {books.map(book => (
                <li key={book.id}>{book.data.title}</li>
                ))}
                <li>$1200</li>
            </ul>
        </section>    
    )
}