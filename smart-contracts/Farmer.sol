pragma solidity ^0.4.0;



contract personDetail{
        
    struct details{ 
        string Name;
        string UID;
    } 
    
    mapping (address => details) identity;
    
    function getName(string yourName) public{
        identity[msg.sender].Name = yourName;
    }
    
    function getUID(string yourUID) public {
        identity[msg.sender].UID = yourUID;
    }
    
}

contract input{
    
    
    uint amount;
    uint timePeriod;
    
    function demandAmount(uint requiredAmount) public{
        amount = requiredAmount;
    }
    
    function time(uint time) public{
        timePeriod = time;
    } 
    
}


contract Farmer is personDetail, input{
    
    int coin;
    
    function Farmer(){
        coin = 0;
    }
    
    function recieved(int amount) {
        coin+=amount;
    }

    function payment(int amount){
        coin-=amount;
    }
}
    
