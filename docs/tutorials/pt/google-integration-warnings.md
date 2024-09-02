---
title: 'Avisos de integração com o Google'
id: 4BC0Epit2hACKbkBSqDR2A
status: PUBLISHED
createdAt: 2024-07-01T15:16:46.324Z
updatedAt: 2024-08-12T21:09:51.480Z
publishedAt: 2024-08-12T21:09:51.480Z
firstPublishedAt: 2024-07-01T16:13:33.089Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: avisos-de-integracao-com-o-google
locale: pt
legacySlug: avisos-de-integracao-com-o-google
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Ao realizar a integração de uma loja VTEX com o Google shopping, o seller precisa cumprir o processo de [Envio de produtos para o Google Shopping](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/5L5LnccDCj5lJk8H95GQ82) e esses produtos podem ou não ser aprovados pelo Google. 

## Status de integração do produto

O status de integração é uma mensagem informativa sobre a situação dos produtos do seller com a integração do Google Shopping. É possível encontrar três categorias de mensagens, **mensagens de erro, mensagens de aviso e mensagens de sucesso.** 

Para verificar o status de integração de um produto, acesse no Admin VTEX o menu **Marketplace > Produtos** ou digite **Produtos** na barra de busca.  

Veja na tabela quais mensagens pertencem a qual status:  

