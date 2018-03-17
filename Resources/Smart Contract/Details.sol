pragma solidity ^0.4.0;

contract personDetail{
       
    struct details{
        string Name;
        string UID;
    }
   
    mapping (address => details) identity;
   
    function getname(string yourName) public{
        identity[msg.sender].Name = yourName;
    }
   
    function getUID(string yourUID) public {
        identity[msg.sender].UID = yourUID;
    }
   
}
