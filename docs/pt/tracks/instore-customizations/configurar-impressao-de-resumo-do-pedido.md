---
title: 'Configurar impressão de resumo do pedido'
id: 12GPLA7JdjXEZFLV3HokZU
status: ARCHIVED
createdAt: 2020-06-28T15:48:40.058Z
updatedAt: 2021-11-03T18:38:20.227Z
publishedAt: 
firstPublishedAt: 2020-06-28T16:03:06.919Z
contentType: trackArticle
productTeam: Shopping
slugEN: setting-up-the-order-summary-printing
locale: pt
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugPT: instore-customizacoes
---

Quando o vendedor conclui um pedido com o inStore, ele pode imprimir um resumo desse pedido. Mas, para habilitar essa funcionalidade, você precisa fazer algumas configurações.

![15. Configurar impressão de resumo do pedido - 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

São necessárias duas etapas:

1. Pelo Admin da VTEX, ativar a opção de configuração do dispositivo no menu do inStore.
2. No aplicativo do inStore, configurar o dispositivo de impressora.

## Ative a opção de configuração do dispositivo

>❗ A ativação da opção de configuração do dispositivo é feita por meio de uma alteração no arquivo JavaScript `checkout-instore-custom.js`. Essa operação deve ser realizada somente por pessoas com experiência em programação. Alterações incorretas nesse arquivo podem causar erros críticos. 

Primeiro, abra o arquivo `checkout-instore-custom.js`, disponível no Admin da sua conta VTEX (se não sabe como acessar esse arquivo, consulte o tutorial [Como customizar o inStore](https://help.vtex.com/pt/tracks/instore-customizacoes--1z9kBm12oBPyVNDo1ivVc2)).

Nesse arquivo, adicione a propriedade `configureDeviceEnabled` com valor `true`. Além disso, adicione o objeto `printingConfig`, e dentro dele adicione a  propriedade `printByBroker`, também com valor `true`.

O trecho de código deve ficar como no exemplo abaixo:

```json
window.INSTORE_CONFIG = { 
  configureDeviceEnabled: true, 
  printingConfig: { 
    printByBroker: true 
  },
}
```

>❗ Não remova nenhuma das outras propriedades presentes no objeto `window.INSTORE_CONFIG`, para evitar a quebra de outras funcionalidades.

Essa alteração fará aparecer no menu principal do inStore a opção __Configurar o dispositivo__, como mostra a imagem abaixo. É por meio dessa opção que vamos configurar a impressora.

![15. Configurar impressão de resumo do pedido - 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

>ℹ️ **Nota:** Há uma opção para imprimir automaticamente o resumo do pedido, assim que o pedido for concluído. Para habilitar, basta adicionar a propriedade `printPageAutomatically` com o valor `true` dentro do objeto printingConfig. Veja abaixo como ficaria o trecho de código neste caso.

```json
window.INSTORE_CONFIG = { 
  configureDeviceEnabled: true, 
  printingConfig: { 
    printByBroker: true,
    printPageAutomatically: true
  },
}
```

>❗ Novamente, não remova nenhuma das outras propriedades presentes no objeto `window.INSTORE_CONFIG`, para evitar a quebra de outras funcionalidades.

## Configure o dispositivo de impressora no inStore

Vamos agora ver como configurar uma impressora conectada ao inStore para impressão de resumos de pedido.

>⚠️ Antes de mais nada, para conectar uma impressora ao sistema do inStore, é necessário ter um par de credenciais VTEX (AppKey e AppToken) com as devidas permissões de acesso. Recomendamos que o perfil de acesso atrelado a essas credenciais seja o `inStore Sales Person`. Porém, um perfil com mais poderes, como o Admin Super, também pode ser usado.

Tendo o AppKey e o AppToken em mãos, siga os passos abaixo:

1. Conecte a impressora ao computador em que o inStore está instalado (para baixar o inStore para o seu desktop, acesse o artigo inStore - [Faça o download do Aplicativo](https://help.vtex.com/pt/tracks/instore-setup-basico--zav76TFEZlAjnyBVL5tRc#faca-o-download-do-aplicativo "Faça o download do aplicativo")). Lembre-se de que, para usar a impressora, você deve usar um computador com sistema operacional Windows (Windows 7 ou superior são suportados).
2. Abra o aplicativo do inStore e entre na loja onde deseja configurar a impressora.
3. No menu principal do inStore, na seção Configurações, agora deve constar a opção __Configurar o dispositivo__. Clique nessa opção.

![15. Configurar impressão de resumo do pedido - 3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

Você encontrará o resumo do dispositivo configurado. Se essa for a primeira vez em que você realiza essa configuração, os campos dessa tela estarão vazios. Se um dispositivo já tiver sido configurado anteriormente, algumas informações sobre o dispositivo serão exibidas (Nome do dispositivo e Impressora padrão). Clique no botão __Editar__.

![15. Configurar impressão de resumo do pedido - 4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

Será exibido um formulário contendo os campos __AppKey__, __AppToken__ e o __nome__ com o qual você deseja identificar o dispositivo. Após inserir esses dados, clique em __Configurar__.

Após incluir os dados acima, os vendedores poderão selecionar a impressora na lista de opções para imprimir o resumo de seus pedidos via inStore. O sistema identifica a impressora via internet.
