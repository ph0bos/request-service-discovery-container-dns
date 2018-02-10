'use strict';

/**
 * Simple Host Port Resolver.
 */
class HostPortResolver {
  constructor () {

  }

  /**
   *
   * @param name
   * @param port
   * @returns {Promise.<*>}
   */
  async resolve(host, port = 80) {
    return Promise.resolve(`${host}:${port}`);
  }
}

module.exports = new HostPortResolver();