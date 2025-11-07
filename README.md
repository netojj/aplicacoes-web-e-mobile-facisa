# Analisar e Modelar Aplicações Web e Mobile

Este repositório contém um pequeno front-end em React (Vite) criado para a competência "Analisar e Modelar Aplicações Web e Mobile". 

O foco é demonstrar, neste primeiro momento, um layout simples de formulário de login com validação básica e estrutura de projeto adequada para documentação e extensão.

Objetivos
- Implementar um formulário de login funcional e acessível.
- Demonstrar organização de projeto front-end com Vite + React.
- Fornecer instruções claras para execução e entregáveis para avaliação.

Pré-requisitos
- Node.js 16+ e npm

A aplicação ficará disponível em http://localhost:5173/ por padrão. O formulário realiza validação simples no lado do cliente e um envio simulado (mock). Se a opção "Lembrar de mim" for marcada, um token codificado será gravado em `localStorage` (apenas para demonstração).

Estrutura principal do projeto
- `index.html` — entry HTML
- `src/main.jsx` — ponto de montagem do React
- `src/App.jsx` — componente container
- `src/Login.jsx` — componente do formulário de login
- `src/styles.css` — estilos básicos e responsivos
- `package.json` — dependências e scripts (Vite)

Critérios de avaliação / Entregáveis
- Código limpo e legível, organizado em pastas.
- Formulário funcional com validação básica (e-mail e senha).
- Instruções de execução no README.
- Possibilidade de integração posterior com API (código preparado para troca do mock por fetch/axios).

Boas práticas e notas
- Não armazene tokens sensíveis em `localStorage` em produção — preferir cookies httpOnly ou mecanismos seguros.
- Para adicionar autenticação real, substituir o mock por chamada HTTP e tratar erros/estados de loading adequadamente.

Possíveis extensões
- Adicionar testes (Jest + React Testing Library).
- Adicionar roteamento e páginas protegidas após login.
- Internacionalização e melhores mensagens de validação.

Autor
- Projeto gerado como exemplo para a disciplina/competência.

Licença
- Use conforme as diretrizes da instituição.
