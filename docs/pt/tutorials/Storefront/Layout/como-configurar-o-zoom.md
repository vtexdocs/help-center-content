---
title: 'Configurar o zoom'
id: frequentlyAskedQuestions_586
status: ARCHIVED
createdAt: 2019-01-24T20:45:54.975Z
updatedAt: 2022-09-08T16:44:37.881Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:11:42.343Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-set-up-the-zoom
locale: pt
legacySlug: como-configurar-o-zoom
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Um recurso muito comum em lojas online é o **Zoom**.

Ele permite ver detalhes de uma imagem quando o cliente passa o mouse sobre as fotos de um produto.
_Se você já possui essa configuração ativa mas está com alguns problemas veja [aqui ](https://help.vtex.com/pt/faq/por-que-o-zoom-da-minha-loja-nao-funciona/ "aqui ")como identificar esse erro._

Abaixo um passo-a-passo de como configurar e implementar esta funcionalidade.

![zoom-configurações](//images.ctfassets.net/alneenqid6w5/2syaIncF2UeOw0YgOcOSIq/02d931bb81ef413ad248f21e518fbd24/zoom.png)

## Configurando o CSS

A primeira coisa a fazer é configurar o CSS da página que será aberta com uma imagem aproximada do produto no momento que o usuário passar o mouse em cima da foto do produto. Para isso, salve um arquivo com o CSS da página e suba para o servidor da sua loja.

Abaixo reproduzimos um trecho de CSS que você pode utilizar como ponto de partida para este fim. Copie e cole o conteúdo em um editor de texto e salve com o nome “zoom.css”, por exemplo.

```
.zoomPad{position:relative;float:left;z-index:99;cursor:crosshair} .zoomPreload{-moz-opacity:.8;opacity:.8;filter:alpha(opacity=80);color:#333;font-size:12px;font-family:Tahoma;text-decoration:none;border:1px solid #CCC;background-color:#fff;padding:8px;text-align:center;background-image:url(/arquivos/ajax-loader.gif);background-repeat:no-repeat;background-position:center center;z-index:110;width:100%;height:100%;position:absolute;top:0;left:0;} .zoomPup{overflow:hidden;background-color:#FFF;-moz-opacity:.6;opacity:.6;filter:alpha(opacity=60);z-index:120;position:absolute;border:1px solid #CCC;z-index:101;cursor:crosshair} .zoomOverlay{position:absolute;left:0;top:0;background:#FFF;z-index:5000;width:100%;height:100%;display:none;z-index:101} .zoomWindow{position:absolute; left:445px !important; top:40px; background:#FFF; z-index:6000; height:auto; z-index:10000; z-index:110;} .zoomWrapper{position:relative;border:1px solid #999;z-index:110; width:531px !important; height:400px !important;} .zoomWrapperTitle{display:block;background:#999;color:#FFF;height:18px;line-height:18px;width:100%;overflow:hidden;text-align:center;font-size:10px;position:absolute;top:0;left:0;z-index:120;-moz-opacity:.6;opacity:.6;filter:alpha(opacity=60)} .zoomWrapperImage{display:block;position:relative;overflow:hidden;z-index:110; height:400px !important;} .zoomWrapperImage img{border:0;display:block;position:absolute;z-index:101} .zoomIframe{z-index:-1;filter:alpha(opacity=0);-moz-opacity:.8;opacity:.8;position:absolute;display:block}
```

Em seguida, vamos enviar o arquivo CSS salvo para o servidor. Para isso, acesse no menu **CMS** > Acesse **Layout** > Entre na pasta **CMS** > Entre em **Files Manager** > Entre em **.css** > Na janela que se abrirá à direita, clique no botão **Add**.

![add-cms-.css ](//images.ctfassets.net/alneenqid6w5/ZXAryRqp4AAosaKM2qmQa/40058a1db81bde2207c60158c682b667/add_.css.png)

Em seguida, localize o arquivo CSS salvo acima e envie-o para o servidor clicando no botão **Localizar** e em seguida no botão **Salvar arquivo**; dessa forma, seu arquivo aparecerá listado como mostra a imagem acima. 

## Ativar o zoom no template de página

Uma vez efetuado os procedimentos acima, é preciso inserir o controle que ativa o zoom no template da página de produto. O processo para isso também acontece dentro do **CMS**, só que dessa vez localizando o template de página de produto que deve estar dentro da pasta **CMS** > **HTML Templates**. Uma vez localizado o template, é necessário colocar a referência para o arquivo .css que acabamos de subir. 

Para isso, você deve incluir uma tag como `<link href="/arquivos/zoom.css" rel="stylesheet" type="text/css">`. Ela deve ser incluída dentro do head template, como faríamos com qualquer outro arquivo css. 

Agora basta inserir `zoom="on"` na tag do produto, conforme abaixo:
`<vtex.cmc:ProductImage zoom="on">`

## Condições de funcionamento

É necessário configurar o tamanho padrão da imagem de zoom. Você pode definir isso em **CMS** > **Configurações** > **Tipos de Arquivos**.
Por padrão, esse tipo de imagem de zoom vem configurada com 1000×1000 pixels.

![zoom-tiposdearquivo pt](//images.ctfassets.net/alneenqid6w5/3kUqg5mLCUkewseUmA0yK2/cb469406f4cec605ed3e05d9ec487c23/zoom_tipos_de_arquivo.png)
