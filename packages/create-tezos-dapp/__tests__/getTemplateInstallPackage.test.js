/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { getTemplateInstallPackage } = require('../createReactApp');

describe('getTemplateInstallPackage', () => {
  it('no options gives tezos-template', async () => {
    await expect(getTemplateInstallPackage()).resolves.toBe('tezos-template');
  });

  it('tezos-template gives tezos-template', async () => {
    await expect(getTemplateInstallPackage('tezos-template')).resolves.toBe(
      'tezos-template'
    );
  });

  it('tezos-template-typescript gives tezos-template-typescript', async () => {
    await expect(
      getTemplateInstallPackage('tezos-template-typescript')
    ).resolves.toBe('tezos-template-typescript');
  });

  it('typescript gives tezos-template-typescript', async () => {
    await expect(getTemplateInstallPackage('typescript')).resolves.toBe(
      'tezos-template-typescript'
    );
  });

  it('typescript@next gives tezos-template-typescript@next', async () => {
    await expect(getTemplateInstallPackage('typescript@next')).resolves.toBe(
      'tezos-template-typescript@next'
    );
  });

  it('tezos-template@next gives tezos-template@next', async () => {
    await expect(getTemplateInstallPackage('tezos-template@next')).resolves.toBe(
      'tezos-template@next'
    );
  });

  it('tezos-template-typescript@next gives tezos-template-typescript@next', async () => {
    await expect(
      getTemplateInstallPackage('tezos-template-typescript@next')
    ).resolves.toBe('tezos-template-typescript@next');
  });

  it('@iansu gives @iansu/tezos-template', async () => {
    await expect(getTemplateInstallPackage('@iansu')).resolves.toBe(
      '@iansu/tezos-template'
    );
  });

  it('@iansu/tezos-template gives @iansu/tezos-template', async () => {
    await expect(
      getTemplateInstallPackage('@iansu/tezos-template')
    ).resolves.toBe('@iansu/tezos-template');
  });

  it('@iansu/tezos-template@next gives @iansu/tezos-template@next', async () => {
    await expect(
      getTemplateInstallPackage('@iansu/tezos-template@next')
    ).resolves.toBe('@iansu/tezos-template@next');
  });

  it('@iansu/tezos-template-typescript@next gives @iansu/tezos-template-typescript@next', async () => {
    await expect(
      getTemplateInstallPackage('@iansu/tezos-template-typescript@next')
    ).resolves.toBe('@iansu/tezos-template-typescript@next');
  });

  it('http://example.com/tezos-template.tar.gz gives http://example.com/tezos-template.tar.gz', async () => {
    await expect(
      getTemplateInstallPackage('http://example.com/tezos-template.tar.gz')
    ).resolves.toBe('http://example.com/tezos-template.tar.gz');
  });
});
