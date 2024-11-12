---
title: 'Criar XML com preço promocional por tabela de preços'
id: tutorials_312
status: PUBLISHED
createdAt: 2017-04-27T22:09:13.953Z
updatedAt: 2023-03-30T15:53:05.498Z
publishedAt: 2023-03-30T15:53:05.498Z
firstPublishedAt: 2017-04-27T23:03:14.297Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: creating-an-xml-with-promotional-price-using-a-price-table
locale: pt
legacySlug: criando-um-xml-com-preco-promocional-por-tabela-de-preco
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

Entenda melhor a funcionalidade do XML na VTEX no artigo [Como funciona a atualização do XML](https://help.vtex.com/pt/tutorial/entendendo-a-atualizacao-do-xml--tutorials_297).
Com o fim de aplicar um preço diferenciado a produtos pelo XML, é preciso associar uma tabela de preços de SKU. Para isso siga os passos a seguir:

  1. No Admin VTEX, acesse *Configurações da loja > Canais > Integração XML*, ou digite *Integração XML* na barra de busca no topo da página.
  2. Clique em `Alterar` no arquivo XML que deseja editar. Caso deseje criar um novo, leia nosso artigo [Configurar XML](https://help.vtex.com/pt/tutorial/configurando-xml--tutorials_242).
  3. Aqui, você deve checar se os campos relacionados ao preço do SKU (Menor Preço do Produto, Maior Preço do Produto, Preço Original do SKU, Preço Atual do SKU e Preço Atual do SKU + Taxas) estão preenchidos. Pelo menos um dos campos deve ser preenchido para a operação funcionar corretamente.
  4. Preencha o campo **Tabelas de Preços** com o nome da tabela de preços desejada. Em seguida, clique na caixa de seleção referente à tag na coluna **Exibe Conteúdo**. É necessário que a tabela de preços selecionada tenha preços fixos cadastrados. Caso contrário, a configuração não será realizada.
![PT-tabela de precos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
>⚠️ Uma vez que a tabela de preços seja incluída no XML, todos os campos de preço serão sobrescritos.
  5. Clique em `Salvar`.

Assim, a plataforma vai associar os valores da tabela de preços com os produtos cadastrados na coleção do arquivo XML.
Após finalizar o cadastro do XML e salvar as alterações, você pode checar as informações quando forem atualizadas digitando a URL da seguinte forma:

`https://{domínio}.myvtex.com/XMLData/{nome do arquivo XML}.xml`

Exemplo de XML atualizado:

![XML-exemplo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)
