FROM node:14-alpine as base
COPY package*.json /
RUN npm install --quiet

FROM node:14-alpine as prod
ENV NODE_ENV=production
COPY --from=base ./ ./
COPY . ./
ENV HOST=0.0.0.0
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT
RUN npm run build
CMD ["npm", "start"]
