# This is a nodejs application. It builds docker image and uses octupus deploy to deploy it to the kubernetes cluster using rolling update.
Note: You need to port forward locally to inspect the service. 
Use this command to inspect the web application:
kubectl port-forward deployment/docker_nodejs_demo  4000:80

kubectl-aws-eks github action reference:
https://github.com/kodermax/kubectl-aws-eks


Secrets
KUBE_CONFIG_DATA – required: A base64-encoded kubeconfig file with credentials for Kubernetes to access the cluster. You can get it by running the following command:

Bash
cat $HOME/.kube/config | base64
PowerShell
$base64Data = [Convert]::ToBase64String([IO.File]::ReadAllBytes("$env:USERPROFILE\.kube\config"))
Write-Output $base64Data