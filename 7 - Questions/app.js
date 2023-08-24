// using selectors inside the elements

const questions = document.querySelectorAll('.question');

questions.forEach((e) => {
    const btn = e.querySelector('.question-btn');

    btn.addEventListener('click', () => {

        questions.forEach((question) => {
            if (question.classList.contains('show-text')){
                question.classList.remove('show-text')
            }
        })



        e.classList.toggle('show-text')
    })


} )



// Traversing the dom


// const questionBtn = document.querySelectorAll('.question-btn');


// questionBtn.forEach((button) => {
// button.addEventListener('click' , (e) => {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle('show-text');

// })
// });