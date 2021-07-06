# Explore Time Capsule

This project allows you to access to your Time Capsule from internet.

## Requirements 

- Have a Raspberry, or a server in your personal network which have access to the Time Capsule
- Have Docker installed on it

## Installation 

1. Mount Time Capsule in your Raspberry : 

```shell
sudo mkdir /mnt/timecapsule
sudo mount.cifs //<Time Capsule Address>/Data /mnt/timecapsule/ -o password='<Time Capsule Disk Password>',sec=ntlm,vers=1.0
```

  2. Clone project and move on it: 
```shell
git clone git@github.com:VincentHardouin/explore-time-capsule.git
cd explore-time-capsule
```

2. Run project in Docker with :
```
docker-compose up -d
```
