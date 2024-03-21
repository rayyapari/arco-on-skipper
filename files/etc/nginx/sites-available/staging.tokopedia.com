server {
    listen 80;
    server_name staging.tokopedia.com;
    root /var/www/tokopedia-lite-arco-on-skipper/public;

    location ~* \.(json|xml|css|jpg|jpeg|svg|png|gif|txt|ico|ttf|woff|otf|eot) {
        try_files $uri $uri/ /;
    }

    location / {
        proxy_pass http://127.0.0.1:3000;

        # enable socket stuff
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}