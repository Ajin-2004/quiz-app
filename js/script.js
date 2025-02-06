const questions = [
    {
      "question": "Which of the following is NOT a type of operating system?",
      "options": ["Real-Time OS", "Distributed OS", "Multi-threaded OS", "Indexed OS"],
      "correct": 3
    },
    {
      "question": "Which data structure follows the FIFO (First In, First Out) principle?",
      "options": ["Stack", "Queue", "Tree", "Graph"],
      "correct": 1
    },
    {
      "question": "Which sorting algorithm has the worst-case time complexity of O(n²)?",
      "options": ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
      "correct": 2
    },
    {
      "question": "Which layer of the OSI model is responsible for end-to-end communication?",
      "options": ["Network Layer", "Transport Layer", "Data Link Layer", "Application Layer"],
      "correct": 1
    },
    {
      "question": "What does SQL stand for?",
      "options": ["Structured Query Language", "Sequential Query Language", "System Query Language", "Server Query Language"],
      "correct": 0
    },
    {
      "question": "Which of the following is NOT a programming paradigm?",
      "options": ["Procedural", "Object-Oriented", "Functional", "Compiled"],
      "correct": 3
    },
    {
      "question": "Which of the following is an example of a NoSQL database?",
      "options": ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      "correct": 2
    },
    {
      "question": "Which of the following is NOT an access modifier in Java?",
      "options": ["private", "protected", "public", "global"],
      "correct": 3
    },
    {
      "question": "What is the time complexity of searching in a balanced binary search tree (BST)?",
      "options": ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      "correct": 1
    },
    {
      "question": "Which protocol is used to send emails?",
      "options": ["HTTP", "FTP", "SMTP", "IMAP"],
      "correct": 2
    },
    {
      "question": "What is the full form of HTTP?",
      "options": ["HyperText Transmission Protocol", "Hyper Transfer Text Protocol", "HyperText Transfer Protocol", "Hyper Transfer Tunnel Protocol"],
      "correct": 2
    },
    {
      "question": "Which data structure is best suited for implementing recursion?",
      "options": ["Stack", "Queue", "Linked List", "Array"],
      "correct": 0
    },
    {
      "question": "Which of the following is NOT a high-level programming language?",
      "options": ["Python", "Assembly", "Java", "C++"],
      "correct": 1
    },
    {
      "question": "Which component of the CPU is responsible for executing instructions?",
      "options": ["ALU", "CU", "Registers", "Cache"],
      "correct": 0
    },
    {
      "question": "Which of the following is an example of a scripting language?",
      "options": ["C++", "Java", "Python", "Assembly"],
      "correct": 2
    },
    {
      "question": "Which is the default port number for HTTP?",
      "options": ["21", "25", "80", "443"],
      "correct": 2
    },
    {
      "question": "Which of the following is NOT an operating system?",
      "options": ["Windows", "Linux", "Oracle", "MacOS"],
      "correct": 2
    },
    {
      "question": "Which algorithm is used to find the shortest path in a graph?",
      "options": ["Kruskal’s Algorithm", "Prim’s Algorithm", "Dijkstra’s Algorithm", "Floyd-Warshall Algorithm"],
      "correct": 2
    },
    {
      "question": "Which of the following is a lossless compression algorithm?",
      "options": ["JPEG", "MP3", "PNG", "MPEG"],
      "correct": 2
    },
    {
      "question": "Which of the following is a cloud computing service model?",
      "options": ["SaaS", "VPN", "API", "IPsec"],
      "correct": 0
    },
    {
      "question": "Which of the following is NOT a database normalization form?",
      "options": ["1NF", "2NF", "3NF", "5NF"],
      "correct": 3
    },
    {
      "question": "Which data structure is used to implement LRU cache?",
      "options": ["Stack", "Queue", "HashMap & Doubly Linked List", "Graph"],
      "correct": 2
    },
    {
      "question": "What does RAID stand for in storage?",
      "options": ["Random Access Input Data", "Redundant Array of Independent Disks", "Redundant Access Information Data", "Random Allocation of Integrated Data"],
      "correct": 1
    },
    {
      "question": "Which of the following is NOT a type of network topology?",
      "options": ["Star", "Mesh", "Circular", "Bus"],
      "correct": 2
    },
    {
        "question": "Which of the following is used to manage memory in a computer?",
        "options": ["CPU", "RAM", "Hard Drive", "Motherboard"],
        "correct": 1
    },
    {
        "question": "What is the main function of the ALU (Arithmetic Logic Unit)?",
        "options": ["Perform calculations", "Control memory", "Store data", "Manage input/output"],
        "correct": 0
      },
      {
        "question": "Which of the following languages is used for web development?",
        "options": ["C++", "Java", "HTML", "Python"],
        "correct": 2
      },
      {
        "question": "Which of the following is NOT a valid IP address?",
        "options": ["192.168.1.1", "255.255.255.255", "300.300.300.300", "10.0.0.1"],
        "correct": 2
      },
      {
        "question": "Which protocol is used for secure communication over the internet?",
        "options": ["HTTP", "FTP", "SSL", "SMTP"],
        "correct": 2
      },
      {
        "question": "Which of the following is an example of an object-oriented programming language?",
        "options": ["Python", "C", "Assembly", "Fortran"],
        "correct": 0
      }
      
];

let currentQuestion = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});

function loadQuestion() {
    console.log("Loading Question:", currentQuestion + 1, "/", questions.length); // Debugging

    const questionData = questions[currentQuestion];
    document.getElementById("question").innerText = questionData.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => selectAnswer(index);

        // Reset background color
        button.style.backgroundColor = "";

        optionsContainer.appendChild(button);
    });

    // Disable "Next" button initially
    document.getElementById("next").disabled = true;
}

function selectAnswer(index) {
    const optionsContainer = document.getElementById("options");
    const buttons = optionsContainer.getElementsByTagName("button");

    for (let button of buttons) {
        button.style.backgroundColor = "";
    }

    buttons[index].style.backgroundColor = "Gray";

    if (index === questions[currentQuestion].correct) {
        score += 2;
    }

    document.getElementById("next").disabled = false;
    localStorage.setItem("score", score);
}

document.getElementById("next").addEventListener("click", () => {
    currentQuestion++; // Move to the next question
    if (currentQuestion < questions.length) {
        loadQuestion(); // Load the next question
    } else {
        window.location.href = "result.html"; // Redirect after last question
    }
});
