pragma solidity ^0.5.0;

interface IBondingCurve {
    event CurvedMint(address indexed sender, uint256 amount, uint256 deposit);
    event CurvedBurn(
        address indexed sender,
        uint256 amount,
        uint256 reimbursement
    );

    function calculateCurvedMintReturn(uint256 amount)
        external
        view
        returns (uint256);

    function calculateCurvedBurnReturn(uint256 amount)
        external
        view
        returns (uint256);
}
