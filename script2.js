function generateProblemAndProverb() {
    var age = document.getElementById('age').value;
    var domain = document.getElementById('domain').value;

    var problem = generateProblem(age, domain);
    var proverb = generateProverb(age);

    displayResult(problem, proverb);
}

function generateProblem(age, domain) {
    if (age === '10') {
        if (domain === 'math') {
            return generateRandomElement(mathProblems10);
        } else if (domain === 'coding') {
            return generateRandomElement(codingProblems10);
        }
    } else if (age === '18') {
        if (domain === 'math') {
            return generateRandomElement(mathProblems18);
        } else if (domain === 'coding') {
            return generateRandomElement(codingProblems18);
        }
    }

    return 'No problem generated for the selected age and domain.';
}

function generateProverb(age) {
    if (age === '10' || age === '18') {
        return generateRandomElement(proverbs);
    }

    return 'No proverb generated for the selected age.';
}

function generateRandomElement(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function displayResult(problem, proverb) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Generated Problem:</h2>';
    resultDiv.innerHTML += '<p>' + problem + '</p>';
    resultDiv.innerHTML += '<h2>Generated Proverb:</h2>';
    resultDiv.innerHTML += '<p>' + proverb + '</p>';
}

// Lists of problems and proverbs
var codingProblems10 = [
    'Write a program to find even or odd',
    'Write a program to Print 1 to 10 number',
    'write a program which prints Welcome message.',
    'Write a program to find sum of numbers',
    // Add more coding problems for 10-year-olds as needed
];

var codingProblems18 = [
    'Develop a web application for managing tasks using a front-end framework.',
    'Write a program to implement a sorting algorithm of your choice.',
    'Create a RESTful API for a user authentication system.',
    'Write a program to print the first 10 prime numbers.',
    'Create a function to find the maximum element in an array.',
    'Implement a simple game using Python.',
    // Add more coding problems for 18-year-olds as needed
];

var mathProblems10 = [
    'Solve the equation: 3x + 7 = 16.',
    'Calculate the area of a rectangle with length 5 and width 8.',
    'Find the square root of 81.',
    'find the area of rectangel whose length id 10cm and breadth is 8cm',
    'Find the area of a square whose side is 10cm.',
    // Add more math problems for 10-year-olds as needed
];

var mathProblems18 = [
    'Solve a system of linear equations with three variables.',
    'Calculate the definite integral of a given mathematical function.',
    'Prove the Pythagorean theorem using geometry.',
    'Write the procedure to find the determinent of a matrix',
    'Write the Procedure to find the Psuedo inverse of a matrix',
    'What is PCA, Explain how to find Principle components',
    // Add more math problems for 18-year-olds as needed
];

var proverbs = [
    'A stitch in time saves nine.',
    'Actions speak louder than words.',
    'Don’t count your chickens before they hatch.',
    'Todays future is tomorrows present',
    'Rome was not build in a day',
    // Add more proverbs as needed
];
