// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
import "./strings.sol";

/**
* @title Storage
* @dev Store & retrieve value in a variable
* @custom:dev-run-script ./scripts/deploy_with_ethers.ts
*/
contract CalorieCounter {
using strings for *;

function parseString(string memory calories) public pure returns( string[] memory ) {
string memory delim = "\n";
string[] memory parts = new string[](
calories.toSlice().count(delim.toSlice()) + 1
);

for (uint i = 0; i < parts.length; i++) {
parts[i] = calories.toSlice().split(
delim.toSlice()
).toString();
}
return parts;
}
}
