export const INTEREST_EVENT = 'akter:interest';

export function setInterest(interest: string) {
  window.dispatchEvent(new CustomEvent<string>(INTEREST_EVENT, { detail: interest }));
}
