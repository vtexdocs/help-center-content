---
title: 'Configurar o template e a página do inStore'
id: o1J8pnO0lE44A8KeOoOkG
status: ARCHIVED
createdAt: 2018-03-06T22:27:06.192Z
updatedAt: 2020-08-20T18:55:38.251Z
publishedAt: 
firstPublishedAt: 2018-03-06T22:39:03.183Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slug: configurar-o-template-e-a-pagina-do-instore
locale: pt
legacySlug: configurar-o-template-e-a-pagina-do-instore
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

No módulo __Portal__ são realizadas as configurações do __template do inStore__, do __arquivo de customização__ e do __caminho da página__.

Para isso, é necessário acessar o módulo __Portal__ no Admin da VTEX, selecionar o website desejado e clicar no __botão de engrenagem__ para ser direcionado para as configurações.

*Clicar no botão de engrenagem para ser direcionado para as configurações da loja inStore criada*

## Configuração do template do inStore

- Depois de clicar no botão de engrenagem, clique a aba __Código__.
- Nessa aba, clique no botão __Novo__ e depois clique em __Template__.
- Digite `instore` no nome do template e clique em __Criar__.
- No template criado, copie e cole o código abaixo:

`---`

  `vtex_io:`  
  
  `app_name: checkout-instore`
    
  `file_path: index.html`
    
`---`

- Clique em __Salvar__.

## Configuração do arquivo checkout-instore-custom.js

Após criar o template, é necessário criar o arquivo `checkout-instore-custom.js`.

- Ainda na aba __Código__ clique no botão __Novo__.
- Clique em __Arquivo__.
- Digite `checkout-instore-custom.js` no nome do arquivo e clique em __Criar__.

Este arquivo deve ser salvo vazio. Depois de salvo, inclua o código abaixo no arquivo e clique em __Salvar__.

    window.INSTORE_CONFIG = {
    
    topbarTitle: 'Instore QA'
    
    }

## Configuração da página inStore

Para que o inStore possa ser acessado, é necessário criar uma página.

- Entre na aba __Páginas__.
- Clique em __Nova Página__.
- No campo __Caminho__, preencha com `checkout/instore`.
- No campo __Template__, preencha com `instore`.
- Marque a opção __Requer HTTPS__.
- Clique em __Salvar__.
