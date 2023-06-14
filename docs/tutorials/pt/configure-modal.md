---
title: 'Configurar modal para transportadoras'
id: 3jhLqxuPhuiq24UoykCcqy
status: CHANGED
createdAt: 2018-02-28T14:15:43.168Z
updatedAt: 2023-03-29T15:09:26.801Z
publishedAt: 2023-03-29T14:51:10.227Z
firstPublishedAt: 2018-02-28T18:37:55.622Z
contentType: tutorial
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: configurar-modal-para-transportadoras
locale: pt
legacySlug: configurar-modal-para-transportadoras
subcategory: 1UL6Q7nUN6SkA2g2SUsECi
---

A configuração é feita nas **Configurações de Envio** e **Catálogo**, nesta ordem. A ativação do modal nas Configurações e a associação na transportadora irão disponibilizar automaticamente, no cadastro do SKU, um campo para classificá-lo como um modal que deve ser atendido pela transportadora daquele tipo específico de produto.

A **Estratégia de envio** precisará estar estruturado para atender esse tipo específico de entrega. Isto é, a transportadora que atende o produto específico destar associada a uma doca, e esta, por sua vez, associada a um estoque.

### Exemplo

Imagine um loja em que a parte de laticínios demanda uma transportadora que possua sistema refrigerado para a entrega de produtos perecíveis. Por conta dessa característica, é preciso garantir que apenas esse tipo de transportadora faça a entrega desses produtos.

Primeiro devemos ativar a opção do modal refrigerado e associar a transportadora específica para esse tipo. É preciso selecionar em cada produto o mesmo modal, para fazer a conexão entre produto e logística.

## Como ativar o modal e associá-lo a uma transportadora

1. No Admin VTEX, acesse **Configurações da loja > Envio > Configurações**, ou digite *Envio* na barra de busca no topo da página e selecione *Configurações da loja / Envio*.      
2. Em **Permitir o uso dos seguintes modais nas transportadoras**, selecione os tipos de modais desejados.  
3. Clique no botão **Salvar**.  
4. Acesse **Envio > Estratégia de Envio** ou digite *Estratégia de envio* na barra de busca no topo da página.    
5. Selecione a __política de envio__ que deseja alterar.    
6. Na seção **Modais de entrega**, selecione um **Modal** para vincular a essa transportadora.    
7. Para finalizar, clique em **Salvar**.   

Agora que o modal já foi ativado e já está associado a uma política de envio, é necessário vincular o SKU ao modal. 

## Como vincular um SKU a um modal

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite *Produtos e SKUs* na barra de busca no topo da página.  
2. Selecione o SKU que deseja alterar.  
3. Na aba **Configurações Avançadas**, selecione um **Modal**.  
4. Clique em **Salvar**.  

