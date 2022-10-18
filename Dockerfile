
# Stage 1
FROM node:12 as build-step
RUN mkdir -p /app/bruce-ui-onboard-test
WORKDIR /app/bruce-ui-onboard-test

COPY package.json /app/bruce-ui-onboard-test
RUN npm install -force
RUN npm install gulp -g
COPY . /app/bruce-ui-onboard-test
RUN gulp build-dev
# Stage 2
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /app/bruce-ui-onboard-test/public /usr/share/nginx/html/
EXPOSE 8082

