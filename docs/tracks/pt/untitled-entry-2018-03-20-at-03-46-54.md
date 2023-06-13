---
title: [SkyHub] Fluxo de produtos
id: 2n0EgHmrYoomUw8iCCAgMc
status: DRAFT
createdAt: 2018-03-20T15:46:54.578Z
updatedAt: 2020-01-09T19:47:17.796Z
publishedAt: 
firstPublishedAt: 
contentType: trackArticle
productTeam: Channels
slug: skyhub-fluxo-de-produtos
trackId: 
trackSlugPT: 
---


# 1. Produtos

   A integração envia __produto, estoque e preços de uma vez só__. Uma vez que os produtos são enviados com sucesso, já possível encontrá-los na SkyHub. Porém, isto não significa que estará disponível nos sites da B2W. Nenhum campo é obrigatório para que o produto seja integrado, no entanto, caso o produto seja enviado sem preço ou estoque, nós o enviamos como inativo para o marketplace. Para os produtos e SKUs, a integração envia os seguintes campos:
</br>

| Produto     | SKU     |
| ---------- | ---------- |
|    Nome    | EAN       |   
| Descrição  | Peso       |    
| Marca      | Altura       | 
| Categoria na VTEX | Largura |
| Especificações | Comprimento |
|     -     | Imagens       |      
| -       | Especificações |

</br>

Ao serem integrados, qualquer campo deste pode ser atualizado. 
>Ex: se a descrição do produto for alterada, a integração atualizará a descrição que está no marketplace.

</br>
Na SkyHub, os produtos possuem dois status possíveis:
- __Ativo:__ disponível para venda
- __Inativo:__ indisponível para venda, fazendo com que o produto não apareça no marketplace.
</br>

Lá eles ficam agrupados por um produto que possui diversas variações/skus.
> Ex: Camisa Azul (produto) | P, M, G (variações/skus)

</br>

A categoria é enviada em formato de breadcrumb.
> Ex: Masculino > Camisas > Manga Longa



