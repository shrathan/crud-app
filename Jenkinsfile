pipeline {
    agent any

    environment {
        DOCKERHUB_USER = "shrathan"
    }

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/shrathan/crud-app.git'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKERHUB_USER_TMP', passwordVariable: 'DOCKERHUB_PASS')]) {
                    sh 'echo $DOCKERHUB_PASS | docker login -u $DOCKERHUB_USER_TMP --password-stdin'
                }
            }
        }

        stage('Build Backend Image') {
            steps {
                sh '''
                    cd backend
                    docker build -t $DOCKERHUB_USER/mean-backend:latest .
                '''
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh '''
                    cd frontend
                    docker build -t $DOCKERHUB_USER/mean-frontend:latest .
                '''
            }
        }

        stage('Push Images') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER_TMP', passwordVariable: 'PASS_TMP')]) {
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
                     docker-compose down
                     docker-compose pull
                     docker-compose up -d
                    '''
            }
        }
    }
}