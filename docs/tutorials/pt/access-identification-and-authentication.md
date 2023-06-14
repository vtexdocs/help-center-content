---
title: Acesso, identificação e autenticação
id: 1b4FKvA5KxN7kwBLfmZbUe
status: DRAFT
createdAt: 2022-05-26T13:40:23.357Z
updatedAt: 2022-05-26T13:42:14.099Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: acesso-identificacao-e-autenticacao
legacySlug: acesso-identificacao-e-autenticacao
subcategory: 
---

Veja o [FAQ de segurança]() completo.
## A VTEX possui uma politíca de Gestão de Acessos Lógicos? Descreva de modo geral como funciona seus processos relacionados a gestão de acesso.

A VTEX controla e monitora constatemente os acessos aos nossos ambientes de produção. 
Esta política está alinhada com a nossa prática do Princípio do Mínimo Privilégio e Segregação de Funções, onde o acesso é concedido com base em necessidade legítima, além disso, adotamos processos periódicos de revisão de acessos e perfis. 
Sempre que ocorre um desligamento, nosso processo de revogação é acionado de forma tempestiva. Para o ambiente corporativo possuímos uma política de Gestão de acesso que foi elaborada de acordo com as melhores práticas de mercado como duplo fator de autenticação para acessar nossos servidores e uso de VPN. 

## A VTEX detém uma política de senha? Se sim, quais são os critérios considerados?

Adotamos configurações seguras e política de senha robusta para o acessos aos nossos sistemas, tais como, quantidade mínima de caracteres e caracteres especiais, periodicidade para alteração das senhas, não utilização das últimas senhas, controle e inatividade de sessão, exemplo a seguir. 
- Comprimento mínimo de dezesseis caracteres;
- Devem ser formados a partir da combinação de caracteres alfabéticos, maiúsculos e minúsculos, numéricos e especiais (%, #, $, @, &, entre outros);
- Não devem ser utilizados números ou letras repetidos, em sequência ou formando séries óbvias, como, por exemplo, “aaaabbbb“, “12345678”, “asdfghjk”;
- A criptografia forte deve ser usada para tornar todas as credenciais de autenticação ilegíveis durante a transmissão e armazenamento em todos os componentes do sistema;
- A opção de troca de senha no primeiro login deve estar habilitada;
- As senhas usadas anteriormente não devem ser reutilizadas.

## No seu ambiente corporativo como é operacionalizado a concessão de acessos aos sistemas internos da VTEX? 

O processo de Gestão de Acesso (desde concessão até revogação) no ambiente corporativo acontece através de uma célula centralizada responsável por definir as métricas para concessão de acesso. Dentro da célula existem grupos responsáveis por cada sistema da companhia, sendo assim um colaborador abre uma solicitação por meio do nosso canal de atendimento e os responsáveis fazem uma sondagem para entender o motivo da solicitação e se aquele colaborador pode ter o acesso solicitado. O fluxo do processo passa por várias etapas de autenticação e validação da solicitação até a concessão do processo. 

## Você limita o acesso de acordo com o princípio do privilégio mínimo?

Sim, a VTEX fornece acesso aos nossos ambientes de produção (codificar, mesclar e implantar pipeline, bancos de dados e infraestrutura da Nuvem AWS) de acordo com o Princípio do Mínimo Privilégio e Segregação de Deveres: o acesso é concedido e monitorado com base na necessidade legítima. Além disso, adotamos processos periódicos de revisão de acessos e perfis.

## Como funciona o processo de recuperação de senha da companhia?

Nativamente pelo email ou pelo número de celular. Utilizamos login por e-mail, autenticação 2 MFA, VPN e demais para que somente pessoas autorizadas tenham acesso ao seu trabalho.

