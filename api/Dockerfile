FROM node:14-alpine as base
COPY package*.json /
RUN npm install --quiet

FROM base as dev
ENV NODE_ENV=development
COPY --from=base ./ .
COPY . /
ARG PORT=3002
ENV PORT $PORT
EXPOSE $PORT
CMD ["node", "bin/www"]
