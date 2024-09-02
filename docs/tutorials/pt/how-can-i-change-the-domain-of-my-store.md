---
title: 'Mudar o domínio da loja'
id: frequentlyAskedQuestions_626
status: DRAFT
createdAt: 2019-01-24T20:45:57.032Z
updatedAt: 2022-11-09T22:15:52.205Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:02:37.712Z
contentType: tutorial
productTeam: Identity
author: authors_84
slug: o-que-preciso-fazer-para-mudar-o-dominio-da-minha-loja
locale: pt
legacySlug: o-que-preciso-fazer-para-mudar-o-dominio-da-minha-loja
subcategory: yMp6sKDiJEi66CGAIQ4ma
---

A mudança de domínio consiste na mudança do nome do site. Ou seja, se alguma loja VTEX, por exemplo, possui o domínio **_minhaloja.com_** e deseja mudar para **_nossaloja.com_**, deve seguir esse tutorial.

<div class="alert alert-warning"> Indicamos a NÃO exclusão de HOST previamente configurados, enquanto a nova configuração não estiver propagada (Tempo médio de propagação: 15 minutos ).</div>

A plataforma VTEX é preparada para suportar mudanças de domínios sem impactos negativos. Para isso, basta seguir o passo a passo abaixo:


### 1. Criar novas entradas HOST no License Manager
No License Manager, em Contas, será necessário incluir o novo domínio como HOST da loja. Nesse momento, o DNS do novo domínio ainda não deve estar apontado para a VTEX. 

Esta imagem exemplifica a inclusão de novos HOSTs que deve ser aplicada:
![Mudar Domínio](//images.ctfassets.net/alneenqid6w5/1AUt1cydWg2W04wc02EKKM/36c9a17ccee114cf38f48c5ba07973e7/626-pt.png)

### 2. Conferir configurações do novo Portal
Esse passo é fundamental para que o Checkout continue funcionando após a mudança. É necessário conferir se os Sites configurados estão relacionados a algum Accoount Name inexistente no License Manager. [Leia mais sobre configurações do portal aqui](/pt/faq/configurar-template-no-smartcheckout/).

### 3. Apontar DNS do novo domínio para a VTEX
Com os passos anteriores conferidos, basta apontar o DNS do novo domínio para a VTEX. [Leia mais sobre apontamento de DNS aqui](/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex/).
