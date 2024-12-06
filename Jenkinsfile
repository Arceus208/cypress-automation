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
                        git url: "https://github.com/Arceus208/cypress-automation.git"
                        bat "npm install"
                        bat "npm update"
                        bat "npm run triggerAllTests-autoTestStore-dashboard"
                    }
                }

                stage("Slave Node2") {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git url: "https://github.com/Arceus208/cypress-automation.git"
                        bat "npm install"
                        bat "npm update"
                        bat "npm run triggerAllTests-autoTestStore-dashboard"
                    }
                }
            }
        }
    }
}