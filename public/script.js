// Array para armazenar as tarefas
let tasks = [];

// Função para adicionar uma nova tarefa
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    // Criar objeto de tarefa
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false
    };

    // Adicionar tarefa ao array
    tasks.push(task);

    // Limpar campo de entrada
    taskInput.value = '';

    // Renderizar a lista de tarefas
    renderTaskList();
  }
}

// Função para adicionar uma nova tarefa apertando enter
function addTaskWithEnter(event) {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (event.key === "Enter") {
    if (taskText !== '') {
      // Criar objeto de tarefa
      const task = {
        id: Date.now(),
        text: taskText,
        completed: false
      };

      // Adicionar tarefa ao array
      tasks.push(task);

      // Limpar campo de entrada
      taskInput.value = '';

      // Renderizar a lista de tarefas
      renderTaskList();
    }
  }
}

// Função para marcar uma tarefa como concluída
function toggleTaskCompleted(taskId) {
  // Procurar a tarefa pelo ID
  const task = tasks.find(task => task.id === taskId);

  if (task) {
    // Inverter o status de concluído
    task.completed = !task.completed;

    // Renderizar a lista de tarefas
    renderTaskList();
  }
}

// Função para remover uma tarefa
function removeTask(taskId) {
  // Filtrar as tarefas removendo a tarefa pelo ID
  tasks = tasks.filter(task => task.id !== taskId);

  // Renderizar a lista de tarefas
  renderTaskList();
}

// Função para renderizar a lista de tarefas
function renderTaskList() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTaskCompleted(task.id));
    const taskText = document.createTextNode(task.text);
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash custom-trash-icon" aria-hidden="true"></i>';
    deleteButton.addEventListener('click', () => removeTask(task.id));
    deleteButton.classList.add('delete-button'); // Adiciona a classe personalizada

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    // Verificar se a tarefa está concluída e adicionar a classe CSS correspondente
    if (task.completed) {
      listItem.classList.add('completed-task');
    }
  });

  // Verificar se há tarefas para exibir
  const tarefasContainer = document.getElementById('tarefas');
  if (tasks.length === 0) {
    tarefasContainer.style.display = 'none';
  } else {
    tarefasContainer.style.display = 'block';
  }
}

// Renderizar a lista de tarefas inicialmente
renderTaskList();