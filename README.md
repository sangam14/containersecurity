## Introduction to Containers 

1. What is a container?
2. Basics of a container and its challenges
Container vs. Virtualization
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
    - Get an inventory of containers
          - Environment variables
          - Docker volumes
          - Networking
          - Ports used/Port forwarding
     - Capabilities and namespaces in Docker
5. Hands-on Exercises:
    - Scanning the remote host for unauthenticated Docker API access
    - Identify a container and extract sensitive information
    - Identify misconfigurations in namespace, capabilities, and networking
    - Create and restore a snapshot(tar) of the container for further analysis
