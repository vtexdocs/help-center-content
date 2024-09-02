---
title: 'Filtros de qualidade dos anúncios'
id: 4xm0gi8leCyxHj8YdgHSJH
status: PUBLISHED
createdAt: 2023-02-27T12:15:26.682Z
updatedAt: 2024-06-20T21:38:38.621Z
publishedAt: 2024-06-20T21:38:38.621Z
firstPublishedAt: 2023-02-27T19:32:00.584Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: filtros-de-qualidade-dos-anuncios
locale: pt
legacySlug: filtros-de-qualidade-dos-anuncios
subcategory: 2zVauFUkYn8vgS0y0MfWeK
---

Marketplaces precisam revisar e aprovar anúncios enviados por sellers para que os produtos sejam adicionados ao catálogo. No Admin VTEX esse [processo de catalogação](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus--tutorials_396) é feito por meio da página SKUs Recebidos. 

É importante para a operação do marketplace que existam critérios de qualidade para que os anúncios que chegam até a página já estejam de acordo com os requisitos que importam na curadoria de seu catálogo. 

**Filtros de qualidade dos anúncios** é a página onde marketplaces cadastram e gerenciam os grupos de requisitos aplicados ao processo de catalogação de SKUs recebidos. Para acessá-la, em seu Admin VTEX, vá para **Marketplace > Qualidade dos Anúncios** ou digite __“Qualidade dos anúncios”__ na barra de busca.

