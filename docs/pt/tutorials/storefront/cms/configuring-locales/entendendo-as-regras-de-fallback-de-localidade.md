---
title: "Estratégias de fallback de localidade"
createdAt: 2026-03-27T17:08:52.219Z
updatedAt: 2026-04-01T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: understanding-locale-fallback-rules
locale: pt
order: 2
---

Ao [configurar localidades(locales)](https://help.vtex.com/pt/docs/tutorials/configurar-localidades), alguns tipos de conteúdo não precisam de localização. Por exemplo, você pode ter uma imagem de banner sem texto ou um nome de marca que permanece o mesmo em todos os idiomas. Estratégias de fallback ajudam a evitar a duplicação desnecessária desse tipo de conteúdo. Abaixo apresentamos duas abordagens comuns:  

| Caso de uso | Descrição |
| :---- | :---- |
| [Localidade padrão como fallback para outras localidades](#localidade-padrão-como-fallback-para-outras-localidades) | Use quando a maior parte do conteúdo é compartilhada e outras localidades apenas alteram partes específicas. |
| [Fallback do idioma principal com variações regionais](fallback-do-idioma-principal-com-variações-regionais) | Use ao gerenciar variações regionais herdadas de uma localidade base do idioma. |

## Localidade padrão como fallback para outras localidades

Nessa estratégia, todo o conteúdo principal é armazenado na localidade padrão (por exemplo, `Inglês - US`). Outras localidades herdam o conteúdo da localidade padrão e ajustam os campos apenas quando a localização for obrigatória. Isso significa que você só traduz ou modifica o conteúdo quando ele diverge do padrão. Essa abordagem é ideal quando:

* A maior parte do conteúdo é compartilhada entre os idiomas.  
* As diferenças de localização são mínimas.

No exemplo abaixo, temos duas localidades:

* `Inglês-US` (padrão)  
* `Português-BR`
  * Fallback: `Inglês-US`

Se uma descrição não estiver traduzida para o português, o sistema exibirá automaticamente o conteúdo em `Inglês-US`. Você localiza campos em `Português-BR` apenas quando o conteúdo precisa ser diferente (como texto promocional ou mensagem específica para a região).

## Fallback de idioma principal com variações regionais

Essa estratégia é útil para gerenciar vários idiomas e variações regionais. Você cria uma hierarquia em que as localidades regionais recorrem a uma localidade base do idioma como fallback. Esta abordagem é ideal quando:

* A loja suporta várias regiões com o mesmo idioma.
* Alguns idiomas têm uma estrutura base comum.
* Você precisa de uma lógica de fallback em camadas.

No exemplo abaixo, configuramos as seguintes localidades:  

* `Inglês-US` (padrão)
* `Inglês-UK`
  * Fallback: `Inglês-US`  
* `Espanhol-ES`
  * Fallback: `Inglês-US`  
* `Catalão-ES`
  * Fallback: `Espanhol-ES`  

`Inglês-UK` herda o conteúdo de `Inglês-US` e altera apenas diferenças regionais específicas (como "pants" por "trousers"). `Catalão-ES` herda de `Espanhol-ES` e substitui apenas o conteúdo em que o catalão é necessário.
