import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { questions } from './questions'; 

const languageConfig = {
    python: { id: 71, name: 'Python' },
    cpp: { id: 54, name: 'C++' },
    c: { id: 50, name: 'C' },
    javascript: { id: 63, name: 'JavaScript' },
    java: { id: 62, name: 'Java' },
    ruby: { id: 72, name: 'Ruby' }
};

const Modules = () => {
    const { language } = useParams();
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
    const [completedQuestions, setCompletedQuestions] = useState([]);
    const [showSolution, setShowSolution] = useState(false);

    const selectedLanguage = languageConfig[language];
    const currentQuestions = questions[language] || []; // Fallback to an empty array if not found

    if (!selectedLanguage) {
        return <div className="text-white">Language not supported.</div>;
    }

    const runCode = async () => {
        const runOptions = {
            method: 'POST',
            url: 'https://judge0-ce.p.rapidapi.com/submissions',
            headers: {
                'x-rapidapi-key': 'bb88d28783mshf80e424e0f5ac7cp18a09ajsn34145ed7c630', 
                'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                'Content-Type': 'application/json',
            },
            data: {
                source_code: code,
                language_id: selectedLanguage.id,
                stdin: '',
                expected_output: '',
            },
        };

        setIsLoading(true);
        setShowSolution(false); // Reset showSolution on code run
        
        try {
            const submitResponse = await axios.request(runOptions);
            const { token } = submitResponse.data;

            const checkOptions = {
                method: 'GET',
                url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
                headers: {
                    'x-rapidapi-key': 'bb88d28783mshf80e424e0f5ac7cp18a09ajsn34145ed7c630',
                    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                },
            };

            await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for a moment before checking the result

            const resultResponse = await axios.request(checkOptions);
            const { stdout, stderr, compile_output } = resultResponse.data;

            if (compile_output) {
                setOutput('Compilation Error: ' + compile_output);
            } else if (stderr) {
                setOutput('Runtime Error: ' + stderr);
            } else {
                setOutput(stdout);
                // Check if the output matches the expected output and mark as complete
                if (currentQuestions[selectedQuestionIndex] &&
                    stdout.trim() === currentQuestions[selectedQuestionIndex].expectedOutput.trim()) {
                    setCompletedQuestions([...completedQuestions, selectedQuestionIndex]);
                }
                setShowSolution(true); // Show solution button after code execution
            }
        } catch (error) {
            console.error('Error running code:', error);
            setError('Error running code.');
            setOutput('');
        } finally {
            setIsLoading(false);
        }
    };

    const handleQuestionSelect = (index) => {
        setSelectedQuestionIndex(index);
        setCode('');
        setOutput('');
        setError('');
        setShowSolution(false); // Reset when a new question is selected
    };

    const isQuestionCompleted = (index) => {
        return completedQuestions.includes(index);
    };

    return (
        <div className="min-h-screen p-8 bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-6 text-center">{selectedLanguage.name} Code Runner</h1>

            {/* Displaying Questions in a Scrollable Selector */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Questions:</h2>
                <div className="overflow-y-auto h-48 bg-gray-800 border border-gray-700 rounded-lg p-4">
                    {currentQuestions.length > 0 ? (
                        currentQuestions.map((item, index) => (
                            <div
                                key={index}
                                className={`p-2 mb-2 rounded cursor-pointer transition duration-200 
                                    ${selectedQuestionIndex === index ? 'bg-blue-700' : 'hover:bg-gray-700'} 
                                    ${isQuestionCompleted(index) ? 'bg-green-700' : ''}`}
                                onClick={() => handleQuestionSelect(index)}
                            >
                                <span>{item.question}</span>
                                {isQuestionCompleted(index) && (
                                    <span className="ml-2 text-green-300 font-bold">✔</span>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No questions available for this language.</p>
                    )}
                </div>
            </div>

            {/* Display Selected Question */}
            {selectedQuestionIndex !== null && (
                <div className="mb-8 p-4 bg-gray-800 border border-gray-700 rounded-lg">
                    <h3 className="font-semibold">Selected Question:</h3>
                    <p>{currentQuestions[selectedQuestionIndex].question}</p>
                    <p className="text-sm text-gray-400">Expected Output: {currentQuestions[selectedQuestionIndex].expectedOutput}</p>
                </div>
            )}

            {/* Code Editor */}
            <textarea
                className="w-full p-2 rounded border border-gray-700 bg-gray-800 text-white mb-4"
                rows={10}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={`Write your ${selectedLanguage.name} code here...`}
            />

            <div className="flex space-x-2 mb-4">
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded transition duration-200 hover:bg-blue-700"
                    onClick={runCode}
                    disabled={isLoading}
                >
                    {isLoading ? 'Running...' : 'Run Code'}
                </button>

                <button
                    className={`bg-green-600 text-white px-4 py-2 rounded transition duration-200 
                        ${showSolution ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
                    onClick={() => setShowSolution(true)} // Only show solution when button is clicked
                    disabled={!showSolution}
                >
                    View Solution
                </button>
            </div>

            <div className="bg-gray-800 text-white p-4 rounded mt-4">
                <h2 className="font-bold">Output:</h2>
                <pre>{output}</pre>
            </div>

            {error && (
                <div className="bg-red-600 text-white p-4 rounded mt-4">
                    <h2 className="font-bold">Error:</h2>
                    <pre>{error}</pre>
                </div>
            )}

            {/* Display Solution */}
            {showSolution && selectedQuestionIndex !== null && (
                <div className="bg-yellow-600 p-4 rounded mt-4">
                    <h2 className="font-bold">Solution:</h2>
                    <pre>{currentQuestions[selectedQuestionIndex].solution}</pre>
                </div>
            )}
        </div>
    );
};

export default Modules;
