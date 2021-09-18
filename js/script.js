window.addEventListener("load", () => {
    const display = this.document.querySelector(".question-box");
    const questionText = display.querySelector(".question");
    const answersBtns = display.querySelectorAll(".answer-btn");
    let index;

    onClickAnswer = (event) => {
        let timeBeforeNext;
        if(event.target.textContent == data[index].romaji) {
            event.target.classList.add("true");
            timeBeforeNext = 500;
        } else {
            event.target.classList.add("false");
            timeBeforeNext = 2000;
            for (const btn of answersBtns) {
                if(btn.textContent == data[index].romaji) {
                    btn.classList.add("true");
                }
            }
        }

        for (const btn of answersBtns) {
            btn.removeEventListener("click", onClickAnswer);
        }

        setTimeout(() => {
            for (const btn of answersBtns) {
                btn.classList.remove("true");
                btn.classList.remove("false");
            }
            for (const btn of answersBtns) {
                btn.addEventListener("click", onClickAnswer, false);
            }
            index = generate(questionText, answersBtns);
        }, timeBeforeNext);
    }

    for (const btn of answersBtns) {
        btn.addEventListener("click", onClickAnswer, false);
    }
    index = generate(questionText, answersBtns);
});



getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

generate = (question, answers) => { // return the index of the selected symbol
    
    const randint = getRandomInt(data.length);
    let listRomaji = [];
    listRomaji.push(data[randint].romaji);
    for(let i = 0; i < 3; i++) {
        let element;
        do {
            element = data[getRandomInt(data.length)];
        } while((listRomaji.includes(element.romaji)));
        listRomaji.push(element.romaji);
    }

    for (let i = listRomaji.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = listRomaji[i];
        listRomaji[i] = listRomaji[j];
        listRomaji[j] = temp;
    }
    
    question.textContent = data[randint].symbol;

    for (let i = 0; i < answers.length; i++) {
        answers[i].textContent = listRomaji[i];
    }

    return randint;
}