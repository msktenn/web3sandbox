#!/bin/sh                                                        
set -e                                                           
                                                                 
#user=ipfs                                                       
repo="$IPFS_PATH"                                                
                                                                 
ipfs version                                                     
                                                                 
if [ -e "$repo/config" ]; then                                   
  echo "Found IPFS fs-repo at $repo"                             
else                                                             
   echo "Run Init"                                               
                                                                 
    ipfs init                         
    ipfs config Addresses.API /ip4/0.0.0.0/tcp/5001
    ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/8080
    ipfs bootstrap rm --all                            
                                                       
    SWARM_KEY_FILE="$repo/swarm.key"                   
    SWARM_KEY_PERM=0400                                
                                                       
     # Create a swarm key from a given environment variable
    if [ -n "$IPFS_SWARM_KEY" ] ; then                     
        echo "Begin Create Key File"                                       
        echo "/key/swarm/psk/1.0.0/" >> "$SWARM_KEY_FILE"  
        echo "/base16/" >> "$SWARM_KEY_FILE"               
        echo $IPFS_SWARM_KEY >> "$SWARM_KEY_FILE"          
        chmod $SWARM_KEY_PERM "$SWARM_KEY_FILE"            
    fi                                                     
fi                                                         

exec ipfs daemon  