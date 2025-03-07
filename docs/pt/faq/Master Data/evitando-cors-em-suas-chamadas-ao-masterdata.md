---
title: 'Evitando CORS em suas chamadas ao MasterData'
id: 6eJe5PG2JiOOYOKM2ywaYg
status: ARCHIVED
createdAt: 2018-11-19T19:52:49.941Z
updatedAt: 2022-08-04T22:36:18.442Z
publishedAt: 
firstPublishedAt: 2018-11-19T20:10:34.548Z
contentType: frequentlyAskedQuestion
productTeam: Master Data
author: TnXcuQydAAOuwWACo864E
slugEN: avoid-cors-in-your-masterdata-requests
locale: pt
legacySlug: evitando-cors-em-suas-chamadas-ao-masterdata
---

## O que é o CORS (Compartilhamento de recursos de origem cruzada)
Antes de começar, é importante explicar que o CORS não é um erro, mas sim um mecanismo de segurança do navegador que protege usuários contra Javascripts maliciosos e solicitações HTTP possivelmente danosas

O CORS é acionado quando um HTTP solicita ...:

- ... um domínio diferente (ex: vtex.com chama vtexcommercestable.com)
- ... um subdomínio diferente (ex: store.com chama blog.store.com)
- ... uma porta diferente (ex: store.com chama store.com:3001)
- ... um protocolo diferente (ex: site em https://store.com chama http://store.com)

## Por que queremos evitar o CORS:
Seu navegador bloqueará todas as solicitações que se enquadrarem em uma das quatro condições acima, isso pode causar um comportamento inesperado do site e frustração pois algumas funcionalidades podem deixar de funcionar.

Além disso, sempre que o navegador encontrar outro dominio ele precisará verificar com o backend e assim, uma solicitação OPTION adicional será enviada de volta ao MasterData. Sites configurados incorretamente geram uma grande quantidade dessas solicitações que alem de onerar o MasterData são perfeitamente evitaveis.

## Uso adequado

*Queremos sempre usar o path relativo*

Ex: Um JQuery fazendo um GET corretamente em uma entidade MasterData usando o caminho relativo.
Observe como o nome da conta é omitido.


        $ .getJSON ("/ foobar / dataentities / SL / search?_where=(email=test@test.com)
    



Incorretamente chamando MasterData (Uma chamada vindo da account:  https://www.account.com.br):

Observe como o nome da conta __ e o outro dominio ('vtexcommercestable') __ aparecem no endpoint

        https://account.vtexcommercestable.com.br/api/dataentities/SL/search?_where=(email=test@test.com)
