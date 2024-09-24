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

    { id: 11, front: "How often does the version number of java get incremented?", back: "Every six month" },
    { id: 12, front: "How often does Oracle release a LTS (Long Term Support)?", back: "Every 3 years" },
    { id: 13, front: "What is the alternative for Oracle's JDK?", back: "Open-JDK which is base on same source code." },
    { id: 14, front: "What are the key benefits of java?", back: "1-Object Oriented 2-Encapsulation 3-Platform Independent 4-Robust 5-Simple 6-Secure 7-Multithreaded 8-Backward Compatibility" },
    { id: 15, front: "What does object oriented mean?", back: "means all code is defined in classes and most of these classes can instantioted into object. java allows functional programming whithin a class." },
    { id: 16, front: "What is a procedural language?", back: "It has routies or methods not classes." },
    { id: 17, front: "What types of programming do we have?", back: "-Object Oriented -Procedural -Functional" },
    { id: 18, front: "What do access modifires do?", back: "They protect data from unintended access and modification." },
    { id: 19, front: "What is Encapsulation?", back: "Java support access modifires to protect data from unintended access and modification." },
    { id: 20, front: "Is Encapsulation an aspect of Object Oriented?", back: "Most people cosider it to be." },
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
