---
title: 'Configurar um dispositivo para impressão de pedidos'
id: 18nqy9Hr9AUBNF0WTvpTyT
status: DRAFT
createdAt: 2019-11-12T21:42:11.589Z
updatedAt: 2021-08-24T20:46:59.498Z
publishedAt: 
firstPublishedAt: 2019-11-25T12:43:17.689Z
contentType: trackArticle
productTeam: Shopping
slug: como-configurar-um-dispositivo-para-impressao-de-pedidos
locale: pt
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugPT: instore-setup
---

Entre as opções oferecidas pela **inStore** ao concluir uma venda, existe uma que permite imprimir o resumo do pedido.

![PT-Venda corfimada](https://images.ctfassets.net/alneenqid6w5/4S51lvnSiCJIyH2IiG49Uy/2b3a3dfd3a7248080339e9e4a16efd93/PT-Venda_confirmada.png)

Para configurar esta opção, serão necessárias duas pequenas etapas:
  1. Pelo Admin VTEX, ative a opção de configuração do dispositivo no menu inStore
  2. No inStore, configure o dispositivo de impressora

## Ative a opção de configuração do dispositivo no menu inStore

Hoje, essa configuração está presente no administrador do portal, mais especificamente no arquivo **checkout-instore-custom.js**. Como esse arquivo é um JavaScript presente em várias sequências de uso do aplicativo, é importante que você tenha conhecimento de programação antes de alterá-lo, para evitar a quebra de outros recursos.

Para habilitar a opção _"Configurar dispositivo"_, você deve encontrar o objeto **_window.INSTORE_CONFIG_** presente neste arquivo e adicionar a propriedade **_configureDeviceEnabled_** com o valor **_true_**, e também adicionar o objeto **_printingConfig_** à propriedade **_printByBroker_** com o valor true, para que o inStore permita o uso da propriedade opção dentro do menu, como mostra a imagem de exemplo abaixo:

![PT-Configurar dispositivo](https://images.ctfassets.net/alneenqid6w5/FNNbs1nFbkwbQHD4LfMx5/639002d286b1c502cc8079a2b6b64aad/PT-Configurar_dispositivo.png)

Não exclua nenhuma das outras propriedades presentes neste objeto. O resultado deve ser algo como:

``window.INSTORE_CONFIG = {
configureDeviceEnabled: true,
      printingConfig: { 
            printByBroker: true 
      }
}``
<div class="alert alert-info">
  <strong>NOTA</strong>: Há uma opção para imprimir automaticamente o resumo do pedido, assim que o pedido for concluído. A configuração é muito simples, basta adicionar a propriedade <strong><i>printPageAutomatically</i></strong> com o valor <strong><i>true</i></strong> dentro do objeto <strong><i>printingConfig</i></strong>.
</div>

Não exclua nenhuma das outras propriedades presentes neste objeto. O resultado deve ser algo como:

``window.INSTORE_CONFIG = {
configureDeviceEnabled: true,
      printingConfig: { 
            printByBroker: true,
printPageAutomatically: true 
      }
}``

## Configurar dispositivo de impressora no inStore

<div class="alert alert-warning">
  <strong>IMPORTANTE</strong>: Para a configuração da impressora no inStore, é necessário ter o <strong><i>AppKey</i></strong> e o <strong><i>AppToken</i></strong> com permissões de pelo menos um perfil como <i>"Vendedor inStore (inStore Sales Person)"</i>. Vale esclarecer que um perfil de <i>"Proprietário (administrador super)"</i> pode ser usado.
</div>

  1. Conecte a impressora ao computador em que o inStore está instalado (para baixar o inStore, acesse [http://instore.vtex.com/download]). Lembrando que deve ser um computador com sistema operacional Windows (Windows 7 ou superior são suportados).
  2. Abra o aplicativo inStore e entre na loja onde deseja configurar a impressora.
  3. No menu do inStore, no bloco "Configurações", a opção "Configurar o dispositivo" deve aparecer. Clique ali.

![PT-Barra inStore](https://images.ctfassets.net/alneenqid6w5/3D4dG6jMeBrKYFzdatmWID/4a0c6e1daa1c7f324174dc87d0119ca7/PT-Barra_inStore.png)

  4. Você encontrará o resumo do dispositivo configurado. Se for a primeira vez, as informações estarão vazias. Se um dispositivo já tiver sido configurado anteriormente, algumas informações sobre o dispositivo serão exibidas _(Nome do dispositivo e Impressora padrão)_. Clique na opção "Editar".
  
  ![PT-Dispositivo via Broadcast](https://images.ctfassets.net/alneenqid6w5/5EqfgcZGdhiLtJcZmYkqGb/66c7deeb361ad97d98cf649458f09758/PT-Dispositivo_via_Broadcast.png)
  
  5. Um formulário aparecerá indicando os dados do _AppKey_, _AppToken_ e o nome com o qual você deseja identificar o dispositivo. Após inserir esses dados, clique em "Configurar".
  6. Por fim, incluindo os dados acima, será possível selecionar a impressora na lista de opções. A ideia é selecionar uma dessas opções e clicar em “Configurar” novamente.

Após preencher esses requisitos, você poderá imprimir o resumo de seus pedidos no inStore.




