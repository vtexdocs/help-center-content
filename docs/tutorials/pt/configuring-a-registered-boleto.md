---
title: 'Configurar boleto registrado '
id: frequentlyAskedQuestions_2867
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.197Z
updatedAt: 2020-11-24T13:14:10.947Z
publishedAt: 2020-11-24T13:14:10.947Z
firstPublishedAt: 2019-01-24T22:08:27.705Z
contentType: tutorial
productTeam: Financial
author: authors_3
slug: como-configurar-boleto-registrado
locale: pt
legacySlug: como-configurar-boleto-registrado
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

O boleto registrado é uma modalidade recente de boleto bancário, utilizado no Brasil. 

A implementação dessa forma de pagamento ocorreu em novembro de 2018, quando a Federação Brasileira de Bancos (Febraban) anunciou que todo boleto agora deve ser registrado. 

Com essa medida, os bancos conseguem reduzir o número de fraudes, e todo o processo de uma operação de compra e venda fica registrado, trazendo mais controle e segurança.

A VTEX se adequou a essa determinação e, atualmente, já existem algumas maneiras de disponibilizar esse modo de pagamento na sua loja. Para os bancos Bradesco, Itaú e Santander, é possível escolher diretamente no módulo de pagamentos o conector específico:

- [Boleto Santander](https://help.vtex.com/pt/tutorial/configurar-boleto-registrado-santander--67siNqkC7mcgy2GWUYimaa)
- [Boleto Itaú](https://help.vtex.com/pt/tutorial/configurar-boleto-registrado-itau-itau-registrado--6MEHf1oDTOkuWM2CaYi4gu)
- [Itaú Shopline](https://help.vtex.com/pt/tutorial/configurar-boleto-registrado-itau--3TqzCHPU7KIYGsOKuUeQcq)
- [Bradesco Registrado](https://help.vtex.com/pt/tutorial/configurar-boleto-registrado-bradesco--bbnXBjvKOkWYiOosmASiA)

Além disso, a VTEX tem integração automática para boletos registrados Bradesco e Itaú Shopline. Contudo, para boletos gerados sem uma adquirência, a conciliação é feita por meio de um arquivo (.RET). 

Cada cliente deve conseguir os arquivos com seus respectivos bancos. Nesse caso específico, Itaú Registrado e Santander. Ressaltamos que esses arquivos precisam, necessariamente, seguir o padrão estabelecido pela Febraban. 

Para outros bancos, é necessário usar um dos seguintes gateways:

- Braspag
- PagSeguro Transparente
- Mundipagg
- Moip
- MercadoPago Transparente
- Pagar.Me
- CieloV3
- Adyen

Os custos do boleto registrado são diferentes do boleto tradicional e variam de acordo com sua negociação junto ao banco. Fique atento para planejar e controlar sua margem.

Quando sua loja possui um gateway contratado, a geração do boleto (assim como a validade das suas informações) fica sob responsabilidade dele e __não é feita pela VTEX__. Por isso, assim que o gateway for contratado, certifique-se de que a emissão está sendo feita com os dados corretos.

**Atenção:** Um sequence **único** é gerado pela VTEX para cada boleto registrado.    
A modificação desse número não é mais permitida como antes, impedindo a loja de associar o número do boleto ao número do pedido correspondente no módulo de Gerenciamento de pedidos. 
A criação desse número pela VTEX garante a particularidade de cada boleto e diminui o risco de isenção de pagamento por conta de números repetidos em boletos diferentes.  

## Artigos relacionados

- [Como configurar afiliação de gateway](/pt/tutorial/afiliacoes-de-gateway/)
- [Como configurar PagSeguro transparente](/pt/tutorial/como-configurar-o-pagseguro-sem-redirect-transparente/)
- [Configurar boleto registrado Itaú](/pt/tutorial/configurar-boleto-registrado-itau)
