---
title: Sobre a integração com a B2W
id: 5hHCiAMHih2lc5xb3A5Ohp
status: PUBLISHED
createdAt: 2022-02-02T20:54:55.426Z
updatedAt: 2022-02-15T20:48:15.424Z
publishedAt: 2022-02-15T20:48:15.424Z
firstPublishedAt: 2022-02-02T21:00:56.575Z
contentType: trackArticle
productTeam: Channels
slug: sobre-a-integracao-com-a-b2w
trackId: 6w07SJBVqE020KIOOS8ygk
trackSlugPT: configurar-integracao-da-b2w
---

Uma vez configurada a integração, dados sobre produto, estoque e preços são enviados automaticamente pela SkyHub para a B2W. A catalogação dos seus produtos é feita de forma automática pela própria SkyHub. Caso queira alterá-la, entre em contato com o [suporte da SkyHub](https://ajuda.skyhub.com.br/hc/pt-br/categories/115001212186).

Neste artigo, serão abordados pontos referentes à integração de pedidos e apresentação dos serviços de entrega da B2W. Para mais informações sobre o fluxo da integração, veja [Como funciona a integração da SkyHub/B2W](https://help.vtex.com/pt/tutorial/como-funciona-a-integracao-da-skyhu).

## Integração de pedidos 

Pedidos feitos na B2W são automaticamente inseridos na base de dados da SkyHub e, em seguida, disponibilizados para a VTEX no formato de fila. Em geral, este processo leva cerca de uma hora e não requer ação manual. Como essa fila é absorvida constantemente pela VTEX, não há acúmulo de pedidos.

A aprovação de pedidos na B2W só é feita quando existe estoque positivo para todos os SKUs inseridos no pedido no momento de sua aprovação. Para saber mais sobre casos de pedidos não integrados, consulte [Erros de integração de pedidos da B2W](https://help.vtex.com/pt/tutorial/erros-de-integracao-de-pedidos-da-b2w--2iQqCJIfySN0JsCJkOG2h8).

## B2W Entregas e B2W Entregas Direct

A SkyHub oferece o serviço [B2W Entrega](https://blog.americanasmarketplace.com.br/2018/01/08/logistica-no-b2w-marketplace/), uma modalidade na qual a própria B2W é responsável pelo envio dos produtos aos consumidores. Quando a entrega é realizada pelo marketplace, isso é chamado de [frete tipo FOB](https://help.vtex.com/pt/tutorial/como-funciona-o-frete-quando-o-marketplace-faz-a-entrega--EY1l6tYW3IUquwwwcQqwQ). Neste cenário, o _Service Level Agreement_ (SLA), ou seja, o nível de acordo de entrega é responsabilidade do marketplace.

Existe também o serviço B2W Entregas Direct, resultado da parceria entre a B2W e a [Direct](https://www.directlog.com.br/), uma plataforma de logística e distribuição para varejo físico e digital. Para utilizar a modalidade de envio B2W Entregas Direct, é preciso:
- Cadastrar na plataforma da B2W o status `order_invoiced` como sendo do tipo _Pagamento Faturado_.
- Preencher na plataforma VTEX o campo `embeddedInvoice` da API de [Order invoice notification](https://developers.vtex.com/vtex-rest-api/reference/invoice) com os dados da nota fiscal.

<div class="alert alert-warning">
Sem o status <b>order_invoiced</b> criado no marketplace e o <b>embeddedInvoice</b> preenchido corretamente, não é possível avançar com o pedido na VTEX, pois o pedido só é faturado mediante inclusão dos dados em XML na nota fiscal. O campo <b>issuanceDate</b> também precisa estar preenchido com uma data válida.
</div>
