---
title: 'Ao tentar configurar a Braspag anti-fraude, o usuário é direcionado para a tela de afiliação da Braspag'
id: YcLMt8AUf9SVN9s3cbKSk
status: PUBLISHED
createdAt: 2022-03-28T01:55:40.554Z
updatedAt: 2022-11-25T22:08:02.641Z
publishedAt: 2022-11-25T22:08:02.641Z
firstPublishedAt: 2022-03-28T01:55:41.087Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: ao-tentar-configurar-a-braspag-antifraude-o-usuario-e-direcionado-para-a-tela-de-afiliacao-da-braspag
locale: pt
kiStatus: Backlog
internalReference: 334239
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Temos duas integrações internas com a Braspag, uma para a luta antifraude e outra para uma afiliação (ambas com o mesmo nome). Ao tentar clicar em anti-fraude para configurar, o usuário é direcionado para os campos de configuração de afiliação. Portanto, não é possível configurar o antifraude da Braspag através da UI Admin



## Simulação



1. Ir para Configurações de filiação na administração
2. Tentando criar uma nova filiação antifraude da Braspag
3. O formulário aberto é a configuração de afiliação e não a configuração antifraude.



## Workaround


A solução é configurar o anti-fraude via API

