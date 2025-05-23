import { get } from 'svelte/store';

import { beforeEach, describe, expect, it } from 'vitest';

import { authUser } from './auth-user';
import { dataEncoder } from './data-encoder';
import {
  codecEndpoint,
  overrideRemoteCodecConfiguration,
} from './data-encoder-config';

const clearLocalStorageAndStores = () => {
  localStorage.clear();
  codecEndpoint.set('');
  overrideRemoteCodecConfiguration.set(false);
};

describe('dataEncoder', () => {
  beforeEach(clearLocalStorageAndStores);

  it('should set default values', () => {
    expect(get(dataEncoder)).toEqual({
      accessToken: undefined,
      endpoint: '',
      hasError: false,
      hasNotRequested: true,
      hasSuccess: false,
      namespace: 'default',
      settingsEndpoint: '',
      settingsIncludeCredentials: false,
      settingsPassAccessToken: false,
      customErrorLink: '',
      customErrorMessage: '',
    });
  });

  it('should set access token from authUser', () => {
    authUser.set({ accessToken: 'abc' });
    expect(get(dataEncoder)).toEqual({
      accessToken: 'abc',
      endpoint: '',
      hasError: false,
      hasNotRequested: true,
      hasSuccess: false,
      namespace: 'default',
      settingsEndpoint: '',
      settingsIncludeCredentials: false,
      settingsPassAccessToken: false,
      customErrorLink: '',
      customErrorMessage: '',
    });
  });

  it('should set access token from authUser', () => {
    authUser.set({ accessToken: 'abc' });
    expect(get(dataEncoder)).toEqual({
      accessToken: 'abc',
      endpoint: '',
      hasError: false,
      hasNotRequested: true,
      hasSuccess: false,
      namespace: 'default',
      settingsEndpoint: '',
      settingsIncludeCredentials: false,
      settingsPassAccessToken: false,
      customErrorLink: '',
      customErrorMessage: '',
    });
  });

  it('should set codecEndpoint', () => {
    codecEndpoint.set('https://localhost:8383');
    expect(get(dataEncoder)).toEqual({
      accessToken: 'abc',
      endpoint: 'https://localhost:8383',
      hasError: false,
      hasNotRequested: true,
      hasSuccess: false,
      namespace: 'default',
      settingsEndpoint: '',
      settingsIncludeCredentials: false,
      settingsPassAccessToken: false,
      customErrorLink: '',
      customErrorMessage: '',
    });
  });
});
