## Introduction to Containers 

1. [What is a container?](./Intro-Containers/what-is-container.md)
2. Basics of a container and its challenges
     - [Container vs. Virtualization](/Intro-Containers/containervsVM.md)
     - Container Advantages
     - Container Disadvantages
3. Container fundamentals
    - Namespaces
    - Cgroup
    - Capabilities
4. Docker architecture and its components
    - Docker CLI
    - Docker Engine (Daemon, API)
    - Docker Runtime (containerd, shim, runc)
5. Interacting with container ecosystem
     - Docker images and image layers <br>
     - Build Container images using Dockerfile<br>
     - Docker image repository<br>
     - Running a container<br>
     - Storing data in a container(mounts, volumes, etc.)<br>
     - Networking in containers<br>
  
6. Managing / Orchestrating multiple containers
   - Using CLI/API to manage multiple containers
   - Docker Compose
   - Kubernetes
   - Nomad
7. Docker alternatives(Podman, rkt)
8. Hands-on Exercises:
     - Learn Docker commands
     - Create Docker Image using Dockerfile
     - Networking in Docker
     - Learn how to work with data in a container
     - How to use container registry
     - Writing the Dockerfile
     - Learn Docker Compose
     
## Container Reconnaissance

1. Overview of Container Security
2. Attack surface of the container ecosystem
3. Analysis of the attack surface
    - Using native tools
    - Using third-party tools
4. Identifying the components and their security state
    1. Get an inventory of containers
      - Environment variables
      - Docker volumes
      - Networking
      - Ports used/Port forwarding
     2. Capabilities and namespaces in Docker
5. Hands-on Exercises:
    - Scanning the remote host for unauthenticated Docker API access
    - Identify a container and extract sensitive information
    - Identify misconfigurations in namespace, capabilities, and networking
    - Create and restore a snapshot(tar) of the container for further analysis
    
## Defending Containers and Containerized Apps on Scale

1. Container image security
   1. Building secure container images
     - Choosing base images
     - Distroless images
     - Scratch images
   2. Security Linting of Dockerfiles
   3. Static Analysis of container images
   4. Static Analysis library for container
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
   - Scanning Docker for vulnerabilities with Trivy
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
   - Sysdig Falco – Runtime protection and monitoring
   - Tracee – Runtime security   

