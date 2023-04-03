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
    stage('Build Docker image') {
      steps {
        script {
          docker.build("${DOCKER_REGISTRY}/myapp:${BUILD_NUMBER}")
          docker.withRegistry("${DOCKER_REGISTRY}", "docker-registry") {
            docker.image("${DOCKER_REGISTRY}/myapp:${BUILD_NUMBER}").push()
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
