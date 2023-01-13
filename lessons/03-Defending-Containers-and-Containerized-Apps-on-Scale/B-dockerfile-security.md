---

title: "DockerFile Security Best Practices "
description: "DockerFile Security Best Practices "

---


# DockerFile Security Best Practices 

- Choose Minimal Base Images 

```

FROM alpine
WORKDIR /app
COPY package.json /app
RUN npm install
CMD [“node”,“index.js”]

```

- Remove Cache Packages

```
FROM alpine
RUN apk add nginx && rm -rf /var/cache/apt/*
COPY index.html /var/www/html/
EXPOSE 80
CMD [“nginx”,“-g”,“daemon off;”]
```

```
FROM alpine
RUN apk add –no-cache nginx
COPY index.html /var/www/html/
EXPOSE 80
CMD [“nginx”,“-g”,“daemon off;”]
```

- avoid multilayers 

![](/img/multilayer.png)

```
FROM alpine
RUN apk update
RUN apk add curl
RUN apk add nodejs
RUN apk add nginx-1.16.1-r6
RUN apk add nginx-mod-http-geoip2-1.16.1-r6
COPY index.html /var/www/html/
EXPOSE 80
CMD [“nginx”,“-g”,“daemon off;”]
```

```
FROM alpine
RUN apk update && apk add curl nginx nginx-mod-http-geoip2-1.16.1-r6 \
rm -rf /var/cache/apt/*
COPY index.html /var/www/html/
EXPOSE 80
CMD [“nginx”,“-g”,“daemon off;”]

```
- Don't ignore .dockerignore
```
node_modules
.env
secrets/
*pem
*.md
```

```
FROM node:10
WORKDIR /nodeapp
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8888
CMD [ “node”, “index.js” ]
```

- choose slim variant  

![](/img/slim.png)

- cut the root

```
FROM node:10
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8888
CMD [ “node”, “index.js” ]
```

```
FROM node:10
RUN user add -m nodeapp
USER nodeappuser
RUN whoami
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8888
CMD [ “node”, “index.js” ]

```
![](/img/remove-unwanted.png)



TAG Wisely

![](/img/tag-wisely.png)

So No to latest Tags

Public Private Registry 


keep it single 

Avoid Hard Coding

```
ARG VERSION
FROM node:$VERSION
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8888
CMD [ “node”, “index.js” ]

```

```
docker build -t testimage –build-arg VERSION=10 .
docker build -t testimage –build-arg VERSION=9 .
```

adding metadata 

```

FROM node:10
LABEL version=“1.0” maintainer=“Sangam Biradar <cXXXXXXo@gmail.com>”
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8888
CMD [ “node”, “index.js” ]

```

Rego Policies 

- write custom policies 

```

package play


suspicious_env_keys = [
    "passwd",
    "password",
    "secret",
    "key",
    "access",
    "api_key",
    "apikey",
    "token",
]

pkg_update_commands = [
    "apk upgrade",
    "apt-get upgrade",
    "dist-upgrade",
]

image_tag_list = [
    "latest",
    "LATEST",
]

# Looking for suspicious environemnt variables
deny[msg] {    
    input[i].Cmd == "env"
    val := input[i].Value
    contains(lower(val[_]), suspicious_env_keys[_])
    msg = sprintf("Suspicious ENV key found: %s", [val])
}

# Looking for latest docker image used
warn[msg] {
    input[i].Cmd == "from"
    val := split(input[i].Value[0], ":")
    count(val) == 1
    msg = sprintf("Do not use latest tag with image: %s", [val])
}

# Looking for latest docker image used
warn[msg] {
    input[i].Cmd == "from"
    val := split(input[i].Value[0], ":")
    contains(val[1], image_tag_list[_])
    msg = sprintf("Do not use latest tag with image: %s", [input[i].Value])
}

# Looking for apk upgrade command used in Dockerfile
deny[msg] {
    input[i].Cmd == "run"
    val := concat(" ", input[i].Value)
    contains(val, pkg_update_commands[_])
    msg = sprintf("Do not use upgrade commands: %s", [val])
}

# Looking for ADD command instead using COPY command
deny[msg] {
    input[i].Cmd == "add"
    val := concat(" ", input[i].Value)
    msg = sprintf("Use COPY instead of ADD: %s", [val])
}

# sudo usage
deny[msg] {
    input[i].Cmd == "run"
    val := concat(" ", input[i].Value)
    contains(lower(val), "sudo")
    msg = sprintf("Avoid using 'sudo' command: %s", [val])
}

# # No Healthcheck usage
# deny[msg] {
#     input[i].Cmd == "healthcheck"
#     msg := "no healthcheck"
# }

```
[Rego Playground](https://play.openpolicyagent.org/p/epcbtaBtSF)

