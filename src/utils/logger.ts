export function warn(message?: any, ...optionalParams: any[]) {
  if (optionalParams.length == 0) {
    console.log(`\x1b[33m[WARN] ${message}\x1b[0m`);
  } else {
    console.log(`\x1b[33m[WARN] ${message}`, optionalParams, "\x1b[0m");
  }
}

export function error(message?: any, ...optionalParams: any[]) {
  if (optionalParams.length == 0) {
    console.error(`\x1b[31m[ERROR] ${message}\x1b[0m`);
  } else {
    console.error(`\x1b[31m[ERROR] ${message}`, optionalParams, "\x1b[0m");
  }
}

export function info(message?: any, ...optionalParams: any[]) {
  if (optionalParams.length == 0) {
    console.log(`\x1b[0m[INFO] ${message}`);
  } else {
    console.log(`\x1b[0m[INFO] ${message}`, optionalParams);
  }
}
