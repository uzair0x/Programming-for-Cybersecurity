                                                                                      
#!/bin/bash

domain=$1
echo "Target  domain: $domain"

mkdir -p  $domain
cd $domain


subfinder -d $domain -silent -all -timeout 5  > subdomains.txt
cat subdomains.txt | httpx-toolkit -silent  -threads 100 > live_host.txt
nmap -sV -iL live_host.txt -oN nmap_results.txt
whatweb -i live_host.txt > whatweb_results.txt

for host in $(cat live_host.txt); do
    echo "Current host is: $host"
    ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u "$host/FUZZ" -mc 200,301,302 -o "ffuf_$(echo $host | sed 's/[^a-zA-Z0-9]/_/g').txt" -s
done




