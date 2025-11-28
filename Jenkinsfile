pipeline {
    agent any

    environment {
        DOCKERHUB_USER = credentials('dockerhub-creds').username
        DOCKERHUB_PASS = credentials('dockerhub-creds').password
    }

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/shrathan/crud-app.git'
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

        stage('Docker Login') {
            steps {
                sh """
                    echo $DOCKERHUB_PASS | docker login -u $DOCKERHUB_USER --password-stdin
                """
            }
        }

        stage('Push Images') {
            steps {
                sh '''
                    docker push $DOCKERHUB_USER/mean-backend:latest
                    docker push $DOCKERHUB_USER/mean-frontend:latest
                '''
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