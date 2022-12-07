pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000 -u root'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                sh 'npm build'
                sh 'npm start'
            }
        }
    }
}
