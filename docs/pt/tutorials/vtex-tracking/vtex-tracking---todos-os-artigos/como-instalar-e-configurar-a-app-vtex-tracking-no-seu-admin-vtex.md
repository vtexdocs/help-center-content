---
title: 'Como instalar e configurar a app VTEX Tracking'
id: 3ejuFsJ1m0r08cT6afpIPf
status: PUBLISHED
createdAt: 2020-12-22T14:35:26.561Z
updatedAt: 2023-03-30T20:55:21.491Z
publishedAt: 2023-03-30T20:55:21.491Z
firstPublishedAt: 2020-12-22T14:53:00.575Z
contentType: tutorial
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-to-install-and-setup-the-vtex-tracking-app-on-your-vtex-admin
legacySlug: como-instalar-e-configurar-a-app-vtex-tracking-no-seu-admin-vtex
locale: pt
subcategoryId: 7yiFRk9TGfMNeyhT83UljP
---

VTEX Tracking é uma solução da VTEX voltada ao monitoramento de entregas. A app traz informações em tempo real sobre o status das entregas, otimizando os custos logísticos para empresas e transportadoras, além de aumentar a satisfação do cliente. 

Este artigo explica todos os passos para instalar e configurar a integração entre uma loja VTEX e a app VTEX Tracking. Os passos abaixo são realizados após o contrato de utilização dos serviços VTEX Tracking ser assinado, e a plataforma web habilitada.

