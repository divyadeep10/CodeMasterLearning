import React, { useState, useEffect } from "react";

const languages = [
    {
        name: "C++",
        description: "Dive into C++ and test your skills with syntax and OOP concepts.",
        tests: [
            {
                id: 1,
                name: "Basic Syntax",
                description: "Test the basic syntax of C++.",
                questions: [
                    {
                        id: 1,
                        question: "What is the output of: cout << 5 + 3;",
                        options: ["53", "8", "Error", "None"],
                        answer: "8",
                    },
                    {
                        id: 2,
                        question: "Which header file is used for input/output operations?",
                        options: ["<iostream>", "<stdio.h>", "<fstream>", "<math.h>"],
                        answer: "<iostream>",
                    },
                    {
                        id: 3,
                        question: "What is the correct way to declare a constant in C++?",
                        options: ["const int x;", "int const x;", "#define x", "int x = constant;"],
                        answer: "const int x;",
                    },
                    {
                        id: 4,
                        question: "How do you create a pointer in C++?",
                        options: ["int *p;", "int p;", "pointer p;", "p* int;"],
                        answer: "int *p;",
                    },
                    {
                        id: 5,
                        question: "What is the output of the following code: int x = 5; cout << ++x;",
                        options: ["5", "6", "Error", "None"],
                        answer: "6",
                    },
                    {
                        id: 6,
                        question: "Which operator is used to access members of a class in C++?",
                        options: [".", "&", "::", "*"],
                        answer: ".",
                    },
                ],
            },
            {
                id: 2,
                name: "OOP Concepts",
                description: "Explore object-oriented programming principles.",
                questions: [
                    {
                        id: 1,
                        question: "What is encapsulation?",
                        options: ["Binding data", "Inheritance", "Polymorphism", "None"],
                        answer: "Binding data",
                    },
                    {
                        id: 2,
                        question: "What is inheritance in C++?",
                        options: ["A mechanism to add new methods", "A way to reuse code", "A concept of polymorphism", "A way to handle exceptions"],
                        answer: "A way to reuse code",
                    },
                    {
                        id: 3,
                        question: "What is polymorphism in C++?",
                        options: ["Ability to call same function name for different object types", "A type of inheritance", "Binding data", "All of the above"],
                        answer: "Ability to call same function name for different object types",
                    },
                    {
                        id: 4,
                        question: "Which of the following is an access modifier in C++?",
                        options: ["public", "private", "protected", "All of the above"],
                        answer: "All of the above",
                    },
                    {
                        id: 5,
                        question: "Which of these is a constructor in C++?",
                        options: ["void MyClass()", "MyClass()", "void MyClass::MyClass()", "MyClass(){}"],
                        answer: "MyClass()",
                    },
                    {
                        id: 6,
                        question: "What is a virtual function in C++?",
                        options: ["A function that can be overridden in derived class", "A function that runs in the background", "A function with no body", "None of the above"],
                        answer: "A function that can be overridden in derived class",
                    },
                ],
            },
        ],
    },
    {
        name: "Java",
        description: "Master Java concepts through practical tests.",
        tests: [
            {
                id: 1,
                name: "Basic Syntax",
                description: "Test your knowledge of Java basics.",
                questions: [
                    {
                        id: 1,
                        question: "What is the size of an int in Java?",
                        options: ["4 bytes", "2 bytes", "8 bytes", "Depends on JVM"],
                        answer: "4 bytes",
                    },
                    {
                        id: 2,
                        question: "Which method is used to find the length of a string in Java?",
                        options: ["length()", "getLength()", "size()", "lengthOf()"],
                        answer: "length()",
                    },
                    {
                        id: 3,
                        question: "Which keyword is used to create a constant in Java?",
                        options: ["const", "final", "static", "immutable"],
                        answer: "final",
                    },
                    {
                        id: 4,
                        question: "Which is the default value of a boolean in Java?",
                        options: ["true", "false", "0", "null"],
                        answer: "false",
                    },
                    {
                        id: 5,
                        question: "Which of the following is used for multi-threading in Java?",
                        options: ["Thread class", "Runnable interface", "Both", "None"],
                        answer: "Both",
                    },
                    {
                        id: 6,
                        question: "Which of the following is not a primitive type in Java?",
                        options: ["int", "char", "boolean", "String"],
                        answer: "String",
                    },
                ],
            },
        ],
    },
    {
        name: "Python",
        description: "Assess your Python programming skills.",
        tests: [
            {
                id: 1,
                name: "Data Types",
                description: "Test your understanding of Python data types.",
                questions: [
                    {
                        id: 1,
                        question: "Which data type is immutable?",
                        options: ["List", "Set", "Dictionary", "Tuple"],
                        answer: "Tuple",
                    },
                    {
                        id: 2,
                        question: "Which function is used to get the length of a string in Python?",
                        options: ["length()", "str_length()", "len()", "size()"],
                        answer: "len()",
                    },
                    {
                        id: 3,
                        question: "Which data type is used for storing key-value pairs?",
                        options: ["List", "Set", "Dictionary", "Tuple"],
                        answer: "Dictionary",
                    },
                    {
                        id: 4,
                        question: "Which of these is a mutable data type in Python?",
                        options: ["Tuple", "String", "List", "None of the above"],
                        answer: "List",
                    },
                    {
                        id: 5,
                        question: "What is the output of: print(type(5.0))",
                        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'complex'>"],
                        answer: "<class 'float'>",
                    },
                    {
                        id: 6,
                        question: "Which of the following is used to check equality in Python?",
                        options: ["=", "==", "eq", "==="],
                        answer: "==",
                    },
                ],
            },
        ],
    },
    {
        name: "JavaScript",
        description: "Challenge yourself with JavaScript questions.",
        tests: [
            {
                id: 1,
                name: "ES6 Features",
                description: "Evaluate your knowledge of modern JavaScript features.",
                questions: [
                    {
                        id: 1,
                        question: "Which keyword is used to define a constant variable?",
                        options: ["let", "var", "const", "constant"],
                        answer: "const",
                    },
                    {
                        id: 2,
                        question: "What does '=>', the arrow function syntax, represent in JavaScript?",
                        options: ["Regular function", "Anonymous function", "Variable", "Constant"],
                        answer: "Anonymous function",
                    },
                    {
                        id: 3,
                        question: "Which of these methods is used to add a new element to the end of an array in JavaScript?",
                        options: ["push()", "pop()", "shift()", "unshift()"],
                        answer: "push()",
                    },
                    {
                        id: 4,
                        question: "What is the result of: '2' + 2 in JavaScript?",
                        options: ["22", "4", "Error", "None"],
                        answer: "22",
                    },
                    {
                        id: 5,
                        question: "Which method is used to convert a string into an array in JavaScript?",
                        options: ["split()", "join()", "slice()", "concat()"],
                        answer: "split()",
                    },
                    {
                        id: 6,
                        question: "What is the default value of the 'strict' mode in JavaScript?",
                        options: ["true", "false", "undefined", "null"],
                        answer: "false",
                    },
                ],
            },
        ],
    }    
];

