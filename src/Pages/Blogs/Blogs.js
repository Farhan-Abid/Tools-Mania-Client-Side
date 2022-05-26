import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='mb-5'>Welcome to our bLog</h2>
            <div className='blog1'>
                <h1>Difference between javascript and nodejs</h1>
                <p>JavaScript is a language that runs inside web browsers as part of documents loaded by the browser. It gives behaviour to your pages (HTML gives semantic structure, CSS gives form or look and feel). However nothing ought to restrict JavaScript to run solely inside the browser. Now being an interpreted language, it needs an interpreter to run. V8 is the Google Chrome JS engine and 'node' is a front-end to it that can be used to run JavaScript scripts outside the browser. Node.js or just Node usually refers to a collection of objects and methods available to your JavaScript code when run in V8 or through the node interpreter. It is a JavaScript libray cum runtime.</p>
            </div>
            <br></br>
            <div className='blog2'>
                <h1>When should you use nodejs and when should you use mongodb?</h1>
                <p>Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.
                f your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.
                </p>
            </div>
            <br></br>
            <div className='blog3'>
                <h1>Differences between sql and nosql databases.</h1>
                <p>SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases whereas NoSQL is a Non-relational or Distributed Database.Comparing SQL vs NoSQL database, SQL databases are table based databases whereas NoSQL databases can be document based, key-value pairs, graph databases.SQL databases are vertically scalable while NoSQL databases are horizontally scalable.SQL databases have a predefined schema whereas NoSQL databases use dynamic schema for unstructured data.Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</p>
            </div>
            <br></br>
            <div className='blog4'>
                <h1>What is the purpose of jwt and how does it wor</h1>
                <p>JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn’t have to completely rely on a data store (or) database to save session information.JWTs can be encrypted, but they are typically encoded and signed.  We will be focusing on Signed JWTs. The purpose of Signed JWT is not to hide the data but to ensure the authenticity of the data. And that is why it’s highly recommended to use HTTPS with Signed JWTs.
                When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server. By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.
                </p>
            </div>
        </div>
    );
};

export default Blogs;