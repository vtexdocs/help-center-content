---
title: Configurar um conector de pagamentos
id: 7pAEMAo4iqNHwYOarZ3zgm
status: PUBLISHED
createdAt: 2019-11-12T17:29:10.501Z
updatedAt: 2023-03-21T20:10:49.512Z
publishedAt: 2023-03-21T20:10:49.512Z
firstPublishedAt: 2019-11-24T21:05:50.533Z
contentType: trackArticle
productTeam: Financial
slug: configurar-um-conector-de-pagamentos
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugPT: pagamentos
---

O módulo de  **Pagamentos**  permite a configuração de uma série de **conectores**, que  são protocolos de comunicação que sua loja precisa usar para habilitar a transmissão de dados entre ela e adquirentes, subadquirentes ou gateways. 

Por exemplo, para que seu web site ofereça um determinado meio de pagamento aos seus clientes, você precisa ativar o **conector** que vai se comunicar com o gateway responsável pelo processamento.

Outra característica importante é a paridade de conexões. Assim como um meio de pagamento pode se comunicar com vários conectores, um conector pode estabelecer comunicação com vários meios de pagamento. Por conta dessa possibilidade, é necessário que você configure o conector, por meio das **afiliações de gateway**.

Uma **afiliações de gateway** é um conjunto de configurações que representa seu contrato com um gateway de pagamento de sua escolha. 

Além dos gateways de pagamento, outras afiliações incluem promissórias, adquirentes, e subadquirentes, por exemplo. Com isso é possível decidir por qual gateway de pagamento serão processados os diferentes tipos de transações da sua loja VTEX.

O módulo de pagamentos da VTEX dá suporte diversas afiliações com um ou mais Gateways de Pagamento de sua escolha, para processar diferentes formas de pagamento.

Há duas formas para começar a aceitar pagamentos com cartão de crédito: 
- Afiliar-se a um gateway de pagamento pelo Admin; 
- Usar as [integrações da VTEX](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-guide) a meios de pagamento.

## Como cadastrar afiliações de gateway pelo Admin
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Clique na opção  **Afiliações de Gateway**.   
3. Clique no botão de  **+**  para adicionar uma nova afiliação.   
4. Escolha qual é o seu Gateway de Pagamento.   
5. Dê um nome à sua afiliação.
6. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão **Instalar app** e siga as instruções de instalação. Esta mensagem é exibida somente para alguns tipos de afiliações de gateway.   
7. Preencha os campos disponíveis com os dados do contrato enviados pelo Gateway escolhido.   
8. Clique no botão  **Salvar**.   

Esse conector deve estar associado a uma condição de pagamento. Para mais informações e exemplos de como receber pagamentos parcelados ou à vista com diferentes afiliações, veja o artigo sobre  [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

Se deseja conferir o passo-a-passo de um conector específico, acesse nossos artigos de [Tutoriais e Soluções](https://help.vtex.com/pt/tutorial/--531cHtUCUi3puRXNDmKziw "Tutoriais e Soluções"), e busque pela palavra-chave desejada. 
