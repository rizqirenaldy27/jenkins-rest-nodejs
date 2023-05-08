pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/rizqirenaldy27/jenkins-rest-nodejs'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
  }
}
