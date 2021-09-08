const DeleteButton = () => { 
    const deleteButton = document.createElement('button')
    
    deleteButton.classList.add('delete-button')
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click', deleteTask)

    return deleteButton
}

const deleteTask = (evento) => { 
    const deleteButton = evento.target
    
    const taskComplete = deleteButton.parentElement

    taskComplete.remove()

    return deleteButton

}

export default DeleteButton