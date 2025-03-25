---
title: 'O relatório de exportação de pedidos não está funcionando corretamente devido ao espaço duplo no nome da promoção'
id: 3dVPZEs544WyPDBNzTesWx
status: PUBLISHED
createdAt: 2023-04-06T20:22:47.489Z
updatedAt: 2024-06-28T17:44:15.662Z
publishedAt: 2024-06-28T17:44:15.662Z
firstPublishedAt: 2023-04-06T20:22:48.141Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-export-report-is-not-working-properly-due-double-space-on-promotion-name
locale: pt
kiStatus: Fixed
internalReference: 786216
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O sistema de relatório de pedidos atualmente não consegue criar um arquivo a partir de filtros de promoção que contêm espaços duplos em seus nomes. Ao tentar criar o relatório, o sistema gera um erro e a exportação não é realizada, resultando na mensagem "_Exportação concluída. 0 pedidos foram enviados para seu e-mail"_.

## Simulação



Crie um pedido usando alguma promoção cujo nome contenha espaços duplos;

Depois disso, vá para o gerenciamento de pedidos e execute um filtro com essa promoção como condição.

Nesse ponto, a IU do OMS exibirá normalmente uma lista de pedidos com a condição escolhida, mas, ao selecionar a exportação de pedidos, a IU retornará a seguinte mensagem: "_Exportação concluída. 0 pedidos foram enviados para seu e-mail_"

## Workaround


Filtre os pedidos na interface do usuário por outro parâmetro, por exemplo, data, forma de pagamento etc., depois exporte os pedidos e filtre-os por promoção diretamente no arquivo Excel gerado pelo sistema.




