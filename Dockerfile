FROM node:latest

RUN mkdir -p /src/photo
WORKDIR /src/photo

COPY . /src/photo
RUN npm install

EXPOSE 3004

CMD npm start