---
title: 'O símbolo da moeda não segue o idioma do administrador'
id: 7gEGdkDSbRCtk2Q1u2nW6k
status: PUBLISHED
createdAt: 2024-03-15T19:37:45.395Z
updatedAt: 2024-03-15T19:40:56.682Z
publishedAt: 2024-03-15T19:40:56.682Z
firstPublishedAt: 2024-03-15T19:37:46.387Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: o-simbolo-da-moeda-nao-segue-o-idioma-do-administrador
locale: pt
kiStatus: Backlog
internalReference: 1000915
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando um usuário acessa a tela de configuração do carrinho na área de pedidos (`https://{accountname}}.myvtex.com/admin/checkout/#/configurations )` o símbolo da moeda segue as convenções da localidade indicada pelo administrador, a troca desse símbolo é feita sempre que o administrador indica uma localidade diferente, porém de acordo com nossa análise essa troca está falhando em determinados momentos, fazendo com que o símbolo da moeda indicada seja o padrão da página que nesse caso é R$.

## Simulação




- Faça login no administrador
- Vá para https://.myvtex.com/admin/checkout/#/configurations
- Altere a localidade para PT e de volta para EN;
- Atualize a página e você verá que o símbolo da moeda ainda é R$

## Workaround


No momento, não temos uma solução alternativa para esse cenário, mas ele não afeta a operação da loja, pois o símbolo de moeda nessa área é apenas visual, sem impacto operacional na loja.




