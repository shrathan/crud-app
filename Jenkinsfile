pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/shrathan/crud-app.git'
            }
        }

        stage('Docker Login') {
            steps {
                // Use credentials safely inside the steps
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
                    sh 'echo $DOCKERHUB_PASS | docker login -u $DOCKERHUB_USER --password-stdin'
                }
            }
        }

        stage('Build Backend Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
                    sh '''
                        cd backend
                        docker build -t $DOCKERHUB_USER/mean-backend:latest .
                    '''
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
                    sh '''
                        cd frontend
                        docker build -t $DOCKERHUB_USER/mean-frontend:latest .
                    '''
                }
            }
        }

        stage('Push Images') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
                    sh '''
                        docker push $DOCKERHUB_USER/mean-backend:latest
                        docker push $DOCKERHUB_USER/mean-frontend:latest
                    '''
                }
            }
        }

        stage('Deploy Using Docker Compose') {
            steps {
                sh '''
                    docker-compose pull
                    docker-compose down
                    docker-compose up -d
                '''
            }
        }
    }
}