/**
 * Representa a planilha Observação
 * @constructor
 * @author Mikael Messias <mikaelmessias@alunos.utfpr.edu.br>
 */
function Observacao() {
  // Armazena instâncias da classe Columns
  this.columns = [];
}

/**
 * Representa os dados da planilha Observação
 * @constructor
 * @author Mikael Messias <mikaelmessias@alunos.utfpr.edu.br>
 */
function Column(code, unit) {
  this.code = code;
  this.unit = unit;
  this.rows = [];
}

/**
 * @description Adiciona uma nova coluna com o código e a unidade de medida especifidados.
 * @param {string} code - O código identificador da coluna
 * @param {string} unit - A unidade de medida da coluna
 * @returns {number} O indíce do valor adicionado ou 0 caso os parâmetros estejam em formatos incorretos
 */
Observacao.prototype.addColumn = function(code, unit) {
  if(typeof(code) === "string" && typeof(unit) == "string") {
    this.columns.push(new Column(code,unit));
    return this.columns.length - 1;
  }
  return 0;
}