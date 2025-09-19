---
title: 'O que fazer ao receber erro na simulação de frete'
id: 3bkJwe0Yj6qEkuYKUWwKwK
status: PUBLISHED
createdAt: 2017-05-09T14:03:03.097Z
updatedAt: 2023-10-10T16:20:54.988Z
publishedAt: 2023-10-10T16:20:54.988Z
firstPublishedAt: 2017-05-09T14:06:10.341Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_35
slugEN: what-to-do-when-receiving-an-error-message-during-shipping-simulation
locale: pt
legacySlug: erro-na-simulacao-de-frete
---

Como proceder ao fazer uma simulação de frete e não encontrar o resultado esperado?

Vamos desenhar aqui o passo-a-passo para conferir a configuração de Logística.

Antes de começar vale a pena lembrar que a [Simulação de Frete](/pt/tutorial/simulacao-de-frete/) retorna o resultado da API de [Cálculo de SLA](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping/calculate). Recomendamos sempre o uso das API´s. Caso não tenha acesso, consulte o administrador da sua loja e confira qual perfil de acesso está associado ao seu usuário.

Para ilustrar esse artigo vamos criar um cenário em que o produto __X-Box__ não está sendo entregue no Cep 22451-451 para a política comercial 1. A mensagem de erro é esta: "_Não foi possível gerar o carrinho. Veja os detalhes abaixo_".

Há alguns fatores que podem influenciar uma simulação, então recomendamos sempre começar do mais básico: verificar se o __X-Box__ é um produto ativo e se está com as configurações corretas. O caminho mais rápido para isso é no [Indexed-Info](/pt/faq/por-que-o-produto-nao-aparece-no-site#indexed-info).

Feito isso, temos que conferir a Logística como um todo, ou seja, conferir qual estoque do X-box e qual transportadora que estão associada Política Comercial 1. Essa útima informação está contida na Doca.

Via API seria bem simples também. Fazendo a chamada [Cálculo de SLA](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping/calculate) é facil identificar o ID da transportadora e assim fazer o caminho inverso.

Mas o que fazer para corrigir isso?

Isso depende de cada lojista, mas após reconfigurar a Logística Estoque-Doca-Transportadora talvez, também, seja necessário alterar a [planilha da transportadora](/pt/tutorial/como-montar-a-planilha-de-frete).

Uma forma rápida de conferir o range de CEP´s de uma transportadora é usando a aba [Valores de Frete](/pt/tutorial/gerenciar-valores-de-frete/).
