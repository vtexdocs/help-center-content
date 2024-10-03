---
title: 'Banner que não respeita a especificidade do nível de busca nas páginas de busca'
id: 4FnLaP0Ftm4TJZaTBnLHXQ
status: PUBLISHED
createdAt: 2022-10-11T14:56:22.264Z
updatedAt: 2022-11-25T21:57:33.961Z
publishedAt: 2022-11-25T21:57:33.961Z
firstPublishedAt: 2022-10-11T14:56:22.795Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: banner-not-respecting-the-specificity-of-the-search-level-in-search-pages
locale: pt
kiStatus: Backlog
internalReference: 566809
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Se tivermos um banner para um departamento e outro para uma categoria dentro desse departamento, a consulta do banner não respeitará a especificidade da árvore de categorias, sempre teremos o primeiro do API

https://github.com/vtex-apps/search/blob/26307cb3e2466a385a6c90565e076600d637509b/react/components/Banner/index.tsx#L75-L79

Isto é aplicado a toda a árvore de categoria ou níveis de especificação



## Simulação




- Ir para: /admin/ procura/banners/
- Criar um banner para um departamento (deve ser criado primeiro)
- Criar um banner para uma categoria dentro deste departamento
- Ir para a página da categoria (site do cliente)
- Combinará ambos e devolverá o primeiro a ser mostrado



## Workaround


Criar primeiro banners para os mais específicos e depois para os mais genéricos. Exemplo: Criar primeiro banners para as subcategorias, depois para as categorias e, em seguida, para o departamento

OU

Crie todos os banners que quiser usar e, em seguida, desative e ative os banners mais genéricos seguindo a regra que eu compartilhei anteriormente.
Exemplo: Desativar e ativar Subcategorias, depois Categorias, e depois Departamentos

 garantirá que os banners mais genéricos serão exibidos como os últimos na resposta API

https://search.biggylabs.com.br/search-api/v1/AccountName/api/split/banner_search/category-1/yourDepartment/category-2/yourCategory

