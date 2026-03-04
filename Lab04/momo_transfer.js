// Author: Kanjo Elkamira Ndi 

function momoTransfer(amount){
    if(amount <= 0){
        throw new Error("Invalid transfer amount");
    }

    return true;
}

// Validation Layer

module.exports = momoTransfer;