export const NOTSTARTED = "notstarted";
export const STARTED = "started";
export const APPROVING = "approving";
export const ISSUING = "issuing";
export const REDEEMING = "redeeming";
export const DONE = "done";

export const WHITE = "#FFFFFF";
export const BLACK = "#252525";
export const GREEN = "#4DF1A1";
export const OFF_WHITE = "#F2F2F2";
export const PURPLE = "#641CD0";
export const GREY = "#5F5F5F";
export const LIGHT_GREY = "#C6C6C6";
export const DARK_GREY = "#8F8F8F";
export const LIGHT_BLACK = "#3A3A3A";

const BN = require('bn.js');
const TEN = new BN(10)
export const SIX = TEN.pow(new BN(6));
export const TWELVE = TEN.pow(new BN(12));
export const EIGHTEEN = TEN.pow(new BN(18));
export const GENERATE_TEXT = ["Approve USDC", "Approve TUSD", "Approve PAX", "Generate RSV"];
export const REDEEM_TEXT = ["Approve RSV", "Redeem RSV"];
export const METAMASK_TEXT = "The Metamask extension is required to generate or redeem RSV";
export const HELP_TEXT = "RSV is a decentralized stablecoin collateralized by USDC, TUSD, and PAX that can be generated and redeemed by anyone, anytime. ";

export function getIssuableRSV(usdc, tusd, pax) {
  if (!usdc || !tusd || !pax || !usdc.value || !tusd.value || !pax.value) { 
    return 0; 
  }
  const usdcBN = new BN(usdc.value);
  const tusdBN = new BN(tusd.value);
  const paxBN = new BN(pax.value);

  return usdcBN.mul(TWELVE).add(tusdBN).add(paxBN).div(EIGHTEEN).toNumber();
};

export function getRedeemableRSV(rsv) {
  if (!rsv || !rsv.value) {
    return 0;
  }

  return new BN(rsv.value).div(EIGHTEEN).toNumber();
}


export function countOccurrences(arr, elem) {
  var count = 0;
  for (var key in arr) {
    count += (arr[key] === elem);
  }
  return count;
}

export function formatNumber (nativeDecimals) {
  return function(num) {
    if (!num) {
      return 0;
    }

    num = num / Math.pow(10, nativeDecimals);
    return Math.round(num * 100) / 100;
  }
};

export function isValidInput(num, max) {
  return num == "" || (num.match(/^\d+$/) && num > 0 && num <= max);
}
