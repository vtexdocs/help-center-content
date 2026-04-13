---
title: 'Grupos estáticos e grupos dinâmicos'
id: NpZX08omekZDgF95308Le
status: PUBLISHED
createdAt: 2025-09-12T17:27:13.619Z
updatedAt: 2025-10-03T14:21:49.231Z
publishedAt: 2025-10-03T14:21:49.231Z
firstPublishedAt: 2025-10-03T14:21:49.231Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: static-groups
legacySlug: grupos-estaticos
locale: pt
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

Existem dois tipos de grupos para os contatos na plataforma. Agora explicaremos como funcionam e como criar seus grupos.

## Grupo estático

O grupo estático é o tipo de grupo onde os contatos precisam ser adicionados e/ou removidos manualmente. Para que um contato entre e/ou saia de um grupo estático, ele precisa ser adicionado/removido pelo usuário da plataforma pela aba de contatos, ou, adicionado/removido através de fluxos durante a conversa com a sua automação.

Você pode encontrar a descrição das cartas de fluxo para grupos clicando [cartas de ações](https://help.vtex.com/docs/tutorials/cartas-de-acao) e [decisões.](https://help.vtex.com/docs/tutorials/cartas-de-decisao).

Para criar um grupo estático, basta navegar até a página de contatos, em **Contatos** (em **Operações**), e clicar no botão **Criar Grupo** no menu lateral.

Depois disso, basta escolher o nome do seu grupo e criá-lo pelo pop-up que vai aparecer.

O grupo vai começar a ser listado na sua lista de grupos, logo abaixo das categorias de contatos no menu lateral da esquerda. Caso você queira editar o nome do seu grupo, exportar os contatos participantes ou exclui-lo, basta acessar o grupo e em seguida clicar no botão de configurações no canto direito ao lado de **Gerenciar Campos**.

## Grupo dinâmico e pesquisas de contato

Na aba de contatos, existe uma barra de busca. Essa barra de busca pode ser utilizada para achar e filtrar contatos que obedecem às regras definidas na barra. Normalmente, utilizamos campos de contato e alguns operadores para fazer a expressão de busca.

Se no meu grupo existe o campo de contato Idade e o campo de contato Sexo e eu quero saber quantos contatos do sexo masculino são maiores de 18 anos, posso utilizar a seguinte expressão na busca:

`idade > 18 AND (sexo = ""M"" OR sexo = ""Masculino"")`

Abaixo, seguem alguns dos operadores que podemos utilizar nessas buscas:

- `AND` (obedece as duas regras ao mesmo tempo)
- `OR` (obedece apenas uma das regras)
- > (Maior que)
- >= (Maior ou igual a)

Ou seja, um grupo dinâmico é um tipo de grupo onde não conseguimos adicionar e/ou remover usuários manualmente. Todos os usuários adicionados entram no grupo se obedeceram a regra da busca realizada.

Caso você clique no botão para salvar seu grupo dinâmico, um pop-up aparecerá para escolher o nome do seu novo grupo

Caso você queira editar o nome do grupo, exportar os contatos participantes, deletar o grupo ou até mesmo modificar a regra para participação, o processo é o mesmo que o dos grupos estáticos.
