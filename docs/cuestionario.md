# Cuestionario
### 1. ¿Qué es un Coding Dojo? referencia https://lorenzosolano.com/what-is-coding-dojo/
Es una reunión de programadores para trabajar en un desafío de programación, con la finalidad de colaborar y divertirse entre sí para mejorar sus habilidades.

### 2. Diferencia entre Requerimientos, Criterios de Aceptación y Escenarios de Prueba. Dar ejemplos a partir de un problema distinto a la referencia. Referencia https://lorenzosolano.com/requirements-acceptance-criteria-and/
Los requerimientos son descripciones muy puntuales y espcificas de las propiedades del sistema. Los criterios de aceptación son declaraciones para verificar si el sistema implementó correctamente el requerimiento. Los escenarios de prueba son los ejemplos utilizados para validar un criterio de aceptación.

### 3. De dos ejemplos de requerimientos no-funcionales, y especifique cual es su categoría (seguridad, performance, portabilidad, etc.)
-	Seguridad: Los permisos de acceso al sistema solo los puede modificar el DBA
-	Eficiencia/performance: Las transacciones del sistema deben responder al usuario en 3 segundos mínimo.

### 4. ¿Qué es TDD?
TDD o Test Driven Development (Desarrollo guiado por pruebas), es una metodología que consiste en crear primero las pruebas y luego escribir el código.

### 5. ¿Que son pruebas unitarias automatizadas?
Es la automatización del proceso manual de revisión y validación de un producto de software, mediante una aplicación de herramientas de software.

### 6. ¿Cual fue el 1er framework de pruebas unitarias y para cual lenguaje fue creado?
SUnit, creado para Smalltalk.

### 7. ¿Describa los componentes de la arquitectura xUnit?
-	Corredor de la prueba: es un programa ejecutable que ejecuta pruebas implementadas usando un marco xUnit e informa de los resultados de las pruebas.
-	Caso de prueba: es la clase más elemental, de las que todas las pruebas unitarias heredan.
-	Accesorios de prueba: es el conjunto de condiciones previas o estado necesario para ejecutar una prueba.
-	Suites de prueba: es un conjunto de pruebas que comparten el mismo aparato.
-	Ejecución de pruebas: sigue de esta manera (los métodos setup () y teardown () sirven para inicializar y limpiar dispositivos de prueba): 
setup();
...
/* Cuerpo de la prueba */
...
teardown();
-	Formateador de resultados de prueba: produce resultados en uno o más formatos de salida.
-	Afirmaciones: es una función o macro que verifica el comportamiento (o el estado) de la unidad bajo prueba.

### 8. Indique al menos tres desventajas de las pruebas unitarias automatizadas
-	Requieren un mayor nivel de habilidad por parte del desarrollador o equipo de desarrollo
-	Aumentan las necesidades de herramientas como corredores de prueba, marcos, etc.
-	Requieren de un análisis complejo cuando se encuentra una prueba fallida

## 9. Indique al menos tres ventajas de las pruebas unitarias automatizadas
-	Ayudan a detectar errores que no se contemplan en la fase de desarrollo
-	Sirven de respaldo para futuros cambios en la lógica de métodos o funciones
-	Mejoran la calidad del código
