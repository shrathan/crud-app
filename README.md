# crud-app

First create Repository in Github 

https://github.com/shrathan/crud-app

Pull the code from your local to the github repository

To deploy this application first i have created instance using AWS
***AWS-EC2 Instance creation***

Used Ubuntu 22.04 

instance type- t3.medium

<img width="1917" height="582" alt="image" src="https://github.com/user-attachments/assets/c4635768-41b1-451c-94e8-1d439112a69b" />



Connect EC2 instance


<img width="1687" height="730" alt="image" src="https://github.com/user-attachments/assets/223cdb3e-fb2f-4aeb-8c52-f65a82e207e9" />



Install Git, Docker, Docker-compose, Jenkins


<img width="1107" height="468" alt="image" src="https://github.com/user-attachments/assets/695a90e2-fa9c-41aa-96b4-f7f9479c4571" />


Once installation is done Configure jenkins

***Jenkins Configuration***

Setup username and password and login

Install necessary plugins 

<img width="1725" height="756" alt="image" src="https://github.com/user-attachments/assets/67cf23f3-53ba-4731-a127-d59590d86610" />


Create New pipeline project and configure it

<img width="1798" height="681" alt="image" src="https://github.com/user-attachments/assets/b3272d00-f92c-4e17-b10a-e2aa90f2c77c" />


configure github repo in jenkins provide url

<img width="1901" height="956" alt="image" src="https://github.com/user-attachments/assets/463a382a-1f05-488b-b86c-96fd1ca2db58" />


After configuration Build the project.

Build was success after several failures

<img width="1918" height="988" alt="image" src="https://github.com/user-attachments/assets/a1d6cf44-2b74-410f-ab7c-978bc287e5c5" />

***Docker build image and push process***

Backend image created successfully

<img width="876" height="587" alt="image" src="https://github.com/user-attachments/assets/638a3601-71d6-43c9-965a-5569887a7df1" />


Frontend Image craeted successfully

<img width="907" height="592" alt="image" src="https://github.com/user-attachments/assets/167c7609-5d31-462f-ba81-e6ea93285f35" />

Docker images and running containers

<img width="1672" height="540" alt="image" src="https://github.com/user-attachments/assets/07f6c095-b310-4f0c-8e01-aba5a7de8caf" />

Docker push

<img width="1221" height="600" alt="image" src="https://github.com/user-attachments/assets/ee284951-f698-4050-a338-279f05db1d8a" />

Image in docker hub

<img width="1915" height="532" alt="image" src="https://github.com/user-attachments/assets/f6eb927f-d479-4154-9b3d-75af776b3959" />

***Application Deployed Success**

Build success console output

<img width="1253" height="922" alt="image" src="https://github.com/user-attachments/assets/0743c776-ac86-4b7d-8ce0-17271f674a55" />

***Application Running***

<img width="1907" height="763" alt="image" src="https://github.com/user-attachments/assets/14bb7973-e0a8-48b4-9bd8-9b0ac6583f8e" />


<img width="1893" height="713" alt="image" src="https://github.com/user-attachments/assets/4168ce9d-8277-405c-a23f-7dd9069d1915" />


***Nginx***

location / {
    proxy_pass http://frontend:80/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}

this handles frontend angual and node.js backend api, above mentioned is for frontend.


