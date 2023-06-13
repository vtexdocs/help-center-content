---
title: Erros de integração de estoque com o Mercado Livre
id: 3pWA3vRePuGmJ5tquY4fva
status: PUBLISHED
createdAt: 2021-10-04T19:04:23.285Z
updatedAt: 2023-03-29T14:36:13.584Z
publishedAt: 2023-03-29T14:36:13.584Z
firstPublishedAt: 2021-11-01T22:14:56.937Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: erros-de-integracao-de-estoque-com-o-mercado-livre
legacySlug: erros-de-integracao-de-estoque-com-o-mercado-livre
subcategory: 7lxg0kyL3TYIsrlSQlf1zP
---

Nos marketplaces para os quais a VTEX desenvolveu um [conector nativo](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex), por vezes ocorrem erros de integração de estoque. Este artigo reúne os erros mais comuns de integração de estoque com o Mercado Livre e orienta sobre como solucioná-los.

Existem mensagens que identificam quais são os erros. Você pode visualizá-las no Admin VTEX, em **MARKETPLACE > Conexões > Estoque**, clicando sobre a mensagem de processo com erro.

Após solucionar um erro, é necessário reprocessar manualmente a integração do estoque daquele SKU. Isso é feito no mesmo local onde o erro é visualizado, clicando em **Ações > Reprocessar**.

Seguem abaixo as mensagens mais comuns de erros de integração de estoque com o Mercado Livre.

#### Mensagem de erro

`Mensagem de erro não mapeada pela integração. Entre em contato com a VTEX informando o ocorrido para que o mapeamento seja realizado. Mensagem no Mercado Livre: Validation error. Is not possible to activate an item without stock.`

