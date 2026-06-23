---
title: 'Consultar o uso do Master Data no Admin VTEX'
createdAt: '2026-06-23T10:00:00.000Z'
updatedAt: '2026-06-23T10:00:00.000Z'
contentType: tutorial
productTeam: Master Data
slugEN: check-master-data-usage-in-vtex-admin
locale: pt
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

O dashboard **Master Data usage** no Admin VTEX ajuda você a acompanhar o volume de documentos armazenados em [entidades personalizadas](/pt/docs/tutorials/master-data#entidades-de-dados-personalizadas) do [Master Data](/pt/docs/tutorials/master-data). Essas entidades são criadas pela sua operação e não incluem as [entidades nativas do Master Data](/pt/docs/tutorials/master-data#entidades-nativas-do-master-data), usadas por funcionalidades padrão da plataforma.

Com esse dashboard, você pode consultar o total de documentos, verificar quando os dados foram atualizados pela última vez e analisar o volume por entidade antes de tomar decisões sobre armazenamento ou limpeza de dados.

> ℹ️ O uso de entidades personalizadas segue regras de cobrança mensal. Para entender como a VTEX mede o volume de documentos para faturamento, consulte a seção [Cobrança](/pt/docs/tutorials/master-data#cobranca) do artigo Master Data.

## Acessar o dashboard

Para abrir o dashboard **Master Data usage**, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Master Data usage**.
2. Na página **Master Data usage**, consulte as informações de uso descritas a seguir.

## Informações disponíveis no dashboard

No topo da página, os cards de resumo apresentam uma visão geral do uso:

* **Total number of documents**: total de documentos armazenados em entidades personalizadas da loja.
* **Last updated**: data da última atualização dos dados exibidos no dashboard. As informações são atualizadas semanalmente.

Na seção **Entities**, você encontra o detalhamento por entidade. A tabela lista apenas entidades personalizadas e exibe duas colunas:

| Coluna | Descrição |
| --- | --- |
| **Name** | Nome da entidade de dados. |
| **Number of documents** | Quantidade de documentos armazenados na entidade. |

As entidades são exibidas em ordem decrescente de volume de documentos, com as de maior quantidade no topo da lista. Use a paginação no canto superior direito da tabela para navegar entre as páginas quando houver muitas entidades.

## Saiba mais

* [Master Data](/pt/docs/tutorials/master-data)
* [Entidades de dados personalizadas e cobrança](/pt/docs/tutorials/master-data#entidades-de-dados-personalizadas)
