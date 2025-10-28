---
title: 'Corrigir vendas não atribuídas a vendedores no Indeva'
id: 6u9zdj61eYodgGiw2LuXfj
status: PUBLISHED
createdAt: 2025-09-17T17:40:52.198Z
updatedAt: 2025-10-17T11:45:03.238Z
publishedAt: 2025-10-17T11:45:03.238Z
firstPublishedAt: 2025-10-02T12:13:31.052Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: fix-unassigned-sales-to-sellers-indeva
legacySlug: corrigir-vendas-nao-atribuidas-a-vendedores-indeva
locale: pt
subcategoryId: 2TvvbKyvcItxWiM018erXt
---

# 

Este conteúdo orienta o que fazer quando as vendas de apenas um vendedor não aparecem ou quando as vendas estão sendo registradas, mas não atribuídas corretamente aos vendedores.

Esse problema pode ocorrer quando o vendedor foi cadastrado sem o **Código do PDV**.

O **Código do PDV** é o identificador que o sistema de vendas usa para cada vendedor. Ele pode ser:

- O CPF do vendedor.  
- Um número sequencial definido pelo sistema de vendas.  

Se não tiver certeza de onde localizar essa informação, consulte a documentação do seu sistema de vendas.

## Adicionar código do PDV

Siga as etapas abaixo para adicionar o código:

1. No menu, acesse **Cadastro > Vendedores**.  
2. Localize o vendedor que está sem o código informado.  
3. Clique em `Ações > Editar período na loja` e insira o código do PDV correspondente.

Abaixo está uma ilustração que demonstra o processo:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/atualiza%C3%A7%C3%A3o-de-vendas-com-pdv/erp/corrigir-vendas-nao-atribuidas-a-vendedores-indeva_1.gif)

> ❗ Enquanto o vendedor não estiver com o código informado corretamente, as vendas serão agrupadas na Indeva como **Outras Vendas**. Para corrigir registros anteriores, acesse **Validação** e refaça a validação dos dias impactados.

Para mais informações, consulte [Validar valores de PDV na plataforma Indeva](/pt/tutorial/validar-valores-de-pdv-na-plataforma-indeva--5GRLWlRabZKTm3Ina5PpI7).

