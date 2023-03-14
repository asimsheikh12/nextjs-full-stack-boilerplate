const basePath = `${
  process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : ''
}/icons/`;

export const icons = {
  logoIcon: `${basePath}`,
};

export const favIcons = `${process.env.NEXT_PUBLIC_BASE_PATH}/favicons`;

export const enum ApiVersions {
  V1 = 'V1',
  MOCK = 'MOCK',
}

export const enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