| **Status** | **Mensagem** | **Detalhes** | **Qual o impacto no anúncio** |
|:---:|:---:|:---:|:---:|
| **Processado com erro** | `SKU from accountName was not integrated` e `We noticed some problems`| `Product or SKU inactive`, `Invalid price` e `SKU out of stock`. |   Caso não sejam realizados os ajustes, os produtos não serão integrados. |
| **Processado com aviso** | `SKU from accountName integrated`, `See offer` e `But we noticed some missing data` | `EAN/UPC and manufacturer code`, `Size`, `Color`, `Gender` e `Age Group`. |   Se aplicável ao produto e não preenchido os dados faltantes, o anúncio pode ficar com baixa visibilidade ou ser reprovado. |
| **Processado com sucesso** | `SKU from accountName integrated`, `See offer` e `Add following data to increase offer visibility`. | [Product Highlights](https://support.google.com/merchants/answer/7052112?hl=pt-BR#zippy=%2Coutros-requisitos%2Ccomo-formatar-os-dados-do-produto:~:text=produtos%20s%C3%A3o%20veiculados.-,Opcional%3A,-envie%20o%20atributo) | Se aplicável e preenchido os atributos opcionais indicados pelo Google, o anúncio pode melhorar a  visibilidade. |

## Preenchendo campos obrigatórios para o Google

Quando um produto apresenta o status **Processado com erro ou Processado com aviso**, significa que um ou mais dos dados obrigatórios para a integração do catálogo com o Google shopping não foram preenchidos ou configurados.  

A seguir saiba em que situação ele é obrigatório e como preencher cada campo:  

- **Price:** é um campo obrigatório e deve ser preenchido informando com qual tipo de preço deseja apresentar no Google shopping.
- Para identificar o erro de integração do preço do SKU com o Google, leia a documentação [Verificando integrações](https://help.vtex.com/pt/tutorial/verificando-integracao-no-bridge/#preco).   
- **Availability ou Disponibilidade:** é um campo obrigatório. Caso a integração de um SKU apresente erro, confira as documentações de [Gerenciamento de inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139) e [Estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb).  
- **EAN/UPC:** é um campo obrigatório, existente no [módulo de Catálogo](https://help.vtex.com/pt/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe) e deve ser preenchido com o código de identificação único do SKU (código de barras), aceita até 13 caracteres numéricos.  
- **Manufacturer code ou Código do fabricante:** é um campo obrigatório, existente no [módulo de Catálogo](https://help.vtex.com/pt/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe) e deve ser preenchido com o código fornecido pelo fabricante para identificar seu produto. Caso algum produto tenha um código específico, esse campo deve se preenchido.  

>ℹ️ Os códigos EAN/UPC e Código do fabricante são obrigatórios em venda de produtos manufaturados. Saiba quando aplicar o [EAN/UPC](https://support.google.com/merchants/answer/6324461?hl=pt-BR&ref_topic=6324338&sjid=10867212756007821438-SA) ou o [Código do fabricante](https://support.google.com/merchants/answer/6324482?hl=pt-BR&ref_topic=6324338&sjid=10867212756007821438-SA) a um produto.  

- **Size:** é um campo obrigatório apenas para todos os produtos de vestuário que corresponde à categoria [ID1604](https://support.google.com/merchants/answer/6324492?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1) e calçados que correspondem à categoria [ID187](https://support.google.com/merchants/answer/6324492?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1) no Google. Se aplicável ao seu produto preencha com o tamanho referente ao SKU.  

O campo Size ou Tamanho, é um [campo customizado](https://help.vtex.com/pt/tutorial/criando-um-campo-de-produto--tutorials_106) que precisa ser criado pelo seller. Veja abaixo qual o nome e tipo do campo.  

| **Nome do campo** | **Tipo do campo** |
|:---:|:---:|
| Tamanho | Texto |

Campo desse tipo suporta o preenchimento de valores alfanuméricos como, **P,M,G, GG, 41,42,37,33**.  

- **Color:** é um campo obrigatório apenas para todos os itens de vestuário e acessórios que corresponde à [categoria ID166](https://support.google.com/merchants/answer/6324487?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1) no Google. Se aplicável ao seu produto preencha com a cor referente ao SKU.  

O campo Color ou cor, é um [campo customizado](https://help.vtex.com/pt/tutorial/criando-um-campo-de-produto--tutorials_106) e deve ser criado pelo seller. Veja abaixo qual o nome e tipo do campo.  

| **Nome do campo** | **Tipo do campo** |
|:---:|:---:|
| Cor | Texto |

Campo desse tipo suporta o preenchimento de valores alfanuméricos como, **Verde, Preto, Amarelo, Rosa**.

>ℹ️ Cada SKU só permite uma cor.  

- **Gender:** é um campo obrigatório apenas para todos os itens de vestuário e acessórios que corresponde à [categoria ID166](https://support.google.com/merchants/answer/6324479?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1) no Google. Se aplicável ao seu produto preencha com a cor referente ao SKU.  

O campo Gender ou gênero, é um [campo customizado](https://help.vtex.com/pt/tutorial/criando-um-campo-de-produto--tutorials_106) e deve ser criado pelo seller. Veja abaixo qual o nome e tipo do campo.  

| **Nome do campo** | **Tipo do campo** | **Valor do campo** |
|:---:|:---:|:---:|
| Gênero | Combo |Masculino, Feminino e Unissex.|

Campo desse tipo requer preenchimento de valores pré-definidos. Somente os valores listado em “valor do campo” será aceito pela integração com o Google.  

- **Age Group:**  é um campo obrigatório para todos os itens de vestuário e acessórios que corresponde à [categoria ID166](https://support.google.com/merchants/answer/6324463?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1#:~:text=Veja%20a%20seguir%20os%20valores%20aceitos%20para%20este%20atributo%3A) no Google. Se aplicável ao seu produto preencha com a cor referente ao SKU.  

O campo Age Group ou Faixa etária, é um [campo customizado](https://help.vtex.com/pt/tutorial/criando-um-campo-de-produto--tutorials_106) e deve ser criado pelo seller. Veja abaixo qual o nome e tipo do campo.  

| **Nome do campo** | **Tipo do campo** | **Valor do campo** |
|:---:|:---:|:---:|
| Faixa etária | Combo |Recém-nascido (até 3 meses), Bebê (de 3 meses a 12 meses), Criança pequena (de 1 ano a 5 anos),Criança (de 5 anos a 13 anos) e Adulto (a partir de 13 anos).|  

Campo desse tipo requer preenchimento de valores pré-definidos. Somente os valores listado em “valor do campo” será aceito pela integração com o Google.  
