
docker build -t nginxa .
docker build -t nginxb .


docker run --name asite --hostname a.ipfs.test -d -p 80:80 nginxa
docker run --name asite --hostname a.ipfs.test -d nginxa
docker run --name bsite --hostname b.ipfs.test -d -p 80:80 nginxb
docker run --name bsite -d --expose=80 nginxb

docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' asite
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' bsite


docker run -d --rm --name asite -e INSTANCE=asite -e PORT=80 nginxa 

docker run -d --rm --name bsite -e INSTANCE=bsite -e PORT=80 nginxb 


minikube start
minikube addons enable ingress
minikube addons enable ingress-dns


brew install hyperkit
brew install docker
brew install kubectl
brew install minikube

minikube config set cpus 6
minikube config set memory 32g

minikube start --kubernetes-version=v1.19.14 --driver=hyperkit --container-runtime=docker
minikube start --driver=hyperkit --container-runtime=docker

minikube kubectl get nodes
eval $(minikube docker-env)
docker info
brew install docker-compose
minikube addons enable ingress
minikube ip
curl http://192.168.64.4
minikube addons enable ingress-dns

#skip lb
minikube addons enable metallb
minikube addons configure metallb
-- Enter Load Balancer Start IP: 192.168.64.5
-- Enter Load Balancer End IP: 192.168.64.15
    ▪ Using image metallb/speaker:v0.9.6
    ▪ Using image metallb/controller:v0.9.6
✅  metallb was successfully configured

minikube addons list
minikube status

minikube start --vm-driver=hyperkit  --v=7 --alsologtostderr

minikube pause
minikube unpause

kubectl version --short


kubectl get nodes
kubectl get pods
kubectl get services

kubectl get services -n namespace

kubectl create --help
kubectl create deployment nginx-depl --image=nginx

kubectl get deployment
kubectl get replicaset

kubectl edit deployment nginx-depl


kubectl logs nginx-depl-8as8348534

kubectl describe pod podname

kubectl exec -it podname -- bin/bash

kubectl delete deployment nginx-depl


kubectl apply -f [filename]

kubectl get pod -o wide

kubectl get deployment depname -o yaml > foo.yaml

echo -n 'username' | base64

kubectl get all | grep mongo

minikube service  servicename

kubectl get namespaces

brew install kubectx 
kubens

kubectl port-forward pod/your-postgres-pod 5432:5432


Edit the configMap tcp-services in the ingress-nginx namespace adding

my-app ingress

minikube addons enable ingress
kubectl get pod -n kube-system

kubectl get ingress -n [namespace] --watch
kubectl describe ingress ingressname

minikube mount /Users/dad/code/blockchain/datashare/ipfs/volumes:/volumes

