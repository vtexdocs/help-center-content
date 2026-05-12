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

Se sua loja tem [várias localidades configuradas](https://help.vtex.com/pt/docs/tutorials/configurar-localidades#como-as-localidades-se-conectam-aos-bindings), o CMS permite que você crie e gerencie versões localizadas do seu conteúdo, possibilitando a adaptação de elementos como títulos e descrições de páginas para diferentes idiomas ou regiões.

O CMS oferece ferramentas para ajudar você a editar conteúdos em diferentes localidades e a definir como o conteúdo se comporta quando uma versão localizada não estiver disponível.

> ℹ️ Saiba mais sobre as regiões e os idiomas suportados em [Configurar localidades](https://help.vtex.com/pt/docs/tutorials/configurar-localidades).

## Seletor de localidade

Você pode gerenciar uma ou várias localidades simultaneamente usando o **seletor de localidade** disponível ao editar uma página. Após selecionar uma ou mais localidades, o formulário de cadastro é atualizado para exibir os campos presentes nessas localidades, permitindo que você gerencie o conteúdo no contexto delas.

Por exemplo, você pode editar as versões em inglês (US) e em português (BR) do título de uma página no mesmo formulário.

![localizing-content-overview](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-1___a732130cef79b9b08022be56a6c26e07.gif)

## Gerenciar conteúdo localizado

Dependendo da sua estratégia de localização, cada campo dentro de um componente usará o fallback para uma [localidade configurada](https://help.vtex.com/pt/docs/tutorials/configurar-localidades).

Ao editar conteúdo, você pode:

* Definir um valor específico para a localidade selecionada.
* Deixar o campo vazio e permitir que o sistema use o conteúdo de fallback de outra localidade.

O comportamento de fallback garante que o conteúdo continue a ser exibido mesmo quando uma versão localizada ainda não foi criada.  

> ⚠️ Para substituir o conteúdo de fallback de um campo, adicione um valor à localidade correspondente. Quando existe um valor localizado, o sistema ignora o fallback e usa o conteúdo localizado no lugar dele.

### Como funciona o conteúdo de fallback

Cada localidade possui uma [definição de localidade de fallback](https://help.vtex.com/pt/docs/tutorials/configurar-localidades). Se um campo não tiver conteúdo para uma localidade específica, o CMS usa automaticamente o valor da localidade de fallback.

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

## Traduzir o conteúdo

Dentro de uma entrada, você pode traduzir um campo específico ou a entrada completa. O conteúdo é traduzido de uma [localidade padrão](https://help.vtex.com/pt/docs/tutorials/configurar-localidades#criar-a-localidade-padrao) para uma ou mais localidades de destino selecionadas.

Ao traduzir o conteúdo, o sistema usa o valor da localidade padrão como fonte e gera os valores traduzidos para as localidades selecionadas. Você pode selecionar uma ou mais localidades para tradução.

![translating-content](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-2___2df901d01ba8c54eee7363fb20031e3c.gif)

### Sobrescrever conteúdo de fallback

Quando esta opção é selecionada no módulo de tradução, todo o conteúdo para as localidades de destino será sobrescrito, removendo o fallback. Esta opção é selecionada por padrão. Se você desselecionar esta opção, apenas os campos com conteúdo para as localidades de destino serão traduzidos.
