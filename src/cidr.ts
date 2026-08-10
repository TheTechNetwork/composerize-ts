import { Address4, Address6 } from 'ip-address';

// Normalize a CIDR string to its network-start address plus subnet suffix,
// e.g. '192.168.0.22/24' -> '192.168.0.0/24' and
// '2001:0000:0000:1234:1b12:0000:0000:1a13/64' -> '2001:0:0:1234::/64'.
// ip-address' correctForm() applies RFC 5952 canonical IPv6 compression, so no
// hand-rolled abbreviation is needed.
export const normalize = (address: string): string => {
  if (Address4.isValid(address)) {
    const cidr = new Address4(address);
    return `${cidr.startAddress().correctForm()}/${cidr.subnetMask}`;
  }

  if (Address6.isValid(address)) {
    const cidr = new Address6(address);
    return `${cidr.startAddress().correctForm()}/${cidr.subnetMask}`;
  }

  return '';
};
