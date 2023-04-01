import React from 'react';

const QuestionsAnswers = () => {
    return (
        <div className='border-top'>
            <div className="my-5">
                <h2>Props vs state</h2>
                <p>
                <h5>Props</h5>
                Props are used to pass data from a parent component to a child component. Props are read-only and cannot be modified by the child component. They are passed down to the child component as arguments to its constructor or as attributes in its JSX tag. Once the props are set, the child component can use them to render its UI or execute some behavior.
                </p>
                <p>
                    <h5>State</h5>
                State is used to manage data that can change over time in a component. State is mutable and can be modified by the component itself. A component can define and modify its own state by calling the setState method. Whenever the state changes, React will re-render the component and update the UI accordingly.
                </p>
            </div>
            <div className="my-5">
                <h2>How does useState work?</h2>
                <p>
                useState allows our JSX functional components to have state variables. It takes one argument which is initial state and returns a state value and a function to update it. It allows you to declare a state variable and a function to update that variable, and returns an array containing the current state value and the function to update it.
                </p>
            </div>
            <div className="my-5">
                <h2>Purpose of useEffect other than fetching data.</h2>
                <p>
                Although useEffect is commonly used for fetching data in React, it has a broader purpose than that. useEffect is a hook that allows you to perform side effects in functional components. A side effect is any operation that affects something outside of the component, such as updating the document title, subscribing to a WebSocket connection, or setting up event listeners.
                </p>
            </div>
            <div className="my-5">
                <h2>How Does React work?</h2>
                <p>
                React is a JavaScript library for building user interfaces that uses a declarative approach to define UI components. When a React application is loaded in a browser, the following happens:
                </p>
                <p>Virtual DOM reconciliation: React compares the current virtual DOM tree with the previous one to determine which elements have changed. This process is called "reconciliation". By comparing the virtual DOM trees, React can update the real DOM efficiently by only making the necessary changes.</p>
                <p>DOM update: React updates the real DOM to reflect the changes in the virtual DOM. The updated elements are then visible to the user.</p>
                <p>Event handling: When the user interacts with the UI, React handles the events and updates the state of the components. This triggers a re-rendering of the affected components, which in turn updates the virtual DOM and the real DOM.</p>
                
            </div>
        </div>
    );
};

export default QuestionsAnswers;