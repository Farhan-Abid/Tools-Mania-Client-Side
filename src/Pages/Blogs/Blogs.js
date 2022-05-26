import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container px-12'>
            <h2 className='mb-5 mt-5 text-center text-4xl text-primary'>Welcome to Our Blogs</h2>
            <div className='blog1'>
                <h1 className='text-center text-3xl text-secondary mb-5 mt-5'>How will you improve the performance of a React Application?</h1>
               <div className='text-center'>
               <p>*Use memo and PureComponent
                    <br />
                   *Avoid Anonymous Functions
                   <br />
                   *Avoid Object Literals
                   <br />
                   *Use React.lazy and React.Suspense
                   <br />
                   *Avoid Frequent Mounting/Unmounting</p>
               </div>
            </div>
            <br></br>
            <div className='blog2'>
                <h1 className='text-center text-3xl text-secondary mb-5 mt-5'>What are the different ways to manage a state in a React application?</h1>
                <div className='text-center'>
               <p>1.Communication state forms the backbone of your React Native app without you even knowing about it. Remember when you had requested a call back to an HTTP request? That’s when you introduced the communication system in your app.
                    <br />
                    2.Data state covers information that your React application stores temporarily for various business functions. Supposedly, you are building a project management app. The information stored in the data state will include the following things – project names, contacts, details about the clients, etc.
                   <br />
                   3.Contrary to the state mentioned above in a React app, the control state does not represent the application’s environment. Instead, it refers to the state which the user has input into the app. For example, form inputs, selected items, etc. Control state is known to be more diverse and versatile when it comes to storing information.
                   <br />
                   4.Session state contains information about the user of the application such as user id, permissions, passwords, etc. It may also include information on how the application should work according to a particular user’s preferences.
                   <br />
                   5.Location state is the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! One of the most interesting facts about Location state is that you can give directions to a user to parts of the application that do not have unique URLs associated with them. Also, the HTML5 History API allows you to store states separately from the specific URL.</p>
               </div>
            </div>
            <br></br>
            <div className='blog3'>
                <h1 className='text-center text-3xl text-secondary mb-5 mt-5'> How does prototypical inheritance work?</h1>
                <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.

</p>
            </div>
            <br></br>
            <div className='blog4'>
                <h1 className='text-center text-3xl text-secondary mb-5 mt-5'> What is a unit test? Why should write unit tests?</h1>
                <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete. Look a little further and you will find SUnit, the mother of all unit testing frameworks created by Kent Beck, and a reference in chapter 5 of The Art of Software Testing . Before that, it's mostly a mystery. I asked Jerry Weinberg about his experiences with unit testing -- "We did unit testing in 1956. As far as I knew, it was always done, as long as there were computers".
                </p>
            </div>
            <div className='blog4'>
                <h1 className='text-center text-3xl text-secondary mb-5 mt-5'> What is a unit test? Why should write unit tests?</h1>
                <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete. Look a little further and you will find SUnit, the mother of all unit testing frameworks created by Kent Beck, and a reference in chapter 5 of The Art of Software Testing . Before that, it's mostly a mystery. I asked Jerry Weinberg about his experiences with unit testing -- "We did unit testing in 1956. As far as I knew, it was always done, as long as there were computers".
                </p>
            </div>
        </div>
    );
};

export default Blogs;