const DoneButton = () => {
    const doneButton = document.createElement('button')

    doneButton.classList.add('check-button')
    doneButton.innerText = 'Done'
    doneButton.addEventListener('click', taskComplete)

    return doneButton

}

const taskComplete = (evento) => {
    const doneButton = evento.target

    const taskComplete = doneButton.parentElement

    taskComplete.classList.toggle('done')
}

export default DoneButton