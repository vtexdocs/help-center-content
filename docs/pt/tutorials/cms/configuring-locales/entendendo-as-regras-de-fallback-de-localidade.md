---
title: "Entendendo as regras de fallback de localidade"
createdAt: 2026-03-27T17:08:52.219Z
updatedAt: 2026-04-01T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: understanding-locale-fallback-rules
locale: pt
order: 2
---

Ao [configurar localidades](/pt/docs/tutorials/configuring-locales), alguns tipos de conteúdo não precisam de localização. Por exemplo, você pode ter uma imagem de banner sem texto ou um nome de marca que permanece o mesmo em todos os idiomas. As estratégias de fallback ajudam a evitar a duplicação desnecessária desse tipo de conteúdo. Abaixo estão duas abordagens comuns:

| Caso de uso | Descrição |
| :---- | :---- |
| [Localidade padrão como fallback para outras localidades](#localidade-padrão-como-fallback-para-outras-localidades) | Use quando a maior parte do conteúdo é compartilhada e outras localidades apenas substituem diferenças específicas. |
| [Fallback de idioma principal com variações regionais](#fallback-de-idioma-principal-com-variações-regionais) | Use ao gerenciar variações regionais que herdam de uma localidade de idioma principal. |

## Localidade padrão como fallback para outras localidades

Nesta estratégia, todo o conteúdo principal é armazenado na localidade padrão (por exemplo, `Inglês-EUA`). Outras localidades herdam o conteúdo da localidade padrão e só substituem campos quando a localização é necessária. Isso significa que você só traduz ou modifica o conteúdo quando ele difere do padrão. Essa abordagem funciona bem quando:

* A maior parte do conteúdo é compartilhada entre os idiomas.
* As diferenças de localização são mínimas.

No exemplo abaixo, temos duas localidades:

* `Inglês-EUA` (padrão)
* `Português-BR`

  * Fallback: `Inglês-EUA`

Se uma descrição não estiver traduzida para o português, o sistema exibe automaticamente o conteúdo em `Inglês-EUA`. Você só localiza campos em `Português-BR` quando o conteúdo precisar ser diferente (por exemplo, texto promocional ou mensagens específicas da região).

## Fallback de idioma principal com variações regionais

Essa estratégia é útil ao gerenciar múltiplos idiomas e variações regionais. Você cria uma hierarquia em que as localidades regionais utilizam uma localidade de idioma principal como fallback. Essa abordagem é ideal quando:

* A loja suporta múltiplas regiões com o mesmo idioma.
* Alguns idiomas compartilham uma estrutura de idioma base.
* Você precisa de lógica de fallback em camadas.

No exemplo abaixo, configuramos as seguintes localidades:

* `Inglês-EUA` (padrão)
* `Inglês-GB`
  * Fallback: `Inglês-EUA`
* `Espanhol-ES`
  * Fallback: `Inglês-EUA`
* `Catalão-ES`
  * Fallback: `Espanhol-ES`

`Inglês-GB` herda o conteúdo de `Inglês-EUA` e apenas substitui diferenças regionais específicas (por exemplo, "pants" por "trousers"). `Catalão-ES` herda de `Espanhol-ES` e só substitui o conteúdo onde o catalão é necessário.
