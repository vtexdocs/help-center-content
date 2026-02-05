---
title: 'Mapeamento de categorias, marcas e especificações para marketplace'
id: tutorials_1521
status: PUBLISHED
createdAt: 2017-04-27T21:56:09.345Z
updatedAt: 2022-10-31T15:54:10.443Z
publishedAt: 2022-10-31T15:54:10.443Z
firstPublishedAt: 2017-04-27T23:03:50.588Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: mapping-categories-and-brands-for-the-marketplace
legacySlug: mapeando-categorias-e-marcas-para-marketplace
locale: pt
subcategoryId: 24EN0qRBg4yK0uusGUGosu
---

Quando uma loja atua como marketplace, é preciso ter em mente que o catálogo dos seus sellers tem uma estrutura totalmente independente da sua. Para compatibilizar as definições entre ambos catálogos, é necessário que seja feito o mapeamento de [categorias](/pt/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf), [marcas](/pt/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh) e [especificações](/pt/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) quando um seller:

- Envia seus produtos pela primeira vez  
- Envia produtos com informações que ainda não foram mapeadas  

Isto permite que os produtos enviados pelo seller sejam inseridos com as informações equivalentes no catálogo do marketplace. É importante notar que o envio de um item novo, cujas informações ainda não foram mapeadas, não modifica valores já mapeados no marketplace. Para mapear marcas, categorias e especificações:

