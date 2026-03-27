SauceDemo E2E Automation Framework
==================================

1\. Introducción
----------------

Este proyecto contiene una suite de pruebas de extremo a extremo (E2E) para la aplicación **SauceDemo**. La solución ha sido diseñada siguiendo estándares de la industria para garantizar la escalabilidad y el mantenimiento del código, utilizando una arquitectura basada en el patrón de diseño **Page Object Model (POM)**.

2\. Stack Tecnológico
---------------------

*   **Motor de Automatización:** Playwright
    
*   **Framework de Pruebas:** Cucumber JS (Gherkin)
    
*   **Lenguaje de Programación:** TypeScript
    
*   **Entorno de Ejecución:** Node.js (v22+)
    
*   **Transpilador:** ts-node (soporte nativo para ES Modules)
    

3\. Arquitectura del Proyecto
-----------------------------

La estructura del código se organiza de la siguiente manera para separar las responsabilidades de forma clara:

*   features/: Definición de los escenarios de prueba en lenguaje Gherkin.
    
*   pages/: Objetos de página (POM) que contienen los selectores y la lógica de interacción con la UI.
    
*   step-definitions/: Implementación técnica de los pasos definidos en los archivos feature.
    
*   support/: Configuración global, manejo de hooks (Before/After) y gestión del ciclo de vida del navegador.
    
*   reports/: Directorio de salida para los reportes de ejecución en formato HTML.
    

4\. Requisitos Previos
----------------------

*   **Node.js**: Versión 22.0.0 o superior.
    
*   **npm**: Gestor de paquetes integrado.
    

5\. Instalación y Configuración
-------------------------------

1.  Clonar el repositorio localmente.
    
2.  Instalar las dependencias del proyecto:
Bash
`   npm install   `
    
3.  Instalar los binarios de los navegadores necesarios para Playwright:
Bash
`   npx playwright install   `
    

6\. Ejecución de Pruebas
------------------------

Para ejecutar la suite completa de pruebas en modo **headless**, utilice el comando configurado en el package.json:

Bash
`   npm test   `

7\. Escenarios de Prueba Implementados
--------------------------------------

Se han automatizado los flujos críticos solicitados en las especificaciones técnicas:

*   **Autenticación de Usuarios**: Validación de flujos positivos (standard\_user) y negativos (locked\_out\_user, credenciales inválidas).
    
*   **Gestión de Carrito**: Adición de productos, validación de persistencia y conteo de ítems.
    
*   **Proceso de Compra (Checkout)**: Flujo completo desde la revisión del carrito hasta la obtención del mensaje de confirmación de orden exitosa.