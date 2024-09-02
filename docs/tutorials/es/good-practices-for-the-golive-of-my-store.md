---
title: 'Buenas prácticas para el Golive de mi tienda'
id: 2HhBfAzR4kmkwGA8WImEaC
status: DRAFT
createdAt: 2017-06-26T16:58:25.201Z
updatedAt: 2022-12-12T12:21:06.787Z
publishedAt: 
firstPublishedAt: 2017-06-26T23:15:02.601Z
contentType: tutorial
productTeam: Post-purchase
author: 5fYXkMJagMwcSAeMAsAuOI
slug: buenas-practicas-para-el-golive-de-mi-tienda
locale: es
legacySlug: buenas-practicas-para-el-golive-de-mi-tienda
subcategory: wz3FvYTctwuCwG206QUAi
---

## WarRoom pre-Golive
Aún teniendo definidos y desarrollados todos los flujos de integraciones y de navegación, uno de los momentos más críticos del proyecto son las pruebas end-to-end, donde se validan los flujos de navegación de usuario y se realizan las pruebas de facturación. Seguramente, surgirán temas importantes a resolver. 

<div class="alert alert-info">
Lo más importante es que en una misma mesa se encuentren todos los tomadores de decisión (VTEX, Cliente, Agencia) para lograr optimizar la sinergia y resiliencia del equipo ante cualquier issue o duda que surja.
</div>

## Checklist de validación pre-Golive
La siguiente es una planilla que contiene un checklist sugerido con los principales puntos de atención al momento de validar la tienda, previamente a realizar el golive al público: [Checklist de Validación Pregolive](https://docs.google.com/spreadsheets/d/1demkpSZ2h7ut5TsKwiPdmK029BfaCp0wabeGADfA_W0/edit)

<div class="alert alert-info">
Momentos recomendados para validación:
1. Un mes antes del Golive (dará tiempo a accionar si se detecta un issue bloqueante).
2. Una semana antes del Golive (dará tiempo a accionar si quedó demorado u olvidado algún tema menor).
</div>

## Certificado de seguridad y apuntar dominio a VTEX
Este proceso es realizado en el momento de GoLive de la tienda. Habilita al actual responsable de su dominio a que apunte hacia VTEX. Luego de esta acción, al ingresar a www.mitienda.com, su nueva tienda estará apuntada hacia VTEX.

<div class="alert alert-warning">
Si se utiliza Cloudflare como zona DNS, puede ser necesario deshabilitar el proxy DNS (y en consecuencia deshabilitar los servicios CDN y WAF de CloudFlare). Puedes encontrar más información en el artículo <a href="https://help.vtex.com/es/tutorial/disable-cloudflare-proxy--75QqsXAqR7NdkRc1GZPiXb">Cómo deshabilitar el proxy de Cloudflare</a>.
</div>

Ver los detalles del proceso aquí: [Configurando el apuntamiento del DNS para VTEX](/es/tutorial/configurando-el-apuntamiento-del-dns-para-vtex/).

<div class="alert alert-info">
La recomendación principal es que un funcionario del cliente, con conocimientos y experiencia en DNS, realice estas configuraciones. Si esta configuración no es correcta, su tienda puede sufrir una caída por un error humano. Si surge algún problema, se debe actuar rápidamente para corregirlo y retornar la estabilidad a las operaciones.
</div>

## Canal de comunicación durante Golive
Mientras se desarrolla el proceso de Golive, adicionalmente al WarRoom, suele ser conveniente mantener un canal activo de comunicación, para poder compartir issues críticos o requerimientos urgentes. Todos deben estar alineados con respecto al camino a seguir.

<div class="alert alert-info">
Para esto, suele ser conveniente abrir un canal de Slack, Whatsapp o Skype, durante la semana anterior y posterior al Golive, donde se encuentren todos los participantes del proyecto.
</div>