function Challenges() {
    const [selectedTest, setSelectedTest] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timer, setTimer] = useState(60);
    const [answers, setAnswers] = useState([]);
    const [points, setPoints] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        if (selectedTest && timer > 0) {
            const interval = setInterval(() => setTimer(timer - 1), 1000);
            return () => clearInterval(interval);
        } else if (timer === 0) {
            handleNext();
        }
    }, [timer, selectedTest]);

    const handleTestSelection = (test) => {
        setSelectedTest(test);
        setCurrentQuestion(0);
        setPoints(0);
        setAnswers([]);
        setIsCompleted(false);
        setTimer(60);
    };

    const handleAnswer = (selectedOption) => {
        const question = selectedTest.questions[currentQuestion];
        const isCorrect = selectedOption === question.answer;
        if (isCorrect) setPoints(points + 10);
        setAnswers([...answers, { questionId: question.id, selectedOption, isCorrect }]);
        handleNext();
    };

    const handleNext = () => {
        if (currentQuestion < selectedTest.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setTimer(60);
        } else {
            setIsCompleted(true);
        }
    };

    if (isCompleted) {
        return (
            <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white py-8">
                <h1 className="text-4xl font-bold mb-8">{selectedTest.name} - Summary</h1>
                <p className="text-2xl mb-4">You scored: {points} points</p>
                <ul className="text-lg mb-8">
                    {answers.map((answer, index) => (
                        <li key={index} className="mb-2">
                            Question {index + 1}: {answer.isCorrect ? "Correct" : "Incorrect"}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => (window.location.href = "/challenges")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Back to Challenges
                </button>
            </div>
        );
    }

    if (selectedTest) {
        const question = selectedTest.questions[currentQuestion];
        return (
            <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white py-8">
                <h1 className="text-4xl font-bold mb-4">{selectedTest.name} - Question {currentQuestion + 1}</h1>
                <p className="text-2xl mb-6">{question.question}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option)}
                            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <p className="text-lg">Time Left: {timer}s</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white py-8">
            <h1 className="text-4xl font-bold mb-8">Select a Language and Test</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9">
                {languages.map((language) => (
                    <div
                        key={language.name}
                        className="bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-600 cursor-pointer"
                    >
                        <h2 className="text-2xl font-bold mb-4  text-pink-500">{language.name}</h2>
                        <p className="text-gray-300 mb-4">{language.description}</p>
                        <ul>
                            {language.tests.map((test) => (
                                <li key={test.id} className="mb-2">
                                    <button
                                        onClick={() => handleTestSelection(test)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        {test.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Challenges;
