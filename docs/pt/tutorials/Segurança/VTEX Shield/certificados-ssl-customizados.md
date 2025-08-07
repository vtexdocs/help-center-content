---
title: 'Certificados SSL customizados'
id: 1hoaDEbU50PDZSe6AYep9q
status: PUBLISHED
createdAt: 2025-02-28T14:30:02.015Z
updatedAt: 2025-02-28T15:03:40.701Z
publishedAt: 2025-02-28T15:03:40.701Z
firstPublishedAt: 2025-02-28T14:34:42.133Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: custom-ssl-certificates
legacySlug: certificados-ssl-customizados
locale: pt
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

<div class="alert alert-info">
  <p>Esta funcionalidade faz parte do produto <a href="https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh">VTEX Shield</a>. Se já é cliente da VTEX e deseja adotar o VTEX Shield no seu negócio, entre em contato com o <a href="https://help.vtex.com/pt/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ">Suporte Comercial</a>. É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o <a href="https://vtex.com/br-pt/contato/">formulário de contato</a>.</p>
</div>

Por padrão, a VTEX utiliza [certificados SSL](https://help.vtex.com/pt/tutorial/certificado-de-seguranca-ssl--tutorials_1308) emitidos pelo [Let’s Encrypt](https://letsencrypt.org/), uma solução open-source amplamente adotada no mercado. Essa abordagem garante segurança, confiabilidade e compatibilidade com a maioria dos navegadores.

No entanto, algumas lojas demandam o uso de certificados SSL customizados por questões específicas de compliance, requisitos internos de segurança, ou a preferência por entidades certificadoras que oferecem seguros adicionais.

Para atender a esse objetivo, a página **Certificados SSL** permite que você instale um novo certificado SSL customizado e gerencie os certificados existentes.

A página apresenta as seguintes informações em uma tabela: 

| Colunas | Descrição |
| :---- | :---- |
| **Domínio** | Endereço da loja (host), composto por subdomínio, domínio e domínio de nível superior. Exemplo: `www.mystore.com`. Saiba mais sobre a estrutura desse endereço em [Configurar o domínio da loja](https://help.vtex.com/pt/tutorial/configurar-o-dominio-da-loja--tutorials_2450#estrutura-do-endereco-da-loja). |
| **AC** | Autoridade certificadora. |
| **Data de instalação** | Data em que o certificado foi instalado. |
| **Data de expiração** | Data em que o certificado expira. |
| **Status** | Situação do certificado, que pode ser: <ul><li><strong>Ativo:</strong> certificado válido e ativo para o host.</li><li><strong>Sobrescrito:</strong> o certificado para este host foi substituído por outro através de um método externo, como uma chamada da API na CDN.</li><li><strong>Instalando:</strong> instalação do certificado em andamento.</li><li><strong>Desconhecido:</strong> o status do certificado não pôde ser determinado devido a problemas técnicos internos de comunicação, configuração ou monitoramento.</li><li><strong>Expira em breve:</strong> o certificado está próximo da data de expiração (30 dias antes ou menos).</li><li><strong>A instalação falhou:</strong> após o status <em>Instalando</em>, é possível que a instalação falhe e o usuário precisará repetir a tentativa posteriormente.</li><li><strong>Expirado:</strong> após a data de expiração.</li></ul> |

## Pré-requisitos

Antes de instalar um certificado customizado, é necessário cumprir com os requisitos abaixo:

* Ser um usuário associado a um [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) com os [recursos do License Manager](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) listados a seguir, para visualizar e gerenciar as informações da página:

  * **Produto:** *CDN API*  
  * **Categoria:** *Certificate management*  
  * **Recursos:** *Update certificate* e *View certificate*

* Ter um arquivo `.KEY` com a chave privada do certificado até 1MB salvo no seu  dispositivo.  
* Ter um arquivo `.CRT` com o certificado até 1MB salvo no seu dispositivo.

## Instalar novo certificado SSL

Siga as instruções abaixo para instalar um novo certificado customizado na VTEX:

1. No Admin VTEX, acesse **Configurações da loja > Shield > Certificados SSL**.  
2. Clique em `Instalar novo`.  
3. No campo **Hosts**, selecione um ou mais hosts para aplicar o certificado. Somente os hosts previamente cadastrados na sua conta serão exibidos.  
4. Em **Chave privada**, clique em `Escolha um arquivo` para selecionar um arquivo no formato `.KEY` até 1MB salvo no seu dispositivo.  
5. Em **Certificado**, clique em `Escolha um arquivo` para selecionar um arquivo no formato `.CRT` até 1MB salvo no seu dispositivo.  
6. Clique em `Instalar`.

Se a configuração tiver sucesso, você será redirecionado(a) para a página de listagem de certificados, onde poderá visualizar os hosts selecionados.

A instalação pode levar 7 dias para ser concluída e, nesse período, o status dos hosts será **Instalando**. Ao final da instalação, o status dos hosts mudará para **Ativo**.

<div class="alert alert-info">
  <p>Para entender como solucionar erros na instalação, consulte o guia de troubleshooting 
<a href="https://help.vtex.com/pt/tutorial/erro-ao-instalar-certificado-ssl-customizado--6hgFzbcc96mcrqXZMmHCTr" target="_blank" rel="noopener noreferrer">Erro ao instalar certificado SSL customizado</a>.</p>
</div>

## Saiba mais

* [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh)  
* [Configurar o domínio da loja](https://help.vtex.com/pt/tutorial/configurar-o-dominio-da-loja--tutorials_2450)  
* [Go-live](https://help.vtex.com/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#realizar-apontamento-de-dns)
* [Erro ao instalar certificado SSL customizado](https://help.vtex.com/pt/tutorial/erro-ao-instalar-certificado-ssl-customizado--6hgFzbcc96mcrqXZMmHCTr)
