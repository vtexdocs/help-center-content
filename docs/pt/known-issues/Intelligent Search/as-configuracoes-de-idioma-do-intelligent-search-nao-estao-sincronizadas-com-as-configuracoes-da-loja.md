---
title: "As configurações de idioma do Intelligent Search não estão sincronizadas com as configurações da loja"
id: 1GqoAyUSbTxwHvzoMoAYfD
status: PUBLISHED
createdAt: 2024-02-27T21:30:40.309Z
updatedAt: 2024-03-06T15:38:20.358Z
publishedAt: 2024-03-06T15:38:20.358Z
firstPublishedAt: 2024-02-27T21:30:41.209Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: as-configuracoes-de-idioma-do-intelligent-search-nao-estao-sincronizadas-com-as-configuracoes-da-loja
locale: pt
kiStatus: Backlog
internalReference: 990343
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O idioma principal da Pesquisa Inteligente não é atualizado automaticamente de acordo com a política comercial e as configurações de vinculação, o que o torna fora de sincronia.

Para lojas de idioma único, o conteúdo do Intelligent Search, como sinônimos, regras de merchandising, banners de pesquisa e redirecionamentos de pesquisa, é criado sobre os locais registrados na associação. A vitrine é renderizada com base também na política comercial, que pode substituir a vinculação e não corresponderá ao conteúdo registrado.

Para lojas multilíngues, potencialmente, isso também afeta as traduções fornecidas na vitrine e nas APIs.

## Simulação



- Crie uma loja em "pt-BR";
- Habilite/configure o módulo Intelligent Search;
- Alterar a política comercial de "pt-BR" para "en-US";
- Idioma único:
  - Manter a vinculação como "pt-BR";
  - Criar conteúdo do Intelligent Search;
  - Acesse a página da loja que deve apresentar o conteúdo registrado;
  - O conteúdo/comportamento não estará visível.
- Vários idiomas:
  - Registre os produtos em inglês;
  - Adicionar o português como segundo idioma/alternativo nos bindings
  - Registre as traduções do catálogo para o português;
  - Nesse cenário, a navegação entre os dois idiomas pode apresentar problemas.

## Workaround


Certifique-se de que os vínculos e as políticas comerciais correspondam; caso contrário, o conteúdo da pesquisa será inválido.

O conteúdo registrado anteriormente não seguirá o novo idioma principal se ele for alterado; ele permanecerá vinculado ao idioma de criação. É necessário registrar pelo menos dois locais na configuração de vinculações (o idioma antigo/inesperado e o novo/esperado) para ver o seletor de idioma no editor de conteúdo, de modo que você possa corrigi-los manualmente para usar o idioma esperado. Outro método é recriar o conteúdo.

Em alguns cenários, como traduções em vários idiomas e catálogos, talvez seja necessário entrar em contato com o nosso suporte para revisar as configurações de idioma interno do Intelligent Search.





