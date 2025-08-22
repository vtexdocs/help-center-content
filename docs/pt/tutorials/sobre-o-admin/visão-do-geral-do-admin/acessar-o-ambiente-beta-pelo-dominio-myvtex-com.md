---
title: 'Acessar o ambiente beta pelo domínio myvtex.com'
id: 3BHM289568gcSwk2O80Asu
status: CHANGED
createdAt: 2018-07-26T18:09:29.968Z
updatedAt: 2024-03-13T12:00:57.622Z
publishedAt: 2024-03-12T19:18:51.136Z
firstPublishedAt: 2018-07-26T18:43:10.906Z
contentType: tutorial
productTeam: Reliability
author: authors_59
slugEN: accessing-the-beta-environment
legacySlug: acessar-o-ambiente-beta-pelo-dominio-myvtex-com
locale: pt
subcategoryId: Se4oi5LroIII2Ei0uGAoE
---

Na VTEX, todas as lojas possuem um ambiente beta. Neste local, o usuário da plataforma (lojista, desenvolvedor ou outra pessoa com acesso) pode realizar testes para validar novas configurações  ou versões de aplicações/serviços antes de promover as mudanças no ambiente em que os clientes realizam as compras, também conhecido como ambiente de produção (stable).

> ℹ️ O ambiente beta é uma reprodução exata do ambiente de produção (stable), incluindo dados e configurações da loja.

Dessa forma, **a alteração de dados no ambiente beta afeta os dados no ambiente stable**.

## Acessar o ambiente beta

Para acessar o ambiente beta em sua loja, é necessário habilitar o cookie `vtex-commerce-env` da seguinte forma:

<ol start="1">
  <li>Dentro do Admin VTEX, acesse a tela Dev.Tools em seu navegador pressionando a tecla `F12` ou clicando com o botão direito, e escolhendo a opção **Inspecionar**.</li>
  <li>Na barra superior da tela, acesse a aba **Aplicativo**, e na barra lateral esquerda em Cookies, clique na URL de sua loja.
</li>
  <li>Na tabela, insira as informações abaixo na células da última linha:</li>
  <ul>
<li>Nome: `vtex-commerce-env`</li>
<li>Valor: `beta`
</li>
</ul>
<img src="https://images.ctfassets.net/alneenqid6w5/3g8wintA1heJbzdV8J0s45/8eb6f5917e2d9d8a134b81231dc42728/Ambiente_beta_.png" alt="beta">
<li>Atualize a página pressionando a tecla `F5` ou o botão de atualizar do seu navegador. Após o carregamento da página, o Admin da loja já estará em ambiente Beta.</li>
</ol>

> ℹ️ Para voltar à loja em seu ambiente principal, acesse novamente a tela Dev. Tools do seu navegador e remova o cookie `vtex-commerce-env` inserido. Atualize novamente a página para retornar ao ambiente de produção **stable**.
