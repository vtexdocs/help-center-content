---
title: 'Como funciona a disponibilidade de estoque na página de produto'
id: gyVfuG5dTyUyGA02iiU0y
status: PUBLISHED
createdAt: 2019-01-24T20:45:34.673Z
updatedAt: 2023-03-29T00:39:08.136Z
publishedAt: 2023-03-29T00:39:08.136Z
firstPublishedAt: 2019-01-24T22:15:25.141Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slugEN: how-inventory-availability-works-on-the-product-page
legacySlug: como-funciona-a-disponibilidade-de-estoque-na-pagina-de-produto
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal (Legado).
</div>

Para entendermos o funcionamento da disponibilidade de estoque exibida para o usuário, precisamos saber um pouco como funciona a arquitetura de chamadas que disponibiliza a informação de estoque na página de produto.

Na página de produto, o **Layout**, módulo que renderiza as páginas, realiza uma chamada para o __Checkout__. O Checkout é o módulo que possui __a informação mais atualizada__ sobre a disponibilidade em estoque de um produto. O Checkout __sempre retorna a informação de estoque mais atualizada possível.__

Desta maneira, o Layout utiliza esta informação do Checkout e mostra na página de produto se um determinado SKU está disponível ou indisponível.

## SKU exibido como indisponível

É possível, embora não seja comum, que um produto apareça como __indisponível__ para algum usuário, __mesmo tendo estoque disponível__.

O que acontece é que as páginas de produto utilizam o cache para guardar alguns dados e otimizar sua performance. Assim, os requests buscam algumas informações das [camadas de cache](/pt/docs/tutorials/entendendo-o-funcionamento-do-cache) ao invés de solicitar as informações diretamente aos servidores. Este é um procedimento comum na web para que as respostas aos requests sejam mais rápidas e os sites ganhem em eficiência.

Por conta dessas camadas de cache, a informação de disponibilidade de estoque na página de produto pode ser diferente da retornada pelo Checkout no mesmo momento. Para que a página de produto exiba a informação mais atualizada do Checkout, é necessário expirar o cache da página de produto. Para expirar o cache, você deve adicionar um parâmetro qualquer à URL da página de produto (por exemplo, `utm_source=qualquerstring`) e atualizar a página.  

## SKU exibido como disponível

Da mesma maneira, é possível que uma página de produto exiba um SKU como __disponível__, mesmo sem estoque disponível. 

Estes são os cenários de __estoque raso__. Um usuário pode ficar um certo tempo numa página de produto que exibe a informação de SKU disponível, de acordo com a informação passada pelo Checkout no momento da chamada. No entanto, este estoque pode ter sido consumido por um outro cliente nesse meio tempo.
