---
title: 'Fluxo de autenticação 3DS2: aceite pagamentos on-line de forma mais segura'
id: 6UdTjjVU1AcEQ2aE3Ftxsl
status: PUBLISHED
createdAt: 2020-12-21T21:03:33.860Z
updatedAt: 2021-05-20T17:06:23.794Z
publishedAt: 2021-05-20T17:06:23.794Z
contentType: updates
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: 2020-12-21-3ds2-authentication-flow-accept-online-payments-more-securely-1
locale: pt
legacySlug: fluxo-de-autenticacao-3ds2-aceite-pagamentos-on-line-de-forma-mais-segura
announcementImageID: 'undefined'
announcementSynopsisPT: 'O novo protocolo implementa um processo de verificação de dados do cliente final mais robusto e moderno'
---

O 3DS2 é um fluxo de autenticação de pagamentos que reduz a possibilidade de fraudes por conta de um processo de verificação mais robusto.

O fluxo 3DS2 traz um novo protocolo de autenticação: o sistema realiza várias sequências de verificação de dados entre processadores de pagamentos e bancos para garantir que as informações do consumidor final são verídicas. 

### O que mudou?

No fluxo oferecido até então, o usuário era redirecionado para a página do banco ao fechar a compra no SmartCheckout. 

Lá, o usuário necessitava instalar plugins e extensões para conseguir confirmar seus dados, o que gerava atrito no fluxo de pagamento.

Agora, o fluxo 3D2S pode aplicar três possíveis processos de autenticação, sem que o consumidor final seja redirecionado da página de fechamento de compra.

São eles:
- Senha;
- Biometria;
- Código via SMS ou e-mail.

Desse modo, cada banco emissor decide por qual verificação enviará para o consumidor final.  

### Principais benefícios 

- __Maior segurança na compra__: verificação de dados mais robusta.
- __Fluxo sem redirecionamento__: o usuário permanece no SmartCheckout durante o pagamento. Ou seja, ele não sai do ambiente da loja.
- __Impacto positivo nas conversões de vendas__: menos atrito sem redirecionamento, mais segurança com autenticações, proporcionando uma melhor experiência para o usuário e uma maior taxa de aprovação pelo grau de confiança gerado.
- __Segue as normas para E-commerce europeu__: regulamentação PSD2, que exige que pagamentos sejam autenticados.
- __Liability Shift__: isenção de chargeback em casos de fraude, de acordo com critérios adicionais das bandeiras e bancos emissores.

### Como funciona

Inicialmente, o fluxo 3DS2 estará disponível para os conectores CieloV3, Adyen e Redsýs, Logo, cabe a cada cliente VTEX entrar em contato com ambas as adquirentes para confirmar sua habilitação.

Em seguida, o cliente deve [abrir um chamado para o time de suporte](/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM "abrir um chamado para o time de suporte") da VTEX solicitando a instalação da funcionalidade na sua conta. Além disso, nesse mesmo chamado, é preciso informar para quais conectores e adquirentes do fluxo 3DS2 deve ser habilitado.   

Para saber como habilitar o fluxo com a Adyen, leia esse [artigo](/pt/tutorial/adicionando-suporte-a-3ds-na-integracao-com-a-adyen--3DNZeC9qJaC2GMIw4mawYk?locale=pt "artigo"). Já para realizar o mesmo processo com a CieloV3, confira esse [tutorial](/pt/tutorial/configurar-adquirente-cielo--3avjZ7q65WcM02K8K0eeWu "tutorial").
