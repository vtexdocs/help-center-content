---
title: 'Pré-requisitos técnicos para usar o VTEX Sales App'
status: PUBLISHED
createdAt: 2026-09-15T00:00:00.000Z
updatedAt: 2026-09-15T00:00:00.000Z
contentType: trackArticle
productTeam: Shopping
slugEN: technical-prerequisites-for-using-the-vtex-sales-app
locale: pt
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 2
---

Este artigo explica requisitos e recomendações técnicas para que a loja utilize o **VTEX Sales App**, e aborda tópicos como equipamentos e parceiros.

## Equipamento obrigatório

Para usar o **Sales App**, algumas ferramentas são de uso obrigatório.

> ⚠️ Recomendamos reservar um espaço seguro na sua loja para armazenar os equipamentos.

### Tablets e smartphones

A loja precisa dispor de pelo menos um dispositivo móvel. Para manter o bom funcionamento da sua operação, recomendamos ter mais dispositivos do que vendedores, desta forma, os aparelhos podem ser rapidamente trocados em caso de falha, dano ou esgotamento da bateria.

Os dispositivos preferencialmente devem estar atualizados com a versão mais recente do sistema operacional e, no mínimo, precisam ter compatibilidade com:

- **IOs:** três versões mais recentes.
- **Android:** quatro versões mais recentes.

Os dispositivos utilizados precisam ter conexão à internet, podendo ser por meio de rede Wi-Fi ou 4G/5G.

> ℹ️ Recomendamos que os dispositivos móveis tenham chips 4G, para que sua loja continue funcionando normalmente, mesmo em situações em que a rede Wi-Fi apresente algum problema.

### Computadores

Recomendamos que a loja disponha de pelo menos um computador, que pode ser de qualquer sistema operacional. Para **Windows**, existem os seguintes requisitos:

- Sistema operacional **Windows 8** ou mais recente (recomendado).
- Processador **Intel i3+** ou **AMD Phenom II X4**, mínimo **Intel i3+**.
- Memória RAM de **4GB** ou superior.
- HD/SSD de **120GB** ou superior.

### Roteador e internet

Dispor de conexão com a internet é fundamental para o uso do **Sales App** e os requisitos mínimos e recomendações adicionais para a conexão são:

| Equipamento | Requisitos mínimos | Recomendações adicionais |
| :---: | :---: | :---: |
| Roteador | Com padrão da conexão 2.4Ghz (802.11 N) e conexão do dispositivo com o router 20 Mbps. | Com padrão da conexão 5.0Ghz 802.11 AC (o celular terá que ser dual band) e conexão do device com o router 40 Mbps. |
| Internet | Com velocidade do link 2 Mbps (chegando ao dispositivo, ou seja, o que aparece no speedtest no celular). | Com velocidade do link 5 Mbps (chegando ao dispositivo, ou seja, o que aparece no speedtest no celular). |

## Equipamento opcional

Apesar de não obrigatórios, recomendamos o uso de alguns equipamentos adicionais para obter a melhor experiência com o **Sales App**.

### Leitor de código de barras

O **Sales App** permite a leitura do código de barras dos produtos usando a câmera do tablet ou smartphone, mas a melhor performance é obtida com um leitor de código de barras dedicado. Por isso, para obter maior agilidade e precisão na finalização da compra, recomendamos que a loja disponha de um leitor de código de barras.

