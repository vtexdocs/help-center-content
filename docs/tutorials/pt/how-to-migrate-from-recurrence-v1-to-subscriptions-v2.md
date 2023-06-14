---
title: 'Como migrar da Recorrência para o módulo Assinaturas '
id: 3nJ4pbsRHEyKmvoN0foYRi
status: DRAFT
createdAt: 2020-02-19T20:12:20.544Z
updatedAt: 2021-04-20T19:49:22.182Z
publishedAt: 
firstPublishedAt: 2020-03-02T01:17:13.783Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: como-migrar-da-recorrencia-v1-para-assinaturas-v2
locale: pt
legacySlug: como-migrar-da-recorrencia-v1-para-assinaturas-v2
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

O **Sistema de Assinaturas** é uma app desenvolvida pela VTEX para facilitar as vendas recorrentes, substituindo o módulo de *Recorrência*. Funciona como um agendador automático, executando uma recompra na frequência solicitada pelo cliente da loja. Seu cliente indica a periodicidade que deseja repetir a compra de um determinado SKU, e o sistema refaz o pedido de compra de forma recorrente. Essa compra é feita  automaticamente, a cada período agendado, com as mesmas características configuradas no pedido original. A assinatura é uma forma simples de poupar o tempo de seu cliente, trazendo mais um fluxo programado de vendas para a sua loja. 


Sua loja pode se encaixar em um dos três cenários dentro do processo de migração para o módulo de Assinaturas:

**1. Tem a Recorrência instalada, mas não é utilizada.**
Ou seja, não possui clientes ativos usando a recorrência de fato. Nesse caso, o recomendado é que você siga o processo de [configuração do módulo de Assinatura](https://help.vtex.com/pt/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj#3-meios-de-pagamento-que-transacionam-pedidos-de-assinatura) normalmente. Nenhum dado deverá ser migrado.   


**2. Tem a Recorrência instalada, com clientes ativos.** 
Nesse caso, siga o passo a passo abaixo.  

**3. Não possui o módulo de Recorrência instalado.** 
 Nesse caso, **não** recomendamos instalar o módulo de Recorrência. Você deverá [configurar o módulo de Assinaturas v2](https://help.vtex.com/pt/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj) diretamente.      





## Fluxo para a instalação e migração do módulo Assinaturas


 1. Configure o [módulo de Assinaturas](https://help.vtex.com/pt/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj) na sua loja.   

 2. Valide as [customizações do front-end](https://help.vtex.com/pt/subcategory/configuracoes-de-cms--6kovkwzMRyeOOc2iEC4suM) da sua loja.  

 > *É possível customizar o fluxo de compra e My Account.*  

 3. Customize os **e-mails transacionais** para o módulo Assinaturas.  

 > *Confira o passo a passo completo para essa etapa [aqui.](https://help.vtex.com/pt/tutorial/e-mails-transacionais-para-pedidos-de-assinatura--2NYHqHMRqZ43Cn6s84ZCB5)*  

 4. Valide as **integrações da sua loja vinculadas à Assinaturas.**  

 > *Integrações podem envolver o ERP e CRM de sua loja, entre outros serviços e plataformas. Confira a nossa documentação de APIs [aqui](https://developers.vtex.com/reference/subscriptions-api-v2-overview).*  

 5. Valide as **Transações e meios de pagamento.**  

 > *Confira mais informações para essa etapa [aqui.](https://help.vtex.com/pt/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj#3-meios-de-pagamento-que-transacionam-pedidos-de-assinatura)*  

 6. Associe os **anexos de SKU** criados no passo 1, aos SKUs desejados. 

 7. **Teste o fluxo completo.**  

 > *Faça uma compra teste seguindo o seguinte fluxo*:  
 *a) Compra de qualquer SKU através de usuário teste.    
b) Cheque se a transação inicial foi aprovada, ou se houve erro de pagamento.  
c) Cheque o funcionamento do pós-venda (configurações de logística, e-mails do message center, funcionamento do OMS e módulo de Assinaturas).    
d) Crie a Assinatura (Passos de 1 a 6).     
e) Realize uma nova compra, dessa vez adicionando a Assinatura para aquele SKU.     
f) Valide a nova transação.*   

 8. Solicite a **migração dos dados** de suas assinaturas.  

> *Solicite à [VTEX através de ticket](https://support.vtex.com/hc/pt-br) a migração dos dados dos pedidos de assinatura já realizados na Recorrência, para o módulo de Assinatura. A VTEX será responsável pela migração correta de dados.*   


### Acompanhamento VTEX

Após a realização dos passos acima, a VTEX também oferece os seguintes benefícios:  

- **Treinamento com o time da sua loja**: reunião de migração para treinamento sobre a nova interface do Admin. 

- **Acompanhamento da operação**: acompanhamento próximo antes, durante e depois do lançamento, por parte de seu VTEX Account Manager e Experts VTEX.  





