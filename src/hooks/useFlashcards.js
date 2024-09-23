import { useEffect, useState } from "react";

const INITIAL_FLASHCARDS = [
    { id: 1, front: "What is Java Development Kit(JDK)?", back: "JDK contains the minimum software you need to do java development. key pieces like: -the compiler javac -the luncher java(jvm) -the archiver(jar) command -the API documentation  (javadoc)"},
    { id: 2, front: "What is javac?", back: "It's the compiler which convert .java files to .class files, the javac program generates instructions in a special format thet the java command can run called bytecode." },
    { id: 3, front: "What does the “luncher java” do?", back: "1-cretes the virtual machine 2-executes the program." },
    { id: 4, front: "What does the archiver (jar) command do?", back: "It can package files together." },
    { id: 5, front: "What does the API documentation (javadoc) command do?", back: "It generates documentation." },
    { id: 6, front: "What does JVM (Java Virtual Machine) do?", back: "It launches after javac and before running the code. jvm knows how to run bytecode on the acual machine. It is an a special magic box on your machine tht knows how to run your .class files." },
    { id: 7, front: "What was JRE (Java Runtime Environment)?", back: "-JRE was a subset of JDK. -It was for running the program but couldn't compile it. -The alternative is the jlink command." },
    { id: 8, front: "What does the “jlink” command do?", back: "The jlink command creates the executable that contains the required pieces to run the program but not compiling." },
    { id: 9, front: "What are (APIs) Application Programming Interfaces?", back: "APIs are common pieces of functionality and algorithms that developers need like: -Stringbuilder -sort in collections" },
    { id: 10, front: "What does IDE(Integrated Development Environment) do?", back: "It makes writing and running the code easier. common java IDEs: -Eclips -Intellij -NetBeans" },
    
];

const FLASHCARDS_KEY = 'flashcards';

function getStorageFlashcards() {
    const cards = localStorage.getItem(FLASHCARDS_KEY);
    return JSON.parse(cards) || INITIAL_FLASHCARDS;
}

export function useFlashcards() {
    const [flashCards] = useState(getStorageFlashcards);

    useEffect(() => localStorage.setItem(FLASHCARDS_KEY, JSON.stringify(flashCards)), [flashCards]);

    return [flashCards];
}