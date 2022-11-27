FROM ipfs/kubo:latest

COPY ./content/ipfs/setup.sh /usr/local/bin/start_ipfs
RUN chmod 0755 /usr/local/bin/start_ipfs

# Enforce private network settings
ENV LIBP2P_FORCE_PNET 1

# The entrypoint (i.e. script.sh) will setup swarm.key, init IPFS, remove all public 
# bootstrap values and start the ipfs daemon
ENTRYPOINT ["/usr/local/bin/start_ipfs"]
#ENV SWARM_KEY=fc07c25f89910c3496ed808b55e375e62ed50a8985c730db4dbc3971bf6cc66d
#ENTRYPOINT ["tail", "-f", "/dev/null"]