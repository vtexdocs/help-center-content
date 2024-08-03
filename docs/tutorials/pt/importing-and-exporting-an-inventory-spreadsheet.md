---
title: 'Importar e exportar planilha de estoque'
id: tutorials_2034
status: PUBLISHED
createdAt: 2017-04-27T21:55:43.488Z
updatedAt: 2023-07-24T15:03:49.647Z
publishedAt: 2023-07-24T15:03:49.647Z
firstPublishedAt: 2017-04-27T23:03:50.695Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: importando-e-exportando-planilha-de-estoque
locale: pt
legacySlug: importando-e-exportando-planilha-de-estoque
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

Antes de realizar a importação do estoque, é preciso exportar a planilha de estoque. Mesmo que ainda não tenha nenhum estoque cadastrado, é a partir da exportação que se obterá a planilha no modelo correto de importação. Ao seguir o passo a passo abaixo, você receberá por email um arquivo contendo a planilha exportada.

## Como exportar estoque

1. No Admin VTEX, acesse **Envio > Estratégia de Envio** ou digite *Estratégia de envio* na barra de busca no topo da página.    
2. Clique na aba **Estoques**.
3. Clique no botão `:` ao lado de *Criar estoque*.
4. Clique na opção **Exportar itens**.

Feito isso, em alguns minutos será enviado o e-mail com o arquivo exportado.
Se você tiver mais de um estoque cadastrado, essa mesma ação também permite exportar uma planilha com todos os itens de estoques cadastrados em sua loja ao mesmo tempo. Se seu estoque for muito extenso, esse arquivo será dividido em mais de uma planilha. Você também receberá por e-mail os links correspondentes de cada planilha.

## Como importar estoque

1. No Admin VTEX, acesse **Envio > Estratégia de Envio** ou digite *Estratégia de envio* na barra de busca no topo da página.   
2. Clique na aba **Estoques**.  
3. Clique no botão `:` ao lado de *Criar estoque*.  
4. Clique na opção **Importar itens**.  
5. Escolha um arquivo de seu computador, e arreste-o para a tela.   
6. Clique em**Importar**.  

<div class=”alert alert-warning”>
Caso estas indicações não sejam respeitadas, o sistema pode não aceitar a importação da planilha ou o número de itens a venda pode ficar incorreto.
A importação do estoque irá sobrescrever os valores atuais do seu estoque cadastrado. Só importe se desejar substituir os dados dos SKUs cadastrados no Admin, pelas informações contidas no arquivo .xls.
</div>

Por meio da planilha de estoque, é possível inserir em massa a quantidade de SKUs para cada estoque da sua loja. A importação de planilha de estoque é a maneira mais simples de inserir a quantidade de cada SKU em sua loja massivamente.  

Desse modo, cada linha da planilha diz respeito a um SKU por estoque. Ou seja, se o mesmo SKU constar em mais de um estoque, ele aparecerá uma vez para cada um desses estoques.  A planilha contempla todos os estoques e variações de produtos cadastrados na sua loja.

Essa importação é feita utilizando a planilha do Excel no formato .xls (opção Excel 97-2003 Workbook), cujo modelo é o mesmo exportado acima. Caso seu arquivo tenha mais de 10 MB, é necessário o uso do arquivo compactado com a extensão .zip.

Além disso, o preenchimento correto da planilha depende de duas regras. São elas:

- Cada coluna da planilha deve conter ou um número ou um texto.
- A atualização da quantidade de SKUs deve ser feita apenas na coluna TotalQuantity.

## Campos de cadastro da planilha de estoque

A seguir, confira o significado de cada campo da planilha de estoque.

- **SkuId** (texto): ID do SKU.  
- **TotalQuantity** (número): quantidade de unidades do SKU.  
- **ReservedQuantity** (número): preenchida automaticamente ao exportar a planilha. Considera a quantidade de SKUs que estão reservados em compras.   
- **AvailableQuantity** (número): preenchida automaticamente ao exportar a planilha. Quantidade do SKU disponível para ser vendida. Calculado considerando a quantidade total, menos a quantidade reservada.  
- **WarehouseId** (texto): ID do estoque, segundo cadastrado no módulo de Estratégia de envio.  
- **WarehouseName** (texto): nome do estoque, segundo cadastrado no módulo de Estratégia de envio.  
- **RefId** (texto): código de referência do SKU.  
- **IsActive** (texto): indica se o SKU está ativo (`true`) ou inativo (`false`) no catálogo.  
- **UnlimitedQuantity** (texto): indica se o estoque do SKU foi definido como estoque infinito (`true`) ou não (`false`).  
- **LockIds** (texto): Código identificador da reserva.  
- **DispatchedReservations** (número): número de itens do SKU que já passaram do status `Pronto para manuseio`, ou seja, cujas reservas já caíram.  

<div class = "alert alert-info">
  Para incluir um item com estoque infinito, é preciso preencher o campo <b>TotalQuantity</b> com o valor <code>1000000</code> e alterar o campo <b>UnlimitedQuantity</b> para <code>True</code>. 
</div>
