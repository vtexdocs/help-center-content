---
title: 'Master Data v1: deprecação de configurações dinâmicas'
id: 4a1FZX8wGeHLcOyMg0egg8
status: PUBLISHED
createdAt: 2024-04-17T12:34:11.024Z
updatedAt: 2024-04-17T12:48:51.570Z
publishedAt: 2024-04-17T12:48:51.570Z
contentType: updates
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2024-04-17-master-data-v1-dynamic-settings-deprecation
locale: pt
legacySlug: master-data-v1-deprecacao-de-configuracoes-dinamicas
announcementImageID: ''
announcementSynopsisPT: 'O Campo calculado e a ação de trigger “Alterar valor do campo” serão descontinuados do Master Data v1.'
---

No dia 17 de junho de 2024, vamos desabilitar as seguintes configurações no Master Data v1: **Campo calculado** e ação de ativação (trigger) **Alterar valor do campo**.

Essas opções permitiam alterar valores de documentos no [Master Data](https://help.vtex.com/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) de forma dinâmica, executando código a partir de um trigger ou da atualização/criação de um documento.

Para substituir essas configurações, caso seja necessário atualizar valores de campos de forma dinâmica, recomendamos [criar um app para se comunicar com o Master Data](https://developers.vtex.com/docs/guides/create-master-data-crud-app).

## O que mudou?

Ambas as configurações dinâmicas serão desativadas no Master Data v1.

Note que **Campos calculados** e triggers já existentes que utilizam a função **Alterar valor do campo** deixarão de funcionar na mesma data. Veja a seção [O que precisa ser feito?](#o-que-precisa-ser-feito) para mais informações sobre como se adequar a essas mudanças.

### Campo calculado

O **Campo calculado** era uma configuração dentro dos campos de [entidade de dados](https://help.vtex.com/pt/tutorial/entidade-de-dados--tutorials_1265) que permitia a execução de código C# para recalcular o valor do campo sempre que um novo documento fosse inserido ou atualizado.

Esse tipo de campo, ilustrado abaixo, não estará mais disponível a partir de 17 de junho de 2024. Os campos calculados criados previamente deixarão de funcionar na mesma data.

![md-deprecation-calculated-field-pt](https://images.ctfassets.net/alneenqid6w5/13NWpWtxQGLFfh0ecW4ZV6/e25fa67f6207592c2893b3f86132c057/md-deprecation-calculated-field-pt.png)

### Alterar valor do campo

Ao configurar ações de triggers na aba **Ativação**, havia a opção de **Alterar valor do campo**, que permitia adicionar código C# para modificar o valor de campos selecionados a cada execução do trigger.

A opção **Alterar valor do campo**, ilustrada abaixo, não estará mais disponível ao configurar ações de triggers a partir de 17 de junho de 2024. Os triggers criados anteriormente com essa ação continuarão funcionando somente até essa data.

![md-deprecation-trigger-pt](//images.ctfassets.net/alneenqid6w5/2meuBC8t6dnVAfg1YzZnwL/267ad58ad21c7ba83b7182d3bc4c581b/md-deprecation-trigger-pt.png)

## O que precisa ser feito?

Se você precisar atualizar os valores de campo do Master Data com base em um trigger, recomendamos que contate o seu time de desenvolvimento para seguir as orientações abaixo:

* Desenvolva um app no VTEX IO que se comunique com o Master Data, seguindo as orientações do guia para desenvolvedores [Creating a Master Data CRUD app](https://developers.vtex.com/docs/guides/create-master-data-crud-app).
* Configure um trigger que envie uma requisição HTTP para o app, seguindo as instruções disponíveis em [Criar trigger no Master Data v1](https://help.vtex.com/pt/tutorial/criando-trigger-no-master-data--tutorials_1270#envie-requisicao-http).

Se você utiliza o **Campo calculado** ou um trigger com a ação **Alterar valor do campo**, siga o procedimento acima antes de 17 de junho de 2024 para que os valores continuem sendo atualizados de forma dinâmica mesmo após a deprecação dessas configurações no Master Data v1.
