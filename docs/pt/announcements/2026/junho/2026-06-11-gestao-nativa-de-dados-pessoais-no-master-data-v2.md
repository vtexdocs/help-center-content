---
title: 'Gestão nativa de dados pessoais no Master Data v2'
createdAt: 2026-06-11T00:00:00.000Z
updatedAt: 2026-06-11T00:00:00.000Z
contentType: updates
productTeam: Storage
slugEN: 2026-06-11-native-personal-data-management-in-master-data-v2
locale: pt
announcementSynopsisPT: 'O Master Data v2 agora trata dados pessoais de forma nativa, com criptografia em repouso, mascaramento automático na leitura e suporte a solicitações de titulares de dados.'
tags:
  - Nova funcionalidade
  - Master Data
---

A gestão nativa de dados pessoais já está disponível no Master Data v2. Cada entidade de dados pode agora declarar quais campos contêm dados pessoais e quem é o titular dessas informações, ativando criptografia em repouso, mascaramento automático na leitura e suporte a fluxos de solicitação de titulares.

## O que mudou?

Anteriormente, lojas que armazenavam dados pessoais no Master Data v2 precisavam implementar suas próprias camadas de criptografia, mascaramento e controle de acesso. Esses comportamentos passam agora a ser nativos da plataforma:

- **Configuração por entidade:** cada entidade de dados pode declarar quais campos contêm dados pessoais e qual campo identifica o titular (`SubjectIdField`).
- **Criptografia e residência de dados:** os valores dos campos pessoais são armazenados separadamente, com criptografia e regras específicas de residência.
- **Mascaramento por padrão:** operações de leitura retornam os campos pessoais com valores mascarados (por exemplo, `j***@****.com`). Para obter os valores originais é preciso enviar um parâmetro específico na requisição.
- **Vínculo com o titular:** cada documento com dados pessoais fica associado ao titular declarado, o que viabiliza o atendimento a direitos como acesso, portabilidade e esquecimento.

> ℹ️ A funcionalidade está disponível apenas para entidades do Master Data v2. Entidades do Master Data v1 não são compatíveis.

## O que precisa ser feito?

O Master Data v2 e as entidades de dados continuam funcionando como antes.

Para começar a usar a funcionalidade de gestão de dados pessoais, os times técnicos da loja precisam configurar quais campos de cada entidade contêm dados pessoais e ajustar as integrações de leitura e busca afetadas pelo mascaramento. Os passos completos estão no guia [Managing personal data in Master Data v2](https://developers.vtex.com/docs/guides/managing-personal-data-in-master-data-v2).
