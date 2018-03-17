```
contract TimeLock {
    // custom data structure to hold locked funds and time
    struct accountData {
        uint balance;
        uint Time;
    }

    // only one locked account per address
    mapping (address => accountData) accounts;

    function payIn(uint lockTimeS) payable {
        // Send amount (in Wei) when calling this function.
        // The amount will then be placed in a locked account
        // and the funds will be released once the indicated lock time in seconds
        // passed and can only be retrieved by the same account which was
        // depositing them. 
        // " Highlighting the intrinsic security model offered by a blockchain system like Ethereum"

        uint amount = msg.value;            //Send the required money through Wei
        
        payOut();                           // Payout Function is called to state the Reason    
        if (accounts[msg.sender].balance > 0)       //Checking the Balance
            msg.sender.send(msg.value);             //Changes aren't alloed in middle of evaluation or the stored assets haven't been released by the investor
        else {
            accounts[msg.sender].balance = amount;              // Amount is added to the account and token is alloted to the invester
            accounts[msg.sender].Time = now + lockTimeS;     //DeadTime is given to the system
        }
    }
    
    function payOut() {
        // check if user has funds due for pay out because lock time is over
        if (accounts[msg.sender].balance != 0 && accounts[msg.sender].Time < now) {      //Check Balance and Time restraints
            msg.sender.send(accounts[msg.sender].balance);                      // send the balance or the valuation of the Token  
            accounts[msg.sender].balance = 0;                                   // Balance becomes Zero
            accounts[msg.sender].Time = 0;                               // ReleaseTime Becomes Zero
        }
    }

    // some helper functions for demo purposes (not required)
    function getMyLockedFunds() constant returns (uint x) {
        return accounts[msg.sender].balance;                //Return the Balance
    }
    
    function getMyLockedFundsReleaseTime() constant returns (uint x) {
	    return accounts[msg.sender].Time;            //Time remaining 
    }

    function getNow() constant returns (uint x) {
        return now;                                         // get the current status
    }
}
```
