---
title: 'Solicitar Captura sem Registro de Novos Eventos ao utilizar Lojas Legadas'
id: 5at40vZVpqL3Xansc726uv
status: PUBLISHED
createdAt: 2022-06-23T21:38:07.187Z
updatedAt: 2022-11-25T22:09:52.067Z
publishedAt: 2022-11-25T22:09:52.067Z
firstPublishedAt: 2022-06-23T21:38:07.517Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: solicitar-captura-sem-registro-de-novos-eventos-ao-utilizar-lojas-legadas
locale: pt
kiStatus: Backlog
internalReference: 604254
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, ao utilizar lojas portal VTEX (lojas não VTEX IO), a aplicação de captura de pedidos não está registrando eventos especificamente para as visitas às páginas de produtos.






## Simulação



1. Utilizando uma loja VTEX portal, acessar uma página de produto quando logado
2. Verifique se a aplicação rc está funcional em sua loja (detalhado aqui: https://help.vtex.com/pt/tutorial/configurar-carrinho-abandonado--tutorials_740#my-trigger-settings-are-correct-but-the-test-email-address-is-not-receiving-emails-what-must-be-checked)


3. Verifique a propriedade 'produtoVisitedTag' do documento relacionado em sua aplicação de Dados Mestres, ele terá permanecido nulo. Deve ter sido preenchida com dados.






## Workaround


Esta usabilidade funciona para as lojas VTEX IO.

