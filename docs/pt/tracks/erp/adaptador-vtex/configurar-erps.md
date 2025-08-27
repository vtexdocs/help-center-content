---
title: 'Configurar ERPs'
id: RwC5htApuQeFoX0FQiaaY
status: PUBLISHED
createdAt: 2021-10-06T15:31:09.550Z
updatedAt: 2021-10-15T13:25:13.760Z
publishedAt: 2021-10-15T13:25:13.760Z
firstPublishedAt: 2021-10-06T16:13:45.865Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: configurar-erps
locale: pt
trackId: 132YFN170Jvs6ZUBGh8w2e
trackSlugEN: adaptador-vtex
order: 4
---

Esta seção apresenta o passo-a-passo de confirmação dos ERPs:

-  [Winthor – PCSistemas](#ambiente-winthor)
-  [Protheus](#ambiente-protheus)

## Ambiente Winthor

Tudo o que você precisa é acessar a tela da integradora clicando em  e, em seguida, na filial utilizada para integrar com Ecommerce, você deve alterar os campos URL de integração e o campo Token, conforme os passos abaixo:

![integra winthor-adaptador](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/erp/adaptador-vtex/configurar-erps_1.png)

1. No campo URL da integração, insira o o endereço: `https://adapterstaging.ciashop.com.br`. 
2. Após executar todo o processo de validação da integração com o ambiente de homologação (`https://adapterstaging.ciashop.com.br`), você deve requisitar ao time de suporte VTEX CURITIBA, para que seja liberado o acesso ao ambiente de produção do adapter.
3. No campo token, inserir o valor do token fornecido pela equipe suporte VTEX CURITIBA.
4. Após as alterações clique no botão `Testar Conexão`. 
5. Após a mensagem de confirmação da conexão, clique em `Salvar`.

## Ambiente Protheus

Tudo o que você precisa fazer no ambiente Protheus é alterar os valores  de três parâmetros - **URL**, **usuário** e **senha do webservice CIASHOP** - no módulo **SIGACFG**.

1. No ambiente Proteus, acesse o **SigaCFG**. 
2. No menu lateral, acesse **Ambiente** > **Cadastros**. 
3. Clique em **Parâmetros**. A seguinte tela será exibida:
![protheusParametros-adaptador](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/erp/adaptador-vtex/configurar-erps_2.png)
4. Na barra de ferramentas superior, clique no botão `FILTRO`. Abrirá a tela **Expressão de Filtro**:
![protheusParametros2-adaptador](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/erp/adaptador-vtex/configurar-erps_3.png)
5. Na caixa **campos**, informe `X6_VAR`.
6. Na caixa **Operadores**, escolha **Contém a expressão**.
7. Na caixa **expressão** informe `MV_LJEC`.
8. Clique em **Adicionar**. A expressão será adicionada na caixa **Filtro**.
9. Clique em `OK`. A lista apresentará todos os parâmetros utilizados pela integração com o ecommerce.
10. Para trocar a URL do webservice pela URL do adaptador, procure e selecione o campo `MV_LJECOMK` e, em seguida, clique no botão `Editar` contido na barra de ferramenta superior. Altere os valores de URL para `https://adapterstaging.ciashop.com.br`, existentes nos três campos de URL e clique em `OK`.
11. Para trocar login do webservice pelo login do adaptador, procure e selecione o campo `MV_LJECOMH` e, em seguida, clique no botão `Editar` contido na barra de ferramenta superior. Altere o valor do login (fornecido pela equipe de suporte VTEX Curitiba) existente na primeira caixa e clique em `OK`.
12. Para trocar a senha do webservice pela senha do adaptador, procure e selecione o campo `MV_LJECOMI` e, em seguida, clique no botão `Editar` contido na barra de ferramenta superior. Altere o valor da senha (fornecido pela equipe de suporte VTEX Curitiba) existente na primeira caixa e clique em `OK`.
13. Caso o eERP envie notas fiscais ao ecommerce, você deve colocar o token VTEX na identificação da loja (**Atualizações** > **Gerencia de vendas** > **Identificação de lojas**) dentro do campo **Token Ecommerce**.
14. As configurações são lidas automaticamente pelo serviço de integração. Não é preciso reiniciar os JOBs.

### Configurar a integração das tabelas de Preços

O código da tabela de preços no ERP deve ser cadastrada manualmente na VTEX utilizando os passos abaixo

1. Acesse o menu **Prices** e, em segeuida, clique em **Price List**.
2. Na lista de preços, abra o campo **PriceTables(1)** e, em seguida, clique em `+ Create New Price Tables`.
3. No campo **Type the name of the price table that you want to create**, insira o código da tabela que você coletou do ERP (deve ser exatamente igual).

> ⚠️ O código da tabela de preços no ERP deve conter letras e números.  

### Configurar a integração das Transportadoras

O código da Transportadora que é utilizada na VTEX deve ser configurado no campo Ecommerce do cadastro da transportadora utilizada pelo Protheus.
