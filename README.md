# Lista de Tarefas 

Uma aplicação web de Lista de Tarefas com alguns recursos a mais como a função de filtrar as tarefas e persistindo os dados na local storage do navegador, construída com JavaScript puro, esta lista
permite  criar, editar, concluir, excluir, pesquisar e filtrar tarefas. A aplicação persiste dados usando o localStorage do navegador, garantindo que suas tarefas permaneçam salvas mesmo após fechar o navegador.

## 📋 Funcionalidades

- **Criar tarefas**: Adicione novas tarefas à sua lista
- **Editar tarefas**: Modifique descrições de tarefas existentes
- **Marcar tarefas como concluídas**: Alterne o status de conclusão das tarefas
- **Excluir tarefas**: Remova tarefas da sua lista
- **Funcionalidade de busca**: Filtre tarefas por palavra-chave
- **Filtragem de tarefas**: Visualize todas as tarefas, tarefas concluídas ou tarefas pendentes
- **Persistência de dados**: As tarefas são salvas no armazenamento local

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Ícones Font Awesome
- API de Local Storage

## 🔍 Como Funciona

### Funcionalidade Principal

A aplicação permite que você:
- Adicione tarefas através do formulário principal
- Edite tarefas com um formulário secundário que aparece quando o botão de edição é clicado
- Marque tarefas como concluídas ou não concluídas
- Exclua tarefas permanentemente
- Pesquise tarefas específicas usando o campo de busca
- Filtre tarefas pelo status de conclusão

### Implementação do Local Storage

Todas as tarefas são armazenadas no local storage do navegador, o que significa:
- As tarefas persistem entre sessões do navegador
- Não é necessário armazenamento do lado do servidor
- Os dados permanecem privados no dispositivo do usuário

## 🚀 Como Começar

1. Clone este repositório ou faça o download do código-fonte
2. Abra o arquivo `index.html` no seu navegador
3. Comece a gerenciar suas tarefas!

## 📝 Uso

### Adicionando uma Tarefa

1. Digite sua tarefa no campo de entrada principal
2. Pressione Enter ou clique no botão de adicionar

### Editando uma Tarefa

1. Clique no ícone de edição (caneta) em qualquer tarefa
2. Modifique o texto da tarefa no formulário de edição
3. Pressione Enter para salvar ou clique no botão cancelar para descartar as alterações

### Concluindo uma Tarefa

Clique no ícone de verificação para alternar o status de conclusão de uma tarefa.

### Excluindo uma Tarefa

Clique no ícone X para remover permanentemente uma tarefa.

### Pesquisando Tarefas

Digite no campo de pesquisa para filtrar tarefas que correspondam ao seu termo de busca.

### Filtrando Tarefas

Use o menu suspenso para filtrar:
- Todas as tarefas
- Tarefas concluídas
- Tarefas pendentes

## 💡 Estrutura do Projeto

- **HTML**: Estrutura e elementos da aplicação de tarefas (não incluído no código fornecido)
- **CSS**: Estilização e design responsivo (não incluído no código fornecido)
- **JavaScript**: Funcionalidade principal e lógica
  - Funções de gerenciamento de tarefas
  - Manipuladores de interação da interface
  - Operações de armazenamento local

## 🔮 Melhorias Futuras

- Adicionar datas de vencimento às tarefas
- Implementar níveis de prioridade
- Adicionar categorias/tags para melhor organização
- Criar um alternador de tema claro/escuro
- Adicionar funcionalidade de arrastar e soltar para reordenar tarefas

## 📄 Licença

Sinta-se à vontade para contribuir com este projeto enviando issues ou pull requests!
