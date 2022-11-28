// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";




contract WINDWAVE is ERC721, ERC721URIStorage, Ownable {
    mapping (address=>bool) public status;

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    uint256 totalSupply;

    constructor() ERC721("WINDWAVE", "Wind") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://emair2.github.io/WindWave/Wind/Data/1.json";
    }

    function safeMint(address to) public onlyOwner {
     require(status[msg.sender]==false,"you have already mint it");

        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        totalSupply++;

        status[msg.sender]=true;
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