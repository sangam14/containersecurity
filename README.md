
- [Start here](https://kubedaily.com/containersecurity/)

In this lab we will cover follwoing topic to start click above link ! 

## ** Table of Content **

## Introduction to Containers 

1. [What is a container?
2. Basics of a container and its challenges
     - [Container vs. Virtualization]
     - [Container Advantages]
     - [Container Disadvantages]
3. Container fundamentals
    - [Namespaces]
    - [Cgroup]
    - [Capabilities]
4. [Docker architecture and its components]
    - [Docker CLI]
    - [Docker Engine (Daemon, API)]
    - [Docker Runtime (containerd, shim, runc)]
5. [Interacting with container ecosystem]
     - [Docker images and image layers]<br>
     - [Build Container images using Dockerfile]<br>
     - [Storing data in a container(mounts, volumes, etc.)]<br>
     - [Networking in containers]<br>
     - [Docker Compose]
  
6. Managing / Orchestrating multiple containers
   - Using CLI/API to manage multiple containers
   - Docker Compose
   - Kubernetes
   - Nomad
7. Docker alternatives(Podman, rkt)

     
## Container Reconnaissance

1. Overview of Container Security
2. [Attack surface of the container ecosystem]
3. Analysis of the attack surface
    - Using native tools
    - Using third-party tools
4. Identifying the components and their security state
    1. Get an inventory of containers
      - [Environment variables]
      - [Docker volumes]
      - [Networking]
      - Ports used/Port forwarding
     2. Capabilities and namespaces in Docker
5. Hands-on Exercises:
   - [Docker Security Benchmark]
   - [CIS Docker Benchmark - InSpec Profile](https://dev-sec.io/baselines/docker/)
   - [Lynis](https://github.com/CISOfy/Lynis)

## Defending Containers and Containerized Apps on Scale

1. Container image security
   1. [Building secure container images]
     - [Choosing base images]
     - [Distroless images]
     - [Scratch images]
     - [DockerFile Security Best Practices]
     - [SecretScanner - Finding secrets and passwords in container images and file systems]
     - [YaraHunter - Malware Scanner for Container Images]

   2. [Security Linting of Dockerfiles]
   3. [Static Analysis of container images/library for container]
   
2. Docker host security configurations
    - [Kernel Hardening using SecComp and AppArmor]
    - [Custom policy creation using SecComp and AppArmor]
3. Docker Daemon security configurations
    1. [Daemon security configuration]<br>
    2. [configure access to docker daemon through HTTPS and certificate authentication]<br>
    3. [using namespace isolation technology]<br>
    4. [setting the partition of docker]<br>
    5. [limit traffic between default bridge containers]<br>
    6. [configuration log]<br>
    7. [setting ulimit]<br>
    8. [setting CGroup]<br>
    9. [configuring seccomp] <br>
    10. [disable the experimental function of docker] <br>
    11. [Daemon configuration example description (Linux)]<br>

4. Network Security in containers
   - Segregating networks
5. Misc Docker Security Configurations
   - [Content Trust and Integrity checks]
6. [Docker Registry security configurations]
7. Docker Tools, Techniques and Tactics
   1. Tools
    - [Dockerscan]
    - [Dive]
    - Dockle
 
8. Hands-on Exercises:

   - [Scanning Docker for vulnerabilities with ThraetMapper]
   
## Security Monitoring of Containers

1. Monitoring and incident response in containers
2. [Docker events]
3. Docker logs
4. Docker runtime prevention
5. Hands-on Exercises:
   - [Weave Scope - Container monitoring and visualization]
   - Anchore Engine – Policy creation and enforcement
   - VMWare Harbor – Securing Docker image with Harbor

## Docker Attack - Use Cases 

1. [Kinising Malware attack]
2. [Doki Malware Attack]

