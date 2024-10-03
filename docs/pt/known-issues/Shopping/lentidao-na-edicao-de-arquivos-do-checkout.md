---
title: 'Lentidão na edição de arquivos do Checkout'
id: 4uKQzzpNfbYLKZdhTW4f0O
status: PUBLISHED
createdAt: 2019-09-16T17:25:55.922Z
updatedAt: 2022-12-22T20:45:22.907Z
publishedAt: 2022-12-22T20:45:22.907Z
firstPublishedAt: 2019-09-19T23:45:08.460Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: delay-when-editing-checkout-files
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

É possível editar arquivos da loja diretamente pelo navegador quando estes foram enviados pelo Admin do Checkout.
 
Em alguns casos, recomenda-se selecionar todo o conteúdo, copiá-lo para um editor externo e, em seguida, colar o conteúdo novamente no Admin para concluir alguma atualização.

Porém, esse processo pode ser bastante lento quando o arquivo tem tamanho considerável. Principalmente se as linguagens usadas forem CSS e Javascript. 

Em algumas situações, o acesso ao arquivo pelo Admin pode ser completamente comprometido.

## Simulação

Tente acessar ou editar qualquer arquivo por meio da tela disponível no Admin.


## Workaround

Para obter arquivos já enviados, é possível acessar a sua rota pública sempre disponível em “/files/arquivo.xyz”.

Para atualizar ou enviar um novo arquivo, o usuário pode utilizar a opção “Disponível” no menu __Novo > Upload__ de arquivo. Nesse caso, basta preencher o nome de destino e selecionar o arquivo que deseja enviar.
 
Entretanto, caso o nome do arquivo já exista na loja, o novo conteúdo irá sobrescrever o material anterior e, assim, finalizar a atualização.


