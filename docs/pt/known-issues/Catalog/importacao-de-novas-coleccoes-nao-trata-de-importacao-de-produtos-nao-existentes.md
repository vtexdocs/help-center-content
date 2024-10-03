---
title: 'Importação de Novas Colecções não trata de Importação de Produtos não Existentes'
id: 2bqGzlvbYqn7hVVfVbJZDO
status: PUBLISHED
createdAt: 2022-06-28T16:56:12.572Z
updatedAt: 2022-11-25T21:44:41.047Z
publishedAt: 2022-11-25T21:44:41.047Z
firstPublishedAt: 2022-06-28T16:56:12.844Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: new-collections-import-does-not-handle-non-existent-productid-import
locale: pt
kiStatus: Backlog
internalReference: 398602
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Atualmente, na administração da nova coleção, quando o usuário tenta importar uma folha de produto com um único ID de produto que não existe no catálogo da conta, o processo falha como um todo sem indicar qual linha/produto falhou ou mesmo responder com uma mensagem assertiva da causa de origem do problema na tentativa de importação.



## Simulação


1) Vá para uma conta /admin/collections/{id}/ e clique no botão de importação.

2) Escolha o formato .XLS e tente importar uma única linha de um ID de produto que atualmente não está presente no catálogo do usuário .

3) Uma mensagem de erro não específica será enviada ao usuário, algo como: "Erro". Seu arquivo não foi importado. Tente importar este arquivo novamente".

Este processo deve indicar onde a falha ocorreu e/ou processar as outras linhas e não interromper toda a tentativa.

(Ex: Se eu tentar importar 1000 linhas e apenas 1 linha estiver com defeito (não existe) eu não poderei importar nada e sem mesmo saber o motivo).



## Workaround


Opção A) Verificar, grosso modo, se todos os IDs do produto na folha realmente existem.
Opção B) Utilize o módulo de coleções legadas
Opção C) Utilize a inserção API

