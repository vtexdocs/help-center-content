---
title: 'Por que não consigo abrir imagens que baixei diretamente do meu site?'
id: 5ngrYfggZaWWimyA8OE0Uo
status: PUBLISHED
createdAt: 2017-08-17T21:13:03.926Z
updatedAt: 2019-12-31T14:24:18.707Z
publishedAt: 2019-12-31T14:24:18.707Z
firstPublishedAt: 2017-08-17T22:37:34.372Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: authors_4
slugEN: why-cant-i-open-images-that-i-have-downloaded-directly-from-my-site
locale: pt
legacySlug: por-que-nao-consigo-abrir-imagens-que-baixei-diretamente-do-meu-site
---

Devido à [compactação de imagens para WebP](/pt/tutorial/compactacao-automatica-de-imagens), é possível que existam dificuldades em abrir arquivos que foram salvos diretamente da loja. Isso ocorre porque os sistemas operacionais (Windows, Mac, Linux) não são compatíveis nativamente com este formato.

Mesmo que o nome do arquivo seja algo como "banner.jpg", isto não significa que se trata de uma imagem em formato JPG, pois o navegador não se vale da extensão do arquivo para indicar formato, e sim do seu conteúdo.

### Recuperando imagens no formato original

Atualmente, a melhor forma de recuperar uma imagem em JPG ou PNG sem que ela seja convertida para WebP é salvar o arquivo por meio do Firefox, que não é um browser compatível com o formato - não havendo conversão.

No Google Chrome, que é compatível, todas as imagens (exceto GIF) serão fornecidas em WebP.

### Abrindo imagens WebP

É possível abrir imagens em WebP no seu computador por meio de programas compatíveis ou instalando um codec para WebP.

Na página do Google de [suporte ao WebP](https://developers.google.com/speed/webp/download), encontramos bibliotecas para diversos fins, assim como um [codec para Windows](https://storage.googleapis.com/downloads.webmproject.org/releases/webp/WebpCodecSetup.exe). A sua instalação é suficiente para que seja possível abri-las com o visualizador de imagens do Windows e ver suas miniaturas na pasta.

Para Photoshop, é possível usar o plugin criado pela [Telegraphics](http://telegraphics.com.au/sw/product/webpformat).
