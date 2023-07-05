class ConfigValues {

    public testVal: string

    private parsedArgs: { [argName: string]: string } = {}

    private constructor() {
        this.ParseArgs();
        this.testVal = 'setdefault';
        if (process.env.TESTVAL !== 'undefined')
            this.testVal = process.env.TESTVAL ?? '';
        if (this.parsedArgs["testVal"] !== undefined)
            this.testVal = this.parsedArgs["testVal"]
    }

    private ParseArgs() {
        // Get command line arguments excluding the first two elements (node and script file)
        const args: string[] = process.argv.slice(2);

        // Parse command line arguments
        args.forEach((arg) => {
            // Split argument into key and value
            const [key, value] = arg.split('=');
            this.parsedArgs[key] = value || '';
        });
    }
}
