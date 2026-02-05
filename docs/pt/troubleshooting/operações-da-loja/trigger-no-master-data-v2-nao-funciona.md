---
title: 'Trigger no Master Data v2 não funciona'
id: 1WvpFuZUQmPrBlrlwX47Qd
status: PUBLISHED
createdAt: 2024-12-10T13:34:36.370Z
updatedAt: 2024-12-10T13:38:54.049Z
publishedAt: 2024-12-10T13:38:54.049Z
firstPublishedAt: 2024-12-10T13:38:54.049Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: trigger-in-master-data-v2-is-not-working
legacySlug: trigger-no-master-data-v2-nao-funciona
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Master Data v2
  - Trigger
---

Ao criar uma trigger para notificar mudanças em uma entidade de dados no Master Data v2, alguns usuários podem perceber que nenhuma requisição chega ao endpoint configurado, mesmo após a configuração da trigger.

Esse problema pode ocorrer devido a uma configuração incorreta da trigger ou a questões relacionadas a permissões e autenticação. Confira a seguir o passo a passo para identificar e corrigir a situação.

## Solução

Para resolver esse problema, há algumas soluções que você pode considerar:

* [Verifique a configuração da trigger](#verifique-a-configuracao-da-trigger): revise se a estrutura da trigger está correta, incluindo os campos obrigatórios.  
* [Teste o endpoint de forma independente](#teste-o-endpoint-de-forma-indepentente): verifique se o endpoint está funcionando corretamente.  
* [Verifique as permissões e a autenticação](#verifique-as-permissoes-e-autenticacao): certifique-se de que as permissões estão configuradas corretamente.

### Verifique a configuração da trigger

Siga as instruções do guia [Setting up triggers in Master Data v2](https://developers.vtex.com/docs/guides/setting-up-triggers-in-master-data-v2#trigger-example) para revisar a configuração da trigger. Observe os detalhes listados a seguir para evitar erros:

* Certifique-se de que a estrutura da trigger em `v-triggers` está correta, incluindo os campos obrigatórios `name`, `active`, `action`, `type`, `uri`, `method`, `headers`, e `body`.  
* Se a trigger fizer uma requisição para uma API externa, verifique se a URL do endpoint (`uri`) está correta e acessível. Tente acessar a URL diretamente para garantir que ela está disponível e pronta para receber requisições POST.  
* Verifique a sintaxe JSON no corpo da trigger. Erros simples de sintaxe podem causar falhas silenciosas na execução da trigger.  
* Se a trigger estiver associada a uma entidade ou operação específica, verifique se essas condições estão sendo cumpridas.  
* Verifique se a entidade de dados existe e está corretamente configurada no Master Data v2. As entidades de dados das duas versões são independentes, ou seja, um documento criado em uma entidade no Master Data v1 não pode ser consultado ou editado usando recursos do Master Data v2 e vice-versa.  

  Para conseguir testar triggers com entidades do Master Data v1, você precisa seguir o [passo a passo para configurar triggers no Master Data v1](/pt/docs/tutorials/criando-trigger-no-master-data).

### Teste o endpoint de forma independente

Tente enviar uma requisição manualmente para o endpoint utilizando uma ferramenta como o **Postman**. Isso ajudará a garantir que o endpoint esteja recebendo as requisições corretamente e funcionando como esperado.

* Ao fazer uma alteração manual na entidade de dados, verifique se a alteração dispara a trigger conforme o esperado.  
* Certifique-se de que o campo `id` esteja sendo corretamente passado no body da requisição. Isso é necessário para identificar o documento que gerou a trigger.

### Verifique as permissões e a autenticação

* Certifique-se de que suas [credenciais](/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet) têm as [permissões](/pt/docs/tutorials/perfis-de-acesso) corretas para enviar requisições ao endpoint especificado.  
* Se a trigger fizer uma requisição para um endpoint externo, verifique se não há necessidade de autenticação extra ou headers de segurança que precisam ser configurados para o endpoint de destino.

Se as soluções acima não resolverem o problema, entre em contato com o [Suporte](/pt/faq/como-funciona-o-suporte-da-vtex--3kACEfni4m8Yxa1vnf2ebe).
