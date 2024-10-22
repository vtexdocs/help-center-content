---
title: 'Por que minha promoção não funciona para um cluster de clientes?'
id: 4I7FRBu5zj9JYs0xBwg5aR
status: PUBLISHED
createdAt: 2019-02-22T18:12:54.910Z
updatedAt: 2020-09-17T18:15:55.021Z
publishedAt: 2020-09-17T18:15:55.021Z
firstPublishedAt: 2019-02-22T18:16:10.272Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 5Bd75kMNAzARxg0DCUjwal
slugEN: why-doesnt-my-benefit-work-for-a-client-cluster
locale: pt
legacySlug: por-que-minha-promocao-nao-funciona-para-um-cluster-de-clientes
---

Dentro da plataforma da VTEX, existe a possibilidade de aplicar uma [promoção](https://help.vtex.com/pt/tutorial/criando-promocao-para-um-cluster-de-clientes "promoção") para apenas um determinado [cluster](https://help.vtex.com/pt/faq/como-criar-um-cluster-de-clientes "cluster"). Ou seja, para apenas um grupo específico de clientes.

Existem casos, porém, em que essa promoção não é visualizada por alguns compradores. 

Separamos alguns cenários em que esse erro pode acontecer e uma resolução para cada um deles. Todos relacionados ao valor do cluster que deve ser inserido na plataforma.

## Ausência do valor 

Isso pode acontecer caso a promoção seja aplicada para mais de um cluster e haja um esquecimento na hora de aplicar seu respectivo valor. 

É necessário aplicar o valor relativo à promoção em todos os clusters. Se, por exemplo, o valor for aplicado apenas aos clusters A e B, sendo que os participantes do desconto são os grupos A, B e C, o último grupo não irá visualizar a promoção no site.

Certifique-se o valor foi inserido seguindo os seguintes passos:

1. Acesse __Promoções e Taxas__
2. Clique em __Promoções__
3. Selecione qual __promoção__ deseja editar
4. Vá para a sessão __“Quais as condições para a promoção ser válida?”__
5. Confira quais Clusters estão cadastradas em __“Cluster de clientes”__

![PT - 7GcSb6BuF6JKnmGAggO3uA ](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Marketing & Merchandising/por-que-minha-promocao-nao-funciona-para-um-cluster-de-clientes_1.png)

6. Insira os __novos dados__
7. Clique em __Salvar__

## Erro no registro do valor

Cada valor ativa uma ação diferente, por mais semelhantes que sejam entre si (case sensitive). 

Digamos que o valor para um cluster seja “GOLD”. Caso o valor inserido na plataforma seja “Gold”, o sistema não interpreta o comando da ação corretamente.

Logo, o cliente não visualiza a promoção. O mesmo vale para outras grafias semelhantes, como “gold” ou “Golds”.

Para contornar a situação, siga os mesmos passos do cenário em que há ausência de valor e corrija possíveis erros de digitação do valor.

## Uso de dois ou mais valores

Os valores são associados tanto aos clientes quanto às promoções. 

Por exemplo, uma promoção foi relacionada aos valores “Platinum” e “Platinum2”. Apenas os compradores que tenham esses dois comandos terão acesso à promoção.

Se Maria usa o valor “Platinum” e Ana, o “Platinum2”, nenhuma das duas conseguirá participar da promoção. Isso porque só os clientes estão relacionados aos valores,  simultaneamente, finalizam a compra com o desconto.

O procedimento aqui é o mesmo dos casos anteriores. É necessário ir até “Cluster de clientes” para entender quais valores foram cadastrados para uma determinada promoção. Cabe a cada cliente decidir quantos e quais cluster irá incluir na promoção.   

Assim, a promoção será apresentada para seus clientes.
