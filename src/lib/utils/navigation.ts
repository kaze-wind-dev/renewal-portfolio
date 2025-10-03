export function isCurrent(pathname: string, hrefPath: string) {
  if (hrefPath === "/") {
    return pathname === hrefPath;
  } else {
    return pathname.includes(hrefPath);
  }
}