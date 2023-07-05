Commands run to start this project
```bash
npm init -y
npm i -D typescript
npx tsc --init
npm i -D ts-node
npm install dotenv --save
```

This application uses .env to set environmental variables during configuration. The .env file is not checked in. As such you will need to create one.
```bash
touch .env
```
After creating the file add the following configuration items. If you create more config items please add them to this list.
```dosini
TESTCONFIG="FILETEST"
```
