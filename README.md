<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Logo de Nest" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">Un framework progresivo de <a href="http://nodejs.org" target="_blank">Node.js</a> para construir aplicaciones del lado del servidor eficientes y escalables.</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="Versión de NPM" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Licencia del Paquete" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="Descargas de NPM" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Cobertura" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Patrocinadores en Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Patrocinadores en Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donar" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Apóyanos"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Síguenos en Twitter"></a>
</p>
<!--
[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
[![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)
-->

## Descripción

Repositorio de inicio del framework [Nest](https://github.com/nestjs/nest) en TypeScript.

## Configuración del proyecto

```bash
$ npm install
```

## Compilar y ejecutar el proyecto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Ejecutar pruebas

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Despliegue

Cuando estés listo para desplegar tu aplicación NestJS en producción, hay algunos pasos clave que puedes seguir para asegurarte de que funcione de la manera más eficiente posible. Consulta la [deployment documentation](https://docs.nestjs.com/deployment) para más información.

Si estás buscando una plataforma en la nube para desplegar tu aplicación NestJS, echa un vistazo a [Mau](https://mau.nestjs.com), nuestra plataforma oficial para desplegar aplicaciones NestJS en AWS. Mau hace que el despliegue sea sencillo y rápido, requiriendo solo unos pocos pasos:

```bash
$ npm install -g mau
$ mau deploy
```

Con Mau, puedes desplegar tu aplicación en solo unos clics, lo que te permite concentrarte en crear funcionalidades en lugar de administrar la infraestructura.

## Recursos

A continuación, algunos recursos que pueden serte útiles al trabajar con NestJS:

- Visita la [NestJS Documentation](https://docs.nestjs.com) para aprender más sobre el framework.
- Para preguntas y soporte, por favor visita nuestro [Discord channel](https://discord.gg/G7Qnnhy).
- Para profundizar más y obtener experiencia práctica, revisa nuestros [courses](https://courses.nestjs.com/).
- Despliega tu aplicación en AWS con la ayuda de [NestJS Mau](https://mau.nestjs.com) en solo unos clics.
- Visualiza el gráfico de tu aplicación e interactúa con la aplicación NestJS en tiempo real usando [NestJS Devtools](https://devtools.nestjs.com).
- ¿Necesitas ayuda con tu proyecto (medio tiempo o tiempo completo)? Revisa nuestro [enterprise support](https://enterprise.nestjs.com).
- Para mantenerte informado y recibir actualizaciones, síguenos en [X](https://x.com/nestframework) y [LinkedIn](https://linkedin.com/company/nestjs).
- ¿Buscas trabajo o tienes una oferta laboral? Echa un vistazo a nuestro [Jobs board](https://jobs.nestjs.com).

## Soporte

Nest es un proyecto de código abierto con licencia MIT. Puede crecer gracias a los patrocinadores y al apoyo de los increíbles contribuyentes. Si deseas unirte a ellos, por favor [read more here](https://docs.nestjs.com/support).

## Mantente en contacto

- Autor - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Sitio web - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Licencia

Nest está [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

---

# 🚀 Guía de Configuración y funcionamiento de NestJS en Windows 11

En esta guía se mostraran todos los pasos necesarios para instalar **NVM** en Windows 11, usarlo para instalar la última versión de **Node.js**, instalar globalmente el **NestJS CLI** y crear un primer proyecto con **NestJS**. 🎉

---

## Índice

- [🚀 Guía de Configuración y funcionamiento de NestJS en Windows 11](#-guía-de-configuración-y-funcionamiento-de-nestjs-en-windows-11)
  - [Índice](#índice)
  - [1. Instalación de NVM en Windows 11](#1-instalación-de-nvm-en-windows-11)
    - [¿Qué es NVM? 🤔](#qué-es-nvm-)
    - [Pasos para la Instalación:](#pasos-para-la-instalación)
  - [2. Instalación de la Última Versión de Node.js con NVM](#2-instalación-de-la-última-versión-de-nodejs-con-nvm)
    - [Pasos para Instalar Node.js:](#pasos-para-instalar-nodejs)
  - [3. Instalación Global de NestJS CLI](#3-instalación-global-de-nestjs-cli)
    - [¿Qué es NestJS CLI? 🚀](#qué-es-nestjs-cli-)
    - [Pasos para Instalar NestJS CLI Globalmente:](#pasos-para-instalar-nestjs-cli-globalmente)
  - [4. Creación de tu Primer Proyecto en NestJS](#4-creación-de-tu-primer-proyecto-en-nestjs)
    - [Pasos para Crear un Nuevo Proyecto:](#pasos-para-crear-un-nuevo-proyecto)
  - [5. Explicación de la Carpeta `src` y sus Archivos](#5-explicación-de-la-carpeta-src-y-sus-archivos)
  - [Recursos Adicionales](#recursos-adicionales)

---

## 1. Instalación de NVM en Windows 11

### ¿Qué es NVM? 🤔
**NVM (Node Version Manager)** es una herramienta que te permite instalar y administrar múltiples versiones de Node.js en tu sistema de manera sencilla.

### Pasos para la Instalación:
1. **Descargar el Instalador:**
   - Visita el repositorio de [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) y descarga el instalador (`nvm-setup.exe`) de la última versión.

2. **Ejecutar el Instalador:**
   - Ejecuta el archivo descargado y sigue las instrucciones en pantalla.

3. **Verificar la Instalación:**
   - Abre **PowerShell** o **Símbolo del sistema** y ejecuta:
     ```bash
     nvm version
     ```
   - Si todo está correcto, verás la versión instalada de NVM.

---

## 2. Instalación de la Última Versión de Node.js con NVM

### Pasos para Instalar Node.js:
1. **Listar las Versiones Disponibles (Opcional):**
   ```bash
   nvm list available
   ```
2. **Instalar la Última Versión de Node.js:**
   ```bash
   nvm install latest
   ```
3. **Seleccionar la Versión de Node.js a Usar:**
   ```bash
   nvm use latest
   ```

---

## 3. Instalación Global de NestJS CLI

### ¿Qué es NestJS CLI? 🚀
El **NestJS CLI** es una herramienta de línea de comandos que facilita la creación y gestión de proyectos con NestJS.

### Pasos para Instalar NestJS CLI Globalmente:
1. **Instalar NestJS CLI:**
   ```bash
   npm install -g @nestjs/cli
   ```
2. **Verificar la Instalación:**
   ```bash
   nest --version
   ```

---

## 4. Creación de tu Primer Proyecto en NestJS

### Pasos para Crear un Nuevo Proyecto:
1. **Crear el Proyecto:**
   ```bash
   nest new mi-proyecto
   ```
2. **Navegar al Directorio del Proyecto:**
   ```bash
   cd mi-proyecto
   ```
3. **Ejecutar el Proyecto:**
   ```bash
   npm run start:dev
   ```

---

## 5. Explicación de la Carpeta `src` y sus Archivos

La carpeta `src` es el corazón de un proyecto NestJS. Contiene los archivos principales que definen la estructura y funcionalidad de la aplicación. Dentro de esta carpeta encontramos:

- **`main.ts`**: Punto de entrada de la aplicación, donde se inicia el servidor de NestJS y se configuran las opciones globales.
- **`app.module.ts`**: Módulo principal de la aplicación donde se importan y organizan los diferentes componentes de NestJS.
- **`app.controller.ts`**: Define los controladores, que manejan las solicitudes HTTP y responden a ellas.
- **`app.service.ts`**: Contiene la lógica de negocio de la aplicación y es utilizado por los controladores.
- **`app.controller.spec.ts`**: Archivo de pruebas unitarias para el controlador.

Esta estructura modular de NestJS permite organizar el código de manera limpia y escalable, facilitando la implementación de nuevas funcionalidades en la aplicación.

---

## Recursos Adicionales

- **Documentación Oficial de NVM-windows:** [GitHub - nvm-windows](https://github.com/coreybutler/nvm-windows)
- **Documentación de Node.js:** [Node.js Official](https://nodejs.org/)
- **Documentación de NestJS:** [NestJS Official](https://docs.nestjs.com/)
- **Comunidad y Soporte:** Únete a [NestJS Discord](https://discord.gg/nestjs) para interactuar con otros desarrolladores.