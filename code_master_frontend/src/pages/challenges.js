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
                ],
            },
        ],
    },
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
