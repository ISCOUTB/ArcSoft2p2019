# MONITORING 

## Integrantes 
* Ray Narvaez Tabares 
* Juliana Balcero Torres
* Omar Zuluaga Hernandez
* Deivis Cervantes Puello 

Las metricas de los distintos servicios cargados en Docker seran presentados por medio de gráficas, utilizanco Telegraf, InfluxBD y Grafana.   

## Telegraf

Telegraf es un agente de servidor impulsado por complementos para recopilar e informar métricas,estos complementos pueden obtener una variedad de métricas directamente del sistema en el que se está ejecutando o extraer métricas de API de terceross, asi mismo tien# MONITORING 

## Integrantes 
* Ray Narvaez Tabares 
* Juliana Balcero Torres
* Omar Zuluaga Hernandez
* Deivis Cervantes Puello 

Las metricas de los distintos servicios cargados en Docker seran presentados por medio de gráficas, utilizanco Telegraf, InfluxBD y Grafana.   

## Telegraf

Telegraf es un agente de servidor impulsado por complementos para recopilar e informar métricas,estos complementos pueden obtener una variedad de métricas directamente del sistema en el que se está ejecutando o extraer métricas de API de terceross, asi mismo este servicio tiene otros complementos de salida que envian métricas a una variedad de otros almacenes de datos de series temporales como InfluxDB. 

## Influxbd 
base de datos orientada a time series escrita en Go muy potente y escalable a la hora de realizar estas operaciones.

## Grafana 

[Grafana](https://grafana.com/) es una herramienta para graficar de fácil configuración , la cual permite consultar, visualizar, alertar y comprender métricas a partir de una serie de datos recolectados de manera temporal, siendo asi una solución de análisis y monitoreo de código abierto para base de datos.  

### Instalación 

1. Desplegar:  se montara Grafana, Telegraf e Influxbd sobre docker y se despliega con docker compose. (https://blog.ichasco.com/tig-graficar-metricas-de-hosts-y-docker-con-telegraf-influxdb-y-grafana/)
2. Configurar Telegraf: Crea carpeta y y fichero , añadiendo en este la configuración [Guia] (https://blog.ichasco.com/tig-graficar-metricas-de-hosts-y-docker-con-telegraf-influxdb-y-grafana/)
3. Configurar Grafana : Acceder y Añadir InfluxBD  
 3.1  Inicio de Sesión  
![DashBoard](https://user-images.githubusercontent.com/54947222/69688078-00ed2580-1093-11ea-8054-fa89483ce9bc.jpeg)

 3.2 Conección  con la base de datos 
  Se configura la base de datos, con el fin de realizar las consultas en influxBD 

```
configuration -> data sources -> add data source 
```
![DashBoard4](https://user-images.githubusercontent.com/54947222/69688309-af916600-1093-11ea-8735-6f9f90bc5d09.jpeg)

 3.3 Añadir DashBoard 
  
  Se importa utilizando el host 1443, estoe complementos de salida para enviar métricas a una variedad de otros almacenes de datos de series temporales como InfluxDB. 

## Influxbd 
base de datos orientada a time series escrita en Go muy potente y escalable a la hora de realizar estas operaciones.

## Grafana 

[Grafana](https://grafana.com/) es una herramienta para graficar de fácil configuración , la cual permite consultar, visualizar, alertar y comprender métricas a partir de una serie de datos recolectados de manera temporal, siendo asi una solución de análisis y monitoreo de código abierto para base de datos.  

### Instalación 

1. Desplegar:  se montara Grafana, Telegraf e Influxbd sobre docker y se despliega con docker compose. (https://blog.ichasco.com/tig-graficar-metricas-de-hosts-y-docker-con-telegraf-influxdb-y-grafana/)
2. Configurar Telegraf: Crea carpeta y y fichero , añadiendo en este la configuración [Guia] (https://blog.ichasco.com/tig-graficar-metricas-de-hosts-y-docker-con-telegraf-influxdb-y-grafana/)
3. Configurar Grafana : Acceder y Añadir InfluxBD  
 3.1  Inicio de Sesión  
![DashBoard](https://user-images.githubusercontent.com/54947222/69688078-00ed2580-1093-11ea-8054-fa89483ce9bc.jpeg)

 3.2 Conección  con la base de datos 
  Se configura la base de datos, con el fin de realizar las consultas en influxBD 

```
configuration -> data sources -> add data source 
```
![DashBoard4](https://user-images.githubusercontent.com/54947222/69688309-af916600-1093-11ea-8735-6f9f90bc5d09.jpeg)

 3.3 Añadir DashBoard 
  
  Se importa utilizando el host 1443, esto auntomaticamente detectará el dasboard. 
  
![DashBoard6](https://user-images.githubusercontent.com/54947222/69688572-75749400-1094-11ea-8a11-30c9164a3bec.jpeg)

## Pruebas 

### Home 
![DashBoard2](https://user-images.githubusercontent.com/54947222/69688260-88d32f80-1093-11ea-9291-2367eae5785e.jpeg)

### Selección Base de Datos 
![DashBoard3](https://user-images.githubusercontent.com/54947222/69688558-67267800-1094-11ea-93ef-34d19c3eda6d.jpeg)

### DashBoard 
 Metricas recolectadas. 
![DashBoard5](https://user-images.githubusercontent.com/54947222/69688344-cc2d9e00-1093-11ea-9e85-010b86dd9d70.jpeg)
