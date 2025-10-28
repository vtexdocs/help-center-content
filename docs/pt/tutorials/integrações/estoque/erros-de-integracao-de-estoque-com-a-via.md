---
title: 'Erros de integração de estoque com a Via'
id: 2jzz4Ip0M2BDzwslEtCzPc
status: PUBLISHED
createdAt: 2021-10-26T23:55:47.528Z
updatedAt: 2025-08-26T15:32:22.393Z
publishedAt: 2025-08-26T15:32:22.393Z
firstPublishedAt: 2021-10-27T00:08:05.224Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: via-inventory-integration-errors
legacySlug: erros-de-integracao-de-estoque-com-a-via
locale: pt
subcategoryId: 7lxg0kyL3TYIsrlSQlf1zP
---

Nos marketplaces para os quais a VTEX desenvolveu um [conector nativo](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex), por vezes ocorrem erros de integração de estoque. Este artigo reúne os erros mais comuns de integração de estoque com a Casas Bahia Marketplace e orienta sobre como solucioná-los.

Existem mensagens que identificam quais são os erros. Você pode visualizá-las no Admin VTEX, em **MARKETPLACE > Conexões > Estoque**, clicando sobre a mensagem de processo com erro.

Após solucionar um erro, é necessário reprocessar manualmente a integração do estoque daquele SKU. Isso é feito no mesmo local onde o erro é visualizado, clicando em **Ações > Reprocessar**.

Seguem abaixo as mensagens mais comuns de erros de integração de estoque com a Casas Bahia Marketplace:

#### Mensagem de erro

`Acesso Negado - Auth-token inválido ou inexistente`

Este erro ocorre devido a problemas com _token_, também chamado de chave de acesso. Para a Casas Bahia Marketplace, um _token_ pode ser considerado inválido ou inexistente por diferentes motivos, como prazo de validade expirado, ou suspeita de ameaça à segurança, por exemplo. Neste caso, é necessário entrar em contato com a Casas Bahia Marketplace para validar o _token_, por meio do [Portal do Lojista da Casas Bahia Marketplace](https://pas.viavarejo.com.br/login?returnUrl=%2F). Após essa validação, corrija as configurações do [cadastro da integração.](/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/1okse2MybWk04AQoueu88O) No seu Admin VTEX, vá em **MARKETPLACE > Conexões > Integrações**. No _card_ da Casas Bahia Marketplace, clique sobre o ícone <i class="fas fa-cog"></i> engrenagem, e escolha a opção **Editar configuração**. Preencha o campo _Chave de acesso_ com o novo _token_ e clique em **Salvar configuração**.

____

#### Mensagem de erro

`Estoque inexistente para o warehouse. Problemas ao atualizar item.`

Este erro significa que não foi possível identificar um estoque válido na integração com a Casas Bahia Marketplace. O problema pode estar relacionado à indisponibilidade de estoque, ou às configurações logísticas da sua [Estratégia de Envio](/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3).

Para identificar a causa, faça uma [simulação de envio](/pt/tutorial/simulador-de-envio--tutorials_144). A simulação apresenta quais são as possibilidades de envio, e qual a quantidade disponível de itens para um produto. A imagem a seguir apresenta o resultado de uma simulação de envio:

![imagem_simulador](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integra%C3%A7%C3%B5es/estoque/erros-de-integracao-de-estoque-com-a-via_1.png)

Quando não há estoque disponível, ou quando existe algum erro nas configurações da sua [Estratégia de Envio](/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3), o resultado da simulação apresenta o motivo para o insucesso da operação. Neste exemplo, existem algumas transportadoras que não cumpriam as condições necessárias para a entrega do produto.

Erros relacionados à coluna _Transportadora_ são erros de SLA, sigla para _Service Level Agreement_, que é o acordo de serviço firmado entre a loja VTEX e a Casas Bahia Marketplace. Erros de SLA significam que algum fator está inviabilizando a entrega do pedido ao consumidor final. Neste caso, é necessário rever as configurações da Estratégia de Envio utilizada na integração com a Casas Bahia Marketplace.

Erros relacionados à coluna _Quantidade disponível_ são erros de estoque, e em geral ocorrem devido a algum dos seguintes fatores:

- **Indisponibilidade de estoque:** um ou mais SKUs do pedido estão indisponíveis, é necessário [atualizar a quantidade de SKUs em estoque](/pt/tutorial/como-atualizar-estoque--2MDwYV1COA6YuoiY22AyGo).
- **SKU inativo:** o SKU não está ativo, e somente SKUs ativos são integrados. Verifique o status do item no seu Admin, em _PRODUTOS > Catálogo > Produtos e SKU_.
- **Estoque negativo:** é possível que o [estoque esteja negativo](/pt/tutorial/atualizar-quantidade-de-skus-em-estoque--IKMWjOjMcMqKusSGko8c0#por-que-meu-estoque-esta-negativo). Isso ocorre quando existem mais itens reservados do que a quantidade total disponível em estoque.
- **Item não consta na coleção ou política comercial:** verifique se o SKU está marcado corretamente na coleção ou política comercial definidos para a integração com a Casas Bahia Marketplace. Saiba mais em [Associação de SKU à Política Comercial](/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb).

<br></br>
### Saiba mais

- [Integração com a Casas Bahia Marketplace](/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY)
- [Controle de estoque mínimo para integrações](/pt/tutorial/controle-de-estoque-minimo-para-integracoes--5hvUNIiSeJ5QCaZQYpYf1D)
- [Configurar o Alerta de Estoque Crítico](/pt/tutorial/configurar-o-alerta-de-estoque-critico--6FD0GHeQPCsKIMgkQ88SGu)
