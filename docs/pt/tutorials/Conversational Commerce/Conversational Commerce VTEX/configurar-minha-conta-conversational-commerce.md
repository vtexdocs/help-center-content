---
title: 'Configurar Minha conta (Conversational Commerce)'
id: 42bnIdyC2c5dwz9KKT0UKc
status: ARCHIVED
createdAt: 2023-03-07T19:10:12.107Z
updatedAt: 2024-01-05T16:28:41.167Z
publishedAt: 
firstPublishedAt: 2023-03-07T19:58:45.529Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: configuring-my-account-conversational-commerce
locale: pt
legacySlug: configurar-minha-conta-conversational-commerce
subcategoryId: 5bBAgUbHdh6ovdZ4kGsN7O
---

O [Conversational Commerce VTEX](https://help.vtex.com/pt/tracks/conversational-commerce-vtex--5UZ9BdvwwtZm2t9QTXcbZs/1NwwADrU70v3roPUV7dWxI#) permite que você configurar seu canal de conversação com o cliente com base na identidade da sua loja. Para configurar informações sobre sua conta do Conversational Commerce VTEX, siga o passo a passo abaixo. 

1. No Admin VTEX, acesse **Aplicativos** > **Conversational Commerce** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Clique em **Minha conta**. 
3. Preencha os campos das configurações de conversação. Saiba mais em [Campos das configurações de conversação](#campos-das-configuracoes-de-conversacao).
4. Clique em `Salvar`.

## Campos das configurações de conversação

![my account - conversational commerce - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Conversational Commerce/Conversational Commerce VTEX/configurar-minha-conta-conversational-commerce_1.png)

* **Idioma:** idioma que será o padrão para mensagens do bot com o cliente no Conversational Commerce VTEX. Campo obrigatório.
* **Mensagem de boas-vindas:** primeira mensagem que o Conversational Commerce VTEX enviará em sua interação inicial com o cliente. Essa mensagem é seguida de mensagens explicativas do processo de compra e suporte humano da sua equipe de atendimento. Campo obrigatório. A sugestão de padrão é: 

  > “Olá! Eu sou o assistente virtual da (marca) 😊”  

* **Lista de produtos:** exemplo de lista de produtos da loja para o cliente entender o padrão em que deve enviar as informações. Adicione um produto em cada linha com as informações de quantidade, produto e marca. Exemplo: 2kg de feijão Tio João. Campo obrigatório.
* **Cor primária do carrinho:** cor primária que será exibida no carrinho em todos os botões, links e outros detalhes. Lembre-se que ela deve contrastar com a cor branca. Campo obrigatório.
* **Categorias restritas:** categorias de produtos que serão excluídas das opções de venda pelo Conversational Commerce VTEX. Campo opcional.
* **Certificar cobertura de entrega durante a conversa:** opção que solicita e valida o CEP do cliente antes de criar o carrinho. Campo opcional.
* **Solicitar ao comprador que se autentique na plataforma (B2B):** opção que requisita a identificação do cliente para um cenário B2B. Ao clicar no link do carrinho, o cliente será direcionado para o login e, apenas depois de logar, ele poderá acessar o carrinho definido no Conversational Commerce VTEX. Campo opcional.
