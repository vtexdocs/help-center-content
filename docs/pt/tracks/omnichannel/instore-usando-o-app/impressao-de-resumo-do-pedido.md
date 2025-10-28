---
title: 'Impressão de resumo do pedido'
id: 5UeqJA3sHp5goJacvHwPoS
status: PUBLISHED
createdAt: 2021-08-05T14:40:53.752Z
updatedAt: 2025-09-03T15:17:32.149Z
publishedAt: 2025-09-03T15:17:32.149Z
firstPublishedAt: 2021-08-05T14:47:18.680Z
contentType: trackArticle
productTeam: Shopping
slugEN: printing-an-order-summary
locale: pt
trackId: 4BYzQIwyOHvnmnCYQgLzdr
trackSlugEN: instore-usando-o-app
order: 17
---

Ao concluir um pedido pelo VTEX Sales App, é possível imprimir um resumo do pedido se essa customização estiver habilitada e se um dispositivo de impressão estiver configurado corretamente.

Para isso, o vendedor pode clicar no botão `Imprimir Pedido`, na tela de pedido finalizado, conforme ilustrado abaixo. Outra opção é configurar o VTEX Sales App para imprimir o resumo do pedido automaticamente, assim que o pedido for finalizado.

![15. Configurar impressão de resumo do pedido - 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-usando-o-app/impressao-de-resumo-do-pedido_1.png)

Para habilitar a impressão do resumo do pedido, é necessário seguir as etapas descritas abaixo.

## 1. Customizar o VTEX Sales App

Primeiro, os desenvolvedores da sua loja precisam seguir as instruções do guia [Set up the order summary printing](https://developers.vtex.com/vtex-rest-api/docs/set-up-the-order-summary-printing) para habilitar essa customização.

## 2. Configurar o dispositivo de impressora no VTEX Sales App

Em seguida, você precisa configurar uma impressora conectada ao VTEX Sales App para impressão de resumos de pedido.

### Pré-requisitos

Para fazer o pareamento com uma impressora, é necessário cumprir os pré-requisitos a seguir:

* Utilizar um computador com sistema operacional Windows 7 ou superior.
* Caso não tenha o VTEX Sales App em seu computador, instalar o aplicativo a partir do nosso guia de [Instalação](/pt/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/2rPSJ8519UCCZo5uEBkqxh).
* Obter um par de credenciais (AppKey e AppToken) com as devidas permissões de acesso. Leia o artigo [Chaves de aplicação](/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet) para mais informações.

> ℹ️ Nós recomendamos que o perfil de acesso relacionado a essas credenciais seja o **VTEX Sales App Sales Person**. Porém, um perfil com acesso a outros módulos do Admin, como o **Admin Super**, também pode ser utilizado.

### Passo a passo

Com o AppKey e o AppToken em mãos, siga os passos abaixo.

1. Conecte a sua impressora via Wi-Fi, Bluetooth ou USB ao computador em que o VTEX Sales App está instalado.
2. Abra o aplicativo do VTEX Sales App e informe o nome da loja onde você deseja configurar a impressora.
3. No menu principal do VTEX Sales App, na seção **Configurações**, clique na opção <i class="fas fa-cog"></i> **Configurar o dispositivo**, ilustrada abaixo.

![15. Configurar impressão de resumo do pedido - 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-usando-o-app/impressao-de-resumo-do-pedido_2.png)

<ol start="4">
  <li>Em seguida, você verá o resumo do dispositivo configurado. Se essa for a primeira vez em que essa configuração é realizada, os campos da tela estarão vazios, conforme a imagem abaixo. Se um dispositivo já tiver sido configurado anteriormente, você verá o **Nome do dispositivo** e **Impressora padrão**. Clique no botão <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Editar</span>.</li>
</ol>

![15. Configurar impressão de resumo do pedido - 4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-usando-o-app/impressao-de-resumo-do-pedido_3.png)

<ol start="5">
  <li>Preencha o formulário contendo os campos descritos abaixo.
    <ul>
      <li>**App Key:** nome da chave de aplicação. Leia a seção [Pré-requisitos](#pre-requisitos) para mais informações.</li>
      <li>**App Token:** token da chave de aplicação. Leia a seção [Pré-requisitos](#pre-requisitos) para mais informações.</li>
      <li>**Insira o nome do dispositivo:** nome que você deseja utilizar para identificar o dispositivo.</li>
      <li>**Impressora padrão:** selecionar a impressora a partir da lista de impressoras conectadas ao seu computador.</li></ul></li>
  <li>Após inserir esses dados, clique em <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Configurar</span>.</li>
  </ol>

Depois desse processo, os vendedores poderão selecionar a impressora na lista de opções para imprimir o resumo de seus pedidos pelo VTEX Sales App. O sistema identifica a impressora via internet.
