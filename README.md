  <h1>Aplicação de Lista de Tarefas</h1>
  <p>Esta é uma aplicação simples que permite ao usuário adicionar, marcar como concluída e remover tarefas de uma lista.</p>
  <h2>Funcionalidades</h2>
  <p>A aplicação possui as seguintes funcionalidades:</p>
  <ul>
    <li>Adicionar uma nova tarefa</li>
    <li>Marcar uma tarefa como concluída</li>
    <li>Remover uma tarefa</li>
  </ul>

  <h2>Estrutura do Código</h2>
  <p>A aplicação é construída usando HTML, CSS e JavaScript. O código JavaScript é responsável por manipular as funcionalidades da aplicação.</p>

  <p>O código JavaScript está organizado da seguinte maneira:</p>
  <ol>
    <li>Variáveis Globais</li>
    <li>Funções</li>
    <li>Inicialização</li>
  </ol>

  <h2>Uso da Aplicação</h2>
  <p>A aplicação requer um arquivo HTML com a estrutura básica da página, incluindo os elementos necessários, como um campo de entrada para adicionar tarefas, uma lista para exibir as tarefas e botões para marcar como concluída e remover tarefas.</p>

  <p>O código JavaScript deve ser adicionado ao final do arquivo HTML, entre as tags `<script></script>`, vinculando-o corretamente à página HTML.</p>

  <p>A lista de tarefas é armazenada no array `tasks`, onde cada tarefa é representada por um objeto com as seguintes propriedades:</p>
  <ul>
    <li>"id": Um identificador único gerado a partir do timestamp atual.</li>
    <li>"text": O texto da tarefa.</li>
    <li>"completed": Um valor booleano que indica se a tarefa está concluída ou não.</li>
  </ul>

  <p>As funções JavaScript são responsáveis por adicionar, modificar e remover tarefas na lista, bem como renderizar a lista de tarefas atualizada na página.</p>

  <h2>Personalização</h2>
  <p>A aplicação utiliza classes CSS para estilizar os elementos. Você pode personalizar a aparência da aplicação adicionando estilos CSS adicionais ou modificando as classes existentes.</p>

  <p>As classes CSS relevantes são as seguintes:</p>
  <ul>
    <li>"completed-task": Aplicada a uma tarefa quando ela é marcada como concluída. Você pode personalizar a aparência visual de uma tarefa concluída usando essa classe.</li>
    <li>"delete-button": Aplicada ao botão de exclusão de uma tarefa. Você pode personalizar a aparência visual do botão de exclusão usando essa classe.</li>
    <li>"custom-trash-icon": Aplicada ao ícone de lixeira dentro do botão de exclusão. Você pode personalizar a aparência visual do ícone usando essa classe.</li>
  </ul>
