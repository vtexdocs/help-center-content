---
title: 'Importar imagens por planilha'
id: tutorials_262
status: PUBLISHED
createdAt: 2017-04-27T22:11:24.581Z
updatedAt: 2025-06-12T17:13:49.153Z
publishedAt: 2025-06-12T17:13:49.153Z
firstPublishedAt: 2017-04-27T23:03:11.506Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: importing-images-from-a-spreadsheet
legacySlug: importando-imagens-por-planilha
locale: pt
subcategoryId: 2u48reCb68K48EAcm86ccM
---

Cadastrar as imagens dos produtos é um procedimento fundamental, caso contrário os produtos ficarão inativos. Importar as imagens via planilha do Excel é a forma mais rápida de realizar esse cadastro, porque permite realizar essa ação massivamente.

Para importar as imagens de forma massiva, siga o passo a passo abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em __Importação e exportação__.
3. Clique na aba __Importar imagens__.
4. Clique [aqui](https://docs.google.com/spreadsheets/d/17ItiEncnnioxLZFLiKDTxs5Yj0D6tn-i/edit?usp=sharing&ouid=115538149359194322936&rtpof=true&sd=true) para fazer download da planilha modelo, que está no formato que o sistema aceita (.xls). Isso evitará problemas ao importar as imagens.
5. Preencha a planilha conforme descrito na seção [Como preencher a planilha para importar imagens](#como-preencher-a-planilha-para-importar-imagens) e salve-a em seu computador.
6. Clique no botão <i class="fas fa-folder-open"></i> `Selecionar arquivo...`.
7. Encontre o arquivo salvo no seu computador e clique em `Abrir`.
8. No campo __Email para notificação__, insira um endereço de email para receber as notificações da importação. Por padrão, o email pré-preenchido é o que você utiliza para acessar o Admin VTEX.
9. Clique em `Importar`.

O sistema vai processar a sua solicitação internamente e, em seguida, enviar uma notificação para o email informado, informando se o arquivo processado retornou erro ou sucesso na importação das imagens.

O tempo até a conclusão do processo depende do tamanho do arquivo. Caso a planilha possua mais de 2000 mil linhas, recomendamos dividi-la em mais de um arquivo.

Por fim, os produtos das linhas da planilha cujas imagens forem processadas com sucesso serão colocados na fila de indexação.

> ❗ Sempre que uma planilha com a informação de imagens for importada, o sistema fará o upload de uma nova imagem para o SKU. Fique atento(a) a possíveis duplicações. Se uma planilha com informações enviadas anteriormente para a VTEX for importada uma segunda vez, a importação não irá sobrescrever a imagem antiga: a imagem será **duplicada** no cadastro do SKU.

## Como preencher a planilha para importar imagens

A seguir, explicamos o preenchimento de cada campo da planilha de importação de imagens:

- [URL](#url)
- [NomeImagem](#nomeimagem)
- [TextoImagem](#textoimagem)
- [Label](#label)
- [IdSku](#idsku)
- [CodigoreferenciaSku](#codigoreferenciasku)

### URL

> ℹ️ Este campo é obrigatório. Não é permitido o uso de caracteres especiais, pontos no nome da imagem ou acentos.

Este campo precisa ser preenchido com a URL da imagem a ser associada ao SKU, que deve estar pública e hospedada em um servidor FTP, de onde se origina o link da imagem. A URL deve obrigatoriamente iniciar com o identificador de protocolo HTTP (`http://`) e terminar com a extensão do arquivo (`.jpg`, `.png` ou `.gif`). Exemplo: `http://www.exemploimagem.com.br/imagem03/teste01/exemplo15.jpg`.

Para evitar erros, é importante verificar se a URL da imagem inserida na planilha está completa, incluindo desde o `http://` até a extensão do arquivo. Caso contrário, o sistema não conseguirá acessar a URL e a imagem não será importada.

Você não precisa ter um servidor FTP próprio para enviar as URLs das imagens. É possível hospedar esses dados em sites gratuitos e em servidores FTP externos ou internos, desde que utilizem o protocolo de segurança HTTP.

Além disso, para verificar se as URLs estão corretas, você pode utilizar um serviço externo, o qual verifica se estas são válidas.

> ⚠️ Recomendamos que cada imagem não ultrapasse 3000 KB (3 MB).

### NomeImagem

> ℹ️ Este campo é obrigatório. Não é permitido o uso de caracteres especiais, acentos e espaços em branco.

O nome da imagem é o que vem depois da última `/` na URL da imagem, incluindo a extensão do arquivo. Portanto, esse campo precisa ser preenchido com o nome e a extensão do arquivo (`.jpg`, `.png` ou `.gif`). Exemplo: `exemplo15.jpg`.

Esse nome será relacionado à imagem no gerenciador de arquivos do CMS Portal (Legado).

### TextoImagem

> ℹ️ Não é permitido o uso de caracteres especiais e acentos neste campo. Não é permitido utilizar o mesmo valor no campo **Label** e no campo **TextoImagem**.

O __TextoImagem__ precisa ser preenchido com o texto que será associado à sua imagem. Ele ficará registrado no cadastro do SKU na aba __Imagens__, no campo __Texto__.

### Label

> ℹ️ Este campo é obrigatório. Não é permitido o uso de caracteres especiais, acentos e espaços em branco. Não é permitido utilizar o mesmo valor no campo **Label** e no campo **TextoImagem**.

__Label__ é a “etiqueta” usada para facilitar na organização do template das páginas do seu site, através do referenciamento do valor preenchido nesta. Exemplos: frontal, lateral, superior.

### IdSku

> ℹ️ O preenchimento deste campo é obrigatório. A ID informada precisa ser correspondente à ID de um SKU já existente no **Catálogo**.

O ID do SKU é o código que identifica o SKU que será associado à imagem. É possível obter este código através da exportação de __Produtos e SKUs__ — leia o artigo [Como exportar planilha de produtos
](/pt/tutorial/como-exportar-planilha-de-produtos--2sIroGeqZqaN3NAvaSGwWV) para mais informações.

### CodigoreferenciaSku

O código de referência do SKU é o código que consta no cadastro do SKU, no campo __Código de Referência__. O preenchimento desse campo não é obrigatório. 
