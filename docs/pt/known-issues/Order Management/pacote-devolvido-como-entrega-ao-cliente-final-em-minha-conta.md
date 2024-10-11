---
title: 'Pacote devolvido como entrega ao cliente final em minha conta'
id: 6kMtbSa42iBu6rqQj5QcTv
status: PUBLISHED
createdAt: 2022-03-11T14:25:43.659Z
updatedAt: 2022-11-25T22:03:08.191Z
publishedAt: 2022-11-25T22:03:08.191Z
firstPublishedAt: 2022-05-18T18:51:45.994Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: returned-package-as-delivering-to-final-customer-on-my-account
locale: pt
kiStatus: Backlog
internalReference: 415482
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Há um cenário em que o pacote devolvido aparece como entrega na página **Minha conta > Minhas encomendas***. Parece que mais de um pacote será entregue ao cliente em vez de mostrar que o pacote já foi entregue ao cliente e que um novo pacote foi gerado simbolizando a devolução.

Pode criar alguma confusão para o cliente final porque parece receber mais produtos e não aparece como totalmente entregue no fluxo **Minhas Encomendas***.



## Simulação



- Fazer um pedido com um produto/embalagem.
- Completar o fluxo do pedido e marcar como entregue.
- Tente devolver esse item.
- Ele irá gerar uma nova embalagem que representa a devolução do produto.
- Assim, na página Meus Pedidos mostra esse pacote devolvido como mais um.
- O cliente e o usuário administrador da loja podem ser confundidos com o status do pedido e os detalhes do fluxo.


## Workaround


Não há nenhuma solução disponível.

