// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract WINDWAVE is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    uint256 totalSupply;

    mapping(address => string) ticketToSeat;
    string[] public seats;

    constructor() ERC721("WINDWAVE", "Wind") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://emair2.github.io/WindWave/Wind/Data/1.json";
    }

    function safeMint(address to, string memory _seat) public {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        setSeat(to, _seat);
        seats.push(_seat);
        totalSupply++;
    }

    function setSeat(address to, string memory _seat) public {
        ticketToSeat[to] = _seat;
    }

    function getSeats() public view returns (string[] memory) {
        return seats;
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        pure
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return _baseURI();
    }

    function getTotalSupply() public view returns (uint256) {
        return totalSupply;
    }
}