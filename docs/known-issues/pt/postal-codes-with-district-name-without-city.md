---
title: CEPs com nome do distrito sem a cidade respectiva
id: 1DrAs9AqCoakeaWoAKSYkm
status: PUBLISHED
createdAt: 2017-04-05T21:12:36.398Z
updatedAt: 2022-12-22T20:45:40.274Z
publishedAt: 2022-12-22T20:45:40.274Z
firstPublishedAt: 2017-05-18T19:59:58.193Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: ceps-com-nome-do-distrito-sem-a-cidade-respectiva
kiStatus: Backlog
internalReference: 
---

## Sumário

Alguns CEPs não trazem o nome da cidade junto ao distrito, mas somente o nome do distrito. O correto seria trazerem o nome dos distritos acompanhados do nome da cidade.

### Exemplo 1

Galante é um distrito da cidade de Campina Grande. Quando simulamos este CEP, temos o seguinte retorno:

- CEP: 58446-000
- Cidade: Galante

**O correto seria**: 

- CEP: 58446-000
- Cidade: Galante (Campina Grande)

### Exemplo 2

Taperuaba é um distrito da cidade de Sobral. Quando simulamos este CEP, temos o seguinte retorno:

- CEP: 62106-000
- Cidade: Taperuaba

**O correto seria**:

- CEP: 62106-000
- Cidade: Taperuaba (Sobral)

## Simulação

- Acessar o módulo **Logistics**;
- Clicar em **Simulação de Frete**;
- Selecionar qualquer produto;
- Inserir o CEP 58446-000, por exemplo;
- Clicar em **Simular Frete**;
- No endereço, aparecerá a cidade somente como "Galante".

## Workaround

No momento, não há workaround para este cenário. É necessária a atualização dos registros para evitar que os clientes se confundam.

