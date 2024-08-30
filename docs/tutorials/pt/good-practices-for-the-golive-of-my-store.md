---
title: 'Boas práticas para o Golive da minha loja'
id: 2HhBfAzR4kmkwGA8WImEaC
status: DRAFT
createdAt: 2017-06-26T16:58:25.201Z
updatedAt: 2022-12-12T12:21:06.787Z
publishedAt: 
firstPublishedAt: 2017-06-26T23:15:02.601Z
contentType: tutorial
productTeam: Post-purchase
author: 5fYXkMJagMwcSAeMAsAuOI
slug: boas-praticas-para-o-golive-da-minha-loja
locale: pt
legacySlug: boas-praticas-para-o-golive-da-minha-loja
subcategory: wz3FvYTctwuCwG206QUAi
---

## WarRoom pre-Golive
Mesmo tendo definidos e desenvolvidos todos os fluxos de integrações e de navegação, um dos momentos mais críticos do projeto são os testes end-to-end, nos quais são validados os fluxos de navegação de usuário e são realizados os testes de faturamento. Certamente, surgirão temas importantes a resolver. 

>ℹ️ O mais importante é que estejam em uma mesma mesa todos os tomadores de decisão (VTEX, Cliente, Agência) para otimizar a sinergia e resiliência da equipe diante de qualquer questão ou dúvida que possa surgir.

## Checklist de validação pré-Golive
Segue uma planilha que contém um checklist sugerido com os principais pontos de atenção no momento de validar a loja, antes de realizar o Golive ao público: [Checklist de Validação pré-Golive](https://docs.google.com/spreadsheets/d/1demkpSZ2h7ut5TsKwiPdmK029BfaCp0wabeGADfA_W0/edit)

>ℹ️ Momentos recomendados para validação:
> 1. Um mês antes do Golive (dará tempo de agir se for detectada uma questão de bloqueio).
> 2. Uma semana antes do Golive (dará tempo de agir em caso de demora ou esquecimento de algum tema de menor importância).

## Certificado de segurança e apontamento de domínio para VTEX
Este processo é realizado no momento do GoLive da loja. Permite que o atual responsável por seu domínio aponte para VTEX. Depois desta ação, ao acessar www.minhaloja.com, a nova loja estará apontada para a VTEX.

>⚠️ Caso você utilize a Cloudflare como zona de DNS, pode ser necessário desabilitar o proxy de DNS e, consequentemente, desativar os serviços de CDN e WAF da Cloudflare. Mais informações podem ser encontradas no artigo [Como desabilitar o proxy no Cloudflare](https://help.vtex.com/pt/tutorial/disable-cloudflare-proxy--75QqsXAqR7NdkRc1GZPiXb).

Veja os detalhes do processo aqui: [Configurar o apontamento de DNS para a VTEX](/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex).

>ℹ️ A recomendação principal é que um funcionário do cliente, com conhecimentos e experiência em DNS, realize estas configurações. Se esta configuração não estiver correta, sua loja pode sofrer uma queda por um erro humano. Caso venha a surgir algum problema, deve-se agir rapidamente para corrigí-lo e retomar a estabilidade das operações.

## Canal de comunicação durante Golive
Enquanto se desenvolve o processo de Golive, adicionalmente ao WarRoom, costuma ser conveniente manter um canal de comunicação ativo para compartilhar questões críticas ou requerimentos urgentes. Todos devem estar alinhados quanto ao caminho a seguir.

>ℹ️ Para isto, costuma ser conveniente abrir um canal de Slack, Whatsapp ou Skype, durante a semana anterior e posterior ao Golive, onde se encontrem todos os participantes do projeto.
