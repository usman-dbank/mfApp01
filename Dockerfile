# pull official base image
FROM node:20.8.0-alpine3.17 as build

# set working directory
WORKDIR /app

# copy dist
COPY dist ./dist

FROM nginx:1.24.0 as production

ENV NODE_ENV production

# Copy built assets from `build` image
COPY --from=build /app/dist /usr/share/nginx/html

# Add your nginx.conf
COPY build-conf/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
