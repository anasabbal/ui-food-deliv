import { Type } from 'typescript';
import { messages } from './messages';

const errorTypes = Object.freeze({
  apiError: 'ApiError',
  networkError: 'NetworkError',
  notClassified: 'NotClassified',
});

const networkErrorKeywords = Object.freeze([
  'network error',
  'failed to fetch',
  'fetch error',
]);

function getFromMessagesByCode(error: any) {
  return null;
}

function isNetworkError(error: any) {
  if (error instanceof TypeError) {
    return true;
  }

  const errorLowerCaseStr = error?.toString()?.toLowerCase();
  if (!errorLowerCaseStr) {
    return false;
  }

  return networkErrorKeywords.some((t) => errorLowerCaseStr.indexOf(t) >= 0);
}

function isApiError(error: any) {
  const data = error?.response?.data || error?.data || error;

  if (!data) {
    return false;
  }

  return !!data.code || data.message !== undefined || !!data.reference;
}

function getErrorType(error: any) {
  const networkError = isNetworkError(error);
  if (networkError) {
    return errorTypes.networkError;
  }

  const apiError = isApiError(error);
  if (apiError) {
    return errorTypes.apiError;
  }

  return errorTypes.notClassified;
}

export default function getApiErrorMessage(error: any) {
  const errorType = getErrorType(error);

  switch (errorType) {
    case errorTypes.apiError: {
      const { code, message, reference } =
        error?.response?.data || error?.data || error;

      if (message) {
        return { content: message };
      }

      // this is for a special case where data = { code: XXX, message: "" }
      if (message !== undefined && code) {
        return { content: getFromMessagesByCode(code) };
      }

      if (reference) {
        return { content: reference };
      }

      return { content: getFromMessagesByCode(code) };
    }

    case errorTypes.networkError: {
      return { content: errorType };
    }

    case errorTypes.notClassified:
    default: {
      return { content: messages.unknown };
    }
  }
}
