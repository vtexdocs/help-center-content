---
title: 'Erros de integração de estoque com o Carrefour'
id: 4oDrYCkrIvWETCW34I2CKF
status: PUBLISHED
createdAt: 2021-10-25T22:15:47.447Z
updatedAt: 2024-06-17T15:05:00.226Z
publishedAt: 2024-06-17T15:05:00.226Z
firstPublishedAt: 2021-10-25T22:30:07.082Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: carrefour-inventory-integration-errors
legacySlug: erros-de-integracao-de-estoque-com-o-carrefour
locale: pt
subcategoryId: 7lxg0kyL3TYIsrlSQlf1zP
---

Nos marketplaces para os quais a VTEX desenvolveu um [conector nativo](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex#integrado-a-conector-nativo-vtex), por vezes ocorrem erros de integração de estoque. Este artigo reúne os erros mais comuns de integração de estoque com o Carrefour e orienta sobre como solucioná-los.

Existem mensagens que identificam quais são os erros. Você pode visualizá-las no Admin VTEX, em **MARKETPLACE > Conexões > Estoque**, clicando sobre a mensagem de processo com erro.

Após solucionar um erro, é necessário reprocessar manualmente a integração do estoque daquele SKU. Isso é feito no mesmo local onde o erro é visualizado, clicando em **Ações > Reprocessar**.

Seguem abaixo as mensagens mais comuns de erros de integração de estoque com o Carrefour:

#### Mensagem de erro

`Produto ainda não foi catalogado no Carrefour. Para reprocessar essa oferta, aguarde a confirmação do Carrefour de que o produto foi catalogado. Para mais detalhes verifique o portal do carrefour.`

O tempo que o Carrefour leva para catalogar novos produtos não pode ser estimado com precisão, e pode levar desde horas a dias, dependendo de processos do marketplace. O estoque de uma loja VTEX só pode ser integrado ao Carrefour após essa catalogação, portanto, é necessário aguardar até que esse processo seja concluído. Uma vez que o produto tenha sido catalogado no Carrefour, a plataforma VTEX automaticamente processa o erro, neste caso não sendo necessário fazer o reprocessamento manual. Para acompanhar a situação junto ao Carrefour, entre em contato pelo [Portal Fornecedor](https://portalfornecedorcarrefour.qa.aevee.com.br/login).

____

#### Mensagem de erro

`"status":401,"message":"Unauthorized"`

Este erro indica a perda da autorização da sua integração com o Carrefour, ou seja, trata-se de um problema relacionado ao _token_, também chamado de _ShopKey_. Para o Carrefour, problemas de _token_ podem ocorrer por diferentes motivos, como prazo de validade expirado, ou suspeita de ameaça à segurança, por exemplo. Neste caso, é necessário entrar em contato com o Carrefour para validar o _token_, por meio do [Portal Fornecedor](https://portalfornecedorcarrefour.qa.aevee.com.br/login). Após essa validação, corrija as configurações do [cadastro do conector da integração](/pt/docs/tracks/configurar-cadastro-da-integracao-do-carrefour). No seu Admin VTEX, vá em **MARKETPLACE > Conexões > Integrações**. No _card_ do Carrefour, clique sobre o ícone <i class="fas fa-cog"></i> engrenagem, e escolha a opção **Editar configuração**. Preencha o campo _ShopKey_ com o novo _token_ e clique em **Salvar configuração**.

<br></br>
### Saiba mais

- [Integração com o Carrefour](/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2)
- [Controle de estoque mínimo para integrações](/pt/docs/tutorials/controle-de-estoque-minimo-para-integracoes)
- [Configurar o Alerta de Estoque Crítico](/pt/docs/tutorials/configurar-o-alerta-de-estoque-critico)
