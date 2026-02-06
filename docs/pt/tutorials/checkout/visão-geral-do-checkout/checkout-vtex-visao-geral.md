---
title: 'Checkout VTEX - Visão geral'
id: 7wcprkM7yZUflOqbzAN5SI
status: PUBLISHED
createdAt: 2022-07-06T12:13:18.284Z
updatedAt: 2022-07-13T18:53:14.222Z
publishedAt: 2022-07-13T18:53:14.222Z
firstPublishedAt: 2022-07-13T18:28:12.662Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: checkout-vtex-overview
legacySlug: checkout-vtex-visao-geral
locale: pt
subcategoryId: 8AGXmtpbTqUE2KQu0Swwk
order: 1
---

O Checkout é a etapa final no processo de compras online e também considerada como uma das mais importantes para a taxa de conversão de vendas em uma loja. Na VTEX, o módulo Checkout é responsável por:
- Prover informações a respeito do preço e da disponibilidade dos itens na vitrine da loja, de acordo com os sellers cadastrados.
- Adicionar itens e processar o carrinho de compras.
- Reunir os dados da compra e finalizá-la.

Para realizar estas ações, são utlizadas uma série de dados compartilhados com outros módulos da plataforma VTEX, como o [Catálogo](/pt/docs/tracks/catalogo-definicao-de-conceito), [Estoque & entrega](/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx#), [Preços](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP#), [Promoções](/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N#), [Pagamentos](/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#) e [Gerenciamento de pedidos](/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/3cjk655ZzDGICH4rVfgu7O#). Este compartilhamento permite que sejam processadas informações de disponibilidade, preços, promoções aplicáveis, métodos de envio e de pagamento.

## Operação do Checkout VTEX

Os passos abaixo demonstram a experiência de compra de um cliente e o papel do Checkout, bem como dos módulos relacionados neste processo.

1. **Seleção de itens**: o cliente seleciona os itens a serem mostrados na vitrine de acordo com os sellers cadastrados na loja. Para lojas que possuam restrições geográficas nas entregas, os itens são mostrados de acordo com a localização do cliente. Para maiores informações sobre disponibilidade de items nos sellers, acesse [Configurar preço e disponibilidade de SKUs por Region](/pt/docs/tutorials/configurar-preco-e-disponibilidade-de-skus-por-region) e [Seller abrangente](/pt/docs/tutorials/seller-abrangente).
2. **Adição de itens ao carrinho e finalização de compra**: o cliente adiciona um ou mais itens no carrinho, seleciona as quantidades e clica no botão `Fechar Pedido`. As informações de cada item (quantidade, preço, promoções, disponibilidade de seller) são obtidas dos módulos **Catálogo**, **Estoque & entrega**, **Preços** e **Promoções** e são enviadas para o **Checkout**.
3. **Identificação do cliente**: o cliente insere o seu email. O Checkout recebe informações do [Master Data](/pt/tutorial/entendendo-o-funcionamento-das-consultas-no-master-data--tutorials_4629#) e confere se o email inserido está cadastrado na loja. Caso afirmativo, os dados do cliente já aparecerão preenchidos ([SmartCheckout](/pt/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan#)) de forma parcialmente visivel na tela do Checkout.
4. **Preenchimento de dados pessoais**: na tela do Checkout, o cliente confere e insere os dados pessoais e de entrega. O Checkout realiza o cálculo do [tempo](https://developers.vtex.com/vtex-rest-api/reference/calculatesla) e das [opções](/pt/tutorial/otimizacao-das-opcoes-de-entrega-no-checkout--6DeGO9eBSFWe4XkoS0SxAB#) de entrega ao cliente. O fluxo de informações ocorre da mesma forma que no passo 2.
5. **Seleção do método de pagamento**: o cliente seleciona o método de pagamento, insere vale-compras (se aplicável) e finaliza a compra. O Checkout recebe e envia informações para o módulo de **Pagamentos**.
6. **Conclusão do pedido**: o cliente visualiza a informação da criação do pedido de compra. O Checkout envia a informação de criação do pedido, por meio da [Place order from an existing cart API](https://developers.vtex.com/vtex-rest-api/reference/placeorderfromexistingorderform). Saiba mais em [Using APIs to place a regular order](https://developers.vtex.com/vtex-rest-api/docs/using-apis-to-place-a-regular-order).

Sempre que o cliente realiza uma modificação no carrinho (adição ou remoção de itens), ou que a tela do Checkout é atualizada, a seguinte cadeia de processos internos no Checkout é executada.

![Checkout overview](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/visão-geral-do-checkout/checkout-vtex-visao-geral_1.png)

> ℹ️ Caso um ou mais itens escolhidos pelo cliente sejam elegíveis para entrega por um [Seller white label](/pt/docs/tutorials/seller-white-label#o-que-e-um-seller-white-label), serão realizadas simulações (conforme exibido no lado direito da figura), de modo a determinar quais sellers serão responsáveis pela entrega dos itens. Saiba mais em [Seleção de sellers white label](/pt/tutorial/white-label-sellers-selection--3MemNQ4pKkWCpMdzI27AHa#).

## Funcionalidades do Checkout VTEX

Dentre as principais funcionalidades disponíveis no módulo de Checkout VTEX, podemos destacar: 

- [SmartCheckout](/pt/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan#): solução VTEX que dispensa a utilização de processo de autenticação do cliente (login e senha) para preencher os dados de forma automática na tela do Checkout. O cliente precisa apenas informar o seu email cadastrado na loja.
- [Otimização das opções de entrega](/pt/tutorial/otimizacao-das-opcoes-de-entrega-no-checkout--6DeGO9eBSFWe4XkoS0SxAB#) (lean shipping): combina informações dos clientes e dos items para criar opções de entregas mais baratas e rápidas.
- [Pontos de retirada](/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R#): permite verificar informações sobre os pontos de retirada disponíveis para cada item, como endereços e mapas de localização. Saiba mais em [Cadastrar geolocalização](/pt/tutorial/gerenciar-geolocalizacao--tutorials_138#).
- [Manual Price](/pt/tutorial/modificar-o-preco-de-um-item-no-carrinho-de-compras--7Cd37aCAmtL1qmoZJJvjNf#): permite ao lojista modificar o preço de um item disponível no carrinho.
- [reCAPTCHA](/pt/docs/tutorials/recaptcha-no-checkout): ferramenta para validação de usuário real em pedidos que serão pagos com cartão de crédito ou débito, afim de evitar acessos de falsos usuários que possam ser simulados por meio de programas maliciosos.

## Versões do Checkout VTEX

Atualmente, o módulo de Checkout VTEX possui duas versões em operação: **Checkout v5** e **Checkout v6**.

> ℹ️ O **Checkout v5** não recebe mais atualizações ou suporte operacional direto. Por este motivo, recomendamos a utilização do **Checkout v6** em sua loja.

Para maiores informações sobre configurações e APIs do Checkout, acesse o [Checkout Overview no Developer Portal](https://developers.vtex.com/vtex-rest-api/docs/checkout-overview).

