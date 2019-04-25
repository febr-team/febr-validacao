/**
 * Representa a planilha Observação.
 * @constructor
 * @author Mikael Messias <mikaelmessias@alunos.utfpr.edu.br>
 */
function Observacao() {
  // Armazena instâncias da classe Columns
  this.columns = [];
}

/**
 * Representa os dados da planilha Observação.
 * @constructor
 * @param {string} code - O código identificador da coluna
 * @param {string} unit - A unidade de medida da coluna 
 * @author Mikael Messias <mikaelmessias@alunos.utfpr.edu.br>
 */
function Column(code, unit) {
  this.code = code;
  this.unit = unit;
  this.rows = [];
}

/**
 * @description Imprime no console do Google Apps Script todos os registros de erros.
 */
Observacao.prototype.output = function() {
  this.columns.forEach(function(item, index) {
    console.log("[" + index + "]");
    console.log(item);
  });
}

/**
 * @description Adiciona uma nova coluna com o código e a unidade de medida especificados.
 * @param {string} code - O código identificador da coluna
 * @param {string} unit - A unidade de medida da coluna
 * @returns {number} O indíce do valor adicionado ou 0 caso os parâmetros estejam em formatos incorretos.
 */
Observacao.prototype.addColumn = function(code, unit) {
  if(typeof(code) === "string" && typeof(unit) == "string") {
    this.columns.push(new Column(code,unit));
    return this.columns.length - 1;
  }
  return 0;
}

/**
 * @description Pesquisa uma coluna pelo código identificador.
 * @param {string} code - O código identificador
 * @returns {number} Um número inteiro positivo representado a posição da coluna, ou -1 caso não seja encontrada.
 */
Observacao.prototype.findColumn = function(code) {
  var index = -1;

  this.columns.forEach(function(item, item_index) {
    if(item.code === code) {
      index = item_index;
    }
  });

  return index;
}