---
title: 'Conﬁgurar regra de Divergência de valores Posthaus'
id: 1OrzYEI4OZajAwUXPzmtlE
status: PUBLISHED
createdAt: 2024-10-23T17:49:29.141Z
updatedAt: 2025-05-28T14:34:27.017Z
publishedAt: 2025-05-28T14:34:27.017Z
firstPublishedAt: 2024-10-23T19:01:12.805Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-price-divergence-rule-posthaus
locale: pt
trackId: eipXIoOCKRgTDkg1Z1C4a
trackSlugEN: integracao-posthaus
order: 3
---

Na integração com marketplaces como a Posthaus, por vezes há uma variação entre o preço deﬁnido pelo seller e aquele oferecido pelo marketplace, resultando em pedidos fechados com valores diferentes do esperado. Isso pode ocasionar pedidos com erro de divergência de preço.  

No Admin VTEX, em **Conﬁgurações da loja > Pedidos > Autorização de pedidos,** ou digite **Autorização de pedidos** na barra de busca. A [regra de Divergência de valores](https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) permite o controle de pedidos com divergência de preço.  Somente usuários com [perﬁl de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) Admin Super (Owner) ou OMS Full podem conﬁgurar essa funcionalidade, conforme o passo a passo descrito em [Conﬁguração da regra de Divergência de valores](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).  

A regra de **Divergência de valores** é composta de uma ou mais regras de autorização, sendo que cada uma delas corresponde a um intervalo percentual do preço do pedido. As regras de autorização podem ser conﬁguradas para negar automaticamente, aprovar automaticamente, ou exigir autorização manual do pedido.  

> ⚠️ Para que a regra de Divergência de valores seja válida, após a conﬁguração é necessário enviar o campo `isCreatedAsync` na API Place fulfillment order, independente do tipo de conector utilizado, seja ele, marketplace externo, conector certificado (parceiro) ou outros conectores nativos além da Posthaus.  

É recomendável que a conﬁguração da regra de **Divergência de valores** seja feita antes de você seguir para a próxima etapa da conﬁguração da integração com a Posthaus. Será possível acompanhá-los no Admin VTEX, em **Marketplace > Conexões > Pedidos,** ou digite **Pedidos** na barra de busca.  

> ⚠️ Descumprir esta recomendação não impede que a integração seja concluída, mas pedidos com divergência de preço ﬁcarão retidos até a criação da regra de Divergência de valores e o envio do campo isCreatedAsync na API [Place fulfillment order](https://developers.vtex.com/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/fulfillment/pvt/orders).