![PT offer quality](//images.ctfassets.net/alneenqid6w5/7GL1AaqkfQqjLCj262wg04/d51603a30cf92b54035d2229ae23792a/PT_offer_quality.png)

Nesse artigo, saiba como:

* [Visualizar "Default Rules"](#visualizar-default-requirements). 
* [Criar grupos de requisitos](#criar-grupos-de-requisitos). 
* [Ativar e desativar grupos de requisitos](#ativar-e-desativar-grupos-de-requisitos). 
* [Editar e excluir grupos de requisitos](#editar-e-excluir-grupos-de-requisitos). 
* [Mover requisitos entre opcionais e obrigatórios](#mover-requisitos-entre-opcionais-e-obrigatorios). 
* [Catalogar anúncios com requisitos](#catalogar-anuncios-com-requisitos). 

## Por que usar essa funcionalidade

Uma vez que os requisitos são criados, os anúncios enviados por sellers que não se encaixam nos critérios são recusados automaticamente e separados dos outros, para que o marketplace os identifique e peça a correção aos sellers. Dessa forma, a quantidade de anúncios que devem ser analisados pelo time de catálogo do marketplace diminui, aumentando sua eficiência no processo de curadoria. Saiba mais em [Catalogar anúncios com requisitos](#catalogar-anuncios-com-requisitos).

A funcionalidade permite ao operador de marketplace realizar uma série de ações, cada uma com um benefício para seu negócio, como descrito na tabela a seguir. 

| Ação em Filtros de qualidade dos anúncios                                                                                                                                                                          | Benefício                                                                                                                                    |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Criar requisitos para filtrar anúncios que chegam na página SKUs Recebidos.                                                                                                                                       | Escala o onboarding de sellers e produtos, acelerando o time-to-revenue no canal marketplace.                                                |
| Especificar para quais sellers, categorias ou marcas as regras serão aplicadas, e também casos de exceção.                                                                                                        | Refina os critérios usados no processo de rejeição e aprovação de anúncios.                                                                  |
| Visualizar quais anúncios foram negados por não se encaixarem nos requisitos obrigatórios e/ou opcionais, encaminhando-os para as abas "Pendentes", "Em revisão" e "Recusados", baseado nos requisitos atingidos. | Possibilita que o time de catálogo do marketplace analise anúncios caso a caso, sabendo os motivos pelos quais não alcançaram os requisitos. |
| Trazer mais transparência aos critérios de catalogação de anúncios recebidos e como sellers e anúncios se adequam ou não.                                                                                         | Permite identificar que sellers e tipos de anúncios não atendem os requisitos, acelerando a correção de problemas.                           |

## Visualizar "Default requirements"

![PT Default requirements](//images.ctfassets.net/alneenqid6w5/6OxPTO8QO6o9zZ8kTt5tVG/7b191f93fedb9f951939925e481c473b/PT_Default_requirements.png)

A página já vem por padrão com alguns requisitos pré-cadastrados que serão aplicados a todas as categorias, sellers e marcas, chamados de "Default requirements", ou Regras padrão. Alguns desses critérios são configurados nativamente no [VTEX Matcher](https://help.vtex.com/pt/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424), a ferramenta aplicada aos marketplaces VTEX para auxiliar no processo de catalogação de anúncios recebidos. 

Não é possível desativar as "Default requirements", e estão à mostra na página para dar visibilidade a quais regras já se aplicam a todos os anúncios recebidos. Para visualizar as regras já ativas por padrão, na página _Filtros de qualidade dos anúncios_, selecione o grupo de requisitos `Default requirements` e visualize as opções:

* Título possui quantidade de caracteres máximo de 150
* Número de imagens no máximo 50
* Ref ID possui quantidade de caracteres máximo de 50
* EAN possui quantidade de caracteres máximo de 50

<div class="alert alert-info">
  É possível configurar a auto aprovação de anúncios pelo VTEX Matcher por meio de chamadas de API REST <a href="https://developers.vtex.com/vtex-rest-api/reference/saveaccountconfig">Save Account's Approval Settings</a>. São critérios diferentes dos disponíveis para visualização na página de Filtros de qualidade dos anúncios e se aplicam à aprovação automática de anúncios de determinados sellers.
  </div>

## Criar grupos de requisitos 
Crie grupo de requisitos para definir as regras aplicadas a sellers, categorias ou marketplaces. Os grupos de requisitos aplicam regras aos campos listados a seguir. Saiba mais sobre a definição de cada Tipo de requisito.

- [Preço](#preco)
- [Quantidade de Estoque](#quantidade-de-estoque)
- [Número de imagens](#numero-de-imagens)
- [Descrição](#descricao)
- [Título](#titulo)
- [EAN](#ean)
- [Ref ID](#ref-id)
- [Marca do seller](#marca-do-seller)
- [Marca](#marca)
- [Categoria](#categoria)
- [Categoria do Seller](#categoria-do-seller)
- [Especificação de SKU](#especificacao-de-sku)
- [Especificação de produto](#especificacao-de-produto)

É possível criar requisitos obrigatórios e/ou opcionais. Saiba mais sobre as implicações de cada requisito em [Catalogar anúncios com requisitos](#catalogar-anuncios-com-requisitos). 

<div class="alert alert-info">
Note que cada grupo de requisito só comporta um valor. Portanto, para adicionar mais de um valor é necessário criar outro grupo de requisito. Por exemplo, se o marketplace quiser adicionar as palavras "Blusas" e "Camisas" como requisitos obrigatórios para o campo Marca do seller, é necessário criar um grupo de requisito para "Blusas" e outro para "Camisas".
  </div>

Para criar um novo grupo de requisitos:

   1. Em seu Admin VTEX, acesse _Marketplace_ > **Qualidade dos anúncios**_.
   2. Clique no botão da opção desejada, entre as opções:
         * **Adicionar grupo de requisitos obrigatórios**: requisitos que são essenciais para que um anúncio esteja apta para entrar no catálogo do seu marketplace. Saiba mais sobre as consequências de requisitos obrigatórios em [Catalogar anúncios com requisitos](#catalogar-anuncios-com-requisitos).
         * **Adicione seu primeiro grupo de requisitos opcionais**: requisitos que são desejáveis para que um anúncio esteja apta para entrar no catálogo do seu marketplace. Saiba mais sobre as consequências de requisitos opcionais em [Catalogar anúncios com requisitos](#catalogar-anuncios-com-requisitos).
   3. Preencha os [campos do formulário](#campos-do-formulario), incluindo:  
         a. Informações do grupo   
         b. Segmentação  
         c. Adicionar casos de exceção (opcional)  
         d. Adicionar requisito  
   4. Clique em `Confirmar`.
   5. Clique em `Salvar`. 

Para que os grupos de requisitos sejam aplicados nos SKUs Recebidos, é necessário ativá-los. Saiba mais em [Ativar e desativar grupos de requisitos](#ativar-e-desativar-grupos-de-requisitos). 

### Campos do formulário

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-amwm"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Seção do formulário</span></th>
    <th class="tg-amwm"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Campo</span></th>
    <th class="tg-amwm"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Descrição</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Informações do grupo</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Nome do grupo</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Adicione o nome que identificará o grupo de requisitos para seu time. Exemplos: Requisitos para o Seller ABC, Requisitos de imagem, Filtros categoria Blusas. </span></td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="3"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Segmentação</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Categorias</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Defina se os requisitos se aplicarão a uma ou mais categorias.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Marcas</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Defina se os requisitos se aplicarão a uma ou mais marcas de um seller.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Sellers</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Defina se os requisitos se aplicarão a um ou mais sellers de um marketplace.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="3"><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Adicionar casos de exceção</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Categorias</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Defina quais categorias não serão afetadas por esse grupo de requisitos. </span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Marcas</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Defina quais marcas não serão afetadas por esse grupo de requisitos. </span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Sellers</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Defina quais sellers não serão afetados por esse grupo de requisitos. </span></td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="3"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Adicionar requisito</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Campo da anúncio</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Escolha qual campo será afetado pelo requisito entre as opções:</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">- Categoria</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">- Categoria do seller</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">- Descrição</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">- EAN</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">- Especificação de produto</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">- Especificação de SKU</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">- Marca</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">- Marca do seller</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">- Número de imagens</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">- Preço</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">- Quantidade de estoque</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">- Ref ID</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">- Tamanho da imagem</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">- Título</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Saiba mais em Tipos de Requisitos.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Operação</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Selecione a função aplicada aquele campo, como por exemplo "É", "Não é", "Igual a", "Mínimo", entre outros. Veja todas as opções disponíveis em Tipos de requisitos.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Valores</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Defina os valores que serão afetados pela operação. O seu preenchimento depende da operação selecionada, em algumas operações, o campo valores permitirá a inserção de mais de um valor. Veja todas as opções disponíveis em Tipos de requisitos. </span></td>
  </tr>
</tbody>
</table>

### Tipos de requisitos

É possível criar grupos de regras para diferentes aplicações de negócio. Cada grupo de requisito conta com o campo, operação e valores que o lojista determina. Confira a seguir os tipos de requisitos e operações disponíveis para cada um.

#### Preço

* **No mínimo:** valor mínimo do preço exigido nos anúncios recebidos.
* **No máximo:** valor máximo do preço exigido nos anúncios recebidos.

#### Quantidade de Estoque

* **No mínimo:** valor mínimo para estoque dos anúncios recebidos.
* **No máximo:** valor máximo para o estoque dos anúncios recebidos.

#### Número de imagens

* **No mínimo:** define a quantidade mínima de imagens necessárias para validar um anúncio.
* **No máximo:** define a quantidade máxima de imagens necessárias para validar um anúncio.
* **É:** define a quantidade exata de imagens necessárias para validar um anúncio.

#### Descrição

* **Possui palavra:** define uma string que deve estar contida na descrição de um anúncio.
* **Não possui palavra:** define uma palavra que não deve estar contida na descrição de um anúncio.
* **Não possui somente caractere:** define um caractere que não deve  estar contido na descrição de um anúncio.
* **Possui quantidade máxima de caracteres:** define limite máximo de caracteres contidas na descrição do anúncio.
* **Possui quantidade mínima de caracteres:** define limite máximo de caracteres contidas na descrição do anúncio.
* **Preenchido:** define a obrigatoriedade de a descrição estar preenchida.

#### Título

* **Possui palavra:** define uma palavra que deve estar contida no título de uma anúncio. Para adicionar mais termos é necessário criar outro grupo de requisito.
* **Não possui palavra:** define uma palavra que não deve estar contida no título de um anúncio. Para adicionar mais termos é necessário criar outro grupo de requisito.
* **Não possui somente caractere:** define se todos os caracteres do título devem estar em caixa alta (upper case) ou caixa baixa (lower case). 
* **Possui quantidade máxima de caracteres:** define limite máximo de caracteres contidas no título do anúncio.
* **Possui quantidade mínima de caracteres:** define limite máximo de caracteres contidas no título do anúncio.
* **Preenchido:** define a obrigatoriedade de o título estar preenchido.

#### EAN

* **Preenchido:** define a obrigatoriedade do campo EAN estar preenchido no anúncio.
* **Possui quantidade de caracteres igual a**: define que o EAN deve ter um número específico de caracteres.

#### Ref ID

* **Preenchido:** define a obrigatoriedade do campo Ref ID estar preenchido na anúncio.
* **Possui quantidade de caracteres igual a**: define que o Ref ID deve ter um número específico de caracteres.

#### Marca do seller

* **É:** define a obrigatoriedade do campo marca do anúncio corresponder a um valor específico.
* **Não é:** define a obrigatoriedade do campo marca do anúncio não corresponder a um valor especificado na regra.
* **Não possui:** define uma palavra que não deve estar contida na marca de um anúncio. Para adicionar mais termos é necessário criar outro grupo de requisito.
* **Possui:** define uma palavra que não deve estar contida na marca de um anúncio. Para adicionar mais termos é necessário criar outro grupo de requisito.
* **Preenchido:** define a obrigatoriedade de a marca estar preenchida.

#### Marca 

Esse campo é preenchido pelo [VTEX Matcher](https://help.vtex.com/pt/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) quando a marca enviada pelo seller já foi mapeada anteriormente. É uma regra válida para que sellers só enviem marcas que já foram previamente mapeadas, ou bloquear alguma marca específica que foi mapeada no passado.

* **Está mapeado:** define a obrigatoriedade da marca enviada pelo seller estar mapeada no VTEX Matcher.
* **É:** define a obrigatoriedade do campo marca do anúncio corresponder a um valor específico.
* **Não é:** define a obrigatoriedade do campo marca do anúncio não corresponder a um valor especificado na regra.

#### Categoria

Esse campo se refere às categorias mapeadas, ou o campo do anúncio que é preenchido caso a categoria do seller já tenha sido mapeada pelo marketplace.

* **É:** define a obrigatoriedade do campo categoria do anúncio corresponder a um valor específico.
* **Não é:** define a obrigatoriedade do campo categoria do anúncio não corresponder a um valor especificado na regra.
* **Possui:** define um valor que deve estar contido na categoria do seller.
* **Não possui:** define um valor que não deve estar contido na categoria do seller. 
* **Preenchido:** define a obrigatoriedade do campo "Categoria" estar preenchido para o anúncio do seller.

#### Categoria do Seller

* **É:** define a obrigatoriedade do campo _Categoria_ do anúncio corresponder a um valor específico.
* **Não é:** define a obrigatoriedade do campo _Categoria_ do anúncio não corresponder a um valor especificado na regra.
* **Possui:** define um valor que deve estar contido na categoria do seller.
* **Não possui:** define um valor que não deve estar contido na categoria do seller. 
* **Preenchido:** define a obrigatoriedade do campo _Categoria_ estar preenchido para o anúncio do seller.

#### Especificação de SKU 

* **Está preenchido:** define a obrigatoriedade da especificação de SKU estar preenchida.
* **Não está preenchido:** define a obrigatoriedade da especificação de SKU não estar preenchida.
* **Possui:** define um valor que deve estar contido na especificação de SKU.
* **Não possui:** define um valor que não pode estar contigo na especificação de SKU.

#### Especificação de produto

* **Está preenchido:** define a obrigatoriedade da especificação de produto estar preenchida.
* **Não está preenchido:** define a obrigatoriedade da especificação de produto não estar preenchida.
* **Possui:** define um valor que deve estar contido na especificação de produto.
* **Não possui:** define um valor que não pode estar contigo na especificação de produto.

## Ativar e desativar grupos de requisitos

É do interesse do marketplace escolher quando os requisitos criados serão aplicados aos novos SKUs recebidos, e até mesmo aos SKUs já recebidos anteriormente. Para isso, a página permite ativar e desativar todos os grupos de requisitos criados, para que os filtros sejam aplicados como um todo nos anúncios recebidos por sellers.  

Note que ao ativar os requisitos, os anúncios serão automaticamente rejeitados ou encaminhados para revisão manual com base nos critérios definidos. 

Para ativar os requisitos criados:

1. Em seu Admin VTEX, vá para _Marketplace_ > **Qualidade dos anúncios**. 
2. Selecione a opção `Ativo`.
3. Marque a opção desejada entre:
      * Novos anúncios e SKUs pendentes já existentes.
      * Somente novos anúncios.
4. Clique em **Ativar**.

Para desativar, selecione a opção **Inativo > Confirmar**.

## Editar e excluir grupos de requisitos

Para editar grupos de requisitos, na página _Filtros de qualidade dos anúncios_, **selecione o grupo desejado > clique no menu > Editar > altere os campos desejados > Salvar**.

Para excluir grupos de requisitos, **selecione o grupo desejado > clique no menu > Excluir grupo > Excluir**.

## Mover requisitos entre opcionais e obrigatórios

É possível mover um requisito que foi criado como opcional para que se torne um requisito obrigatório e vice e versa. Para isso, na página _Filtros de qualidade dos anúncios_, **selecione o grupo desejado > clique no menu > Mover para requisitos opcionais / obrigatórios > Confirmar**.

## Catalogar anúncios com requisitos

Uma vez que os grupos de requisitos foram criados e ativados, eles passam a valer seguindo as regras configuradas. Isso significa que todos os anúncios enviados por sellers serão filtrados de acordo com os critérios definidos para sellers, marcas ou categorias cheguem até a página SKU Recebidos, onde o [processo de catalogação](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus--tutorials_396) acontece. 

A tabela a seguir descreve o que cada tipo de requisito aciona para anúncios que se encaixam ou não nos critérios estabelecidos.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Tipo de requisito</span></th>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Ação do requisito</span></th>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Para onde são direcionados os anúncios</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax" rowspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Requisitos obrigatórios</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Reprovam automaticamente anúncios que não se encaixam nos critérios definidos, encaminhando-os para a aba Recusados.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Aba Recusados</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Encaminham anúncios que atendem aos critérios definidos para a aba  Pendentes.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Aba Pendentes</span></td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Requisitos opcionais</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Encaminham anúncios que não se encaixam para a aba Revisão.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Aba Revisão</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Encaminham anúncios que atendem aos critérios definidos para a aba  Pendentes, se também se encaixarem nos requisitos obrigatórios.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Aba Pendentes</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Nenhum requisito configurado</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Anúncios são encaminhados para a aba Pendentes.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Aba Pendentes</span></td>
  </tr>
</tbody>
</table>

