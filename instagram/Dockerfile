#install node version 12 
FROM node:12 
#create workdir
WORKDIR /app

#copy all package* and send workdir
COPY package*.json ./

#Run command npm install (create dir node_modules for dependencies)
RUN npm install 

#Port 80
EXPOSE 80

#copy all of container to workdir
COPY . .


#run app 
CMD ["node","start"]