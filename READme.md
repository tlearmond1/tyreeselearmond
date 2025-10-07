
This application is hosted on AWS Elastic Beanstalk.

This application is hosted on Amazon Web Services. 

The folder path for terminal commands is:
/Users/tyreeselearmond/Desktop/myapp

The Public IP address is: 


The URL is:
  http://www.thelearmondcorporation.com

The Access Key and Secret Access Key are below. Run with commands: 
  
AWS Access Key = 
Secret Access Key = 
Region = us-east-1
Output format = 

The Key pair is located at: 
/Users/tyreeselearmond/.ssh/TyreeseLearmond

Connect to the key pair with: 

 
To initilize the environment use command:
  eb init -p python-3.11 --region us-east-1 tyreeselearmond-application

To create the environment, use commands: 
  eb create tyreeselearmond-env

To deploy environment use command:
  eb deploy tyreeselearmond-env

To setup the SSH, use command:
  eb ssh --setup

To connect to the SSH, use command:
  eb ssh tyreeselearmond-env

To terminate the environment, use command: 
  eb terminate tyreeselearmond-env

To delete the application, use command:
  aws elasticbeanstalk delete-application --application-name tyreeselearmond-application --terminate-env-by-force

To list the environment, use command:
   eb list
# tyreeselearmond
