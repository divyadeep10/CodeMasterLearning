export const questions = {
    python: [
        {
            question: "Question 1: Write a program that prints 'Hello World'.",
            expectedOutput: "Hello World",
            solution: "print('Hello World')"
        },
        {
            question: "Question 2: Add two numbers.",
            expectedOutput: "5",
            solution: "a = 2\nb = 3\nprint(a + b)"
        },
        {
            question: "Question 3: Find the square of a number.",
            expectedOutput: "16",
            solution: "num = 4\nprint(num ** 2)"
        },
        {
            question: "Question 4: Check if a number is even or odd.",
            expectedOutput: "Odd",
            solution: "num = 3\nif num % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')"
        },
        {
            question: "Question 5: Print the elements of a list.",
            expectedOutput: "1 2 3 4",
            solution: "lst = [1, 2, 3, 4]\nfor item in lst:\n    print(item, end=' ')"
        },
        {
            question: "Question 6: Create a function to calculate the factorial of a number.",
            expectedOutput: "120",
            solution: "def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\nprint(factorial(5))"
        },
        {
            question: "Question 7: Take input from the user and print it.",
            expectedOutput: "You entered: Hello",
            solution: "inp = input('Enter something: ')\nprint('You entered:', inp)"
        },
        {
            question: "Question 8: Reverse a string.",
            expectedOutput: "olleH",
            solution: "s = 'Hello'\nprint(s[::-1])"
        },
        {
            question: "Question 9: Check if a number is positive, negative, or zero.",
            expectedOutput: "Positive",
            solution: "num = 5\nif num > 0:\n    print('Positive')\nelif num < 0:\n    print('Negative')\nelse:\n    print('Zero')"
        },
        {
            question: "Question 10: Find the largest number in a list.",
            expectedOutput: "9",
            solution: "lst = [3, 5, 7, 9, 1]\nprint(max(lst))"
        },
        // Add more questions up to 30 as needed
    ],
    cpp: [
        {
            question: "Question 1: Write a program that prints 'Hello World'.",
            expectedOutput: "Hello World",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"Hello World\";\n    return 0;\n}"
        },
        {
            question: "Question 2: Add two numbers.",
            expectedOutput: "5",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 2, b = 3;\n    cout << a + b;\n    return 0;\n}"
        },
        {
            question: "Question 3: Find the square of a number.",
            expectedOutput: "16",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int num = 4;\n    cout << num * num;\n    return 0;\n}"
        },
        {
            question: "Question 4: Check if a number is even or odd.",
            expectedOutput: "Odd",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int num = 3;\n    if (num % 2 == 0)\n        cout << \"Even\";\n    else\n        cout << \"Odd\";\n    return 0;\n}"
        },
        {
            question: "Question 5: Print the elements of an array.",
            expectedOutput: "1 2 3 4",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    for (int i = 0; i < 4; i++)\n        cout << arr[i] << \" \";\n    return 0;\n}"
        },
        {
            question: "Question 6: Create a function to calculate the factorial of a number.",
            expectedOutput: "120",
            solution: "#include <iostream>\nusing namespace std;\nint factorial(int n) {\n    if (n == 0)\n        return 1;\n    return n * factorial(n - 1);\n}\nint main() {\n    cout << factorial(5);\n    return 0;\n}"
        },
        {
            question: "Question 7: Take input from the user and print it.",
            expectedOutput: "You entered: Hello",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    string input;\n    cout << \"Enter something: \";\n    cin >> input;\n    cout << \"You entered: \" << input;\n    return 0;\n}"
        },
        {
            question: "Question 8: Reverse a string.",
            expectedOutput: "olleH",
            solution: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string s = \"Hello\";\n    reverse(s.begin(), s.end());\n    cout << s;\n    return 0;\n}"
        },
        {
            question: "Question 9: Check if a number is positive, negative, or zero.",
            expectedOutput: "Positive",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int num = 5;\n    if (num > 0)\n        cout << \"Positive\";\n    else if (num < 0)\n        cout << \"Negative\";\n    else\n        cout << \"Zero\";\n    return 0;\n}"
        },
        {
            question: "Question 10: Find the largest number in an array.",
            expectedOutput: "9",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {3, 5, 7, 9, 1};\n    int maxNum = arr[0];\n    for (int i = 1; i < 5; i++) {\n        if (arr[i] > maxNum)\n            maxNum = arr[i];\n    }\n    cout << maxNum;\n    return 0;\n}"
        },
        // Add more questions up to 30 as needed
    ]
};
