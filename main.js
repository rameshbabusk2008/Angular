// interface Inode {
//     nodeId:number;
//     nodeNumber:string
// }
var Nodes = /** @class */ (function () {
    function Nodes(_nodeId, _nodeNumber) {
        this._nodeId = _nodeId;
        this._nodeNumber = _nodeNumber;
    }
    Object.defineProperty(Nodes.prototype, "nodeid", {
        get: function () {
            return this._nodeId;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be zero');
            this._nodeId = value;
        },
        enumerable: false,
        configurable: true
    });
    Nodes.prototype.display = function () {
        console.log('Node Id :-' + this.nodeid);
    };
    return Nodes;
}());
var node = new Nodes(12345);
node.nodeid = 12356;
node.display();
// let callme = () => {
//     let cas;
//     cas="1234567-56789";
//    return (cas as string).indexOf("-");
// }
// // console.log(node.nodeId)
// console.log(callme());
