pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage("Cypress Parallel Test Suite") {
            parallel {
                stage("Slave Node1") {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        script {
                            checkout([$class: 'GitSCM', branches: [[name: 'main']], userRemoteConfigs: [[url: 'https://github.com/Arceus208/cypress-automation.git']]]) 
                            bat "npm install"
                            bat "npm update"
                            bat "set NO_COLOR=1 && npm run %Script%"
                        }                  
                    }
                }

                stage("Slave Node2") {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        script {
                            checkout([$class: 'GitSCM', branches: [[name: 'main']], userRemoteConfigs: [[url: 'https://github.com/Arceus208/cypress-automation.git']]]) 
                            bat "npm install"
                            bat "npm update"
                            bat "set NO_COLOR=1 && npm run %Script%"
                        }   
                    }
                }
            }
        }
    }
}