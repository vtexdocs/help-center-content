---
title: "Localização de conteúdo - Visão geral"
createdAt: 2026-03-27T17:08:52.219Z
updatedAt: 2026-04-02T11:00:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: localizing-content
locale: pt
order: 1
---

Quando sua loja tem [várias localidades configuradas](https://help.vtex.com/pt/docs/tutorials/configurar-localidades#como-as-localidades-se-conectam-aos-bindings), o CMS permite criar e gerenciar versões localizadas do seu conteúdo. Isso possibilita adaptar conteúdos como títulos de páginas e descrições para diferentes idiomas ou regiões.

O CMS oferece ferramentas para ajudar você a editar conteúdo em múltiplas localidades e definir como o conteúdo se comporta quando uma versão localizada não está disponível.

> ℹ️ Saiba mais sobre idiomas e regiões compatíveis em [Configurar localidades](https://help.vtex.com/pt/docs/tutorials/configurar-localidades).

## Seletor de localidade

Você pode gerenciar uma ou várias localidades simultaneamente usando o **seletor de localidade** disponível durante a edição de uma página. Após selecionar uma ou mais localidades, o formulário de entrada é atualizado para exibir os campos localizados dessas localidades, permitindo gerenciar o conteúdo no contexto da localidade selecionada.

Por exemplo, você pode editar as versões em inglês (EUA) e português (BR) do título de uma página dentro do mesmo formulário.

![localizing-content-overview](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-1___a732130cef79b9b08022be56a6c26e07.gif)

## Gerenciamento de conteúdo localizado

Dependendo da sua estratégia de localização, cada campo dentro de um componente utilizará como fallback uma [localidade configurada](https://help.vtex.com/pt/docs/tutorials/configurar-localidades).

Ao editar conteúdo, você pode:

* Fornecer um valor específico para a localidade selecionada.
* Deixar o campo vazio e permitir que o sistema utilize o conteúdo de fallback de outra localidade.

O comportamento de fallback garante que o conteúdo continue sendo exibido mesmo quando uma versão localizada ainda não foi criada.

> ⚠️ Para substituir o conteúdo de fallback de um campo, adicione um valor para essa localidade. Quando existe um valor localizado, o sistema ignora o fallback e utiliza o conteúdo localizado.

### Como funciona o conteúdo de fallback

Cada localidade tem uma [definição de localidade de fallback](https://help.vtex.com/pt/docs/tutorials/configurar-localidades). Se um campo não tiver conteúdo para uma localidade específica, o CMS usa automaticamente o valor da localidade de fallback.

Por exemplo, suponha que o campo Título da página esteja localizado e as seguintes localidades estejam configuradas:

* Inglês - EUA (padrão)
* Português - BR
  * Fallback: Inglês - EUA

Se o campo Título da página tiver um valor para ambas as localidades, o storefront exibe o valor específico de cada uma.

* Inglês - EUA: "[Merchant.com](http://Merchant.com) - your electronics destination"
* Português - BR: "[Merchant.com.br](http://Merchant.com.br) - seu destino eletrônico"

![fallback-locale-overview](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-2-en___e56ce0060ee1da4a80464764e183b096.png)

Se o campo Título da página estiver vazio para Português (BR), o storefront usa o valor da localidade de fallback.

* Inglês - EUA: "[Merchant.com](http://Merchant.com) - your electronics destination"
* Português - BR: "[Merchant.com](http://Merchant.com) - your electronics destination" (fallback do Inglês - EUA)

![fallback-locale](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-3-en___c0f421a8cbeb9069631db06f62e7fdc5.png)

Esse comportamento de fallback garante que o conteúdo permaneça disponível mesmo quando um valor localizado ainda não foi adicionado.

## Tradução de conteúdo

Dentro de uma entrada, você pode traduzir um único campo ou a entrada inteira. O conteúdo é traduzido da [localidade padrão](https://help.vtex.com/pt/docs/tutorials/configurar-localidades#criar-a-localidade-padrao) para uma ou mais localidades de destino selecionadas.

Ao traduzir conteúdo, o sistema usa o valor da localidade padrão como origem e gera valores traduzidos para as localidades escolhidas. Você pode selecionar uma ou várias localidades para tradução.

![translating-content](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-2___2df901d01ba8c54eee7363fb20031e3c.gif)

### Sobrescrever conteúdo de fallback

Quando esta opção está selecionada no módulo de tradução, todo o conteúdo das localidades de destino será sobrescrito, removendo o fallback. Esta opção está selecionada por padrão. Se você desmarcar esta opção, apenas os campos que tiverem conteúdo para as localidades de destino serão traduzidos.
