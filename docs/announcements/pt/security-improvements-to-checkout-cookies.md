---
title: Melhorias na segurança em cookies do Checkout
id: 4MThm4Y5sxYLaW3PfrHdJd
status: PUBLISHED
createdAt: 2022-09-19T19:22:37.019Z
updatedAt: 2022-10-20T19:39:59.077Z
publishedAt: 2022-10-20T19:39:59.077Z
contentType: updates
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slug: melhorias-na-seguranca-em-cookies-do-checkout
legacySlug: melhorias-na-seguranca-em-cookies-do-checkout
announcementImageID: 
announcementSynopsisPT: Atualização nos cookies do Checkout permite o aumento de segurança em sua loja
---

Visando aprimorar a segurança das informações da sua loja, a VTEX realizou melhorias nos cookies do Checkout. A partir de 13 de Fevereiro de 2023, a segurança dos cookies `checkout.vtex.com` e `CheckoutDataAccess` será ampliada por meio da implementação dos atributos _Secure_, _HttpOnly_ e _SameSite_.

Essa atualização de segurança já está incorporada em contas VTEX criadas após 19 de Agosto 2022 e, por este motivo, não requer nenhuma ação para estes lojistas.

## O que mudou?

Agora, os seguintes atributos serão incluídos nos cookies `checkout.vtex.com` e `CheckoutDataAccess`:

1. __Secure__: impede a captura de informações por terceiros não autorizados, transmitindo apenas o cookie ao servidor em solicitações criptografadas (HTTPS).
2. __HttpOnly__: impede a captura de informações por meio de Cross-site scripting (XSS) e demais JavaScripts inseridos na página da loja.
3. __SameSite__: permite que os cookies sejam enviados apenas em um contexto primário e não enviados junto com solicitações iniciadas por sites de terceiros (como Iframe e requisições cross-site).

## Por que fizemos essa mudança?

Para melhorar a segurança no acesso de informações em sua loja.

## O que precisa ser feito?

A atualização dos cookies ocorrerá de forma automática para todas as lojas a partir de 13 de Fevereiro de 2023. Entretanto, esta modificação já está disponível em versão Beta para testes e validação em sua loja.

Você deve acionar a equipe responsável pelo desenvolvimento do seu site para solicitar que realizem testes do Checkout em sua loja no ambiente Beta. Desta forma, será possível simular a operação da loja com as melhorias na segurança nos cookies já ativadas.

Para acessar o ambiente Beta, siga os procedimentos abaixo de acordo com a versão do Admin (V3 ou V4) utilizada em sua loja:

- **Admin V3**: [Acessar o ambiente beta pelo domínio myvtex.com](https://help.vtex.com/pt/tutorial/acessar-o-ambiente-beta-pelo-dominio-myvtex-com--3BHM289568gcSwk2O80Asu)

- **Admin V4**: habilite temporariamente o cookie `vtex-commerce-env` da seguinte forma:

     1. Dentro do Admin da sua loja, acesse a tela **Dev. Tools** em seu navegador (pressionando a tecla `F12` ou clicando com o botão direito, e escolhendo a opção **Inspecionar**).
     2. No canto superior direito da tela, acesse a aba **Aplicativo**, e em **Cookies**, clique na **URL** de sua loja.
     3. Na tabela, insira as informações a seguir nos campos da última linha: **Nome**: `vtex-commerce-env` e **Value**: `beta`.
     4. Atualize a página (pressionando a tecla `F5` ou o botão de atualizar do seu navegador).  Após o carregamento da página, o Admin da loja já estará em ambiente Beta. Realize os testes operacionais no Checkout.
     5. Após a conclusão dos testes, acesse novamente a tela **Dev. Tools** do seu navegador e remova as informações do cookie habilitado anteriormente (`vtex-commerce-env` e `beta`).
     6. Atualize novamente a página para retornar ao ambiente de produção (stable).

Caso encontre algum erro durante a realização dos testes operacionais no ambiente Beta, realize uma verificação nas configurações da loja para garantir que:

1. Seu site não inclui nenhum código JavaScript tentando manipular (acessar ou editar) os cookies `checkout.vtex.com` ou `CheckoutDataAccess` diretamente.
2. Não existem personalizações de JavaScript que possam afetar o funcionamento do Cartão e do Checkout (acesso aos cookies) na sua loja.

Após verificar as configurações da loja, execute novamente o teste em ambiente Beta.

<div class="alert alert-warning">
A partir de 13 de Fevereiro de 2023, as lojas que não estiverem devidamente configuradas poderão não conseguir operar o Checkout corretamente.
</div>

