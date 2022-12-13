const questions = [
    {
        'que': 'What does the Acronym REST Stand for?',
        'a': 'Representational State Transform',
        'b': 'Representational State Transfer',
        'c': 'Represent State Transform',
        'd': 'Represent State Transfer',
        'correct': 'b'
    },
    {
        'que': 'What is the protocol used in REST?',
        'a': 'FTP',
        'b': 'HTTP',
        'c': 'JMX',
        'd': 'SOAP',
        'correct': 'b'
    },
    {
        'que': 'What is the HTTP Status Code Related to Page Not Found?',
        'a': '404',
        'b': '402',
        'c': '403',
        'd': '401',
        'correct': 'a'
    },
    {
        'que': 'What is the HTTP Code 200 Indicate?',
        'a': 'Error',
        'b': 'Completed',
        'c': 'Success',
        'd': 'Warning',
        'correct': 'c'
    },
    {
        'que': 'What is the HTTP Code Related to Internal Server Error?',
        'a': '500',
        'b': '501',
        'c': '504',
        'd': '502',
        'correct': 'a'
    },
    {
        'que': 'Which HTTP method do we use to make an HTTP request to create a new resource?',
        'a': 'POST',
        'b': 'PUT',
        'c': 'GET',
        'd': 'CREATE',
        'correct': 'a'
    },
    {
        'que': 'Choose the correct URI format to get a sub-resource by resource id and sub-resource id',
        'a': '/{resource}/{resource-id}/{sub-resource}/{sub-resource-id}',
        'b': '/{resource}/{sub-resource}/{sub-resource-id}',
        'c': '{sub-resource}/{sub-resource-id}/{resource}/{resource-id}',
        'd': '/{resource}/{resource-id}/{sub-resource-id}/{sub-resource}',
        'correct': 'a'
    },
    {
        'que': 'Which is not REST Architectural Constraints?',
        'a': 'Client-Server',
        'b': 'Stateless',
        'c': 'Cacheable',
        'd': 'Service orchestration',
        'correct': 'd'
    },
    {
        'que': 'What is the HTTP status code 201 indicate?',
        'a': 'OK',
        'b': 'Created',
        'c': 'Accepted',
        'd': 'No Content',
        'correct': 'b'
    }
]
let index = 0;
let total = questions.length;
let right = 0, worng = 0;

const quesBox = document.getElementById("que");
const options = document.querySelectorAll(".options")
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();

    const data = questions[index];
    //  console.log(data)
    quesBox.innerText = `${index + 1}) ${data.que}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}
const submitqiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    }
    else {
        worng++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    options.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }


        }
    )
    return answer;
}

const reset = () => {
    options.forEach(
        (input) => {
            input.checked = false;

        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
 <h3>Thank you for playing the Quiz</h3> 
 <h2>${right} / ${total} are corrects</h2>
 `
}

loadQuestion();