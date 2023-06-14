---
title: 'Informações do cliente sendo removidas do Sistema de Perfil sem razão clara'
id: 3xnhH9VXa5Gj0oag44cG1I
status: PUBLISHED
createdAt: 2022-06-25T10:53:51.548Z
updatedAt: 2022-11-25T21:51:36.884Z
publishedAt: 2022-11-25T21:51:36.884Z
firstPublishedAt: 2022-06-25T10:53:51.851Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: informacoes-do-cliente-sendo-removidas-do-sistema-de-perfil-sem-razao-clara
kiStatus: Backlog
internalReference: 469823
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Às vezes recebemos relatórios onde as informações do cliente foram removidas das entidades CL e AD da Master Data, que podem ser gerenciadas de várias maneiras - uso direto da Master Data pela própria loja (UI, API, importação/exportação de dados) e outras integrações internas da plataforma, como o serviço CHK através do Sistema de Perfil.

Embora as mudanças sejam feitas com a mesma chave de aplicação interna, não há clareza sobre o serviço de origem que chama o MD/PS. Mas, considerando o contexto, as modificações anteriores, seus carimbos temporais ao longo da ordem criada, podemos facilmente associar muitos destes casos ao Checkout.

Podemos facilmente relacionar ocorrências como esta com os KI #340036 e #327630.



## Simulação


Não há maneira direta de reproduzir as ordens neste cenário. Estamos restritos às ordens previamente relatadas.



## Workaround


N/A

