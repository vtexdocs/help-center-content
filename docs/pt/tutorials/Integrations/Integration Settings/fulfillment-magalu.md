---
title: 'Fulfillment Magalu'
id: 7ckyEv4Z8HmiCRydo0a9P6
status: PUBLISHED
createdAt: 2023-12-19T19:09:47.849Z
updatedAt: 2024-09-12T18:33:18.932Z
publishedAt: 2024-09-12T18:33:18.932Z
firstPublishedAt: 2023-12-19T19:44:22.896Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: fulfillment-magalu
locale: pt
legacySlug: fulfillment-magalu
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Ao finalizar a [integração](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y/3tZ4qVuMDDsC2jx2DCmjdA) de uma loja VTEX com o Magalu, um seller poderá compartilhar produtos, gerenciar os pedidos realizados no marketplace, as atualizações de preços e produtos, pontos de retirada e o inventário dos produtos em um só lugar.

Além da integração básica, lojistas VTEX podem integrar com o [**Fulfillment Magalu**](https://unimagalu.com.br/full/), que é um serviço disponível a lojistas que já vendem no Magalu Marketplace. Este serviço disponibiliza a operação de armazenamento e entrega do Magalu para seus produtos mais vendidos no marketplace.  

>⚠️ Somente os produtos mais vendidos de uma loja, podem ser configurados com a opção de venda pelo Fulfillment Magalu.

Todos os pedidos do tipo __Fulfillment Magalu__ podem ser acompanhados na tela de [Pedidos](https://help.vtex.com/pt/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi) do Admin VTEX. O status desses pedidos são atualizados pelo Magalu Marketplace.

A integração do __Fulfillment Magalu__ é realizada em duas etapas. A primeira no [Portal do Magalu Marketplace](https://id-b2b.magazineluiza.com.br/auth/realms/B2B/protocol/openid-connect/auth?client_id=IntegraCommerceSellerAdmin&redirect_uri=https%3A%2F%2Fmarketplace.integracommerce.com.br%2Fsignin-oidc&response_type=code&scope=openid%20profile&code_challenge=LErEEj7Fo5Co8kOL4VDcRAeUVe2_hBSAf6XWp8Yi73Q&code_challenge_method=S256&response_mode=form_post&nonce=638370459880846758.NmY3MDExZTktZjNkYS00MzdkLWJhYTgtYzQ5NTkwODFmMWMzZTQwYTkzZmEtNmIwYS00YzY0LWI3OGUtMjU0N2UwZjY1ZjBm&state=CfDJ8DRkmEyrufZLvRHl0B2Huu7ARClKg-kKgAsabRC2I3CtY-Lj13FW-3H6S_acQCTyqkPti4gubm7t1KrgKRP1sXinoXungxBiDW13Zm6pVwAy4omo7a4HHmnptzufXd1mfk5_Srcu7MuRUNCjWBFuHadXUitLTldPanEbhMIHXgOBVjVdlvaZx8e7z2nomNUOGYLwbkNrLA2LeVDyvuEA9_8bGoMBgyyom4758NUzlG6Mx2CuQA3ZXnu83jDjikNyJXcGWHCLG6K8xqfptz9mIjoQeDzCDNxLolol3H0CikIh1O1rPxVHRNxL8-xT_3GhGtpL8w2ZjhwiPbn8frTZgaGvgyzGJq-dI9u49Uksbye6QLvesWt_uBXy9b-77BHbf7wlEDkG8dwtkkE3mzV_Ubc&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.8.0.0) e a segunda no Admin VTEX. Veja abaixo as etapas.

## 1. Cadastro no Magalu

Para o cadastro no Magalu Marketplace siga os seguintes passos:

1. Acesse o [Portal do Magalu marketplace](https://id-b2b.magazineluiza.com.br/auth/realms/B2B/protocol/openid-connect/auth?client_id=IntegraCommerceSellerAdmin&redirect_uri=https%3A%2F%2Fmarketplace.integracommerce.com.br%2Fsignin-oidc&response_type=code&scope=openid%20profile&code_challenge=LErEEj7Fo5Co8kOL4VDcRAeUVe2_hBSAf6XWp8Yi73Q&code_challenge_method=S256&response_mode=form_post&nonce=638370459880846758.NmY3MDExZTktZjNkYS00MzdkLWJhYTgtYzQ5NTkwODFmMWMzZTQwYTkzZmEtNmIwYS00YzY0LWI3OGUtMjU0N2UwZjY1ZjBm&state=CfDJ8DRkmEyrufZLvRHl0B2Huu7ARClKg-kKgAsabRC2I3CtY-Lj13FW-3H6S_acQCTyqkPti4gubm7t1KrgKRP1sXinoXungxBiDW13Zm6pVwAy4omo7a4HHmnptzufXd1mfk5_Srcu7MuRUNCjWBFuHadXUitLTldPanEbhMIHXgOBVjVdlvaZx8e7z2nomNUOGYLwbkNrLA2LeVDyvuEA9_8bGoMBgyyom4758NUzlG6Mx2CuQA3ZXnu83jDjikNyJXcGWHCLG6K8xqfptz9mIjoQeDzCDNxLolol3H0CikIh1O1rPxVHRNxL8-xT_3GhGtpL8w2ZjhwiPbn8frTZgaGvgyzGJq-dI9u49Uksbye6QLvesWt_uBXy9b-77BHbf7wlEDkG8dwtkkE3mzV_Ubc&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.8.0.0).  
2. No menu Fulfillment clique em `Quero aderir ao fulfillment`.  
3. Preencha o formulário de adesão.  
4. Clique em `Enviar`.  

Após finalizar os passos indicados acima, aguarde o contato da equipe do Magalu para assinar o contrato e finalizar a configuração no Portal do Magalu Marketplace.  

## 2. Cadastro no Admin VTEX
Com a funcionalidade Fulfillment Magalu configurada no Portal do Magalu Marketplace, realize as seguintes configurações no Admin VTEX:

1. [Configuração da loja](#configuracao-da-loja)
2. [Configuração dos SKUs](#configuracao-dos-skus)
3. [Configuração do conector](#configuracao-do-conector)

### Configuração da loja

Configure a loja conforme os passos abaixo:

__1. Cadastre Política de Envio:__ a nova [Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) deve cumprir os seguintes requisitos:

- Ser exclusiva para o Fulfillment Magalu.  
- Abranger todos os CEPs do país.  
- Ser aplicável a todos os dias da semana.  

Siga o tutorial para [Cadastrar uma Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio).  

__2. Cadastre uma Doca:__ para cadastrar nova Doca, siga o tutorial [Gerenciar Doca](https://help.vtex.com/pt/tutorial/managing-loading-docks--7K3FultD8I2cuuA6iyGEiW#cadastrar).  
__3. Cadastre um Estoque:__ o estoque dos produtos disponibilizados com a opção Fulfillment Magalu é gerenciado pela Magalu, mas o gerenciamento de inventário é realizado pelo seller. Siga o tutorial [Gerenciar Estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137#cadastrar-estoque) para cadastrar um novo.  

### Configuração dos SKUs

Para disponibilizar produtos com Fulfillment Magalu, você deve aplicar uma especificação de produto. Siga o tutorial [Cadastrar especificações ou campos de produto](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106#tipos-de-campo-de-produto) e preencha as informações conforme a tabela abaixo.

| **Campo** | **Como preencher** |
|:---:|:---:|
| **Nome*** | `magalu_fulfillment` |
| **Texto*** | Para produtos que serão ofertados via Fulfillment Magalu. |
| **Tipo*** | É obrigatório que o tipo dessa especificação seja __Texto.__ |
| **Valor Padrão** | Deixar o campo vazio. |
| **Grupo*** | Especificações. |
| **Filtro** | Não selecionar a caixa de seleção. |
| **Obrigatório** | Não selecionar a caixa de seleção. |
| **Exibe Especificação** | Não selecionar a caixa de seleção. |
| **Link no Menu Superior** | Não selecionar a caixa de seleção. |
| **Link no Menu Lateral** | Não selecionar a caixa de seleção. |
| **Ativo** | Selecionar a caixa de seleção. |

Por fim, é necessário preencher as especificações de cada produto a partir dos campos e valores que você criou. Você pode fazer isso individualmente pela página de cadastro do produto ou massivamente por planilha.

#### Cadastro do produto  

Para preencher as especificações de cada produto individualmente, siga as instruções abaixo:  

1. No Admin VTEX, acesse Catálogo, ou digite Catálogo na barra de busca no topo da página.  
2. Acesse __Todos os produtos.__  
3. Na linha do produto, clique em `Alterar`.  
4. Acesse a aba __Especificações.__  
5. Preencha o campo que você criou com o valor `true`.  
6. Clique em `Salvar`.  

#### Planilha  

Para preencher especificações de produtos em massa por planilha, é necessário exportar a planilha padrão VTEX, preenchê-la e importá-la na plataforma. Para fazer isso, siga as instruções abaixo:  

1. No Admin VTEX, acesse __Catálogo,__ ou digite __Catálogo__ na barra de busca no topo da página.  
3. Clique em __Importação e Exportação.__  
4. Clique na aba __Especificações de produto.__  
5. Clique com o botão direito na categoria desejada.  
6. Clique em __Exportar.__ Um retângulo verde aparecerá na tela.  
7. Clique em __Clique aqui para baixar o arquivo__ para exportar a planilha.  
8. Para cada produto que deseja disponibilizar com o Fulfillment Magalu preencha a coluna `ValoreEspecificaCao` com o valor `true`. As demais colunas deverão permanecer inalteradas, pois seus valores serão utilizados para validação dos dados.  
9. No Admin VTEX, ainda em __Catálogo > Importação e Exportação > Especificações de produto,__ desça a página até __Upload de Arquivo para Importação.__  
10. Clique em __Select__ para selecionar o arquivo com a planilha preenchida no seu computador.  
11. Clique em `Importar`.  

>❗ Os SKUs que estiverem com o valor da especificação ` magalu_fulfillment` preenchida como ` false ` ou um valor diferente de ` true`, não serão apresentados no Magalu marketplace com a opção de envio Fulfillment Magalu.

### Configuração do conector  

Com as etapas de [Configuração da loja](#configuracao-da-loja) e [Configuração dos SKUs](#configuracao-dos-skus) finalizadas, você pode editar o conector da integração Loja VTEX e Magalu marketplace. Para esse processo siga os seguintes passos:  

1. No Admin VTEX, acesse o módulo __Marketplace > Conexões > Marketplaces e integrações.__
2. Clique no marketplace `Magazine Luiza`.
3. No modal que aparecerá, clique em `Conectar`.
4. Habilite a funcionalidade __Fulfillment Magalu.__
5. Preencha o campo `Estoque do fulfillment` com o Id do estoque cadastrado em Configuração da loja.
6. Clique em `Salvar`.

![Fulfillment magalu](//images.ctfassets.net/alneenqid6w5/5boAjRcCbzyFflEolDZaFu/fc0e47a429a0ef940f5f20dd1c0db747/Screenshot_2023-12-08_at_13.26.50__1_.png)  

Ao finalizar o processo de configuração do conector, os seus produtos configurados estarão disponíveis no Magalu Marketplace com a opção de envio __Fulfillment Magalu.__