Para clientes VTEX Tracking que não possuem ambiente VTEX, a integração entre sua loja e a app é feita através de nossas rotas de API. Saiba mais sobre [como funciona o VTEX Tracking](https://help.vtex.com/pt/tutorial/visao-geral-vtex-tracking--1uDRquVudbPuoK05MtbZGh), e confira a [documentação de API](https://developers.vtex.com/docs/api-reference/tracking).

## Como instalar a app

Para instalar a app, siga os passos abaixo:

1. No Admin VTEX, acesse **Aplicativos > Loja de aplicativos**, ou digite **Loja de aplicativos** na barra de busca no topo da página.
2. Selecione a app [VTEX Tracking](https://apps.vtex.com/vtex-vtex-tracking-integrator/p). Você também pode fazer isso pela [VTEX App Store](https://apps.vtex.com/).   
3. Clique em **Obter App**.  
4. Digite o **nome da conta VTEX** onde os pedidos integrados serão faturados.    
*A conta deve ser a mesma que foi configurada no License Manager e no Checkout.*  
4. Aceite os **termos de uso e instalação**.  

Feito isso, sua plataforma VTEX terá a nova aba VTEX Tracking liberada no menu lateral, encontrada na seção de Pedidos.

## Configurações da app

A integração entre sua loja no Admin da VTEX, e a app VTEX Tracking depende de algumas configurações. Confira abaixo as configurações necessárias para que seu serviço VTEX Tracking seja ativado, e o passo a passo para acessar o menu de Configurações. 

![VTEX Tracking app install](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-tracking/vtex-tracking---todos-os-artigos/como-instalar-e-configurar-a-app-vtex-tracking-no-seu-admin-vtex_1.jpg) 

1. No Admin VTEX, acesse **Aplicativos > Apps instalados > VTEX Tracking**, ou digite **VTEX Tracking** na barra de busca no topo da página.
2. Digite o **Token da API** na caixa de texto.  
3. Se desejar, habilite a **Integração de pedidos com XML da Nota Fiscal**.    
4. Se desejar, habilite a **Atualização do status de entrega nos pedidos**.  
5. Clique em **Salvar**.   

Uma vez salvas as configurações, o token será validado, e a integração entre loja VTEX e VTEX Tracking estará ativa. Confira a seguir mais informações sobre as configurações citadas acima.

### Token da API

O token é o código de segurança que permite que o ambiente da loja VTEX se comunique com o ambiente do VTEX Tracking para gestão das entregas. É disponibilizado para os clientes da plataforma, pelo time VTEX Tracking, uma vez fechado o contrato.

Se precisar, solicite o Token pelo [suporte VTEX](https://support.vtex.com/hc/pt-br/requests).

### Integração de pedidos com XML da nota fiscal

Essa opção configura como é feita a integração de pedidos de uma loja para que se tornem entregas de fato, no sistema VTEX Tracking. Habilitando essa opção, o lojista determina que o VTEX Tracking converta pacotes faturados em entregas, apenas quando o faturamento incluir o arquivo XML da Nota Fiscal, no módulo de Gerenciamento de Pedidos da VTEX.

Essa configuração faz com que os dados de entrega que serão utilizados venham diretamente da Nota Fiscal, e que a integração desconsidere determinadas transportadoras que, por ventura, não farão a operação de entrega via VTEX Tracking. 

Assim o VTEX Tracking pode diferenciar pedidos por:
- CNPJ do emissor
    Essa informação indica para o VTEX Tracking o seller de onde sairá o pedido, caso hajam diversas filiais, por exemplo.

- CNPJ da transportadora
    Com este dado, o VTEX Tracking saberá qual das transportadoras disponíveis está sendo usada naquele pedido específico. Um cenário comum para isso é quando existem múltiplas opções de entrega, como por exemplo Motoboy, Transportadora ABC e Correios, mas o lojista quer integrar apenas o que for Motoboy.

Se os casos descritos acima são relevantes para a sua operação, recomendamos que habilite esta opção e implemente o envio de notas fiscais na sua integração.

#### Enviando a nota fiscal

Para enviar uma nota fiscal na sua integração, você deve disponibilizá-la em um arquivo XML com um link público e enviar a URL no campo `invoiceUrl` da  [requisição de notificação de fatura](https://developers.vtex.com/vtex-rest-api/reference/invoice#invoicenotification) da API de gerenciamento de pedidos.

Para obter um link público, você pode hospedar o arquivo XML em um serviço de nuvem. O caráter público indica apenas a configuração de privacidade do arquivo. Isso não significa que qualquer pessoa terá acesso, apenas quem tiver a URL completa. Confira o  exemplo de [nota fiscal XML](https://www.vtextracking.com/support-files/exemplo-arquivo-nfe.xml) com a URL <code style="background-color:#e3e4e6">https://www.vtextracking.com/support-files/exemplo-arquivo-nfe.xml</code>.

A URL enviada deve conter a extensão <code style="background-color:#e3e4e6">.xml</code>, garantindo que o formato está correto. A ausência dessa extensão sinaliza que o endereço é referente a um arquivo de outro tipo (como PDF ou HTML), mesmo que tenha o texto do XML incorporado, e a integração não funcionará. 

Após realizar o envio, você pode conferir se teve sucesso seguindo esses passos:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Clique no pedido (faturado e com nota fiscal adicionada).
3. Em **Fatura**, confira se o número da nota fiscal está em azul e é um link e clicável.
4. Clique no link com o botão direito do mouse, e abra a nota fiscal em uma outra aba.

Se a nota fiscal estiver correta, o envio ocorreu como esperado.

> ⚠️ Observe o padrão de notas fiscais em XML estabelecido pela Secretaria de Estado da Fazenda (Sefaz) pertinente à sua operação.

### Atualização do status de entrega nos pedidos

Por padrão, os pedidos integrados como entregas no VTEX Tracking não são atualizados com as informações de rastreamento e status. Isso acontece porque muitas vezes o lojista já faz uso desses campos no módulo de Gerenciamento de Pedidos de outra forma. 

Ao ativar essa opção, o VTEX Tracking passará a enviar uma atualização para o módulo de Gerenciamento de Pedidos da VTEX quando uma entrega/serviço passar para `Roteirizado`, `Em Andamento`, `Realizado` ou `Não Realizado`. Essas atualizações também incluirão a URL de rastreamento, nos detalhes do pedido. 

### Acessar admin VTEX Tracking

Uma vez feitas as configurações necessárias, o botão `Acessar` ficará ativo para que o lojista possa acessar a [plataforma web](https://help.vtex.com/pt/tutorial/visao-geral-vtex-tracking--1uDRquVudbPuoK05MtbZGh), ou Admin, do VTEX Tracking. Atualmente este é um ambiente separado, acessível por meio das mesmas credenciais usadas para login na sua loja VTEX. 

