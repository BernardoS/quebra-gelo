![Capa do projeto](/public/Capa.png)
# Quebra Gelo 

Link: https://bernardos.github.io/quebra-gelo/

Este é um projeto que fiz para praticar react e para voltar a me divertir com programação.

Resolvi criar um site onde temos uma lista de perguntas e assuntos, que podem quebrar o gelo quando precisamos iniciar alguma conversa. A ideia é fazer um site que seja tão simples quanto a ideia.

## Estrutura

A esturura do site se baseia em três páginas:
 - Home: A página em que você pode selecionar se quer "puxar um assunto" ou "escolher um tema";
 - Pergunta: A página onde você consegue ver a pergunta para puxar alguma assunto com alguém;
 - Tema: A página que você consegue filtrar os assuntos/perguntas escolhendo um tema.

## Desenvolvimento

Eu não queria muita complicação para esta aplicação, portanto, ao invés de cadastrar todas as perguntas e temas em uma API, criei um arquivo JSON.
A intenção é alterar isso posteriormente, mas para as versões iniciais de teste, resolvi utilizar um arquivo JSON mesmo.
Então basicamente esta é uma aplicação **React**. 
E para desenvolver isso tudo foram utilizadas as seguintes bibliotecas (houveram outras, mas as principais são essas):

- **Styled components:** Serve para estilizar cada tag do html e transformar isso em um componente react;
- **React Router DOM:** Serve para gerenciar as rotas e a navegação da aplicação.