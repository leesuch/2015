FROM node

ADD . /cdatx

WORKDIR /cdatx

RUN npm install

CMD npm run watch
