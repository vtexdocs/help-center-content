---
title: Nova API do Master Data aumenta flexibilidade de configuração
id: 46r2SSSWz6QQWyYwGyGwme
status: PUBLISHED
createdAt: 2017-12-22T14:29:00.901Z
updatedAt: 2020-02-20T18:38:20.999Z
publishedAt: 2020-02-20T18:38:20.999Z
contentType: updates
productTeam: Master Data
author: authors_24
slug: nova-api-do-master-data-aumenta-flexibilidade-de-configuracao
legacySlug: nova-api-do-master-data-aumenta-flexibilidade-de-configuracao
announcementImageID: 
announcementSynopsisPT: Nova versão traz recursos que permitem mais flexibilidade de configuração das estruturas armazenadas no Master Data
---

Foi lançada a versão 2.0 da API do Master Data - o repositório de dados dinâmico, flexível e escalável da VTEX.

Essa nova versão traz recursos que permitem mais flexibilidade de configuração das estruturas armazenadas no Master Data: entidades, triggers e índices.

E ela é retrocompatível com a versão anterior. Ou seja, não há nenhuma quebra de compatibilidade com a versão 1.

Veja alguns dos recursos que a versão 2.0 da API do Master Data traz:
- Agora é possível salvar JSONs complexos.
- A loja pode automatizar o processo de replicação das estruturas no setup de seus produtos que usam Master Data via API (ex.: agências que vendem Fale Conosco e Wish List).
- Os nomes das entidades podem ter mais do que 2 caracteres.
- Não é mais necessária uma fase de setup para começar a usar a API. Basta chamá-la para que a configuração seja feita automaticamente.
- Filtros agora suportam objetos e arrays de objetos (até o segundo nível).
- O cache default agora pode ser desabilitado.

Além disso, a API passa a suportar validações complexas usando JSON Schema. Para cada entidade, podem haver até 10 validações, com as seguintes características:
- Validação por intervalo (ex: idade entre 18 e 25).
- Validação de objetos e arrays de objetos.
- String pode ser uma regex.
- Tamanho da string pode ser configurado como o lojista desejar.

Veja a documentação dos novos recursos no [artigo do VTEX Help](/pt/tutorial/master-data-v2).

