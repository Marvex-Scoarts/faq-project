const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    })
})