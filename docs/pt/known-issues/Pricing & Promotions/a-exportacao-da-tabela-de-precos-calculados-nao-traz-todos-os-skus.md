---
title: "A exportação da tabela de preços calculados não traz todos os SKUs"
id: 3pJcwSnZG1nO0YjIPCnfyV
status: PUBLISHED
createdAt: 2022-12-23T13:41:21.656Z
updatedAt: 2024-12-19T13:57:55.682Z
publishedAt: 2024-12-19T13:57:55.682Z
firstPublishedAt: 2022-12-23T13:41:22.123Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: a-exportacao-da-tabela-de-precos-calculados-nao-traz-todos-os-skus
locale: pt
kiStatus: Backlog
internalReference: 722005
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao exportar a tabela de preços calculados da interface do usuário do módulo Pricing, nem todas as SKUs são incluídas de forma consistente no arquivo exportado. O número de linhas na planilha exportada pode variar entre as exportações, às vezes resultando em menos SKUs do que o esperado.

## Simulação


Esse problema é intermitente, mas pode ser observado da seguinte forma:

1. Navegue até a interface do usuário do módulo Pricing.
2. Certifique-se de que nenhum filtro esteja sendo aplicado.
3. Exporte a tabela de preços calculados.
4. Compare o número de linhas na planilha exportada.
5. Repita o processo de exportação várias vezes. Em algumas tentativas, a planilha pode ter menos linhas do que as exportações anteriores

## Workaround


Para garantir resultados precisos:

- Exporte a tabela de preços calculados várias vezes e compare as planilhas para ter certeza do número de linhas da tabela de preços.
- Use a exportação com o maior número de linhas como referência para a tabela de preços calculados completa.





