---
title: 'Geolocalizado'
id: 6XIfgaqXaPe5exQa9oVp6D
status: PUBLISHED
createdAt: 2022-08-29T20:58:12.387Z
updatedAt: 2022-10-04T14:48:00.002Z
publishedAt: 2022-10-04T14:48:00.002Z
firstPublishedAt: 2022-08-29T21:04:53.073Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: geolocalizado-suiteshare
locale: pt
legacySlug: geolocalizado
subcategory: 4y4ylvqceE6vVqEF8IWZix
---

Com o crescimento do WhatsApp e a necessidade das empresas migrarem para o aplicativo, vendedores, setores, unidades e filiais de empresas começaram a ter o seu próprio número para negociar com os clientes.

Ao mesmo tempo que isso ajudou na velocidade de comunicação, muitas empresas ainda utilizam um número principal e posteriormente, direcionam o cliente para a unidade/filial mais próxima. A princípio, essa seria a melhor alternativa para não divulgar o número de WhatsApp exclusivo de todas elas em mídias e campanhas.

A função Geolocalizada surgiu exatamente para resolver esse problema. Quando o cliente clicar no link principal, ele será direcionado para o vendedor, unidade ou filial mais próxima dele, sem a necessidade de falar com a matriz e ser direcionado manualmente para outro número.

Uma empresa que possui lojas em vários cidades (Ex: São Paulo, Rio de Janeiro, Porto Alegre), pode ter um único link de WhatsApp e o cliente que estiver em Porto Alegre e clicar nesse link, iniciará uma conversa com a loja de Porto Alegre.

 O link é o mesmo, mas a central irá distribuir de acordo com a localização do cliente e da loja.

Para começar você deve ter [criado os links](https://help.vtex.com/pt/tutorial/links--7h7YXPFovF2k5z6ZSZs5WB)  que serão utilizados no seu atendimento e um link âncora.  Depois de ter criado os links no painel do VTEX Assisted Sales (SuiteShare), acesse a opção _**Organizar > Geolocalização.**_

![Geolocalizado 1](//images.ctfassets.net/alneenqid6w5/4l9dgcmAdSNdgj0PUaKVC8/db334a7cdc6a13954e62d94fbd7ebb0a/Screenshot_2022-08-29_at_17-59-43_Geolocalizado.png)

Clique em _**“Novo”**_.

![Geolocalizado 2](//images.ctfassets.net/alneenqid6w5/4Q7Q0Rnkz4UYR85akhHQAh/78deaaef0fc5a328b5bee90eb3a043fb/Screenshot_2022-08-29_at_17-59-47_Geolocalizado.png)

Em **Link Âncora**, como o próprio nome já diz, você irá selecionar o link principal da central. Esse é o link que você irá divulgar e que os clientes irão clicar. 

**Nota**: Esse será o link responsável por fazer a ligação com os demais atendentes.

![Geolocalizado 3](//images.ctfassets.net/alneenqid6w5/1VNj6ggD6sFyXtYDojXVKv/aacec6cba54332300bfc899de4c0fed5/Screenshot_2022-08-29_at_17-59-51_Geolocalizado.png)

O link whts.co/geolocalizado  sera o link principal. Nesse link está cadastrado o número de telefone da Matriz da Loja Teste que fica no Rio de Janeiro. 

 Até esse momento, quem clicar nesse link, irá falar somente com o atendente da Loja teste to Rio de Janeiro. 

 Mas vamos adicionar as outras filiais para dividir esse atendimento. 

Clique em _**“Avançar”**_.

![Geolocalizado  4](//images.ctfassets.net/alneenqid6w5/1KIRHBEqDhssJV76yEaszd/15f59999569923cc82a1dd06146190fb/Screenshot_2022-08-29_at_18-00-00_Geolocalizado.png)

Em Links Geolocalizados,selecione os vendedores ou números,  que irão participar da central. Clique em **_“Adicionar”_,** selecione o estado e a região e selecione o link para cada participante da central.

![Geolocalizado 5](//images.ctfassets.net/alneenqid6w5/5hq88ccviJz56OJpv9jJdi/1d32fa1d927326fe58fdcfd7cdbb0309/Screenshot_2022-08-29_at_18-00-04_Geolocalizado.png)

**IMPORTANTE:** No exemplo definimos por estados e não por cidades, mas você também pode definir somente por cidades.

Clique no botão _**“Finalizar”**_.

Você pode definir os horários de atendimento, para saber mais [**clique aqui**.](https://help.vtex.com/pt/tutorial/horario-de-atendimento-suiteshare--4T1kEGSCdiIorFkcMj6F8e)

Pronto! Seu link está 100% configurado. Todos clientes que clicarem nele e forem de Porto Alegre serão direcionados para uma conversa com o número de WhatsApp do link /lojapoa e quem for do Rio de Janeiro irá ser direcionado para o WhatsApp da filial /lojario. Como definimos apenas essas 2 cidades, quem não pertencer a nenhuma delas será direcionado para uma conversa com o número cadastrado no link principal /minhacentral (matriz).
