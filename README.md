# Desafio Proposto

Criar um aplicativo de gerenciamento de tarefas (To-Do List) com ReactJS. Criar um componente principal chamado "ToDoApp" que contenha todos os outros componentes, como "ToDoList", "ToDoItem" e "ToDoForm".

O componente principal, chamado "ToDoApp", seria o container principal que contém todos os outros componentes da aplicação. Ele gerenciaria o estado geral da aplicação, incluindo a lista de tarefas e as informações do usuário (se aplicável).
O componente "ToDoList" exibiria a lista de tarefas, cada uma como um componente "ToDoItem". Ele pode usar o método "map" do JavaScript para iterar sobre as tarefas e exibi-las.
O componente "ToDoItem" exibiria os detalhes de cada tarefa individualmente, incluindo o nome, descrição, data e hora de lembrete, e status (concluído ou não). Ele também poderia conter botões para marcar a tarefa como concluída ou excluí-la.
O componente "ToDoForm" seria usado para adicionar novas tarefas à lista. Ele poderia conter um formulário com campos para o nome, descrição, data e hora de lembrete e prioridade da tarefa, e um botão de "Adicionar Tarefa".
Opcionalmente, você poderia incluir componentes adicionais, como "Login" e "Register" para autenticação de usuário, e "ToDoFilters" para permitir que os usuários filtrem as tarefas por data, hora, prioridade, etc.
Além disso, use bibliotecas de terceiros para gerenciar o estado da aplicação, como o Redux, e bibliotecas para gerenciamento de requisições HTTP, como o Axios. E também usar algumas biblioteca para estilização como Material-UI ou Bootstrap-React.

Além disso, a aplicação seria construída como uma Single-Page Application (SPA) e pode ser implementada com React Router para navegação entre as páginas.

