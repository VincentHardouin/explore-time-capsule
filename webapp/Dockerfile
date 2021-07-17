FROM node:14-alpine as base
WORKDIR /src
COPY package*.json /
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

FROM base as dev
ENV NODE_ENV=development
COPY . /src
RUN npm install --quiet
CMD ["npm", "run", "dev"]
