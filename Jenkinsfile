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
        stage('Build and Push Docker image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'docker build -t kahheng/my-node:1.0 .'
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    sh 'docker push kahheng/my-node:1.0'
                }
            }
        }
    }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                echo "doing test stuff.."
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                echo "doing delivery stuff.."
                '''
            }
        }
    }
}
