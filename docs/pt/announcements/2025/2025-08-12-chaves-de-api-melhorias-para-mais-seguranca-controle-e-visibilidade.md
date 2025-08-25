---
title: 'Chaves de API: melhorias para mais segurança, controle e visibilidade'
id: 5shFvP1QiNRdMllp77iVXA
status: PUBLISHED
createdAt: 2025-08-12T22:04:47.768Z
updatedAt: 2025-08-13T14:29:17.461Z
publishedAt: 2025-08-13T14:29:17.461Z
contentType: updates
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2025-08-12-api-keys-improvements-for-more-security-control-and-visibility
locale: pt
legacySlug: chaves-de-api-melhorias-para-mais-seguranca-controle-e-visibilidade
announcementImageID: 'undefined'
announcementSynopsisPT: 'Atualizamos a experiência de Chaves de API com exportação, busca, alertas e links únicos para tokens.'
---

Para otimizar a gestão das credenciais de acesso e aumentar a segurança, aprimoramos a experiência de **Chaves de API**. As novidades já estão disponíveis para todas as contas.

![generated-keys-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2025/2025-08-12-chaves-de-api-melhorias-para-mais-seguranca-controle-e-visibilidade_1.png)

## O que mudou?

Reunimos as novidades em três grupos principais, que aprimoram a segurança, simplificam a gestão e facilitam a visibilidade das chaves de API.

### Segurança no compartilhamento

Agora, em vez de visualizar o novo token diretamente ao gerar e renovar o token, você receberá um link de acesso único. A mudança tem o objetivo de aumentar a segurança no compartilhamento de dados sensíveis e diminuir a superfície de acesso a ataques.

O link de acesso único pode ser copiado para acesso posterior ou compartilhado com a pessoa que precisa utilizá-lo. O link pode ser acessado apenas uma vez, ou seja, expira ao ser clicado. Se não houver interações em 24 horas, o link também expira.

![one-time-link-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2025/2025-08-12-chaves-de-api-melhorias-para-mais-seguranca-controle-e-visibilidade_2.png)

> ⚠️ A URL oficial para acessar o token segue sempre o formato `share.vtex.com/credentials/{token}`. O `{token}` é um identificador aleatório gerado no momento da criação ou renovação da chave. Verifique o formato do link antes de acessá-lo para evitar riscos de phishing ou acesso a páginas maliciosas.

### Facilidade de gestão

* **Exportação de chaves de API**: agora você pode gerar um arquivo XLSX com informações das chaves de API geradas na conta e chaves externas.  

* **Funcionalidade de busca aprimorada**: a lista de chaves de API agora permite buscar uma chave pelo apelido, além do nome original.

### Otimização dos alertas

* **Renovação de token**: a coluna **Duração do token** foi removida para facilitar o entendimento durante a gestão de chaves geradas. O sistema agora exibe alertas recomendando a renovação a partir do período configurado (3 ou 6 meses), ainda mantendo a validade contínua do token.  

  Veja a seguir como os alertas são exibidos na linha da chave de API:

<table style="border-collapse:collapse;border:none;margin:auto;">
  <tr>
    <td style="border:none;padding:0;text-align:center;">
      <img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2025/2025-08-12-chaves-de-api-melhorias-para-mais-seguranca-controle-e-visibilidade_3.png" alt="renew-recommended-pt" style="display:block;max-width:100%;height:auto;margin:auto;">
    </td>
  </tr>
  <tr>
    <td style="border:none;padding:8px 0;text-align:center;font-size:14px;color:#666;">
       O alerta laranja significa que o token passou do prazo recomendado de uso em até 3 meses.
    </td>
  </tr>
</table>

<br>

<table style="border-collapse:collapse;border:none;margin:auto;">
  <tr>
    <td style="border:none;padding:0;text-align:center;">
      <img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2025/2025-08-12-chaves-de-api-melhorias-para-mais-seguranca-controle-e-visibilidade_4.png" alt="renew-highly-recommended-pt" style="display:block;max-width:100%;height:auto;margin:auto;">
    </td>
  </tr>
  <tr>
    <td style="border:none;padding:8px 0;text-align:center;font-size:14px;color:#666;">
       O alerta vermelho significa que o token está em uso há 3 meses ou mais além do prazo determinado.
    </td>
  </tr>
</table>

* **Exclusão de token pendente**: adicionamos alertas para notificar quando a exclusão de um token antigo estiver pendente, após a [renovação](https://help.vtex.com/pt/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3).

<table style="border-collapse:collapse;border:none;margin:auto;">
  <tr>
    <td style="border:none;padding:0;text-align:center;">
      <img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2025/2025-08-12-chaves-de-api-melhorias-para-mais-seguranca-controle-e-visibilidade_5.png" alt="pending-deletion-alert-pt" style="display:block;max-width:100%;height:auto;margin:auto;">
    </td>
  </tr>
  <tr>
    <td style="border:none;padding:8px 0;text-align:center;font-size:14px;color:#666;">
      Alerta geral, no topo da aba **Geradas**.
    </td>
  </tr>
</table>

<br>

<table style="border-collapse:collapse;border:none;margin:auto;">
  <tr>
    <td style="border:none;padding:0;text-align:center;">
      <img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2025/2025-08-12-chaves-de-api-melhorias-para-mais-seguranca-controle-e-visibilidade_6.png" alt="delete-pending-pt" style="display:block;max-width:100%;height:auto;margin:auto;">
    </td>
  </tr>
  <tr>
    <td style="border:none;padding:8px 0;text-align:center;font-size:14px;color:#666;">
      Alerta na linha da chave gerada.
    </td>
  </tr>
</table>

## Por que fizemos essa mudança?

Aplicamos as melhorias para proporcionar uma experiência mais completa e intuitiva na gestão das chaves de API, contribuindo para a segurança e eficiência das operações.

O objetivo é oferecer mais segurança e praticidade, incluindo:

* Maior proteção no compartilhamento de tokens, reduzindo o risco de exposição acidental.  
* Colaboração facilitada entre equipes que gerenciam a conta e equipes de desenvolvimento.

## O que precisa ser feito?

Nenhuma ação é necessária. A atualização é automática para todas as contas.

Confira a documentação atualizada para explorar todas as funcionalidades:

* [Chaves de API](https://help.vtex.com/pt/tutorial/chaves-de-api--4bFEmcHXgpNksoePchZyy6)  
* [Chaves externas](https://help.vtex.com/pt/tutorial/chaves-terceiras--1isU0HfKkeg0atlxRha14Q) 
* [Chaves geradas](https://help.vtex.com/pt/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc)  
* [Configurar alerta para renovar tokens de API](https://help.vtex.com/pt/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ)  
* [Exportar chaves de API](https://help.vtex.com/pt/tutorial/exportar-chaves-de-api--1p4eYJWD26gOdicUdiiGC5)  
* [Renovar token de API](https://help.vtex.com/pt/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3)
