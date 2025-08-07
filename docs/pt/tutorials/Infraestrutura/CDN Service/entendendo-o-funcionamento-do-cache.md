---
title: 'Como funciona o cache'
id: tutorials_258
status: PUBLISHED
createdAt: 2017-04-27T22:11:32.790Z
updatedAt: 2021-12-03T20:51:39.557Z
publishedAt: 2021-12-03T20:51:39.557Z
firstPublishedAt: 2017-04-27T23:03:11.364Z
contentType: tutorial
productTeam: Identity
author: authors_3
slugEN: understanding-how-the-cache-works
legacySlug: entendendo-o-funcionamento-do-cache
locale: pt
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

O conceito de cache é bastante difundido como sendo um dispositivo de acesso rápido. Na VTEX não é diferente. Também aqui o cache é utilizado como um recurso que aumenta a performance do carregamento de páginas e arquivos.

Como ele faz isso?

Quando uma página ou arquivo inicia seu carregamento, por meio da URL, o browser realiza uma solicitação para o servidor que, por sua vez, tem a função de responder com informações relevantes para aquela solicitação. 

A solicitação do browser é conhecida como **request**, e a resposta do servidor chama-se **response**. Esses termos serão bastante utilizados neste artigo. 

Veja o esquema abaixo:

![Como o cache funciona - comunicação entre servidor e browser](//images.ctfassets.net/alneenqid6w5/6ONSKQqdEoIsHxcvfp5GoS/51e191e174947c589ad4de6d4d56e474/1_PT.png)

O cache é representado através de uma camada entre o browser e o servidor. Assim, quando um **request** acontece, em vez de o sistema ir buscar as informações diretamente no servidor, primeiramente ele vai até essa camada, o que torna a resposta muito mais ágil. Veja o esquema abaixo:

![Como o cache funciona - comunicação com cache (sem expirar)](//images.ctfassets.net/alneenqid6w5/15ss3biutJhXX2WkG9k8xG/bb35e006ee78f624c403a0d81aefb65a/2_PT.png)

No entanto, como o dado atualizado está no servidor, de tempos em tempos o cache precisa ser atualizado. Esse tempo varia de acordo com o tipo de **request**, ou seja, se o **request** for uma página, o tempo é um, se for um arquivo javascript ou CSS é outro e, ainda, se for uma imagem, outro.

Um site possui inúmeras páginas: Home, páginas de departamento e categoria, de marca, busca, produto etc. Dependendo da árvore de categoria e do mix de produtos, o site pode alcançar mais de 10 mil páginas. 

Cada uma dessas páginas é carregada através de uma URL, ou seja, se um site possui 10 mil páginas, ele também possuirá 10 mil URLs diferentes. 

A camada de cache guarda uma versão para cada uma dessas páginas (URLs), ou seja, no momento que um usuário clica em algum produto em qualquer vitrine do site, a página daquele produto começa a ser carregada com as informações cacheadas daquela URL de produto. 

O mesmo acontece com as demais páginas do site. O mais importante, aqui, é entender que o cache é armazenado baseado, sempre, em URLs.

Se pudéssemos olhar a camada de cache como um banco de dados (ou uma planilha excel), de modo geral, veríamos uma tabela com duas colunas: URL e conteúdo. 

A coluna “URL” representando o nome do **request** cacheado (página ou arquivo) e a coluna “conteúdo” representando o código html ou binário (em caso de arquivos) daquele **request**.

Dessa forma, quando um **request** acontece, o sistema busca nessa grande tabela, a partir da “URL”, pelo “conteúdo”, o retornando para o browser.

Como já mencionado, o tempo de duração do cache varia para cada tipo de **request**. Segue tabela com o tempo de cache para cada tipo de **request**:

| **Request**                    | Formato (Identificador MIME) | Duração     |
|-------------------------------|------------------------------|----------------------|
| Página/Documento              | text/html                    | No máximo 30 minutos |
| Imagem (jpeg, gif, png, ico)  | image/*                      | No máximo 1 hora     |
| Javascript                    | text/javascript              | No máximo 1 hora     |
| CSS                           | text/css                     | No máximo 1 hora     |

Quando o cache de um **request** (página ou arquivo) expira, ao realizar uma nova solicitação, ou seja, ao carregar novamente a URL, o sistema vai até o servidor, resgata as informações atualizadas para aquela solicitação e atualiza o conteúdo daquela URL no cache. 

Depois de atualizada, a versão cacheada volta a ser retornada para novas solicitações da URL. Veja o esquema ilustrando esse caso:

![Como o cache funciona - comunicação com cache (expirado)](//images.ctfassets.net/alneenqid6w5/e5oS6cve6yw1tS81PYkBK/369d7e767ed2f09583955cea2d432a36/3_PT.png)

Nesse aspecto, podemos separar as respostas em dois grupos: Cacheadas e não cacheadas.

- __Respostas cacheadas__: São respostas retornadas pela camada de cache, mais performáticas.
- __Respostas não cacheadas__: São respostas que normalmente estão expiradas na camada de cache e, por isso, são retornadas pelo servidor, normalmente mais lentas.

Na prática, para identificar se uma resposta foi cacheada ou não, acesse a ferramenta de desenvolvedor do browser e localize **requests** nativos da plataforma VTEX. 

Ao clicar no request, o primeiro ao recarregar a página, localize, entre os headers, a propriedade “X-VTEX-Cache-Status-Janus-Edge”. Se o valor estiver preenchido com `HIT`, significa que o conteúdo exibido é um conteúdo cacheado, ou seja, foi retornado pela camada de cache. 

Se o valor for `MISS`, significa que o conteúdo exibido não é um conteúdo cacheado e foi retornado diretamente do servidor. Mais uma informação relevante que pode ser identificada nos headers dos **requests** é a data em que o cache foi criado. Essa informação está disponível na propriedade `X-vtex-processed-at`.

[]![](https://images.contentful.com/alneenqid6w5/5GPSsb4UWA28QS4soyguSI/8772946997cc979ddf9c2297f2ca8bb6/cache.png)

Apesar de arquivos JavaScript e CSS também terem a duração de cache estabelecida, como esses tipos de arquivo são utilizados na formatação dos layouts e, por isso, em alguns casos, precisam ter sua atualização mais ágil, o portal possui uma inteligência que identifica alterações em seus conteúdos, rompendo com a camada de cache. 

Em linhas gerais, se algum arquivo javascript ou CSS for alterado no Gerenciador de Portal (/admin/a/), o mesmo será atualizado assim que o cache da página que o chama for expirado. No entanto, para isso funcionar, sua chamada no template, não pode possuir qualquer querystring, ou seja, ela dever ser limpa, sem parâmetros.

- Mudança de preço pode demorar até 30 minutos.
- Mudança de dado do catálogo (produto, SKU, categoria, marca etc.) pode demorar até 2 horas.
- Mudança de layout pode demorar até 40 minutos.

Apesar de parecer complexa, a camada de cache é simples e traz grandes benefícios para a performance da loja como um todo.
