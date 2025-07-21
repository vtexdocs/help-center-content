---
title: 'Meus pedidos do Mercado Livre apresentam erros'
id: 170njWgSw9UQ5DG6NRl14d
status: PUBLISHED
createdAt: 2024-06-28T15:03:26.959Z
updatedAt: 2024-11-08T16:25:03.251Z
publishedAt: 2024-11-08T16:25:03.251Z
firstPublishedAt: 2024-06-28T16:04:14.266Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: my-orders-in-mercado-libre-have-errors
locale: pt
legacySlug: meus-pedidos-do-mercado-livre-apresentam-erros
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
tags: Marketplace, Catálogo, Integração, Mercado Livre, Produtos
---

Quando ocorre um erro de integração em pedidos entre um marketplace e o Mercado Livre, uma mensagem de erro é informada em cada pedido.   

Os pedidos apresentam erros de integração por **ID de Loja Oficial no Mercado Livre** cadastrado incorretamente ou por **Categorias inexistentes no Mercado Livre**. Para verificar se um pedido contém erros de integração, no Admin VTEX, acesse**Marketplace > Conexões > Pedidos ou digite Pedidos na barra de busca.**  

## Solução

Para corrigir erros de integração em pedidos do Mercado Livre, considere as seguintes opções: [verificar o ID da loja oficial no Mercado Livre](#verificando-o-id-da-loja-oficial-no-mercado-livre) e [verificar correspondência de categorias](#verificando-correspondencia-de-categorias) para erros de integração de pedidos.  

### Verificando o ID da loja oficial no Mercado Livre 

Caso sua loja tenha o status de [Loja Oficial](https://www.mercadolivre.com.br/lojas-oficiais/catalogo) no Mercado Livre, é necessário informar no [cadastro do conector](/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4YvYdgICMosaEgISOYogsi) o ID fornecido pelo Mercado Livre.  

Para validar se foi inserido o ID correto, acesse **Marketplace > Conexões > Marketplaces e Integrações**  e siga os passos abaixo:  

1. Busque pelo conector **Mercado Livre.**  
2. Clique em `Editar`.  
3. Verifique o ID cadastrado no campo `ID da Loja Oficial no Mercado Livre`.  
4. Caso o campo esteja vazio ou com o ID incorreto, insira a informação correta.  
5. Clique em `Salvar`.  

### Verificando correspondências de categorias  

Ao realizar o [mapeamento de categorias e atributos](/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA) para o Mercado Livre, é necessário que os atributos de cada categoria cadastradas na VTEX correspondam aos atributos das categorias existentes no Mercado Livre.   
Se algum dos atributos for preenchido incorretamente, a integração retornará um erro no seguinte formato:  
`A categoria selecionada no atributo category_meli não existe no Mercado Livre.`

Para verificar as categorias e atributos enviados, acesse **Marketplace > Conexões > Marketplaces e Integrações**  e siga os passos abaixo:  

1. Busque pelo conector **Mercado Livre.**  
2. Clique em `Editar`.  
3. Clique em `Realizar mapeamento`.  
4. Clique na categoria que apresenta o erro.  
5. Realize novamente o mapeamento conforme as categorias e atributos existentes no Mercado Livre.  

<div class="alert alert-info">
Para identificar o atributo indicado na mensagem de erro, consulte o número inicial dos códigos determinados pelo Mercado Livre.<p> Clique no nome do seu país para fazer o download da planilha de referência:</p>
<p><ul>
<p><a href="https://assets.contentful.com/alneenqid6w5/22NlNdUIBK8qWic8cYw2sg/11c88bb0b439c7c7f8ce5909923af3d6/Brasil.zip">Brasil</a></p>
<p><a href="https://assets.contentful.com/alneenqid6w5/3c61gJrH7GWOywMCGMECg4/dc7a2ce73a99d41345dde2092eb1fec6/Argentina.rar">Argentina</a></p> 
<p><a href="https://assets.contentful.com/alneenqid6w5/5RePTJoKrYi4qA66WCCYKw/33910300057806b554d566210aa2310a/Colombia.rar">Colômbia</a></p> 
<p><a href="https://assets.contentful.com/alneenqid6w5/3Z3xgpPyvuYEAIO2me4GSG/e4f4198463d8a3ba05124a30031302fa/Mexico.rar">México</a></p>
</ul></p>
</div>