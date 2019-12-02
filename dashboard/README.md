# Dashboard	

Un dashboard es una herramienta de gestión de la información que monitoriza, analiza y muestra de manera visual los indicadores clave de desempeño, métricas y datos fundamentales para hacer un seguimiento del estado de una empresa, un departamento, una campaña o en nuestro caso información de usuarios.	

En nuestro caso usamos **Angular** como framework de despliegue del dashboard

<img src="https://cdn.worldvectorlogo.com/logos/angular-icon.svg" width="200">

## Instalacion 

Para empezar debemos instalar el Angular CLI:
```
npm install -g @angular/cli
```
Luego creamos nuestro proyecto

```
ng new my-first-project
cd my-first-project
ng serve

```
## Componentes

Se crea un componente llamado DashboardComponent, que será el núcleo de mantenerlo todo junto. Puede estilizar la plantilla de este componente como lo desee, con un solo requisito; necesitamos algún tipo de contenedor como a div para ser el marcador de posición de todas nuestras tarjetas.
A continuación, crearemos una clase simple llamada DashboardCardque se encarga de mantener todas las propiedades a las que desea que tenga acceso la tarjeta una vez que se crea dinámicamente, así como una referencia al componente que se instanciará para la tarjeta una vez que decidamos para hacerlo Completaremos los detalles de esta clase más adelante.

## Resultado final 

<img src="https://github.com/IngenieriaDeSistemasUTB/ArcSoft2p2019/blob/master/dashboard/dashb.png">
