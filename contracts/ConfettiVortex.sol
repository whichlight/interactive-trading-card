pragma solidity >=0.7.4;

contract ConfettiVortex {
    address owner;
    string pieceHash;

    modifier ownerOnly() {
        require(msg.sender == owner);
        _;
    }

    constructor(string memory _pieceHash) {
        owner = msg.sender;
        pieceHash = _pieceHash;
    }

    function changeOwner(address newOwner) public ownerOnly {
        owner = newOwner;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function getPieceHash() public view returns (string memory) {
        return pieceHash;
    }
}