A causa mais comum para o erro é que não há estoque para o item, e não é possível no Mercado Livre ativar um item sem estoque. Portanto, é necessário [atualizar a quantidade de SKUs em estoque](https://help.vtex.com/pt/tutorial/como-atualizar-estoque--2MDwYV1COA6YuoiY22AyGo) e reprocessar o erro. Se após o reprocessamento manual o erro persistir, outra causa possível é que o SKU esteja inativo. Verifique o _status_ do SKU no seu Admin VTEX, em **Catálogo > Produtos e SKU**. Uma terceira possibilidade é que o item não esteja marcado corretamente na coleção ou política comercial definidos para o Mercado Livre. Se necessário, consulte o artigo [Associação de SKU à Política Comercial](https://help.vtex.com/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb).

____

#### Mensagem de erro

`Mensagem de erro não mapeada pela integração. Entre em contato com a VTEX informando o ocorrido para que o mapeamento seja realizado. Mensagem no Mercado Livre: ProductId not found.`

Para que um item seja integrado ao Mercado Livre, ao [preencher os campos de cadastro desse produto](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke) é necessário que as flags **Exibir no site** e **Mostrar produto esgotado** estejam marcadas como ativas. Caso contrário, os SKUs deste produto não serão integrados ao Mercado Livre.

____

#### Mensagem de erro

`Estoque não atualizado pois o anúncio no Mercado Livre está finalizado`

Há diferentes motivos para o Mercado Livre considerar um anúncio como finalizado. O período de veiculação do anúncio pode ter sido concluído, por exemplo, ou pode ser que o anúncio esteja em desacordo com a política do marketplace. Não é possível atualizar estoque para anúncios finalizados no Mercado Livre. Para saber a razão de um anúncio ter sido finalizado, entre em contato com o Mercado Livre. Saiba mais na documentação do Mercado Livre sobre [ajuda com anúncios](https://www.mercadolivre.com.br/ajuda/anuncios_644).

____

#### Mensagens de erro

`Não é possível atualizar um anúncio que está sob revisão pelo Mercado Livre. Mensagens no Mercado Livre: Cannot update item XXX [status:under_review, has_bids:false] variations is not modifiable.`<br>
</br>`Não é possível atualizar um anúncio que está sob revisão pelo Mercado Livre. Mensagens no Mercado Livre: Cannot update item XXX [status:under_review, has_bids:false] available quantity is not modifiable.`

A tradução do trecho _under review_ significa _sob revisão_, ou seja, o Mercado Livre está revisando o anúncio, pois ele violou as condições exigidas. Nas mensagens acima, por exemplo, é possível que algum dado do cadastro tenha sido preenchido de forma incorreta. Quando um anúncio está sob revisão no Mercado Livre, não é possível integrar estoque. Para solucionar a questão, entre em contato com o Mercado Livre.

____

#### Mensagem de erro

`Mensagem de erro não mapeada pela integração. Entre em contato com a VTEX informando o ocorrido para que o mapeamento seja realizado. Mensagem no Mercado Livre: The caller is not authorized to access this resource.`

Esta mensagem significa que o usuário está suspenso e, portanto, sua autorização para integrar estoque foi interrompida. A suspensão pode ocorrer por motivos diversos, desde pendências financeiras com o Mercado Livre, até a expiração do _token_ da integração. Somente o Mercado Livre é capaz de identificar a causa e solucionar o problema, portanto, entre em contato com o marketplace.

____

#### Mensagem de erro

`A quantidade disponível não é modificável em items com logística Fulfillment`

Quando o seller optou pelo serviço [Mercado Envios Full](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-full), isto significa que o Mercado Livre é o responsável pelo fulfillment do pedido. Ou seja, a logística de entrega do produto ao consumidor final é responsabilidade do próprio marketplace. Neste caso, é o Mercado Livre que controla o estoque, não sendo possível à VTEX atualizar estoques para anúncios desse tipo.

____

#### Mensagem de erro

`The attributes [GTIN] are required for category. Check the attribute is present in the attributes list or in all variation's attributes_combination or attributes.`

**Mensagem traduzida:** Os atributos GTIN são obrigatórios para a categoria. Verifique se o atributo está presente na lista de atributos ou em todas as variações de attributes_combination ou de attributes.

Também chamado de EAN na VTEX, o GTIN é o código de identificação único de um SKU. Trata-se do código de barras [preenchido no cadastro de SKU](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY), e a mensagem indica que o GTIN é obrigatório para a categoria à qual o SKU pertence. Caso o código tenha sido preenchido incorretamente, ou não seja válido, o SKU não será integrado ao Mercado Livre. Providenciar o GTIN correto de um produto é responsabilidade de fornecedores e fabricantes, a VTEX não gera códigos de barras para suprir este cenário.

____

#### Mensagens de erro

`Error validating grant. Your authorization code or refresh token may be expired or it was already used.`

**Mensagem traduzida:** Erro ao validar a concessão. Seu código de autorização ou _token_ de atualização pode estar expirado ou pode ter sido utilizado.

`Error converting access token`

**Mensagem traduzida:** Erro ao converter o _token_ de acesso.

As mensagens indicam que há algum problema com o seu _token_. Para o Mercado Livre, um token pode expirar por diferentes motivos, como prazo de validade extinto, ou suspeita de ameaça à segurança, por exemplo. Problemas relacionados a _tokens_ devem ser tratados diretamente com o Mercado Livre. Após solucionar o erro, é necessário [autorizar novamente a integração](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4leBEAd22Icm46kGeiGgak) com o Mercado Livre no Admin VTEX. Se o erro persistir, pode ser necessário primeiro refazer a [configuração do cadastro do conector](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4YvYdgICMosaEgISOYogsi) no Admin VTEX, e só depois realizar nova autorização da integração.

____

#### Mensagem de erro

`User not active`

**Mensagem traduzida:** Usuário inativo.

Um usuário pode ser desativado no Mercado Livre por diversas razões, desde o preenchimento incorreto de dados cadastrais, até ter sido banido da plataforma por uma conduta em desacordo com a política do marketplace. Para solucionar o problema, entre em contato com o Mercado Livre.

<br></br>
### Saiba mais

- [Integração com o Mercado Livre](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq)
- [Controle de estoque mínimo para integrações](https://help.vtex.com/pt/tutorial/controle-de-estoque-minimo-para-integracoes--5hvUNIiSeJ5QCaZQYpYf1D)
- [Configurar o Alerta de Estoque Crítico](https://help.vtex.com/pt/tutorial/configurar-o-alerta-de-estoque-critico--6FD0GHeQPCsKIMgkQ88SGu)
