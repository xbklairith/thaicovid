docker save -o thaicovid-web.tar thaicovid-web
scp thaicovid-web.tar root@gundam:/tmp/
ssh root@gundam "docker load < /tmp/thaicovid-web.tar"
rm -f thaicovid-web.tar