/**
 * $keys
 * 
 * Retorna um array dos nomes das propriedades enumarada de
 * um determinado objeto
 * 
 * @module $keys
 * @author Cleber de Moraes Gonçalves <cleber.programmer>
 * @example
 * 
 *        $key({ a: 1, b: 2});
 * 
 */
Ninja.module('$keys', [], function () {
  
  /**
   * Retorna um array do nomes das propriedades enumeradas de um
   * determinado objeto
   * 
   * @public
   * @method keys
   * @param {Object} a Objeto
   * @return {Array} Array dos nomes das propriedades enumaradas
   * @example
   * 
   *        $key({ a: 1, b: 2});
   * 
   */
  function keys(a) {
    return Object.keys(a);
  }
  
  /**
   * Revelacao do servico $keys, encapsulando a visibilidade das funcoes
   * privadas
   */
  return keys;
  
});
