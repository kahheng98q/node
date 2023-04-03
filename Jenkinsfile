pipeline {
    agent any
    
    triggers {
        pollSCM '* * * * *'
    }
    
    environment {
        DOCKER_REGISTRY = "kahheng"
        KUBECONFIG = "/path/to/kubeconfig"
    }
  
    stages {
           stage('Checkout') {
            steps {
                git 'https://github.com/kahheng98q/node.git'
            }
        }
        stage('Build and Push Docker image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    echo 'Building Docker image...'
                    sh 'docker build -t kahheng/my-node:1.0 .'
                    
                    echo 'Logging in to Docker Hub...'
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    
                    echo 'Pushing Docker image to Docker Hub...'
                    sh 'docker push kahheng/my-node:1.0'
                }
            }
        }
        
        stage('Test') {
            steps {
                echo "Running tests..."
                sh '''
                echo "doing test stuff.."
                '''
            }
        }
        
        stage('Deliver') {
            steps {
                echo 'Delivering...'
                sh '''
                echo "doing delivery stuff.."
                '''
            }
        }
    }
}
