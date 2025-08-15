---
title: 'Por que os preços dos produtos da minha loja não foram enviados ao marketplace?'
id: 7LMjXNoYJXsgPyKFkk6I25
status: PUBLISHED
createdAt: 2024-09-13T18:09:21.855Z
updatedAt: 2024-11-08T18:33:24.038Z
publishedAt: 2024-11-08T18:33:24.038Z
firstPublishedAt: 2024-09-13T18:21:24.321Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: why-havent-my-product-prices-been-sent-to-the-marketplace
legacySlug: precos-dos-produtos-nao-foram-enviados-ao-marketplace
locale: pt
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
tags:
  - Marketplace
  - Integração
  - Preços
---

O preço de um produto é enviado para o marketplace após dois processos: a [configuração de preços na loja do seller](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) e a catalogação de produtos. Se um desses processos citados não for executado, o preço do produto do seller não será disponibilizado no marketplace.  

## Solução

Para resolver o problema primeiro é necessário identificar qual dos processos apresenta erro e aplicar a correção necessária. 

### Configuração do módulo de Preços

A [configuração do módulo de Preços](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) é o local onde o seller cria, edita e armazena os dados de preços dos SKUs vendidos em sua loja.  

As mensagens de erro de integração estão disponíveis no menu de Preços do Admin, para acessar vá em **Marketplace > Conexões > Preços.**

Veja na tabela abaixo quais são as possíveis mensagens de erro referente à configuração dos preços e qual a ação necessária para corrigi-lo.

|**Mensagem de erro**|**Significado**|**Ação requerida**|
|:--:|:--:|:--:|
|Sale price cannot be updated to 29,99. Can not offer more then 70% off.|O seller não pode oferecer mais de 70% de oferta sobre o [preço-base](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) de um produto.| Alterar o preço da oferta para um valor que esteja dentro da porcentagem exigida pelo marketplace.|
|Verifique se este SKU possui preço cadastrado para esta política ou se o preço não expirou.|O preço do SKU não foi cadastrado na [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) utilizada na integração com o marketplace ou expirou.| Cadastrar preço para o SKU na política comercial utilizada para integrar a loja ao marketplace.|

### Catalogação dos produtos

A catalogação dos produtos é o processo de ajustar cada produto enviado pelo seller com as categorias e marcas do marketplace. Esse processo é manual e realizado exclusivamente pelo marketplace.
Para saber se seu produto está passando por este processo, entre em contato com o marketplace.  

Caso os produtos já estejam catalogados, é necessário reprocessar o envio dos preços dos produtos seguindo os passos a seguir:  

1. No Admin VTEX, clique em **Marketplace > Conexões > Preços**.  
2. Clique no produto com status **Processado com erro**.  
3. Clique no botão `Ações`.  
4. Clique em **Reprocessar**.  

Repita o processo para cada produto com o status **Processado com erro**. Caso o erro persista, entre em contato com o time de [suporte VTEX](https://help.vtex.com/pt/support).

