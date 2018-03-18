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

contract IOUconversion{

    uint coin;
    uint x;
    
    function IOUconversion(uint fixValue){
        x = fixValue;
    }
    function conversion(uint realWorldMoney) public{
        coin = realWorldMoney/x;
        }
}

    contract adharCoin is IOUconversion(2){         //Change the value int the brackets to change the value
        
    }
    
    contract merchant is personDetail(){
    
    int coin;
    
    function merchant(){
        coin = 0;
    }
    
    function recieved(int amount) {
        coin+=amount;
    }

    function redeem(int amount){
        coin-=amount;
    }
  
}
