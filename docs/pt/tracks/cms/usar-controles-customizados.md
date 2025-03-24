---
title: 'Usando controles customizados'
id: 1G2MTHr1fAMCi7t2ZXoa9k
status: ARCHIVED
createdAt: 2020-01-09T22:10:24.741Z
updatedAt: 2022-01-10T22:46:01.216Z
publishedAt: 
firstPublishedAt: 2020-01-13T14:29:53.371Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: using-custom-controls
locale: pt
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugPT: cms
---

Além dos controles nativos da VTEX, você pode criar seus próprios controles.

Assim como os controles nativos, os controles customizados devem ser adicionados aos templates e subtemplates e podem ser replicados em diversos locais de uma mesma página e em diversas páginas.

Também como os controles nativos, eles renderizam elementos dos seguintes tipos:
- Banner
- Banner DHTML
- Coleção
- HTML

### Criar um controle customizado

Para criar um controle customizado, siga o passo a passo abaixo: 
1. Acesse o módulo CMS
2. Clique em __Layout__
3. Clique na pasta __CMS__
4. Logo abaixo, clique na pasta __Custom Elements__
5. Clique no botão __Add__![8 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/cms/usar-controles-customizados_1.png)
6. Preencha o campo __Name__ com o nome do controle customizado
7. Preencha o campo __Tag name__. É este nome que será usado no controle no momento de adicioná-lo ao template.
8. Selecione o tipo do controle em __Type__
9. Na parte direita da página, clique no botão __Save Content__

Agora, ao acessar a seção Custom Elements, você verá o novo controle listado junto aos demais.

Você pode configurá-lo e adicionar conteúdo como em um controle nativo da VTEX.


### Aplicar um controle customizado a um template de página

A aplicação de um controle customizado é semelhante à de um controle nativo.

A diferença está na sintaxe do controle.

Para identificar o controle customizado a ser usado, inserimos o nome da tag cadastrada no momento da criação do controle.

Abaixo, seguem as sintaxes para cada tipo de controle:
- __Tipo Banner__: `<vtex:nomedatag />`
- __Tipo HTML__: `<vtex.cmc:nomedatag />`
- __Tipo Coleção__: `<vtex.cmc:nomedatag />`

Nos três casos, `nomedatag` deve ser substituído pelo nome da tag cadastrada no passo 8 da criação do controle.
