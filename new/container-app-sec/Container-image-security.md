
# Container Image Security 
 - Building secure container images
     
     
     
     
# Choosing base images 



# Distroless images 

- Distroless 2.0 project - uses Alpine as a minimalistic & secure base image, and with the help of two tools, apko and melange, allows to build an application-tailored image containing only (mostly?) the necessary bits. 


What is apko ?

- Declarative OCI image builder tool based on apk 
- Part of the building toolkit behind Wolfi/Chainguard images 
- Images are defined in YAML files 
- Build are fully reproducible 
- Automatically generates SBOMs for every imahes 
- Platform-agnostic buids via Docker + apko images 

 - example of apko.yaml file

```
contents:
  repositories:
    - https://dl-cdn.alpinelinux.org/alpine/edge/main
  packages:
    - alpine-base

entrypoint:
  command: /bin/sh -l

# optional environment configuration
environment:
  PATH: /usr/sbin:/sbin:/usr/bin:/bin

```

Buiding the images with apko via Docker 

```
docker run -v "$PWD":/work cgr.dev/chainguard/apko build examples/alpine-base.yaml apko-alpine:edge apko-alpine.tar

```
test the image with docker 

```

$ docker load < alpine.tar
$ docker run -it apko-alpine:test 
```

Why apko ?

- Introduced by alphine , it used a different methodology to handle package management 

- Package Installation or removal is done as a side effect of modifyinh the system state 

- This creates the ideal conditions for reproducible and declaratve pipelines 

```

where do package come from ?

- for alphine-base images , use Alphine apks found at 
pkgs.alpinelinux.org/packages

- for wolfi images , use wolfi apks that are listed in the wolfi-os repository  hosted at packages.wolfi.dev/os

- Don't mix! 

- You cam also create your own apks with melange 

``` 

why distroless ?

- Minimalist container images with only what's absolutely necessary to build or execute your application

- Popular base images are full of software that only makes sense on bare metal

- No need for package managers or interactive shells on production images 

- less dependencies = less attack surface


```

``` 

docker run cgr.dev/chainguard/apko version

```

```
docker run -v "$PWD":/work cgr.dev/chainguard/apko build examples/alpine-base.yaml apko-alpine:edge apko-alpine.tar

```



# Scratch Images 
     
