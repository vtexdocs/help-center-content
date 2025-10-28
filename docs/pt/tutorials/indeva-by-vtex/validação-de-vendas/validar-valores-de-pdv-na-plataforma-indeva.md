---
title: 'Validar valores de PDV na plataforma Indeva'
id: 5GRLWlRabZKTm3Ina5PpI7
status: PUBLISHED
createdAt: 2025-09-18T12:49:52.947Z
updatedAt: 2025-10-17T11:43:38.830Z
publishedAt: 2025-10-17T11:43:38.830Z
firstPublishedAt: 2025-09-18T13:19:20.882Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: validate-pos-values-in-platform-indeva
legacySlug: validar-valores-de-pdv-na-plataforma-indeva
locale: pt
subcategoryId: 2vQEGDR2k2uSmdUYF7fMkU
---

A validação garante que os valores de pontos de venda (PDV) estejam corretamente registrados na Indeva.

Esse processo pode ser realizado manualmente e acompanhado pelos diferentes **status de validação** exibidos na plataforma.

## Realizar validação manual

Quando o sistema não envia os valores automaticamente, é necessário inserir os dados do PDV diretamente na plataforma por meio da validação manual.

> ⚠️ Se você tem acesso a mais de uma loja, selecione a loja correta em **Filtros**, localizado no canto superior direito da tela.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/valida%C3%A7%C3%A3o-de-vendas/validar-valores-de-pdv-na-plataforma-indeva_1.png)

Siga os passos abaixo para validar os dados manualmente:

1. No menu, clique em **Validação**.  
2. Selecione o dia desejado e clique em **Validar**.  
3. Na tela exibida, insira os valores de vendas.  
   ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/valida%C3%A7%C3%A3o-de-vendas/validar-valores-de-pdv-na-plataforma-indeva_2.png)  
4. Clique em **Salvar e validar** para concluir.

Após qualquer edição manual, a plataforma **bloqueia automaticamente as informações** para impedir que sejam sobrescritas pela integração automática.

## Acompanhar status da validação

Após validar os dados, a Indeva exibe o **status do último horário, dia e usuário que realizou a atualização**, facilitando o acompanhamento de edições e integrações.

O ambiente de validação também apresenta novas colunas para consulta, como **Última atualização do Integrador**, **Última validação** e a foto do **Validador**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/indeva-by-vtex/valida%C3%A7%C3%A3o-de-vendas/validar-valores-de-pdv-na-plataforma-indeva_3.gif)

### Interpretar os status de validação

- **Não validado**: valores que ainda não foram validados.  
- **Validado**: dia validado sem edições manuais.  
- **Validado e atualizado**: dia validado que recebeu atualização automática do integrador.  
- **Validado com edição manual**: dia validado que foi alterado manualmente.

> ℹ️ Para evitar inconsistências, realize a validação sempre no dia seguinte ao fechamento.

