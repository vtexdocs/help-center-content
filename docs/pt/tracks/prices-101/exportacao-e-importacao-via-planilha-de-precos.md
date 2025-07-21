---
title: 'Exportação e importação via planilha de preços'
id: 5lV5s54lQ69zPXxngbpI5D
status: PUBLISHED
createdAt: 2023-01-16T16:06:30.799Z
updatedAt: 2024-08-23T16:20:51.694Z
publishedAt: 2024-08-23T16:20:51.694Z
firstPublishedAt: 2023-01-17T12:31:08.844Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: exporting-and-importing-via-a-price-spreadsheet
locale: pt
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugPT: precos-101
---

O cadastro de preços via planilha é indicado para catálogos com inúmeros produtos e necessitam cadastrar ou alterar preços em massa.

O processo é dividido em duas partes:

1. [Exportação de preços](#exportacao-de-precos)
2. [Importação de preços](#importacao-de-precos)

## Exportação de preços

O primeiro passo para cadastrar ou alterar preços dos seus produtos anunciados é fazer a exportação dos preços. A exportação faz a extração dos preços na plataforma VTEX e são permitidas três exportações de simultâneas. 

Você poderá visualizar o histórico de exportação de preço das últimas 24 horas, veja mais na seção [Acompanhar exportação](#acompanhar-exportacao). 

Para exportar a planilha de preços, siga os passos a seguir:

1. No Admin VTEX, acesse *Catálogo > Preços > Lista de preços*.
2. Na parte superior da tela, clique no ícone de exportação <i class="fas fa-download"></i>.
> Uma barra lateral irá aparecer.
3. No campo **Selecione a planilha que deseja exportar**, você deverá escolher uma planilha dentre as seguintes opções:
   - **Tabela de preços-base (padrão):** o [preço base](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) é o preço de referência de um SKU para todas as tabelas de preço.
   - **Tabela de preços fixos:** o [preço fixo](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy) sobrepõe o preço base mesmo com a regra de preço configurado.
   - **Tabela de preços calculados:** o preço final que será exibido na loja, esse preço não reflete promoções.
4. Clique no botão `Exportar tabela`.
> Em seguida, a tabela de preço selecionada abrirá na interface.
5. No arquivo que se abriu, preencha as linhas com os dados de preço dos SKUs. A Tabela de Preço exportada possui apenas produtos com preços cadastrados, produtos que não possuem preço não aparecem na planilha. Para entender melhor o significado de cada campo, acesse nosso artigo sobre [preencher campos da planilha de importação de preços base](/pt/tutorial/preencher-campos-da-planilha-de-importacao-de-precos-base--4Jox8TeQ5feqAn78TZ0DNA) ou [preencher campos da planilha de importação de preços fixos](/pt/tutorial/preencher-campos-da-planilha-de-importacao-de-precos-fixo--50RFoH3ruV97FJgeBUCURh).

<div class="alert alert-warning">
A exportação de tabelas de preços no formato <strong>XLSX</strong> está limitada a 1.048.576 linhas devido a uma limitação do Excel, exportações que excedam esse limite geram erro.
</div>

Após a exportação ser concluída, você receberá a planilha pelo seu email cadastrado na loja VTEX. Também será possível fazer o download da exportação clicando no botão `Baixar exportação`.

### Acompanhar exportação

Em **Acompanhe suas exportações**, você poderá acompanhar em tempo real o status de cada planilha exportada com seu percentual de conclusão que pode variar entre 0% e 100%. Além de visualizar o histórico de exportação de preços nas últimas 24 horas.

## Importação de preços

O segundo passo para cadastrar ou alterar os preços em massa é fazer a importação dos preços. A importação substitui os preços antigos pelos novos preços dos seus produtos anunciados.

Essa etapa é obrigatória para cadastro ou alteração de preços.

Depois de preencher os dados da planilha, siga os passos abaixo para realizar a importação: 

1. No Admin VTEX, acesse *Catálogo > Preços > Lista de preços*.
2. Na parte superior da tela, clique no ícone de importação <i class="fas fa-upload"></i>.
> Uma barra lateral irá aparecer.
3. Selecione alguma opção de **Tabela de preços**.
4. A opção **Sobrescrever todos os preços existentes** substitui todos os preços fixos da sua loja pelos preços da sua planilha. Caso algum preço existente na loja não esteja presente na planilha, ele será apagado. Desmarque esta opção caso você queira manter os preços fixos existentes.
5. Clique no botão `Importar tabela`.
6. Selecione a planilha preenchida que deseja importar. 
7. Clique em `Abrir`.

No final da operação, sua planilha terá sido importada e seus preços terão sido salvos.
