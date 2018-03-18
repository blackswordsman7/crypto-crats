pragma solidity ^0.4.0;
contract transaction{

event senderLogger(address);
event valueLogger(uint);

address private owner;

function transaction(){
    owner  = msg.sender;
}

modifier isOwner(){
    require(owner==msg.sender);
    _;
}

modifier validValue(){
    require(msg.value>=1);
    _;
}
function () payable isOwner validValue{
    senderLogger(msg.sender);
    valueLogger(msg.value);
    
} 
}
