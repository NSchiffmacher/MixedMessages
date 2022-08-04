// when ran, this programm should output a messages with random pieces such as XXX
// I'm feeling XXX today, thanks to you XXX. You are my XXX.
const fs = require('fs');
const MessageGenerator = {
    cutenames: [],
    feelings: [],
    names: [],

    initialize(){
        try {
            const data = fs.readFileSync('cutenames.txt', 'utf8');
            this.cutenames = data.split('\r\n');
          } catch (err) {
            console.error(err);
          }
          
        try {
            const data = fs.readFileSync('feelings.txt', 'utf8');
            this.feelings = data.split('\r\n');
          } catch (err) {
            console.error(err);
          }
          
        try {
            const data = fs.readFileSync('names.txt', 'utf8');
            this.names = data.split('\r\n');
          } catch (err) {
            console.error(err);
          }
          
    },
    createMessage(){
        // test
        // test2

        //test3
    },
}


function main(){
    MessageGenerator.initialize()
    console.log(MessageGenerator)
    console.log('Hello and welcome in MixedMessages !')
}
main()