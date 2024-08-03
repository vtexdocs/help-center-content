---
title: ' O recurso "Produto visitado" não funciona corretamente'
id: 5AiCVwLkGToEgtLkZVPe5i
status: PUBLISHED
createdAt: 2022-11-25T18:45:15.389Z
updatedAt: 2024-02-16T20:27:41.835Z
publishedAt: 2024-02-16T20:27:41.835Z
firstPublishedAt: 2022-11-25T18:45:15.854Z
contentType: knownIssue
productTeam: Analytics
author: 2mXZkbi0oi061KicTExNjo
tag: Analytics
slug: o-recurso-produto-visitado-nao-funciona-corretamente
locale: pt
kiStatus: No Fix
internalReference: 701169
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O gatilho do produto visitado, que utiliza os dados capturados por Request Capture, é configurado com o filtro "checkout" definido como "nulo". Entretanto, a Request Capture precisa passar pelo checkout para capturar os dados do usuário e de navegação e preenchê-los nos Dados Mestres. Como resultado, o gatilho não funciona corretamente porque o RC não pode preencher os dados antes do checkout.


##

## Simulação



1. Configure o gatilho seguindo a documentação: https://help.vtex.com/en/tutorial/configuring-product-visited--tutorials_3136
2. Navegar para uma página de produto
3. Aguarde pelo menos 2h para que o e-mail seja enviado


##

## Workaround


Não há solução

