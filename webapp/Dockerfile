FROM node:14-alpine as prod
COPY package*.json /
ENV NODE_ENV=production
RUN npm install --quiet
COPY . ./
ENV HOST=0.0.0.0
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT
RUN npm run build
CMD ["npm", "start"]
