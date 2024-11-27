---
title: 'Como funciona a indexação'
id: tutorials_256
status: PUBLISHED
createdAt: 2017-04-27T22:11:43.688Z
updatedAt: 2024-03-04T16:39:16.578Z
publishedAt: 2024-03-04T16:39:16.578Z
firstPublishedAt: 2017-04-27T23:03:11.322Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: understanding-how-indexation-works
locale: pt
legacySlug: entendendo-o-funcionamento-da-indexacao
subcategoryId: pwxWmUu7T222QyuGogs68
---

>⚠️ Tutorial válido apenas para lojas que utilizam a busca do [CMS Portal Legado](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj).
>
> Se a sua loja utiliza o [Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG), consulte a página [Histórico da Indexação](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4flMwTaQL8FRKl1YT58ezH) para acompanhar o processo de indexação.

A indexação é um processo que prepara os dados gerais do SKU, tais como dados de catálogo, de preço e de estoque e atualiza as informações para servir de base para pesquisas e montagens das prateleiras do site.

Toda vez que há alguma alteração como as listadas abaixo em um produto, a reindexação é realizada. 

- Alteração de dados do cadastro do produto ou SKU;
- Ativação/desativação do produto;
- Ativação/desativação de coleção.
- Mudança de preço;
- Quantidade em estoque.

Uma vez que o produto esteja marcado para reindexar, ele fica com o status _indexação pendente_ na listagem de produtos do Admin VTEX. O indexador coloca esses produtos em uma fila, com um tempo de espera de 2 minutos, para que sejam processados. Após os 2 minutos, o produto fica disponível para o consumo da indexação. Nesse processo, todos os módulos da VTEX são consultados, atualizando preço e disponibilidade para cada política comercial. O tempo médio até a finalização desse processo é de 4 minutos.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products%20and%20SKUs/entendendo-o-funcionamento-da-indexacao_1.png)

## Relatório de Indexação

O relatório de indexação é um página no Admin VTEX onde é possível acompanhar o status de indexação dos produtos de sua loja. O caminho para acessá-lo é o seguinte:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Relatórios**.
3. Clique na aba **Produtos Indexados**.

Nele, são divididos os produtos em cada passo do processo de indexação e em períodos em que esses produtos estão neste processo:

- **Total Indexado**, **Ainda não enfileirado** e **Total na Fila**: dizem respeito aos estágios do produto dentro do processo &#8211; Ainda não enfileirado são os produtos que foram alterados em menos de 2 minutos e Total na fila são aqueles que já entraram no processo de indexação, após esses 2 minutos.
- **Na fila recentemente**, **Na fila entre 1 e 4 horas**, **Na fila de 4 a 8 horas** e **Na fila há mais de 8 horas**: são os períodos em que os produtos estão no processo de indexação.

![RelatorioIndexação](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products%20and%20SKUs/entendendo-o-funcionamento-da-indexacao_2.png)

O relatório de indexação exibe o tempo que o último item levou para ser reindexado no lado superior direito do relatório, conforme imagem acima. 

## Retentativas

Existe um número limitado de quantidade de tentativas de indexação dos itens. O que significa que, caso um produto não possa ser indexado por ultrapassar o tempo limite por 3 vezes, ele é retirado da fila principal e é repassado para uma fila de repescagem, onde é feita a tentativa de indexação por mais 7 vezes, com uma tentativa a cada 15 minutos.

Caso o produto ainda não seja processado por atingir o tempo limite na investida, ele é retirado também da fila de repescagem e não é mais processado, até que alguma outra atualização de seus dados seja realizada para que ele entre em todo o fluxo novamente.

O tempo limite pode ser atingido pelo número de validações que o produto sofrerá. Cada validação é uma ocorrência no catálogo. O cálculo é o seguinte:

Quantidade de SKU do produto:
- **x** quantidade de políticas comerciais  
- **x** promoções em que o produto está inserido  
- **x** quantidade de regiões geográficas  
- **x** quantidade de coleções em que o produto está inserido.

### Para saber mais

[Por que meu produto não indexa?](/faq/por-que-o-produto-nao-indexa "Por que meu produto não indexa?")
