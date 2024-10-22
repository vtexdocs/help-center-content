---
title: 'Configurar um dispositivo para impressão de pedidos'
id: 18nqy9Hr9AUBNF0WTvpTyT
status: ARCHIVED
createdAt: 2019-11-12T21:42:11.589Z
updatedAt: 2021-08-24T20:46:59.498Z
publishedAt: 
firstPublishedAt: 2019-11-25T12:43:17.689Z
contentType: trackArticle
productTeam: Shopping
slugEN: how-to-configure-a-device-for-printout-the-order
locale: pt
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugPT: instore-setup
---

Entre as opções oferecidas pela **inStore** ao concluir uma venda, existe uma que permite imprimir o resumo do pedido.

![PT-Venda corfimada](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/instore-setup/como-configurar-um-dispositivo-para-impressao-de-pedidos_1.png)

Para configurar esta opção, serão necessárias duas pequenas etapas:
  1. Pelo Admin VTEX, ative a opção de configuração do dispositivo no menu inStore
  2. No inStore, configure o dispositivo de impressora

## Ative a opção de configuração do dispositivo no menu inStore

Hoje, essa configuração está presente no administrador do portal, mais especificamente no arquivo **checkout-instore-custom.js**. Como esse arquivo é um JavaScript presente em várias sequências de uso do aplicativo, é importante que você tenha conhecimento de programação antes de alterá-lo, para evitar a quebra de outros recursos.

Para habilitar a opção _"Configurar dispositivo"_, você deve encontrar o objeto **_window.INSTORE_CONFIG_** presente neste arquivo e adicionar a propriedade **_configureDeviceEnabled_** com o valor **_true_**, e também adicionar o objeto **_printingConfig_** à propriedade **_printByBroker_** com o valor true, para que o inStore permita o uso da propriedade opção dentro do menu, como mostra a imagem de exemplo abaixo:

![PT-Configurar dispositivo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/instore-setup/como-configurar-um-dispositivo-para-impressao-de-pedidos_2.png)

Não exclua nenhuma das outras propriedades presentes neste objeto. O resultado deve ser algo como:

``window.INSTORE_CONFIG = {
configureDeviceEnabled: true,
      printingConfig: { 
            printByBroker: true 
      }
}``
>ℹ️ **NOTA**: Há uma opção para imprimir automaticamente o resumo do pedido, assim que o pedido for concluído. A configuração é muito simples, basta adicionar a propriedade **<i>printPageAutomatically</i>** com o valor **<i>true</i>** dentro do objeto **<i>printingConfig</i>**.

Não exclua nenhuma das outras propriedades presentes neste objeto. O resultado deve ser algo como:

``window.INSTORE_CONFIG = {
configureDeviceEnabled: true,
      printingConfig: { 
            printByBroker: true,
printPageAutomatically: true 
      }
}``

## Configurar dispositivo de impressora no inStore

>⚠️ **IMPORTANTE**: Para a configuração da impressora no inStore, é necessário ter o **<i>AppKey</i>** e o **<i>AppToken</i>** com permissões de pelo menos um perfil como <i>"Vendedor inStore (inStore Sales Person)"</i>. Vale esclarecer que um perfil de <i>"Proprietário (administrador super)"</i> pode ser usado.

  1. Conecte a impressora ao computador em que o inStore está instalado (para baixar o inStore, acesse [http://instore.vtex.com/download]). Lembrando que deve ser um computador com sistema operacional Windows (Windows 7 ou superior são suportados).
  2. Abra o aplicativo inStore e entre na loja onde deseja configurar a impressora.
  3. No menu do inStore, no bloco "Configurações", a opção "Configurar o dispositivo" deve aparecer. Clique ali.

![PT-Barra inStore](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/instore-setup/como-configurar-um-dispositivo-para-impressao-de-pedidos_3.png)

  4. Você encontrará o resumo do dispositivo configurado. Se for a primeira vez, as informações estarão vazias. Se um dispositivo já tiver sido configurado anteriormente, algumas informações sobre o dispositivo serão exibidas _(Nome do dispositivo e Impressora padrão)_. Clique na opção "Editar".
  
  ![PT-Dispositivo via Broadcast](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/instore-setup/como-configurar-um-dispositivo-para-impressao-de-pedidos_4.png)
  
  5. Um formulário aparecerá indicando os dados do _AppKey_, _AppToken_ e o nome com o qual você deseja identificar o dispositivo. Após inserir esses dados, clique em "Configurar".
  6. Por fim, incluindo os dados acima, será possível selecionar a impressora na lista de opções. A ideia é selecionar uma dessas opções e clicar em “Configurar” novamente.

Após preencher esses requisitos, você poderá imprimir o resumo de seus pedidos no inStore.




