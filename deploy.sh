#!/bin/sh

if [ $1 != "prod" ] && [ $1 != "stage" ]
then
    echo "Usage: ./deploy.sh prod | stage"
    exit
fi

echo "Deploying service to $1..."

if [ $1 == "prod" ]
then
    gcloud config set project express-prod-svc
    gcloud app deploy app.production.yaml
elif [ $1 == "stage" ]
then
    gcloud config set project express-stage-svc
    gcloud app deploy app.staging.yaml
fi
