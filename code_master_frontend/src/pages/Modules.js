import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { questions } from './questions';

const languageConfig = {
    python: { id: 71, name: 'Python' },
    cpp: { id: 54, name: 'C++' },
    c: { id: 50, name: 'C' },
    javascript: { id: 63, name: 'JavaScript' },
    java: { id: 62, name: 'Java' },
    ruby: { id: 72, name: 'Ruby' },
};

const Modules = () => {
    const { language } = useParams();
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [completedQuestions, setCompletedQuestions] = useState({});
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
    const [loading, setLoading] = useState(true);
    const selectedLanguage = languageConfig[language];
    const currentQuestions = questions[language] || [];

    useEffect(() => {
        const fetchProgress = async () => {
            setLoading(true);
            try {
                const userID = localStorage.getItem('userId');
                if (!userID) return;

                const updatedCompletedQuestions = [];
                for (let index = 0; index < currentQuestions.length; index++) {
                    const { data } = await axios.get(
                        `https://backend-master-cyan.vercel.app/api/progress/ch/checker/${userID}/${language}/${index}`
                    );
                    if (data.completed) {
                        updatedCompletedQuestions.push(index);
                    }
                }

                setCompletedQuestions((prev) => ({
                    ...prev,
                    [language]: updatedCompletedQuestions,
                }));
            } catch (error) {
                console.error('Error fetching progress:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProgress();
    }, [language, currentQuestions]);

    const runCode = async () => {
        if (!selectedLanguage) return;

        try {
            const { data: { token } } = await axios.post(
                'https://judge0-ce.p.rapidapi.com/submissions',
                {
                    source_code: code,
                    language_id: selectedLanguage.id,
                },
                {
                    headers: {
                        'x-rapidapi-key': 'bb88d28783mshf80e424e0f5ac7cp18a09ajsn34145ed7c630',
                        'Content-Type': 'application/json',
                    },
                }
            );
            // new module

            await new Promise((resolve) => setTimeout(resolve, 3000));

            const { data: result } = await axios.get(
                `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
                {
                    headers: { 'x-rapidapi-key': 'bb88d28783mshf80e424e0f5ac7cp18a09ajsn34145ed7c630' },
                }
            );

            const { stdout } = result;
            setOutput(stdout || 'No output');

            if (
                stdout?.trim() === currentQuestions[selectedQuestionIndex]?.expectedOutput.trim()
            ) {
                setCompletedQuestions((prev) => ({
                    ...prev,
                    [language]: [...new Set([...(prev[language] || []), selectedQuestionIndex])],
                }));

                const userID = localStorage.getItem('userId');
                updateProgress(userID, selectedQuestionIndex);
            }
        } catch (err) {
            console.error('Error running code:', err);
            setOutput('Failed to execute code.');
        }
    };

    const handleQuestionSelect = (index) => {
        setSelectedQuestionIndex(index);
        setCode('');
        setOutput('');
    };

    const updateProgress = async (userID, questionIndex) => {
        try {
            const response = await axios.post('https://backend-master-cyan.vercel.app/api/progress/update', {
                userID,
                questionIndex,
                language,
            });
            // console.log('Progress updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating progress:', error.response?.data || error.message);
        }
    };

    if (!selectedLanguage) return <div>Language not supported.</div>;

    return ( 

        // i want here loading text that will become invisible after ticks are loaded 

        <div className="p-6 bg-gray-900 text-white">
            <h1 className="text-2xl font-bold mb-4">{selectedLanguage.name} Code Runner</h1>
            
            
            <div className="mb-4">
                <h2 className="text-lg font-bold">Questions:</h2>
                <div className="bg-gray-800 p-4 rounded overflow-y-auto" style={{ maxHeight: '200px' }}>
                    {currentQuestions.map((q, index) => (
                        <div
                            key={index}
                            className={`p-2 rounded mb-2 cursor-pointer ${
                                (completedQuestions[language] || []).includes(index)
                                    ? 'bg-green-700'
                                    : 'hover:bg-gray-700'
                            }`}
                            onClick={() => handleQuestionSelect(index)}
                        >
                            {q.question} {(completedQuestions[language] || []).includes(index) && '✔'}
                        </div>
                    ))}
                </div>
            </div>

            {selectedQuestionIndex !== null && (
                <div className="mb-4">
                    <h3>Question:</h3>
                    <p>{currentQuestions[selectedQuestionIndex]?.question}</p>
                </div>
            )}

            <textarea
                className="w-full p-2 rounded mb-4 bg-gray-800 text-white"
                rows={10}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={`Write your ${selectedLanguage.name} code here...`}
            />

            <button
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                onClick={runCode}
            >
                Run Code
            </button>

            <div className="mt-4 bg-gray-800 p-4 rounded">
                <h3>Output:</h3>
                <pre>{output}</pre>
            </div>

            {selectedQuestionIndex !== null &&
                (completedQuestions[language] || []).includes(selectedQuestionIndex) && (
                    <div className="mt-4 bg-yellow-600 p-4 rounded">
                        <h3>Solution:</h3>
                        <pre>{currentQuestions[selectedQuestionIndex]?.solution}</pre>
                    </div>
                )}
        </div>
    );
};

export default Modules;
