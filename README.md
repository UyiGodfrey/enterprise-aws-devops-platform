# 🚀 Enterprise AWS DevOps Platform

A production-style DevOps project demonstrating how to build, containerize, and deploy a Node.js application to AWS using Docker, Amazon ECR, Amazon ECS, AWS Fargate, and GitHub Actions.

---

# 📖 Project Overview

This project demonstrates a complete cloud-native deployment workflow. A Node.js application is containerized with Docker, stored in Amazon Elastic Container Registry (ECR), and deployed to Amazon Elastic Container Service (ECS) using AWS Fargate. GitHub Actions is used to automate the CI process, creating a foundation for a modern DevOps pipeline.

---

# 🎯 Objectives

* Build a Dockerized Node.js application
* Automate builds using GitHub Actions
* Store Docker images in Amazon ECR
* Deploy containers using Amazon ECS
* Run workloads on AWS Fargate
* Configure IAM roles for secure deployments
* Verify application health through a public endpoint

---

# 🏗️ Architecture

```text
Developer
     │
     ▼
GitHub Repository
     │
     ▼
GitHub Actions
     │
     ▼
Docker Build
     │
     ▼
Amazon Elastic Container Registry (ECR)
     │
     ▼
Amazon ECS Task Definition
     │
     ▼
Amazon ECS Service
     │
     ▼
AWS Fargate
     │
     ▼
Running Container
     │
     ▼
Health Endpoint
```

---

# 🛠️ Technologies Used

* AWS
* Amazon ECS
* AWS Fargate
* Amazon ECR
* IAM
* VPC
* Security Groups
* Docker
* Git
* GitHub
* GitHub Actions
* Node.js
* Express.js

---

# 🚀 Deployment Workflow

1. Developed the Node.js API.
2. Containerized the application using Docker.
3. Tested the Docker container locally.
4. Pushed the source code to GitHub.
5. GitHub Actions validated the project.
6. Created a private Amazon ECR repository.
7. Tagged and pushed the Docker image to ECR.
8. Created an Amazon ECS cluster.
9. Created an ECS Task Definition.
10. Configured the ECS Service.
11. Deployed the application on AWS Fargate.
12. Verified the deployment through the `/health` endpoint.

---

# 📷 Project Screenshots

## 1. GitHub Repository



---

## 2. GitHub Actions Pipeline



---

## 3. Docker Running Locally



---

## 4. Amazon ECR Repository



---

## 5. Docker Image Stored in Amazon ECR



---

## 6. Amazon ECS Cluster



---

## 7. ECS Task Definition



---

## 8. ECS Service



---

## 9. Running AWS Fargate Task


---

## 10. Health Check



---

# 📈 Results

* Successfully containerized the application using Docker.
* Successfully pushed the container image to Amazon ECR.
* Successfully deployed the application to Amazon ECS.
* Successfully ran the application on AWS Fargate.
* Successfully exposed the application using a public IP.
* Successfully verified application health through the `/health` endpoint.

---

# 📚 Lessons Learned

During this project I gained practical experience with:

* Docker containerization
* Continuous Integration using GitHub Actions
* Amazon Elastic Container Registry (ECR)
* Amazon Elastic Container Service (ECS)
* AWS Fargate
* IAM Roles
* ECS Task Definitions
* ECS Services
* VPC networking
* Security Groups
* Cloud-native application deployment

---

# 🔮 Future Improvements

The next phase of this project will include:

* Continuous Deployment (CD)
* Automatic ECS deployments from GitHub Actions
* Trivy container vulnerability scanning
* Blue-Green deployments
* Canary deployments
* Amazon EKS
* Argo CD
* GitOps workflows
* Terraform Infrastructure as Code
* SonarQube integration
* Deployment notifications
* Automated rollback
* Load Balancer (ALB)
* Auto Scaling
* Monitoring with Prometheus and Grafana

---

# 👨‍💻 Author

**Uyi Godfrey**

Cloud Computing | DevOps | AWS | Docker | Kubernetes | GitHub Actions

Always building real-world cloud infrastructure and DevOps projects.
