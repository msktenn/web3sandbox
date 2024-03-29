FROM ethereum/client-go:latest

ARG ACCOUNT_PASSWORD

COPY ./content/eth/genesis.json /tmp

RUN geth init /tmp/genesis.json \
    && rm -f ~/.ethereum/geth/nodekey \
    && echo ${ACCOUNT_PASSWORD} > /tmp/password \
    && geth account new --password /tmp/password \
    && rm -f /tmp/password

ENTRYPOINT ["geth"]
#ENTRYPOINT ["tail", "-f", "/dev/null"]