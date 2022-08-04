// when ran, this programm should output a messages with random pieces such as XXX
// I'm feeling XXX today, thanks to you XXX. You are my XXX.
const fs = require('fs');
const MessageGenerator = {
    cutenames: [],
    feelings: [],
    names: [],

    initialized: false,

    initialize(){
        try {
            const data = fs.readFileSync('cutenames.txt', 'utf8');
            this.cutenames = data.split('\r\n').map(e => e.trim().toLowerCase());
          } catch (err) {
            console.error(err);
          }
          
        try {
            const data = fs.readFileSync('feelings.txt', 'utf8');
            this.feelings = data.split('\r\n').map(e => e.trim().toLowerCase());
          } catch (err) {
            console.error(err);
          }
          
        try {
            const data = fs.readFileSync('names.txt', 'utf8');
            this.names = data.split('\r\n').map(e => e.trim().toLowerCase());
          } catch (err) {
            console.error(err);
          }

        this.initialized = true;
          
    },
    get name (){
        if(!this.initialized){
            console.error('MessageGenerator is not initialized')
        }
        let index = Math.floor(Math.random() * this.names.length);
        return this.names[index];
    },
    get feeling (){
        if(!this.initialized){
            console.error('MessageGenerator is not initialized')
        }
        let index = Math.floor(Math.random() * this.feelings.length);
        return this.feelings[index];
    },
    get cutename(){
        if(!this.initialized){
            console.error('MessageGenerator is not initialized')
        }
        let index = Math.floor(Math.random() * this.cutenames.length);
        return this.cutenames[index];
    },
    createMessage(){
        if(!this.initialized){
            this.initialize();
        }
        return `I'm feeling ${this.feeling} today, thanks to you ${this.name}! You are my ${this.cutename}.`;
        
    },
}


function main(){
    console.log('Hello and welcome in MixedMessages !')
    console.log()

    console.log(MessageGenerator.createMessage());
    console.log(MessageGenerator.createMessage());
    console.log(MessageGenerator.createMessage());
}
main()