1. Na seção de Marketplace do seu admin, acesse a aba __Sellers__.  
2. Clique em __Categorias e marcas__.  
3. Clique em __Novo Mapeamento__.  
4. Selecione um seller entre as opções e clique em __Adicionar__.  
5. Para o seller que foi adicionado ao painel:  
  a. Faça o [mapeamento de categorias](/pt/tutorial/mapping-categories-and-brands-for-the-marketplace--tutorials_1521#mapeamento-de-categorias).    
  b. Faça o [mapeamento de marcas](/pt/tutorial/mapping-categories-and-brands-for-the-marketplace--tutorials_1521#mapeamento-de-marcas).   
  c. Faça o [mapeamento de especificações](/pt/tutorial/mapping-categories-and-brands-for-the-marketplace--tutorials_1521#mapeamento-de-especificacoes).  
6. Clique em __Atualizar mapeamento__.  

## Mapeamento de categorias

Depois que o seller completar o envio de produtos para o Marketplace, é necessário que o marketplace faça o mapeamento de categorias. A correspondência entre categorias do marketplace e as categorias do seller é feita através de uma planilha.

### Preenchendo a planilha
Você pode baixar o modelo atualizado da planilha no botão Baixar tabela atual, no seller adicionado, na página de Categorias e Marcas. A planilha contém as seguintes colunas: 

| Coluna | Nome                               | Descrição                                                                                                                                                |
|--------|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| A      | Marketplace categories             | Nome da categoria no marketplace VTEX. Os números entre colchetes correspondem ao ID da categoria no marketplace.                                        |
| B      | Categories sent by seller          | Nome da categoria no catálogo do seller. Se o mapeamento não tiver sido feito anteriormente, essa coluna terá células vazias.                            |
| C      | Unmapped categories sent by seller | Categorias do seller, que ainda não foram mapeadas. Se essa coluna vier vazia, significa que o seller ainda não enviou seus produtos para o marketplace. |

Para preencher a planilha:

1. Veja todas as categorias que estão na __coluna A__. Estes são os valores que você associará às categorias do seller na coluna C, durante o passo 2.  
2. Preencha a __coluna B__ com a categoria correspondente da __coluna C__.   
3. Repita o processo até a __coluna C__ ficar vazia.  
4. Salve o __arquivo XLS__ da planilha.  
5. Em *Mapear categorias*, envie a planilha atualizada pelo botão __Atualizar mapeamento de categorias__.   

> ℹ️ Caso o programa utilizado para abrir a planilha utilize o padrão de separadores “;”, deve-se substituí-los para “,” antes de enviar o arquivo.

### Exemplo
Neste exemplo, baixamos a planilha atual que veio com os seguintes valores em cada coluna:

| Marketplace Categories                      | Categories sent by seller | Unmapped categories sent by seller |
|---------------------------------------------|---------------------------|------------------------------------|
| [3] Feminino \| [2] Acessórios \| [8] Bolsa |                           | <br>Jeans / Shorts                 |
| [3] Feminino\| [28] Jeans                   |                           | Praia / Bolsas                     |
|                                             |                           | Jeans / Bermudas                   |

Faremos o mapeamento das categorias do seller, buscando a melhor correspondência possível com as categorias que já existem no marketplace. Terminado o mapeamento, a planilha ficará da seguinte forma:

| Marketplace Categories                              | Categories sent by seller | Unmapped categories sent by seller |
|-----------------------------------------------------|---------------------------|------------------------------------|
| [3] Feminino \| <br>[2] Acessórios \| <br>[8] Bolsa | Praia / Bolsas            |                                    |
| [3] Feminino\| <br>[28] Jeans                       | Jeans / Shorts            |                                    |
| [3] Feminino\| <br>[28] Jeans                       | Jeans / Bermudas          |                                    |

> ℹ️ Note que mais de uma categoria no catálogo do seller se encaixou na mesma categoria do marketplace (Feminino / Jeans). Nesse caso, duplique a linha correspondente em **Marketplace categories**, e cole os valores de *Unmapped categories* sent by seller em cada linha duplicada.

## Mapeamento de marcas
Depois que o seller completar o [envio de produtos para o Marketplace](/pt/tutorial/entendendo-a-catalogacao-de-produtos-para-o-marketplace), é necessário que o marketplace faça o mapeamento de marcas. A correspondência entre marcas do marketplace e as marcas do seller é feita através de uma planilha.

### Preenchendo a planilha
Você pode baixar o modelo atualizado da planilha no botão **Baixar tabela atual**, no seller adicionado, na página de Categorias e Marcas. A planilha contém as seguintes colunas: 

| Coluna | Nome                           | Descrição                                                                                                        |
|--------|--------------------------------|------------------------------------------------------------------------------------------------------------------|
| A      | Marketplace brands             | Nome da marca no marketplace VTEX. Os números entre colchetes correspondem ao ID da marca no marketplace.        |
| B      | Brands sent by seller          | Nome da marca no catálogo do seller. Se o mapeamento não tiver sido feito anteriormente, essa coluna virá vazia. |
| C      | Unmapped brands sent by seller | Marcas do seller, que ainda não foram mapeadas.                                                                  |

1. Veja todas as marcas que estão na __coluna A__. Estes são os valores que você associará às marcas do seller na coluna C, durante o passo 2.    
2. Preencha a __coluna B__ com a marca correspondente da coluna C.     
3. Repita o processo até a __coluna C __ficar vazia.    
4. Salve o __arquivo XLS__ da planilha.    
5. Em *Mapear marca*s, envie a planilha atualizada pelo botão __Atualizar mapeamento de marcas__.     

> ℹ️ Caso o programa utilizado para abrir a planilha utilize o padrão de separadores “;”, deve-se substituí-los para “,” antes de importar o arquivo.

### Exemplo
Neste exemplo, baixamos a planilha atual que veio com os seguintes valores em cada coluna:

| Marketplace Brands | Brands sent by seller | Unmapped Brands sent by seller |
|--------------------|-----------------------|--------------------------------|
| Adidas             |                       | Animale                        |
| C&A                |                       | Farm                           |
| Animale            |                       |                                |
| Farm               |                       |                                |

Faremos o mapeamento das marcas do seller, associando as marcas que já existem no marketplace com aquelas enviadas pelo seller. Terminado o mapeamento, a planilha ficará da seguinte forma:

| Marketplace Brands | Brands sent by seller | Unmapped Brands sent by seller |
|--------------------|-----------------------|--------------------------------|
| Adidas             |                       |                                |
| C&A                |                       |                                |
| Animale            | Animale               |                                |
| Farm               | Farm                  |                                |

Note que nem todas as marcas do marketplace tiveram uma correspondência nesse caso. Isso varia de acordo com a oferta de produtos do seller, e a variedade de marcas que o marketplace já possui.

## Mapeamento de Especificações

Especificações são propriedades adicionais que podem ser cadastradas nos produtos ou SKUs da sua loja. Depois que o seller completar o [envio de produtos](/pt/tutorial/entendendo-a-catalogacao-de-produtos-para-o-marketplace), é necessário que o marketplace faça o mapeamento de especificações de produtos e SKUs. O mapeamento é feito manualmente, por meio da página de Categorias e Marcas, para apontar as equivalências entre os campos no marketplace e no seller. 

Quando um seller envia um produto com uma especificação que não foi mapeada pelo marketplace, e o marketplace [aprova](/pt/docs/tutorials/sugerindo-e-aprovando-skus) esse produto, um novo SKU é criado, apesar de já existir um SKU no catálogo do marketplace ao qual associá-lo. A especificação não mapeada (ex. cor) ou seu valor (ex. amarelo) será registrada como um **Atributo não estruturado** no catálogo do marketplace, mas **não aparecerá no storefront do marketplace**. Portanto, é necessário mapear todas as especificações e seus valores, para que elas sejam visíveis para os compradores. Você pode visualizar os Atributos não estruturados em seu Admin. Acesse *Catálogo > Produtos e SKUs > escolha um item da lista > clique na aba de Especificações*.

Para realizar o mapeamento de especificações de produtos e SKUs, siga o passo a passo abaixo:

1. No campo *especificações*, clique no botão __Mapear textos das especificações__.    
2. Na coluna de *Seller*, preencha o valor da especificação correspondente ao catálogo do __seller__.      
3. Na coluna *Marketplace*, preencha o valor correspondente à especificação no catálogo do  __marketplace__. Você consegue encontrá-la ao navegar pela sua árvore de categorias disponível em Produtos > Catálogo > Categorias.    
4. Clique em __Adicionar entrada__ para repetir o processo, até que todas as especificações do seller contenham uma correspondência.    
4. Clique em __Atualizar mapeamento__.     

### Exemplo
Faremos o mapeamento das especificações do seller, associando as especificações que já existem no marketplace com aquelas presentes no catálogo do seller. Note que todas as especificações divergentes devem ser mapeadas, mesmo que a única diferença seja a capitalização da palavra. Terminado o mapeamento, a tabela ficará da seguinte forma:

| Seller   | Marketplace |
|----------|-------------|
| VOLTAGEM | Volts       |
| 37       | 38          |
| tamanho  | Tamanho     |
| Mulher   | feminino    |
| gg       | GG          |
| NÚMERO   | Número      |

### Especificações e aprovação de SKUs Recebidos

O mapeamento de especificações é aplicado no site do marketplace de formas diferentes, dependendo da ação tomada no módulo [SKUs Recebidos](/pt/tutorial/sugerindo-e-aprovando-skus/), ao aprovar SKUs do seller:

- __Associar a um SKU existente__: o mapeamento de especificações é desconsiderado pelo sistema do marketplace, pois o SKU já existe no marketplace com as mesmas especificações.   
- __Associar a um produto existente:__ o mapeamento só é considerado para as especificações de SKU. Isso ocorre dado que as especificações de produto já estão presentes no marketplace.  
- __Criar um novo produto__: o mapeamento é aplicado por completo, para especificações de produtos e SKUs vindas do seller.  

## Saiba Mais

- [Aprovar produtos](/pt/tutorial/sugerindo-e-aprovando-skus/)    
- [Criar política comercial](/pt/docs/tutorials/criar-uma-politica-comercial)    
- [Política comercial para marketplaces](/pt/docs/tutorials/configurando-a-politica-comercial-para-marketplace)    

