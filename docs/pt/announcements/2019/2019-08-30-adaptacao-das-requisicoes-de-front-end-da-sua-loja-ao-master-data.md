---
title: 'Adaptação das requisições de front-end da sua loja ao Master Data'
id: 5h9BKOee5usqOt9rbGKbdO
status: PUBLISHED
createdAt: 2019-08-30T17:26:33.530Z
updatedAt: 2020-04-02T16:47:26.778Z
publishedAt: 2020-04-02T16:47:26.778Z
contentType: updates
productTeam: Master Data
author: authors_31
slugEN: 2019-08-30-adapting-your-stores-front-end-requisites-to-master-data
locale: pt
legacySlug: adaptacao-das-requisicoes-de-front-end-da-sua-loja-ao-master-data
announcementImageID: 'undefined'
announcementSynopsisPT: 'A VTEX descontinuará o suporte ao CORS do Master Data.'
---

Com o principal objetivo de fornecer uma experiência cada vez mais eficiente para você e seus clientes, **a VTEX descontinuará o suporte ao CORS do Master Data.** Siga as instruções deste artigo e evite qualquer falha na operação e na navegação da sua loja.

> ⚠️ A descontinuação estava agendada para setembro de 2019, anteriormente. Porém, em alinhamento com a parceria que temos com nossos clientes e garantindo o mínimo de atrito em suas operações, prorrogamos a data da descontinuação deste recurso para o dia 07 de outubro de 2019.


### O que é CORS?
O CORS (Cross-Origin Resource Sharing) é um mecanismo de proteção dos navegadores quando precisam acessar informações em um domínio diferente do qual o usuário está navegando. Imagine um usuário acessando o domínio "vtex.com". Se há algum recurso de *javascript* que precisa consultar uma informação em outro domínio, por exemplo "vtexday.com", o navegador realizará um processo de validação para saber se o domínio "vtexday.com" permite consultas a partir do domínio "vtex.com". O processo em si é basicamente uma requisição extra na mesma API configurada no *javascript*, porém, através do método OPTIONS. 

Clique [aqui](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS) para saber mais sobre CORS.

### Por que estamos descontinuando o suporte ao CORS?

Temos dois objetivos com essa mudança:

- Remover uma chamada extra desnecessária, tornando o uso do serviço mais eficiente e melhorando a experiência do cliente final durante a navegação no site.

- Como o método OPTIONS não é cacheado pela CDN, atualmente sua loja pode sofrer interrupções do serviço por excesso de uso (throttling). Queremos evitar esse comportamento inesperado.

### O que precisa ser feito para se adaptar?
Para se adequar a essa definição, o desenvolvedor responsável pelo front-end da sua loja precisa modificar as requisições javascript que são feitas ao Master Data, garantindo a chamada sempre através do caminho relativo, ou seja, pelo domínio do próprio site.

Com o exemplo abaixo, ilustramos uma forma **inadequada** de realizar a requisição ao Master Data (exemplo em jQuery):

```$.getJSON("https://api.vtex.com/{account}/dataentities/CL/search?_where=(email=test@test.com)");```

Note que neste exemplo, a requisição está sendo realizada através de um caminho absoluto, ou seja, a URL da chamada contém o protocolo (https) e o domínio (api.vtex.com). Esse formato deixará de funcionar a partir da data mencionada neste e-mail.

Abaixo, também com um exemplo ilustrativo, demonstramos a forma **correta** de realizar a mesma requisição:

```$.getJSON("/api/dataentities/CL/search?_where=(email=test@test.com)");```

Note, neste último exemplo, que o protocolo e o domínio da chamada não estão presentes. Dessa forma, o browser não fará uso do CORS e realizará a requisição através do protocolo e domínio do próprio site, seguindo o formato correto. Note também que o diretório "/api" foi adicionado ao endpoint.

### Quais impactos a loja poderá sofrer se não houver adequação?

A loja poderá ser impactada de diversas formas caso não ocorra a adequação. Pode ocorrer desde um mal funcionamento de recursos simples, até interrupção nas vendas. Ou seja, o impacto estará proporcionalmente relacionado à dependência que o fluxo de compra tem dessas requisições ao Master Data.

Compartilhe este artigo com o desenvolvedor responsável pelo front-end da sua loja. Para acessar informações exclusivas da sua loja a respeito deste assunto, entre em contato com nosso suporte. Estamos prontos para apoiar vocês nesta adaptação.


