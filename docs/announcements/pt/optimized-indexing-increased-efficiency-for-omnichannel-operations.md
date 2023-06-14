---
title: Indexação otimizada: mais eficiência para operações omnichannel
id: 5P6ydhXrf3HKVAISNSJSo5
status: PUBLISHED
createdAt: 2023-05-10T13:42:29.935Z
updatedAt: 2023-05-25T15:28:11.643Z
publishedAt: 2023-05-25T15:28:11.643Z
contentType: updates
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: indexacao-otimizada-mais-eficiencia-para-operacoes-omnichannel
legacySlug: indexacao-otimizada-mais-eficiencia-para-operacoes-omnichannel
announcementImageID: 
announcementSynopsisPT: A indexação otimizada possibilita operações omnichannel complexas, com redução de custos e tempo de processamento.
---

A [indexação](https://help.vtex.com/pt/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256) é o processo que ocorre automaticamente toda vez que um produto é criado ou atualizado em uma loja VTEX. Esse procedimento garante que os produtos exibidos para os clientes da loja estejam sempre atualizados para a versão mais recente.

Com o objetivo de aprimorar esse fluxo, reformulamos a indexação para processar somente o necessário, reduzindo significativamente o tempo e os custos de processamento envolvidos. Isso permite que lojas VTEX criem cenários [omnichannel](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3) complexos com maior confiabilidade e competitividade.

## O que mudou?

Anteriormente, a indexação demandava tempo e custo elevados e era mais instável, podendo causar a exibição de produtos desatualizados ou indisponíveis para os clientes da loja até o processo ser concluído. Para tornar esse fluxo mais eficiente e evitar problemas na experiência de compra, otimizamos a indexação para processar apenas as informações necessárias.

Aplicamos duas mudanças principais para obter esse resultado:

| **Antes** | **Depois** |
|---|---|
| **Indexação generalizada:** a atualização de qualquer dado no cadastro do produto ou do SKU, no preço ou no estoque, demandava o reprocessamento de todas as informações. | **Indexação granular:** passamos a diferenciar as alterações realizadas em preços, no estoque e no Catálogo para processar apenas o que foi modificado, em vez de processar as informações de todos os módulos em qualquer cenário. Também refinamos as alterações que acionam a indexação, evitando disparos desnecessários. |
| **Indexação global:** para tornar a versão mais atualizada de um item disponível na loja e nos resultados de busca, era necessário processar novamente as informações de todos os SKUs do produto, em todos os seus sellers e de todas as políticas comerciais relacionadas. | **Indexação por seller:** agora processamos apenas o SKU no seller que teve alguma alteração, em vez de reprocessar todos os SKUs em todos seus sellers. |

Considere o seguinte exemplo: um seller alterou o preço de um SKU que é vendido por mais 99 sellers em um marketplace com 10 políticas comerciais. O produto associado a esse SKU apresenta mais 4 SKUs além do que foi alterado. Veja como seria o fluxo interno de indexação nesse caso:

* **Antes:** o processo de indexação exigia reprocessar preço, estoque e informações de catálogo de todos os SKUs do produto relacionado (5), em cada política comercial (10) e em cada seller (100). Ou seja, parte do processamento do produto era repetido 550 vezes devido a uma alteração pontual.
* **Depois:** a indexação otimizada permite reprocessar apenas a alteração no preço em cada política comercial, considerando somente o SKU que foi alterado. O resultado é processar a alteração uma vez para cada política comercial (10) do lado do marketplace ou processar a alteração apenas uma vez do lado do seller que fez a modificação.

Durante o mês de maio, vamos aplicar a indexação otimizada a todas as contas.

Além disso, já realizamos outro ajuste em todas as lojas, incluindo as que utilizam a indexação anterior: removemos o status **Indexação pendente** da página **Catálogo > Produtos & SKUs** no Admin VTEX, mantendo a data da última indexação e o botão `Ver no site` para possibilitar acessar o produto mesmo durante a atualização de alguma informação.

Nas lojas que já utilizam [o novo design da página de Produtos & SKUs (Beta)](https://help.vtex.com/pt/tutorial/produtos-e-skus-beta--2ig7TmROlirWirZjFWZ3By), esse status não existe, pois o produto permanece **Publicado** mesmo após alterações.

## Por que fizemos essa mudança?

O objetivo da nova arquitetura de indexação é aumentar a conversão, evitando cenários de itens indisponíveis de forma indevida. Com a mudança, estamos oferecendo uma solução mais eficiente e consistente, que resulta em experiências melhores para os clientes da sua loja.

Essa melhoria permite que lojas VTEX construam e expandam operações omnichannel complexas em grande escala, incluindo modelos de [franquia](https://help.vtex.com/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl), [marketplaces](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) com um grande número de sellers e experiências regionalizadas.

## O que precisa ser feito?

A indexação otimizada será aplicada automaticamente em todas as lojas VTEX durante o mês de maio. A remoção do status **Indexação pendente** na página **Catálogo > Produtos & SKUs** no Admin VTEX já foi aplicada a todas as contas.

