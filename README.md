# Explore Time Capsule

This project allows you to access to your Time Capsule from internet.

## Requirements 

- Have a Raspberry, or a server in your personal network which have access to the Time Capsule
- Have Docker installed on it

## Installation 

1. Clone project and move on it: 
```shell
git clone git@github.com:VincentHardouin/explore-time-capsule.git
cd explore-time-capsule
```

2. Install dependencies:
```shell
NODE_ENV=production npm install
```

3. Mount Time Capsule in your Raspberry :

```shell
sudo npm run configure
```

4. Run project in Docker with :
```
docker-compose up -d
```

## Deployment 

1. Use `docker buildx` to build image for arm 
```
docker buildx build --platform linux/arm/v6 -t nidourah/explore-webapp:latest --push .
```
