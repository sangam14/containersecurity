## Introduction to Containers 

1. [What is a container?](./Intro-Containers/what-is-container.md)
2. Basics of a container and its challenges
     - [Container vs. Virtualization](/Intro-Containers/containervsVM.md)
     - [Container Advantages](./Intro-Containers/Container-adv-dis.md#container-advantages)
     - [Container Disadvantages](./Intro-Containers/Container-adv-dis.md#container-disadvantages)
3. Container fundamentals
    - [Namespaces](./Intro-Containers/Namespaces.md)
    - [Cgroup](./Intro-Containers/Cgroup.md)
    - [Capabilities](./Intro-Containers/Capabilities.md)
4. [Docker architecture and its components](./Intro-Containers/docker-architecture.md#docker-architecture)
    - [Docker CLI](./Intro-Containers/docker-architecture.md#docker-client)
    - [Docker Engine (Daemon, API)](./Intro-Containers/docker-architecture.md#docker-engine)
    - [Docker Runtime (containerd, shim, runc)](./Intro-Containers/docker-architecture.md#docker-runtime)
5. [Interacting with container ecosystem](./Intro-Containers/Intracting-with-container.md)
     - [Docker images and image layers](./Intro-Containers/Intracting-with-container.md#understand-image-layers) <br>
     - [Build Container images using Dockerfile](./Intro-Containers/Intracting-with-container.md#dockerfile-instructions-with-example)<br>
     - [Storing data in a container(mounts, volumes, etc.)](./Intro-Containers/Intracting-with-container.md#storing-data-in-a-container)<br>
     - [Networking in containers](./Intro-Containers/Intracting-with-container.md#networking-in-containers)<br>
     - [Docker Compose](./Intro-Containers/Intracting-with-container.md#docker-compose)
  
6. Managing / Orchestrating multiple containers
   - Using CLI/API to manage multiple containers
   - Docker Compose
   - Kubernetes
   - Nomad
7. Docker alternatives(Podman, rkt)

     
## Container Reconnaissance

1. Overview of Container Security
2. [Attack surface of the container ecosystem](./container-sec/attack-surface.md)
3. Analysis of the attack surface
    - Using native tools
    - Using third-party tools
4. Identifying the components and their security state
    1. Get an inventory of containers
      - [Environment variables](./container-sec/Envir-variables.md)
      - [Docker volumes](./container-sec/Docker-volumes.md)
      - [Networking](./container-sec/Docker-Networking.md)
      - Ports used/Port forwarding
     2. Capabilities and namespaces in Docker
5. Hands-on Exercises:
   - [Docker Security Benchmark](./container-sec/Auditing-docker-sec.md)
   - [CIS Docker Benchmark - InSpec Profile](https://dev-sec.io/baselines/docker/)
   - [Lynis](https://github.com/CISOfy/Lynis)

## Defending Containers and Containerized Apps on Scale

1. Container image security
   1. Building secure container images
     - Choosing base images
     - Distroless images
     - Scratch images
   2. [Security Linting of Dockerfiles](./container-app-sec/security-linting-dockerfile.md)
   3. [Static Analysis of container images/library for container](./container-app-sec/packetscanner.md)
   
2. Docker host security configurations
    - Kernel Hardening using SecComp and AppArmor
    - Custom policy creation using SecComp and AppArmor
3. Docker Daemon security configurations
   1. Docker user remapping
   2. Docker runtime security (gVisor, Kata)
   3. Docker socket configuration 
       - fd
       - TCP socket
       - TLS authentication
   4. Dynamic Analysis of the container hosts and daemons
4. Network Security in containers
   - Segregating networks
5. Misc Docker Security Configurations
   - Content Trust and Integrity checks
6. Docker Registry security configurations
   - Internal vs. Public Registries
   - Authentication and Authorization (RBAC)
   - Image scanning
   - Policy enforcement
   - DevOps CI/CD Integration
7. Docker Tools, Techniques and Tactics
   1. Tools
    - [Dockerscan](./container-app-sec/dockerscan.md) 
    - Dive
    - Dockle
  2. Techniques
  3. Tactics
8. Hands-on Exercises:
   - Minimize security misconfigurations in Docker with CIS
   - Build a secure & most miniature image to minimize the footprint
   - Build a distro less image to reduce the footprint
   - Docker Content Trust with Notary
   - Securing the container by default using Harbor
   - Scanning Docker for vulnerabilities with ThraetMapper
   
## Security Monitoring of Containers

1. Monitoring and incident response in containers
2. Docker events
3. Docker logs
4. Docker runtime prevention
5. Security monitoring using Wazuh
6. Policy creation, enforcement, and management
7. Hands-on Exercises:
   - Anchore Engine – Policy creation and enforcement
   - VMWare Harbor – Securing Docker image with Harbor

## Docker Attack - Use Cases 

1. [Kinising Malware attack](./use-cases/kinsing-Malware-attack.md) 
2. [Doki Malware Attack](./use-cases/Doki-malware-attack.md) 