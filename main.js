import DoneButton from '/components/taskComplete.js'
import DeleteButton from '/components/deleteTask.js'

const createTask = (evento) => {

    evento.preventDefault()

    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const task = document.createElement('li')
    task.classList.add('task')
    const content = `<p class="content">${valor}</p>`

    task.innerHTML= content

    task.appendChild(DoneButton())
    task.appendChild(DeleteButton())
    list.appendChild(task)
    input.value=" "
}



const newTask= document.querySelector('[data-form-button]')

newTask.addEventListener('click', createTask)

