---
title: 'Conﬁgurar regra de Divergência de valores rappi'
id: VoIvBSldeT2A4MuRVMMi1
status: PUBLISHED
createdAt: 2024-05-31T20:36:17.323Z
updatedAt: 2024-09-04T13:50:40.248Z
publishedAt: 2024-09-04T13:50:40.248Z
firstPublishedAt: 2024-05-31T20:51:50.382Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-rappi-price-divergence-rule
locale: pt
trackId: 2AeYfJRnQ0I91dvSzRcpKh
trackSlugEN: integracao-rappi
order: 3
---

Na integração com marketplaces como a Rappi, por vezes há uma variação entre o preço deﬁnido pelo seller e aquele oferecido pelo marketplace, resultando em pedidos fechados com valores diferentes do esperado. Isso pode ocasionar pedidos com erro de divergência de preço.  

No Admin VTEX, em **Conﬁgurações da loja > Pedidos > Autorização de pedidos**, ou digite **Autorização de pedidos** na barra de busca.  
A [regra de Divergência de valores](/pt/docs/tutorials/regra-de-divergencia-de-valores) permite o controle de pedidos com divergência de preço.  

Somente usuários com [perﬁl de acesso](/pt/docs/tutorials/perfis-de-acesso) Admin Super (*Owner*) ou OMS Full podem conﬁgurar essa funcionalidade, conforme o passo a passo descrito em [Conﬁguração da regra de Divergência de valores](/pt/docs/tutorials/configuracao-da-regra-de-divergencia-de-valores).  

A regra de Divergência de valores é composta de uma ou mais regras de autorização, sendo que cada uma delas corresponde a um intervalo percentual do preço do pedido. As regras de autorização podem ser conﬁguradas para negar 
automaticamente, aprovar automaticamente, ou exigir autorização manual do pedido.    

> ⚠️ Para que a regra de Divergência de valores seja válida, após a conﬁguração é necessário enviar o campo `isCreatedAsync` na API [Place fulfillment order](https://developers.vtex.com/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/fulfillment/pvt/orders), independente do tipo de conector utilizado, seja ele, marketplace externo, [conector certificado](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex#integrado-a-conector-certificado-parceiro) ou outros [conectores nativos](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex#integrado-a-conector-nativo-vtex) além da Rappi.  

É recomendável que a conﬁguração da regra de **Divergência de valores** seja feita antes de você seguir para a próxima etapa da conﬁguração da integração com a Rappi. Descumprir esta recomendação não impede que a integração seja concluída, mas pedidos com divergência de preço ﬁcarão retidos até a criação da regra de **Divergência de valores** e o envio do campo `isCreatedAsync` na API [Place fulfillment order](https://developers.vtex.com/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/fulfillment/pvt/orders).  

Será possível acompanhá-los no Admin VTEX, em **Marketplace > Conexões > Pedidos,** ou digite **Pedidos** na barra de busca.  
