---
title: 'Alterar textos padrão do sistema exibidos na loja'
id: 53njoEwLpSWuyMy28SQAKS
status: PUBLISHED
createdAt: 2019-01-24T20:45:43.325Z
updatedAt: 2023-03-29T00:58:43.286Z
publishedAt: 2023-03-29T00:58:43.286Z
firstPublishedAt: 2019-01-24T22:08:58.731Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: changing-default-system-texts-displayed-in-the-store
legacySlug: alterar-textos-padrao-do-sistema-exibidos-na-loja
locale: pt
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

O sistema VTEX renderiza uma série de textos padrão na loja.

Para cada um desses textos, há uma __chave__ que o identifica (uma espécie de nome da variável) e o __texto__ correspondente (o conteúdo dessa variável).

Por exemplo, na topbar do site - que por padrão faz parte do subtemplate do header -, fica a mensagem de boas-vindas. Esta mensagem é identificada pela chave `topbarSaudacao` e, inicialmente, vem com o texto "Bem-vindo!".

Para cada chave usada pelo sistema, você pode alterar o texto correspondente. Para isso, siga os passos abaixo:

1. No admin VTEX, acesse **Configurações da Loja > Storefront > Configurações**.
2. Use a caixa de seleção para buscar a chave desejada.
3. Altere o texto que aparece no campo abaixo da caixa de seleção e clique em salvar.

### Variáveis

Algumas variáveis especiais estão disponíveis para compor textos mais complexos:
- Artigo definido
- Preposição
- Preposição no caso locativo
- Pronome possessivo
- Nome da loja
- Endereço do site em textos

Por exemplo, você deseja exibir a seguinte mensagem de boas-vindas na topbar da loja: *Seja bem-vindo à Loja Exemplo*.

Neste caso, os termos `à` e `Loja Exemplo` são especiais. O primeiro é uma proposição, que varia de acordo com o nome de cada loja, e o segundo é o nome da loja, que obviamente também varia.

Para fazer isso de maneira dinâmica, eu posso trocar o texto da chave `topbarSaudacao` para o seguinte:

`Seja bem vindo @preposicaonomeloja2@ @nomeloja@.`

Ou seja, estou usando as variáveis `preposicaonomeloja2` e `nomeloja`.

<div class="alert alert-warning">
Ao usar variáveis para compor um texto, substitua o símbolo <code>#</code> por <code>@</code>. Ou seja, <b>#variavel#</b> torna-se <b>@variavel@</b>.
</div>

![textos-importante pt](//images.ctfassets.net/alneenqid6w5/6B5XvqyDYI4G4eaC8OGEUw/8e55774262373bc01757e12736fe8f39/textos_importantes_pt.png)

![exemplo-texto-importante pt ](//images.ctfassets.net/alneenqid6w5/3cyb4MfQGIu0kc424oYSqo/4d0e1d3bc0bb4af90feaad9398c6a807/3_pt.png)

Como defini que o conteúdo da primeira variável é "à" e o da segunda é "Loja Exemplo", o texto final renderizado no site será "Seja bem-vindo à Loja Exemplo".

Para alterar facilmente as variáveis especiais, que aparecem na seção Textos Importantes, basta clicar nelas.
