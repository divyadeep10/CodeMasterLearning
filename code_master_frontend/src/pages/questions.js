export const questions = {
    python: [
        {
            question: "Question 1: Write a program that prints 'Hello World'.",
            expectedOutput: "Hello World",
            solution: "print('Hello World')"
        },
        {
            question: "Question 2: Add two numbers with a = 2 and b = 3.", 
            expectedOutput: "5",
            solution: "a = 2\nb = 3\nprint(a + b)"
        },
        {
            question: "Question 3: Find the square of a number with num = 4.",
            expectedOutput: "16",
            solution: "num = 4\nprint(num ** 2)"
        },
        {
            question: "Question 4: Check if a num = 3 is even or odd.",
            expectedOutput: "Odd",
            solution: "num = 3\nif num % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')"
        },
        {
            question: "Question 5: Print the elements of a list = [1,2,3,4].",
            expectedOutput: "1 2 3 4",
            solution: "lst = [1, 2, 3, 4]\nfor item in lst:\n    print(item, end=' ')"
        },
        {
            question: "Question 6: Create a function to calculate the factorial of a number n = 5.",
            expectedOutput: "120",
            solution: "def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\nprint(factorial(5))"
        },
        {
            question: "Question 7: Write a program to handle division by zero error for a = 10, b = 0.",
            expectedOutput: "Cannot divide by zero",
            solution: "a, b = 10, 0\ntry:\n    print(a / b)\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')"
        },
        {
            question: "Question 8: Reverse a string (s = Hello).",
            expectedOutput: "olleH",
            solution: "s = 'Hello'\nprint(s[::-1])"
        },
        {
            question: "Question 9: Check if a number is positive, negative, or zero for num = 5.",
            expectedOutput: "Positive",
            solution: "num = 5\nif num > 0:\n    print('Positive')\nelif num < 0:\n    print('Negative')\nelse:\n    print('Zero')"
        },
        {
            question: "Question 10: Find the largest number in a list where list = [3,5,7,9,1].",
            expectedOutput: "9",
            solution: "lst = [3, 5, 7, 9, 1]\nprint(max(lst))"
        },
        {
            question: "Question 11: Write a program to check if a given year (year = 2024) is a leap year.",
            expectedOutput: "Leap Year",
            solution: "year = 2024\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print('Leap Year')\nelse:\n    print('Not a Leap Year')"
        },
        {
            question: "Question 12: Write a program to calculate the sum of numbers from 1 to n, where n = 10.",
            expectedOutput: "55",
            solution: "n = 10\nprint(sum(range(1, n + 1)))"
        },
        {
            question: "Question 13: Create a function to check if a number is prime, where num = 7.",
            expectedOutput: "Prime",
            solution: "def is_prime(num):\n    if num <= 1:\n        return 'Not Prime'\n    for i in range(2, int(num ** 0.5) + 1):\n        if num % i == 0:\n            return 'Not Prime'\n    return 'Prime'\nprint(is_prime(7))"
        },
        {
            question: "Question 14: Create a dictionary and print its keys and values. dict = {'a': 1, 'b': 2, 'c': 3}.",
            expectedOutput: "Keys: ['a', 'b', 'c'] Values: [1, 2, 3]",
            solution: "d = {'a': 1, 'b': 2, 'c': 3}\nprint('Keys:', list(d.keys()))\nprint('Values:', list(d.values()))"
        },
        {
            question: "Question 15: Write a program to read a file and print its content. (Assume file.txt exists.)",
            expectedOutput: "Content of file.txt",
            solution: "with open('file.txt', 'r') as f:\n    print(f.read())"
        },
        {
            question: "Question 16: Sort a list in ascending order, where list = [5, 3, 8, 6, 1].",
            expectedOutput: "[1, 3, 5, 6, 8]",
            solution: "lst = [5, 3, 8, 6, 1]\nlst.sort()\nprint(lst)"
        },
        {
            question: "Question 17: Write a program to create a tuple and access its second element. tuple = (1, 2, 3).",
            expectedOutput: "2",
            solution: "t = (1, 2, 3)\nprint(t[1])"
        },
        {
            question: "Question 18: Write a program to check if a string is a palindrome. string = 'radar'. (if it is palindrome print 'Palindrome' else print 'Not Palindrome')",
            expectedOutput: "Palindrome",
            solution: "s = 'radar'\nif s == s[::-1]:\n    print('Palindrome')\nelse:\n    print('Not Palindrome')"
        },
        {
            question: "Question 19: Write a program to count the occurrences of each character in a string. string = 'hello'.",
            expectedOutput: "{'h': 1, 'e': 1, 'l': 2, 'o': 1}",
            solution: "s = 'hello'\nfrom collections import Counter\nprint(dict(Counter(s)))"
        },

    ],
    cpp: [
        {
            question: "Question 1: Write a program that prints 'Hello World'",
            expectedOutput: "Hello World",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"Hello World\";\n    return 0;\n}"
        },
        {
            question: "Question 2: Add two numbers a = 2 and b = 3",
            expectedOutput: "5",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 2, b = 3;\n    cout << a + b;\n    return 0;\n}"
        },
        {
            question: "Question 3: Find the square of a number for num = 4",
            expectedOutput: "16",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int num = 4;\n    cout << num * num;\n    return 0;\n}"
        },
        {
            question: "Question 4: Check if a number is even or odd for num = 3",
            expectedOutput: "Odd",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int num = 3;\n    if (num % 2 == 0)\n        cout << \"Even\";\n    else\n        cout << \"Odd\";\n    return 0;\n}"
        },
        {
            question: "Question 5: Print the elements of an array {1, 2, 3, 4}",
            expectedOutput: "1 2 3 4",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    for (int i = 0; i < 4; i++)\n        cout << arr[i] << \" \";\n    return 0;\n}"
        },
        {
            question: "Question 6: Create a function to calculate the factorial of a number with num = 4",
            expectedOutput: "120",
            solution: "#include <iostream>\nusing namespace std;\nint factorial(int n) {\n    if (n == 0)\n        return 1;\n    return n * factorial(n - 1);\n}\nint main() {\n    cout << factorial(5);\n    return 0;\n}"
        },
        {
            question: "Question 7: Take input from the user and print it ",
            expectedOutput: "You entered: Hello",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    string input;\n    cout << \"Enter something: \";\n    cin >> input;\n    cout << \"You entered: \" << input;\n    return 0;\n}"
        },
        {
            question: "Question 8: Reverse a string (s = Hello)",
            expectedOutput: "olleH",
            solution: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string s = \"Hello\";\n    reverse(s.begin(), s.end());\n    cout << s;\n    return 0;\n}"
        },
        {
            question: "Question 9: Check if a number is positive, negative, or zero for num = 5",
            expectedOutput: "Positive",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int num = 5;\n    if (num > 0)\n        cout << \"Positive\";\n    else if (num < 0)\n        cout << \"Negative\";\n    else\n        cout << \"Zero\";\n    return 0;\n}"
        },
        {
            question: "Question 10: Find the largest number in an array {3, 5, 7, 9, 1}",
            expectedOutput: "9",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {3, 5, 7, 9, 1};\n    int maxNum = arr[0];\n    for (int i = 1; i < 5; i++) {\n        if (arr[i] > maxNum)\n            maxNum = arr[i];\n    }\n    cout << maxNum;\n    return 0;\n}"
        },
        {
            question: "Question 11: Swap two numbers using a temporary variable with a = 10, b = 20",
            expectedOutput: "After swapping: a = 10, b = 20",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 20, b = 10, temp;\n    temp = a;\n    a = b;\n    b = temp;\n    cout << \"After swapping: a = \" << a << \", b = \" << b;\n    return 0;\n}"
        },
        {
            question: "Question 12: Find the sum of digits of a number with num = 123",
            expectedOutput: "6",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int num = 123, sum = 0;\n    while (num > 0) {\n        sum += num % 10;\n        num /= 10;\n    }\n    cout << sum;\n    return 0;\n}"
        },
        {
            question: "Question 13: Check if a string is a palindrome (s = madam) if it is palindrome print 'Palindrome' else print 'Not Palindrome'",
            expectedOutput: "Palindrome",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    string s = \"madam\", rev = s;\n    reverse(rev.begin(), rev.end());\n    if (s == rev)\n        cout << \"Palindrome\";\n    else\n        cout << \"Not Palindrome\";\n    return 0;\n}"
        },
        {
            question: "Question 14: Calculate the power of a number with base = 2 and exponent = 4",
            expectedOutput: "16",
            solution: "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    int base = 2, exp = 4;\n    cout << pow(base, exp);\n    return 0;\n}"
        },
        {
            question: "Question 15: Count vowels in a string (s = hello world)",
            expectedOutput: "3",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    string s = \"hello world\";\n    int count = 0;\n    for (char c : s) {\n        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')\n            count++;\n    }\n    cout << count;\n    return 0;\n}"
        },
        {
            question: "Question 16: Sort an array in ascending order {5, 3, 4, 1, 2}",
            expectedOutput: "1 2 3 4 5",
            solution: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int arr[] = {5, 3, 4, 1, 2};\n    sort(arr, arr + 5);\n    for (int i : arr)\n        cout << i << \" \";\n    return 0;\n}"
        },
        {
            question: "Question 17: Find the GCD of two numbers a = 12, b = 16",
            expectedOutput: "4",
            solution: "#include <iostream>\nusing namespace std;\nint gcd(int a, int b) {\n    while (b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return a;\n}\nint main() {\n    cout << gcd(12, 16);\n    return 0;\n}"
        },
        {
            question: "Question 18: Convert Celsius to Fahrenheit for celsius = 0",
            expectedOutput: "32",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    double celsius = 0;\n    double fahrenheit = (celsius * 9 / 5) + 32;\n    cout << fahrenheit;\n    return 0;\n}"
        },
        {
            question: "Question 19: Find the average of an array {1, 2, 3, 4, 5}",
            expectedOutput: "3",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int sum = 0;\n    for (int i : arr)\n        sum += i;\n    cout << sum / 5;\n    return 0;\n}"
        },
        {
            question: "Question 20: Generate Fibonacci series up to n terms where n = 5",
            expectedOutput: "0 1 1 2 3",
            solution: "#include <iostream>\nusing namespace std;\nint main() {\n    int n = 5, t1 = 0, t2 = 1;\n    cout << t1 << \" \" << t2 << \" \";\n    for (int i = 3; i <= n; ++i) {\n        int nextTerm = t1 + t2;\n        cout << nextTerm << \" \";\n        t1 = t2;\n        t2 = nextTerm;\n    }\n    return 0;\n}"
        },
    ],
    c: [
        {
            question: "Question 1: Write a program that prints 'Hello World'.",
            expectedOutput: "Hello World",
            solution: "#include<stdio.h>\nint main() {\n    printf(\"Hello World\\n\");\n    return 0;\n}"
        },
        {
            question: "Question 2: Write a program that prints 'codeMaster'.",
            expectedOutput: "codeMaster",
            solution: "#include<stdio.h>\nint main() {\n    printf(\"codeMaster\\n\");\n    return 0;\n}"
        },
        {
            question: "Question 3: Write a program to add two numbers a = 3 and b = 4.",
            expectedOutput: "7",
            solution: "#include<stdio.h>\nint main() {\n    int a = 3, b = 4;\n    printf(\"%d\\n\", a + b);\n    return 0;\n}"
        },
        {
            question: "Question 4: Write a program to subtract two numbers a = 5 and b = 3.",
            expectedOutput: "2",
            solution: "#include<stdio.h>\nint main() {\n    int a = 5, b = 3;\n    printf(\"%d\\n\", a - b);\n    return 0;\n}"
        },
        {
            question: "Question 5: Write a program to multiply two numbers a = 4 and b = 5.",
            expectedOutput: "20",
            solution: "#include<stdio.h>\nint main() {\n    int a = 4, b = 5;\n    printf(\"%d\\n\", a * b);\n    return 0;\n}"
        },
        {
            question: "Question 6: Write a program to divide two numbers a = 6 and b = 3.",
            expectedOutput: "2",
            solution: "#include<stdio.h>\nint main() {\n    int a = 6, b = 3;\n    printf(\"%d\\n\", a / b);\n    return 0;\n}"
        },
        {
            question: "Question 7: Write a program to calculate the remainder of two numbers a = 7 and b = 3.",
            expectedOutput: "1",
            solution: "#include<stdio.h>\nint main() {\n    int a = 7, b = 3;\n    printf(\"%d\\n\", a % b);\n    return 0;\n}"
        },
        {
            question: "Question 8: Write a program to find the square of a number a = 5.",
            expectedOutput: "25",
            solution: "#include<stdio.h>\nint main() {\n    int num = 5;\n    printf(\"%d\\n\", num * num);\n    return 0;\n}"
        },
        {
            question: "Question 9: Write a program to calculate the area of a rectangle with length = 5 and breadth = 4.",
            expectedOutput: "20",
            solution: "#include<stdio.h>\nint main() {\n    int length = 5, width = 4;\n    printf(\"%d\\n\", length * width);\n    return 0;\n}"
        },
        {
            question: "Question 10: Write a program to swap two numbers without using a third variable a = 5 and b = 3 print it like 'After swapping a = 3 and b = 5'.",
            expectedOutput: "After swapping: a = 3, b = 5",
            solution: "#include<stdio.h>\nint main() {\n    int a = 5, b = 3;\n    a = a + b;\n    b = a - b;\n    a = a - b;\n    printf(\"After swapping: a = %d, b = %d\\n\", a, b);\n    return 0;\n}"
        },
        {
            question: "Question 11: Write a program to check if a number is even or odd num = 7.",
            expectedOutput: "Odd",
            solution: "#include<stdio.h>\nint main() {\n    int num = 7;\n    if (num % 2 == 0) {\n        printf(\"Even\\n\");\n    } else {\n        printf(\"Odd\\n\");\n    }\n    return 0;\n}"
        },
        {
            question: "Question 12: Write a program to find the largest of two numbers a = 5 and b = 3.",
            expectedOutput: "5",
            solution: "#include<stdio.h>\nint main() {\n    int a = 5, b = 3;\n    if (a > b) {\n        printf(\"%d\\n\", a);\n    } else {\n        printf(\"%d\\n\", b);\n    }\n    return 0;\n}"
        },
        {
            question: "Question 13: Write a program to find the largest of three numbers a = 5, b = 8 and c = 3.",
            expectedOutput: "8",
            solution: "#include<stdio.h>\nint main() {\n    int a = 5, b = 8, c = 3;\n    if (a > b && a > c) {\n        printf(\"%d\\n\", a);\n    } else if (b > c) {\n        printf(\"%d\\n\", b);\n    } else {\n        printf(\"%d\\n\", c);\n    }\n    return 0;\n}"
        },
        {
            question: "Question 14: Write a program to check if a number is positive, negative, or zero num = 5.",
            expectedOutput: "Positive",
            solution: "#include<stdio.h>\nint main() {\n    int num = 7;\n    if (num > 0) {\n        printf(\"Positive\\n\");\n    } else if (num < 0) {\n        printf(\"Negative\\n\");\n    } else {\n        printf(\"Zero\\n\");\n    }\n    return 0;\n}"
        },
        {
            question: "Question 15: Write a program to calculate the factorial of a number num = 5.",
            expectedOutput: "120",
            solution: "#include<stdio.h>\nint main() {\n    int num = 5, fact = 1;\n    for (int i = 1; i <= num; i++) {\n        fact *= i;\n    }\n    printf(\"%d\\n\", fact);\n    return 0;\n}"
        },
        {
            question: "Question 16: Write a program to print the Fibonacci series up to 10 terms.",
            expectedOutput: "0 1 1 2 3 5 8 13 21 34",
            solution: "#include<stdio.h>\nint main() {\n    int n1 = 0, n2 = 1, n3, i;\n    printf(\"%d %d \", n1, n2);\n    for (i = 2; i < 10; i++) {\n        n3 = n1 + n2;\n        printf(\"%d \", n3);\n        n1 = n2;\n        n2 = n3;\n    }\n    printf(\"\\n\");\n    return 0;\n}"
        },
        {
            question: "Question 17: Write a program to find the reverse of a number num = 1234.",
            expectedOutput: "4321",
            solution: "#include<stdio.h>\nint main() {\n    int num = 1234, reverse = 0;\n    while (num != 0) {\n        reverse = reverse * 10 + num % 10;\n        num /= 10;\n    }\n    printf(\"%d\\n\", reverse);\n    return 0;\n}"
        },
        {
            question: "Question 18: Write a program to check if a number is prime or not num = 7.",
            expectedOutput: "Prime",
            solution: "#include<stdio.h>\nint main() {\n    int num = 7, isPrime = 1;\n    for (int i = 2; i <= num / 2; i++) {\n        if (num % i == 0) {\n            isPrime = 0;\n            break;\n        }\n    }\n    if (isPrime) {\n        printf(\"Prime\\n\");\n    } else {\n        printf(\"Not Prime\\n\");\n    }\n    return 0;\n}"
        },
        {
            question: "Question 19: Write a program to find the sum of digits of a number num = 1234.",
            expectedOutput: "10",
            solution: "#include<stdio.h>\nint main() {\n    int num = 1234, sum = 0;\n    while (num != 0) {\n        sum += num % 10;\n        num /= 10;\n    }\n    printf(\"%d\\n\", sum);\n    return 0;\n}"
        },
        {
            question: "Question 20: Write a program to count the number of digits in a number num = 1234.",
            expectedOutput: "4",
            solution: "#include<stdio.h>\nint main() {\n    int num = 1234, count = 0;\n    while (num != 0) {\n        count++;\n        num /= 10;\n    }\n    printf(\"%d\\n\", count);\n    return 0;\n}"
        }
    ],

    javascript: [
        {
            question: "Question 1: Write a program that prints 'Hello World'.",
            expectedOutput: "Hello World",
            solution: "console.log('Hello World');"
        },
        {
            question: "Question 2: Add two numbers.",
            expectedOutput: "5",
            solution: "const a = 2;\nconst b = 3;\nconsole.log(a + b);"
        },
        {
            question: "Question 3: Find the square of a number.",
            expectedOutput: "16",
            solution: "const num = 4;\nconsole.log(num ** 2);"
        },
        {
            question: "Question 4: Check if a number is even or odd.",
            expectedOutput: "Odd",
            solution: "const num = 5;\nconsole.log(num % 2 === 0 ? 'Even' : 'Odd');"
        },
        {
            question: "Question 5: Print numbers from 1 to 5 using a loop.",
            expectedOutput: "1\n2\n3\n4\n5",
            solution: "for (let i = 1; i <= 5; i++) {\n    console.log(i);\n}"
        },
        {
            question: "Question 6: Find the factorial of a number.",
            expectedOutput: "120",
            solution: "const num = 5;\nlet factorial = 1;\nfor (let i = 1; i <= num; i++) {\n    factorial *= i;\n}\nconsole.log(factorial);"
        },
        {
            question: "Question 7: Create and print an array of numbers.",
            expectedOutput: "[1, 2, 3, 4, 5]",
            solution: "const arr = [1, 2, 3, 4, 5];\nconsole.log(arr);"
        },
        {
            question: "Question 8: Find the largest number in an array.",
            expectedOutput: "9",
            solution: "const arr = [3, 5, 7, 9, 1];\nconsole.log(Math.max(...arr));"
        },
        {
            question: "Question 9: Reverse a string.",
            expectedOutput: "dlroW olleH",
            solution: "const str = 'Hello World';\nconsole.log(str.split('').reverse().join(''));"
        },
        {
            question: "Question 10: Write a function to add two numbers.",
            expectedOutput: "8",
            solution: "function add(a, b) {\n    return a + b;\n}\nconsole.log(add(3, 5));"
        },
        {
            question: "Question 11: Check if a number is positive, negative, or zero.",
            expectedOutput: "Positive",
            solution: "const num = 10;\nconsole.log(num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero');"
        },
        {
            question: "Question 12: Print the first 5 elements of the Fibonacci series.",
            expectedOutput: "0\n1\n1\n2\n3",
            solution: "let a = 0, b = 1;\nconsole.log(a);\nconsole.log(b);\nfor (let i = 0; i < 3; i++) {\n    let c = a + b;\n    console.log(c);\n    a = b;\n    b = c;\n}"
        },
        {
            question: "Question 13: Convert a string to uppercase.",
            expectedOutput: "HELLO",
            solution: "const str = 'hello';\nconsole.log(str.toUpperCase());"
        },
        {
            question: "Question 14: Filter even numbers from an array.",
            expectedOutput: "[2, 4, 6]",
            solution: "const arr = [1, 2, 3, 4, 5, 6];\nconsole.log(arr.filter(num => num % 2 === 0));"
        },
        {
            question: "Question 15: Merge two arrays.",
            expectedOutput: "[1, 2, 3, 4, 5, 6]",
            solution: "const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconsole.log(arr1.concat(arr2));"
        },
        {
            question: "Question 16: Sort an array in ascending order.",
            expectedOutput: "[1, 2, 3, 4, 5]",
            solution: "const arr = [5, 3, 1, 4, 2];\nconsole.log(arr.sort((a, b) => a - b));"
        },
        {
            question: "Question 17: Write a program that checks if a string is a palindrome.",
            expectedOutput: "true",
            solution: "const str = 'madam';\nconsole.log(str === str.split('').reverse().join(''));"
        },
        {
            question: "Question 18: Create an object and print a property value.",
            expectedOutput: "John",
            solution: "const person = { name: 'John', age: 30 };\nconsole.log(person.name);"
        },
        {
            question: "Question 19: Convert a number to a string.",
            expectedOutput: "123",
            solution: "const num = 123;\nconsole.log(num.toString());"
        },
        {
            question: "Question 20: Find the length of a string.",
            expectedOutput: "11",
            solution: "const str = 'Hello World';\nconsole.log(str.length);"
        }
    ],

    java: [
        {
            question: "Question 1: Write a program that prints 'Hello World'.",
            expectedOutput: "Hello World",
            solution: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\");\n    }\n}"
        },
        {
            question: "Question 2: Add two numbers.",
            expectedOutput: "5",
            solution: "public class Main {\n    public static void main(String[] args) {\n        int a = 2, b = 3;\n        System.out.println(a + b);\n    }\n}"
        },
        {
            question: "Question 3: Find the square of a number.",
            expectedOutput: "16",
            solution: "public class Main {\n    public static void main(String[] args) {\n        int num = 4;\n        System.out.println(num * num);\n    }\n}"
        },
        {
            question: "Question 4: Check if a number is even or odd.",
            expectedOutput: "Odd",
            solution: "public class Main {\n    public static void main(String[] args) {\n        int num = 5;\n        System.out.println(num % 2 == 0 ? \"Even\" : \"Odd\");\n    }\n}"
        },
        {
            question: "Question 5: Print numbers from 1 to 5 using a loop.",
            expectedOutput: "1\n2\n3\n4\n5",
            solution: "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(i);\n        }\n    }\n}"
        },
        {
            question: "Question 6: Find the factorial of a number.",
            expectedOutput: "120",
            solution: "public class Main {\n    public static void main(String[] args) {\n        int num = 5;\n        int factorial = 1;\n        for (int i = 1; i <= num; i++) {\n            factorial *= i;\n        }\n        System.out.println(factorial);\n    }\n}"
        },
        {
            question: "Question 7: Create and print an array of numbers.",
            expectedOutput: "[1, 2, 3, 4, 5]",
            solution: "import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        System.out.println(Arrays.toString(arr));\n    }\n}"
        },
        {
            question: "Question 8: Find the largest number in an array.",
            expectedOutput: "9",
            solution: "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {3, 5, 7, 9, 1};\n        int max = arr[0];\n        for (int num : arr) {\n            if (num > max) {\n                max = num;\n            }\n        }\n        System.out.println(max);\n    }\n}"
        },
        {
            question: "Question 9: Reverse a string.",
            expectedOutput: "dlroW olleH",
            solution: "public class Main {\n    public static void main(String[] args) {\n        String str = \"Hello World\";\n        String reversed = new StringBuilder(str).reverse().toString();\n        System.out.println(reversed);\n    }\n}"
        },
        {
            question: "Question 10: Write a function to add two numbers.",
            expectedOutput: "8",
            solution: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(add(3, 5));\n    }\n    public static int add(int a, int b) {\n        return a + b;\n    }\n}"
        },
        {
            question: "Question 11: Check if a number is positive, negative, or zero.",
            expectedOutput: "Positive",
            solution: "public class Main {\n    public static void main(String[] args) {\n        int num = 10;\n        if (num > 0) {\n            System.out.println(\"Positive\");\n        } else if (num < 0) {\n            System.out.println(\"Negative\");\n        } else {\n            System.out.println(\"Zero\");\n        }\n    }\n}"
        },
        {
            question: "Question 12: Print the first 5 elements of the Fibonacci series.",
            expectedOutput: "0\n1\n1\n2\n3",
            solution: "public class Main {\n    public static void main(String[] args) {\n        int a = 0, b = 1;\n        System.out.println(a);\n        System.out.println(b);\n        for (int i = 0; i < 3; i++) {\n            int c = a + b;\n            System.out.println(c);\n            a = b;\n            b = c;\n        }\n    }\n}"
        },
        {
            question: "Question 13: Convert a string to uppercase.",
            expectedOutput: "HELLO",
            solution: "public class Main {\n    public static void main(String[] args) {\n        String str = \"hello\";\n        System.out.println(str.toUpperCase());\n    }\n}"
        },
        {
            question: "Question 14: Filter even numbers from an array.",
            expectedOutput: "[2, 4, 6]",
            solution: "import java.util.Arrays;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5, 6};\n        int[] even = Arrays.stream(arr).filter(num -> num % 2 == 0).toArray();\n        System.out.println(Arrays.toString(even));\n    }\n}"
        },
        {
            question: "Question 15: Merge two arrays.",
            expectedOutput: "[1, 2, 3, 4, 5, 6]",
            solution: "import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr1 = {1, 2, 3};\n        int[] arr2 = {4, 5, 6};\n        int[] merged = new int[arr1.length + arr2.length];\n        System.arraycopy(arr1, 0, merged, 0, arr1.length);\n        System.arraycopy(arr2, 0, merged, arr1.length, arr2.length);\n        System.out.println(Arrays.toString(merged));\n    }\n}"
        },
        {
            question: "Question 16: Sort an array in ascending order.",
            expectedOutput: "[1, 2, 3, 4, 5]",
            solution: "import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {5, 3, 1, 4, 2};\n        Arrays.sort(arr);\n        System.out.println(Arrays.toString(arr));\n    }\n}"
        },
        {
            question: "Question 17: Write a program that checks if a string is a palindrome.",
            expectedOutput: "true",
            solution: "public class Main {\n    public static void main(String[] args) {\n        String str = \"madam\";\n        boolean isPalindrome = str.equals(new StringBuilder(str).reverse().toString());\n        System.out.println(isPalindrome);\n    }\n}"
        },
        {
            question: "Question 18: Create an object and print a property value.",
            expectedOutput: "John",
            solution: "class Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Person person = new Person(\"John\", 30);\n        System.out.println(person.name);\n    }\n}"
        },
        {
            question: "Question 19: Convert a number to a string.",
            expectedOutput: "123",
            solution: "public class Main {\n    public static void main(String[] args) {\n        int num = 123;\n        String str = Integer.toString(num);\n        System.out.println(str);\n    }\n}"
        },
        {
            question: "Question 20: Find the length of a string.",
            expectedOutput: "11",
            solution: "public class Main {\n    public static void main(String[] args) {\n        String str = \"Hello World\";\n        System.out.println(str.length());\n    }\n}"
        }
    ],

    ruby: [
        {
            question: "Question 1: Write a program that prints 'Hello World'.",
            expectedOutput: "Hello World",
            solution: "puts 'Hello World'"
        },
        {
            question: "Question 2: Add two numbers.",
            expectedOutput: "5",
            solution: "a = 2\nb = 3\nputs a + b"
        },
        {
            question: "Question 3: Find the square of a number.",
            expectedOutput: "16",
            solution: "num = 4\nputs num ** 2"
        },
        {
            question: "Question 4: Check if a number is even or odd.",
            expectedOutput: "Odd",
            solution: "num = 5\nputs num.even? ? 'Even' : 'Odd'"
        },
        {
            question: "Question 5: Print numbers from 1 to 5 using a loop.",
            expectedOutput: "1\n2\n3\n4\n5",
            solution: "(1..5).each { |i| puts i }"
        },
        {
            question: "Question 6: Find the factorial of a number.",
            expectedOutput: "120",
            solution: "num = 5\nfactorial = (1..num).inject(:*)\nputs factorial"
        },
        {
            question: "Question 7: Create and print an array of numbers.",
            expectedOutput: "[1, 2, 3, 4, 5]",
            solution: "arr = [1, 2, 3, 4, 5]\nputs arr.inspect"
        },
        {
            question: "Question 8: Find the largest number in an array.",
            expectedOutput: "9",
            solution: "arr = [3, 5, 7, 9, 1]\nputs arr.max"
        },
        {
            question: "Question 9: Reverse a string.",
            expectedOutput: "dlroW olleH",
            solution: "str = 'Hello World'\nputs str.reverse"
        },
        {
            question: "Question 10: Write a function to add two numbers.",
            expectedOutput: "8",
            solution: "def add(a, b)\n  a + b\nend\nputs add(3, 5)"
        },
        {
            question: "Question 11: Check if a number is positive, negative, or zero.",
            expectedOutput: "Positive",
            solution: "num = 10\nputs num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero'"
        },
        {
            question: "Question 12: Print the first 5 elements of the Fibonacci series.",
            expectedOutput: "0\n1\n1\n2\n3",
            solution: "a, b = 0, 1\nputs a\nputs b\n3.times do\n  a, b = b, a + b\n  puts b\nend"
        },
        {
            question: "Question 13: Convert a string to uppercase.",
            expectedOutput: "HELLO",
            solution: "str = 'hello'\nputs str.upcase"
        },
        {
            question: "Question 14: Filter even numbers from an array.",
            expectedOutput: "[2, 4, 6]",
            solution: "arr = [1, 2, 3, 4, 5, 6]\nevens = arr.select { |num| num.even? }\nputs evens.inspect"
        },
        {
            question: "Question 15: Merge two arrays.",
            expectedOutput: "[1, 2, 3, 4, 5, 6]",
            solution: "arr1 = [1, 2, 3]\narr2 = [4, 5, 6]\nmerged = arr1 + arr2\nputs merged.inspect"
        },
        {
            question: "Question 16: Sort an array in ascending order.",
            expectedOutput: "[1, 2, 3, 4, 5]",
            solution: "arr = [5, 3, 1, 4, 2]\nputs arr.sort.inspect"
        },
        {
            question: "Question 17: Write a program that checks if a string is a palindrome.",
            expectedOutput: "true",
            solution: "str = 'madam'\nputs str == str.reverse"
        },
        {
            question: "Question 18: Create an object and print a property value.",
            expectedOutput: "John",
            solution: "class Person\n  attr_accessor :name, :age\n\n  def initialize(name, age)\n    @name = name\n    @age = age\n  end\nend\n\nperson = Person.new('John', 30)\nputs person.name"
        },
        {
            question: "Question 19: Convert a number to a string.",
            expectedOutput: "123",
            solution: "num = 123\nputs num.to_s"
        },
        {
            question: "Question 20: Find the length of a string.",
            expectedOutput: "11",
            solution: "str = 'Hello World'\nputs str.length"
        }
    ],

};