> ℹ️ Para usar o leitor de código de barras com o **Sales App**, você precisa cadastrar o código de barras do produto no catálogo, conforme descrito em [Cadastrar o código de barras dos SKUs para o VTEX Sales App](https://help.vtex.com/pt/docs/tracks/cadastrar-o-codigo-de-barras-dos-skus-para-o-vtex-sales-app).

### Máquinas de cartão de crédito

Máquinas de cartão de crédito (Bluetooth ou USB) são oferecidas por parceiros de pagamento (adquirentes ou sub-adquirentes), que vão processar os pagamentos em sua loja física. Veja uma lista deles na seção [Parceiros](/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u#parceiros) deste tutorial.

## Parceiros

A VTEX possui uma série de parceiros que viabilizam a operação de lojas físicas. Cada parceiro tem uma função específica para que todo o processo de venda possa funcionar com segurança.
Entre esses parceiros estão:

- Integração com PDVs
    - Jitterbit
    - Neomode

- Integração com pagamentos
    - Pagarme
    - Adyen
    - Cielo

A VTEX conta com um contrato padrão com esses parceiros para facilitar a implantação de seus produtos, mas cabe a você negociar melhores termos diretamente com eles.

### Pagamentos

Para configurar o adquirente que irá processar os pagamentos de sua loja, acesse [Configurar os métodos de pagamento para o VTEX Sales App](/pt/docs/tracks/configurar-metodos-de-pagamento-para-o-vtex-sales-app).

### Faturamento

Para emitir a fatura para o consumidor, a VTEX tem integrações disponíveis com ERPs e outros sistemas responsáveis por essa parte do processo. Você pode entender melhor essa funcionalidade consultando o [Guia de Integração com NFC-e](/pt/docs/tutorials/guia-de-integracao-do-gerenciamento-de-pedidos-com-cf-e-para-o-vtex-sales-app).

Os parceiros de faturamento que indicamos são:

* [e-Millennium](https://e-millennium.com.br/)
* [Webbsys](http://www.webbsys.com.br/site/)

Você pode entrar em contato com o [suporte da VTEX](https://support.vtex.com/hc/pt-br/requests) para obter mais informações sobre os nossos parceiros.

## Casos de uso

Os pré-requisitos e recomendações para cada um dos principais casos de uso do VTEX Sales App em sua estratégia de [Comércio Unificado](/pt/docs/tracks/comercio-unificado-101) estão descritos abaixo.

### Prateleira Infinita

A [Prateleira Infinita](/pt/docs/tracks/prateleira-infinita) é o recurso que dá aos seus clientes acesso a todo o seu inventário, integrado entre todos os canais. Com isso, se um cliente estiver em uma loja física, ele poderá comprar um produto do estoque de outras lojas ou mesmo do seu ecommerce.

Para mais informações, leia o guia sobre a [Prateleira Infinita](/pt/docs/tracks/prateleira-infinita).

Os pré-requisitos para implementar a Prateleira Infinita na sua loja são todos os itens descritos nos tópicos anteriores.

### Ship from Store e Pontos de retirada

O [Ship from Store](/pt/docs/tracks/configurar-ship-from-store) transforma suas lojas físicas em pequenos centros de distribuição. Com esse recurso, você pode enviar produtos a partir do estoque de uma loja, mesmo que eles não tenham sido comprados lá.

Os [Pontos de retirada](/pt/docs/tracks/configurar-lojas-fisicas-como-pontos-de-retirada) ou pickup points são locais onde o cliente tem a opção de retirar por conta própria o seu pedido. As lojas físicas da sua rede, por exemplo, podem funcionar como pontos de retirada.

Os pré-requisitos para implementar essas estratégias são todos os itens descritos nos tópicos anteriores.

Recomendações adicionais:

* Ativar o módulo **Checkout v6**. Leia o artigo [Como ativar o Checkout v6](/pt/docs/tutorials/ativar-o-checkout-v6) para mais informações.
* Preços: recomendamos que suas lojas físicas herdem os preços do ecommerce. No entanto, se você optar por ter preços diferenciados, considere os requisitos e observações abaixo.
    * É necessário envolver uma agência parceira para regionalizar o catálogo.
    * Isso pode impactar as ferramentas de comparação de preços, pois eles recebem apenas um valor.
    * Isso pode impactar nas vendas em marketplaces, pois eles também recebem apenas um valor.
    * Recomendamos a contratação do time de Professional Services da VTEX para personalizar sua arquitetura e viabilizar a diferenciação de preços.

### VTEX Sales App integrado ao PDV

Esse é o recurso que permite usar o VTEX Sales App [integrado aos pontos de venda](/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/5XWo7q35jkDDq3PxUs1EVi) de suas lojas físicas.

Pré-requisitos para implementar a integração entre o VTEX Sales App e o PDV:

* Todos os pré-requisitos descritos nos tópicos anteriores, inclusive os de [Prateleira Infinita](#prateleira-infinita), [Ship from Store e Pontos de retirada](#ship-from-store-e-pontos-de-retirada).
* Integração com um sistema de Nota Fiscal, conforme descrito em [Faturamento](#faturamento).
