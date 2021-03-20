pragma solidity >=0.7.4;

contract ConfettiVortex {
    address owner;
    uint256 pieceHash;

    modifier ownerOnly() {
        require(msg.sender == owner);
        _;
    }

    constructor(uint256 _pieceHash) {
        owner = msg.sender;
        pieceHash = _pieceHash;
    }

    function changeOwner(address newOwner) public ownerOnly {
        owner = newOwner;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function getPieceHash() public view returns (uint256) {
        return pieceHash;
    }
}
