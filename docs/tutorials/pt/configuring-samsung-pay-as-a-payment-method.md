---
title: 'Configurar Samsung Pay como meio de pagamento '
id: 5Yj9rgzOCVYuGmAumQlfpP
status: PUBLISHED
createdAt: 2020-08-26T13:40:16.356Z
updatedAt: 2023-03-29T01:17:07.597Z
publishedAt: 2023-03-29T01:17:07.597Z
firstPublishedAt: 2020-08-26T16:30:52.180Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configurar-samsung-pay-como-meio-de-pagamento
legacySlug: configurar-samsung-pay-como-meio-de-pagamento
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Neste tutorial, ensinaremos como configurar a carteira digital Samsung Pay como meio de pagamento. 

O primeiro passo é configurar o conector da Adyen - afiliação de gateway que processa os pagamentos realizados com o Samsung Pay - na sua loja. Você pode conferir o passo a passo completo para realizar essa ação [aqui](https://help.vtex.com/pt/tutorial/como-configurar-o-gateway-adyen-na-vtex--tutorials_2337?locale=pt "aqui").

Em seguida, você pode configurar o meio de pagamento em si.

Siga as instruções:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Certifique-se que você está na aba __Condições de pagamento__.
3. Ao lado da barra de busca, clique no __botão verde “+”__.
4. Na seção “Outro”, clique na opção __Samsung Pay__.
5. No topo da página, defina um __nome__ no campo __Nome da Regra__.
6. Logo abaixo, clique no botão __Status__ para ativar a regra.
7. Em Processar com afiliação, selecione a opção __Adyen__.
8. Se for o caso, selecione o serviço de __Antifraude__ que será usado.

Desse modo, você terá realizado a configuração mais básica do meio de pagamento. 

Contudo, existe ainda a opção de __definir condições especiais de pagamento__ - regras específicas para o Samsung Pay que são aplicadas apenas em certos contextos definidos por período, país, política comercial (Canal de Vendas), condição comercial ou nome de uma conta. 

Basta clicar no botão branco “__Adicionar condição especial__” e selecionar qual contexto você deseja especificar. Vale lembrar que é possível definir mais de uma condição especial por meio de pagamento. Para saber mais detalhes, confira o [tutorial sobre como configurar cada uma das condições especiais](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456?locale=pt "tutorial sobre como configurar cada uma das condições especiais").

Se esse não for o caso, finalize a configuração clicando no botão __“Salvar”__.
