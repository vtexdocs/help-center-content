---
title: 'Alterar as páginas do site para o protocolo HTTPS'
id: frequentlyAskedQuestions_4378
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.790Z
updatedAt: 2023-03-29T14:56:42.675Z
publishedAt: 2023-03-29T14:56:42.675Z
firstPublishedAt: 2019-01-24T22:13:56.601Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: como-ter-o-protocolo-https-nas-paginas-da-minha-loja
locale: pt
legacySlug: como-ter-o-protocolo-https-nas-paginas-da-minha-loja
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Para alterar a configuração de protocolo HTTPS nas páginas de sua loja, basta seguir os passos abaixo conforme o tipo da página desejada.

## Layout

O módulo Layout abrange a home, catálogo (busca, categorias e produtos), landing pages e outras páginas customizadas.

É possível alterar o protocolo em todas as pastas de uma única vez com o uso de nossa API, documentada [nesta coleção do Postman](https://developers.vtex.com/reference/change-uri-schema).

>⚠️ **Atenção:** evite ter o protocolo HTTPS ativado somente em algumas páginas. Ao acessar uma página HTTPS, depois ir para uma página HTTP da mesma loja, o navegador tentará fazer a leitura dos seus recursos forçadamente em HTTPS, e isso pode gerar problemas.
>
> O adequado é ativar o HTTPS em todo o site de uma única vez.
>
> O mesmo vale para websites desktop e mobile (website filho), aonde é necessário tratar o HTTPS de ambos ao mesmo tempo.

1. No admin VTEX, acesse **Storefront > Layout** e abra a pasta **CMS**.
2. Acesse **Sites and channels**.
3. Acesse o website desejado.
4. Abra a pasta raiz do website.
![instrução CMS -pt](//images.ctfassets.net/alneenqid6w5/1lAXv0QTpq4YOSg2cu86Yi/5e6c2e3cfe424806118b20a9ef5e7b7b/CMS_instru____o.png)
5. A tela que foi aberta apresenta todas as pastas que estão no primeiro nível do site. Para cada pasta pertinente, clique em **Edit** - para a home, considere o botão do topo;
![CMS edit PT](//images.ctfassets.net/alneenqid6w5/1kHZcohcNawW2AEU6sKAAC/834bb139945132df8e23bd0b8dc9360f/edit_CMS.png)
6. Na caixa de seleção **Protocol**, selecione a opção **HTTPS**;
![CMS: protocol HTTPS ](//images.ctfassets.net/alneenqid6w5/4d64p6oOPuWgMcAmmeqiKY/062e9c9ec3423f8ed6344436c07f8544/HTTPS.png)
7. Clique em **Save Folder**.

Atenção às pastas que possuem subpastas, como Departamento, Categoria, Produto e outras pastas, incluindo também as criadas para customização da loja. 

No exemplo a seguir, a pasta dinâmica **@Categoria@**, contida em **Categoria**, que deve ser também editada: 
![cms: subcategoria edit](//images.ctfassets.net/alneenqid6w5/7GQxgjBhRKomoSSicuMMeE/530405e8da5a8f61ccdfb1ca3285ffdd/subcategoria_edit.png)

Após cache de até 10 minutos as alterções irão vigorar.
