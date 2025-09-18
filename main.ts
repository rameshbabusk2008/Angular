// interface Inode {
//     nodeId:number;
//     nodeNumber:string
// }

class Nodes {

    constructor(private _nodeId?:number,private _nodeNumber?:string)
    {
       
    }   

    get nodeid() :number | undefined {
        return this._nodeId
    }

    set nodeid(value:number)
    {
        if (value < 0)
            throw new Error('value cannot be zero')

        this._nodeId = value;

    }

    display()
    {
        console.log('Node Id :-' + this.nodeid)
    }
}

let node:Nodes = new Nodes(12345);
node.nodeid = 12356;

node.display();

// let callme = () => {

//     let cas;
//     cas="1234567-56789";

//    return (cas as string).indexOf("-");

// }

// // console.log(node.nodeId)

// console.log(callme());
