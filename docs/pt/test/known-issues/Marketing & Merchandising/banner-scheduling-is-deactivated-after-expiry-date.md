---
title: 'Agendamento de banner não funciona corretamente'
id: 5JrrUCTU1q2KKCqo20SQqQ
status: PUBLISHED
createdAt: 2017-03-29T23:39:38.141Z
updatedAt: 2022-12-22T20:45:37.766Z
publishedAt: 2022-12-22T20:45:37.766Z
firstPublishedAt: 2017-03-29T23:42:49.292Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: agendamento-de-banner-nao-funciona-corretamente
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O agendamento de um banner não dispara ações para atualizar o cache do template. Com isso, o banner não aparece no template no horário agendado.

Em outras palavras, quando um usuário agenda o banner para hora X do dia Y, o sistema armazena essa informação para ativar o banner na hora do agendamento. No entanto, a ativação do banner não dispara uma ação para forçar atualização do cache. Consequentemente, o banner não aparece instantaneamente no template. O mesmo acontece para a função de desativar o banner na hora desejada.

Quando um agendamento de banner funciona corretamente é uma coincidência do cache estar sendo atualizado próximo ao horário do agendamento. Mas, infelizmente, esse comportamento não é padronizado a ponto de permitir o uso do agendamento no período da atualização.

## Simulação

- Acessar o módulo CMS
- Acessar Portal > Web-sites > *loja* > / > *template*
- Clicar em Configurações
- Clicar para editar o controle
- Clicar para editar o conteúdo
- Configurar uma data de validade nos campos em "Períodos"
- Clicar no botão "Alterar na Lista de Conteúdo"
- Clicar no botão "Salvar Conteúdo"
- Clicar no botão "OK" na mensagem de confirmação da operação
- Clicar no botão "Salvar Configurações"
- Clicar no botão "OK" na mensagem de confirmação da operação

![Agendamento de Banner](https://images.contentful.com/alneenqid6w5/54556kzHKwMogwaMksMQ2a/e078030f450f7cdc666bcb5258ccb7d2/2017-03-16_23_06_36-Index.png)

## Workaround

Não existe uma solução paliativa para o agendamento. No entanto, é possível ativar um banner manualmente através do Módulo CMS da plataforma VTEX. Para isso, é necessário que os agendamentos sejam removidos. Assim, o botão __Ativar__ será a trigger para ativar o banner.

