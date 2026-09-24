---
title: '(Opcional) Configurar outras funcionalidades do VTEX Sales App'
createdAt: 2026-09-24T00:00:00.000Z
updatedAt: 2026-09-24T00:00:00.000Z
contentType: trackArticle
productTeam: Shopping
slugEN: optional-setting-up-other-features-in-vtex-sales-app
locale: pt
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 8
---

Com as configurações básicas e os meios de pagamento concluídos, sua loja já consegue vender pelo **VTEX Sales App**. As funcionalidades deste artigo são opcionais: não impedem o go-live, mas definem o alcance da sua operação. Cada tópico explica o que é a funcionalidade, quando adotá-la e onde estão os passos.

> ℹ️ Integrações, extensibilidade e customizações exigem desenvolvimento. Planeje-as com antecedência, porque costumam levar mais tempo que as demais configurações desta trilha.

## Integrações e extensibilidade

### Integração com ERP e PDV

A integração com o ERP e o ponto de venda (PDV) conecta o **VTEX Sales App** aos sistemas responsáveis pelo faturamento e pelo controle de estoque da loja física. Considere-a se sua operação vende o estoque local, emite documento fiscal durante o atendimento ou mantém o inventário das lojas em um ERP.

* **Parceiros de PDV e de faturamento:** [Pré-requisitos para usar o VTEX Sales App](/pt/docs/tracks/pre-requisitos-para-usar-o-vtex-sales-app#parceiros).
* **Venda de estoque local e integração do ponto de venda:** [Habilitar Venda de estoque local do VTEX Sales App](/pt/docs/tutorials/habilitar-venda-de-estoque-local-do-vtex-sales-app).
* **Especificações fiscais:** [Cadastrar dados fiscais extras (NCM e ICMS) em um produto para o VTEX Sales App](/pt/docs/tutorials/guia-de-integracao-do-gerenciamento-de-pedidos-com-cf-e-para-o-vtex-sales-app).
* **Implementação técnica:** [Integration VTEX Sales App local stock sale](https://developers.vtex.com/docs/guides/integration-vtex-sales-app-local-stock-sale), feita pela loja ou por um parceiro.

### Extensibilidade

O **VTEX Sales App Extensibility** permite incluir recursos próprios na jornada de venda, em pontos de extensão predefinidos da interface, sem alterar o fluxo principal. Adote-o para levar ao atendimento presencial algo que já existe no ecommerce ou em um sistema externo, como programa de fidelidade, venda de garantia ou captura de leads.

> ℹ️ A funcionalidade está em fase Beta e ainda passa por aprimoramentos. Considere esse status ao definir o escopo do go-live.

A implementação é responsabilidade da loja ou do parceiro, conforme [VTEX Sales App Extensibility](/pt/docs/tutorials/vtex-sales-app-extensibility-pt) e [Sales App extensions implementation](https://developers.vtex.com/docs/guides/sales-app-extensions-implementation).

### Customizações

As customizações são ajustes de comportamento e de layout aplicados nos arquivos `checkout-instore-custom.js` e `checkout-instore-custom.css`, como alterar o idioma do aplicativo ou tornar obrigatório o código do vendedor. Elas não acrescentam recursos novos, apenas ativam ou ocultam comportamentos já previstos. Dois ajustes costumam ser discutidos perto do go-live. No `checkout-instore-custom.js`, forçar a disponibilidade de estoque permite vender itens que estão na loja física mas sem saldo no catálogo. No `checkout-instore-custom.css`, é possível esconder os botões de cancelamento.

> ⚠️ Somente pessoas com experiência em programação devem editar esses arquivos, pois alterações incorretas podem causar erros críticos.

[Customizar o VTEX Sales App](/pt/docs/tracks/customizar-o-vtex-sales-app) lista parte das opções. A lista completa, com os guias de implementação, está em [How to customize VTEX Sales App](https://developers.vtex.com/docs/guides/how-to-customize-vtex-sales-app).

## Recursos opcionais da operação de loja

### Código de barras

O código de barras agiliza a montagem do carrinho, porque o vendedor bipa o produto em vez de buscá-lo pelo nome. São duas decisões:

* **Cadastro:** o campo **EAN** de cada SKU precisa estar preenchido no **Catálogo**, individualmente, por planilha ou pelo seu ERP, conforme [Cadastrar o código de barras dos SKUs para o VTEX Sales App](/pt/docs/tracks/cadastrar-o-codigo-de-barras-dos-skus-para-o-vtex-sales-app).
* **Equipamento:** o aplicativo lê o código pela câmera do tablet ou do smartphone, mas recomendamos um leitor dedicado para lojas com pedidos de muitos itens. Veja os critérios em [Pré-requisitos para usar o VTEX Sales App](/pt/docs/tracks/pre-requisitos-para-usar-o-vtex-sales-app#leitor-de-codigo-de-barras) e o uso em [Leitura do código de barras](/pt/docs/tracks/leitura-do-codigo-de-barras).

### Impressão

Existem duas funcionalidades distintas:

* **Comprovante de venda via impressora térmica:** apenas em Android, por Bluetooth, com impressora compatível com o protocolo ESC/POS. Veja [Emissão de comprovante de venda no Sales App via impressora térmica](/pt/docs/tutorials/emissao-de-comprovante-de-venda-no-sales-app-via-impressora-termica).
* **Impressão de resumo do pedido:** apenas em computadores com Windows, depende de uma customização no `checkout-instore-custom.js` e de um par de AppKey e AppToken. Veja [Impressão de resumo do pedido](/pt/docs/tracks/impressao-de-resumo-do-pedido).

### Preço manual e cupons

O preço manual permite que o vendedor altere o preço de um produto na página de detalhes, sem restrição de aumento ou de redução. Para habilitá-lo, defina a propriedade `allowManualPrice` na configuração do `orderForm` do Checkout, conforme [Allow manual prices on VTEX Sales App](https://developers.vtex.com/docs/guides/allow-manual-prices-on-vtex-sales-app).

> ⚠️ Segundo esse guia, a configuração também libera o preço manual no carrinho do ecommerce para qualquer perfil de acesso com o recurso **Telesales**, o que inclui o perfil **VTEX Sales App Salesperson**. Avalie esse efeito antes de habilitar a funcionalidade.

O vendedor aplica os cupons na tela de pagamento, na opção **Cupom**, descrita em [Pagamento](/pt/docs/tracks/pagamento). Os cupons são criados no módulo **Promoções**, conforme [Criar cupom](/pt/docs/tutorials/criar-cupom-beta).

### Filtros de busca

Os filtros refinam os resultados da busca por atributos do produto e são a única parte da busca que exige configuração. É necessário instalar e configurar o [VTEX Intelligent Search](/pt/docs/tracks/visao-geral-intelligent-search), definir quais atributos serão filtráveis conforme [Configuração da busca](/pt/docs/tutorials/configuracao-da-busca) e acionar o [Suporte VTEX](https://help.vtex.com/pt/support) para habilitar o recurso no aplicativo.

> ⚠️ Quando a loja usa o **VTEX Intelligent Search**, qualquer alteração na configuração de busca também vale para o ecommerce.

## Recursos que não exigem configuração

Alguns recursos não exigem configuração própria. Eles dependem apenas das configurações básicas e de logística desta trilha:

* **Busca unificada:** consulta o estoque da loja física, o das demais lojas e o dos centros de distribuição do ecommerce. Veja [Busca unificada no VTEX Sales App](/pt/docs/tracks/busca-unificada-no-vtex-sales-app).
* **Acesso ao último carrinho:** após identificar o cliente, o vendedor vê o último carrinho não finalizado e pode retomar a venda. Veja [Acesso ao último carrinho do cliente](/pt/docs/tracks/acesso-ao-ultimo-carrinho-do-cliente).

Os demais recursos do uso diário estão na trilha [VTEX Sales App - Usando o app](/pt/docs/tracks/vtex-sales-app-usando-o-app).

## Próximos passos

Inclua cada funcionalidade habilitada no plano de testes. O próximo passo da trilha é [Boas práticas de testes - VTEX Sales App](/pt/docs/tracks/boas-praticas-de-testes-vtex-sales-app). Dúvidas frequentes estão em [VTEX Sales App: FAQ](/pt/docs/tutorials/vtex-sales-app-faq).
