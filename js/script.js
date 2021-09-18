window.addEventListener("load", () => {
    document.addEventListener("keydown", (event) => {
        const display = this.document.querySelector(".question-box");
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
          
        display.querySelector(".question").textContent = data[randint].symbol;
        const answers = display.querySelectorAll(".answer-btn");
        for (let i = 0; i < answers.length; i++) {
            answers[i].textContent = listRomaji[i];
        }
        //display.querySelector(".romaji").textContent = `${listRomaji[0]}, ${listRomaji[1]}, ${listRomaji[2]}, ${listRomaji[3]}`;
    });
});

getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}