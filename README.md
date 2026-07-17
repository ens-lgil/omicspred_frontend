# OmicsPred frontend

Frontend part of the OmicsPred Project (i.e. the OmicsPred website).

The website is built with **ReactJS** (using the [Vite](https://vite.dev/) framework) and SCSS.

The web interface is fed data via a REST API server (aka [OmicsPred backend](https://github.com/OmicsPred/omicspred_backend/tree/main)).

## Deployment

### Local

1. Deploy the local backend (see 'OmicsPred backend' link above)

2. Edit the file `.env.development_template` and rename it `.env.development`, e.g.:
    ```
    ENV_TYPE=dev
    REST_API_URL=http://127.0.0.1:8000/api/
    REST_API_URL_PUBLIC=http://127.0.0.1:8000/
    OMICSPRED_ES_URL=http://127.0.0.1:8000/es_search/search/
    ```

3. Run the command `npm run dev`

### Cloud


1. Deploy the remote backend (see 'OmicsPred backend' link above)

2. Edit the file `.env.production_template` and rename it `.env.production`, e.g.:
    ```
    ENV_TYPE=prod
    REST_API_URL=<private_rest_api_url>/api/
    REST_API_URL_PUBLIC=https://rest.omicspred.org/
    OMICSPRED_ES_URL=<private_rest_api_url>/es_search/search/
    GA4_TRACKING_ID=<Google_Analytics_4_tracking_ID>
    ```

3. Run the command `npm run build`

4. Deploy the frontend, e.g. in Google Cloud App Engine: `gcloud app deploy` 