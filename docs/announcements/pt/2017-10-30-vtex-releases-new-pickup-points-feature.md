---
title: 'VTEX lança nova feature de Pontos de Retirada (Pickup Points)'
id: 3Nba5qVpEsmQKwu82Ao4s
status: PUBLISHED
createdAt: 2017-10-30T20:47:42.057Z
updatedAt: 2019-12-31T15:12:52.626Z
publishedAt: 2019-12-31T15:12:52.626Z
contentType: updates
productTeam: Post-purchase
author: authors_59
slug: vtex-lanca-nova-feature-de-pontos-de-retirada-pickup-points
locale: pt
legacySlug: vtex-lanca-nova-feature-de-pontos-de-retirada-pickup-points
announcementImageID: ''
announcementSynopsisPT: 'Utilizando o conceito de Delivery Channels, mudamos a forma de cadastro e administração dos pontos de retirada.'
---

Tendo em vista as necessidades de inovação de nossos clientes, a VTEX lança sua nova feature de Pickup Points. 

Utilizando o conceito de Delivery Channels, mudamos a forma de cadastro e de administração dos pontos de retirada de pedidos. Anteriormente, a configuração dos pontos de retirada era feita na Doca. Agora, incluímos uma nova aba Pontos de Retirada no módulo Logistics, onde devem ser cadastrados os locais de retirada. 

Nesta versão, os Pontos de Retirada devem estar associados a alguma Transportadora no módulo Logistics. Desta forma, o lojista poderá configurar na planilha de frete quais CEPs vão ser atendidos pelos Pontos de Retirada vinculados a uma transportadora. 

## Por que fizemos isso?

Esta feature se baseou num novo conceito, que chamamos de Delivery Channel. Antes, todas as entregas eram vistas em nossa API como sendo do tipo “delivery” (entrega em domicílio), inclusive os Pickup Points cadastrados nas Docas. Agora, estamos criando o tipo “pick-up-point”. Desta forma, agora passam a existir dois Delivery Channels: “delivery”, para entregas em domicílio e “pick-up-point”, para retirada.

Decidimos separar as informações de canais de entrega porque isso nos dá mais flexibilidade, com maiores oportunidades de evoluirmos nosso produto, criando uma melhor experiência de compra para o cliente final, impulsionando as vendas. Além disso, esta organização em canais de entrega cria maior facilidade na administração e no cadastro dos Pontos de Retirada.

## Ações necessárias

Esta atualização não quebra nenhuma configuração atual de logística.

No entanto, vale ressaltar que, no novo critério, os pontos de retirada antigos serão considerados como “delivery”. Os novos pontos de retirada serão criados com o canal de entrega “pick-up-point”. Assim, para ter acesso a novas releases que contemplem pontos de retirada nativamente, o lojista deverá configurar seus pickup points desta nova maneira.

Além disso, em relação à API, a diferença entre a versão nova e a antiga é que, na versão anterior, a entrega era identificada apenas pela variável sla\_Id. Na atual, a entrega será identificada pelo sla\_Id e pelo Delivery Channel.

Para saber como cadastrar os novos Pickup Points, acesse nosso [tutorial](/pt/tutorial/configurar-pontos-de-retirada-pickup-points).
