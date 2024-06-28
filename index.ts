#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

// Define the quiz questions
interface Question {
    question: string;
    options: string[];
    answer: string;
}

const questions: Question[] = [
    {
        question: "What does TypeScript provide over JavaScript?",
        options: ["Static Typing", "Dynamic Typing", "No Typing", "Strong Typing"],
        answer: "Static Typing"
    },
    {
        question: "Which keyword is used to define a TypeScript interface?",
        options: ["class", "interface", "type", "struct"],
        answer: "interface"
    },
    {
        question: "What is the output of `console.log(typeof null);` in TypeScript?",
        options: ["null", "undefined", "object", "string"],
        answer: "object"
    },
    {
        question: "Which TypeScript feature allows for defining optional properties in interfaces?",
        options: ["partial Types", "Optional Properties", "Nullable Types", "Optional Chaining"],
        answer: "Optional Properties"
    },
    {
        question: "What is a 'tuple' in TypeScript?",
        options: ["A type for arrays with fixed lengths and specific types for each element position", "A type for any array", "A type for objects with fixed properties", "A type for any object"],
        answer: "A type for arrays with fixed lengths and specific types for each element position"
    },
    {
        question: "Which TypeScript compiler option generates declaration files (.d.ts)?",
        options: ["--emitDeclaration", "--declaration", "--genDeclarations", "--declarations"],
        answer: "--declaration"
    },
    {
        question: "What does the TypeScript keyword 'readonly' do?",
        options: ["Prevents modification of properties after object creation", "Marks properties as optional", "Allows dynamic typing", "Enables runtime type checking"],
        answer: "Prevents modification of properties after object creation"
    },
    {
        question: "Which operator in TypeScript is used for non-null assertion?",
        options: ["!!", "?", "??", "!"],
        answer: "!"
    },
    {
        question: "What is the purpose of 'namespace' in TypeScript?",
        options: ["Organizes code into logical groups", "Defines a new data type", "Imports external modules", "Allows conditional typing"],
        answer: "Organizes code into logical groups"
    },
    {
        question: "Which TypeScript version introduced optional chaining and nullish coalescing?",
        options: ["TypeScript 2.9", "TypeScript 3.0", "TypeScript 3.5", "TypeScript 4.0"],
        answer: "TypeScript 3.7"
    }
];

// Function to run the quiz
async function runQuiz() {
    let score = 0;

    console.log(chalk.bgMagentaBright.bold("Welcome to the TypeScript Quiz!\n"));

    // Iterate through each question
    for (let i = 0; i < questions.length; i++) {
        const ques: Question = questions[i];

        // Prompt user for answer
        const answer = await inquirer.prompt({
            type: 'list',
            name: 'userAnswer',
            message: `${ques.question}`,
            choices: ques.options.map((option, index) => ({
                name: `${index + 1}. ${option}`,
                value: option
            }))
        });

        // Check if answer is correct
        if (answer.userAnswer === ques.answer) {
            console.log(chalk.cyanBright("Correct!\n"));
            score++;
        } else {
            console.log(chalk.red(`Wrong! Correct answer: ${ques.answer}\n`));
        }
    }

    // Display final score
    console.log(chalk.bgGray.bold(`Quiz ended. You scored ${score} out of ${questions.length}.\n`));
}

// Execute the quiz
runQuiz();
