pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git 'https://github.com/Marlonds95/REACT_INSTITUTO_PROYECTO.git'
            }
        }

        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Construir proyecto') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Desplegar en servidor ngx') {
            steps {
                bat '''
                IF EXIST C:\\Servidor\\React\\build rd /s /q C:\\Servidor\\React\\build
                xcopy /s /e /y build C:\\Servidor\\React\\
                '''
            }
        }
    }
}
