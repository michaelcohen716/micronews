pragma solidity ^0.5.0;

import "./CurveBondedToken.sol";

/* 
 Adapted from code by Github user @lsaether
 */
contract SimpleCBT is CurveBondedToken {
    function() external payable {
        mint();
    }

    constructor(uint256 _reserveRatio) public CurveBondedToken(_reserveRatio) {}

    function mint() public payable returns (uint256) {
        require(msg.value > 0, "Must send ether to buy tokens.");
        uint256 amount = _curvedMint(msg.value);
        return amount;
    }

    function burn(uint256 _amount) public {
        uint256 returnAmount = _curvedBurn(_amount);
        msg.sender.transfer(returnAmount);
    }
}
