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
 * @description Imprime no Logger do Google Apps Script todos os registros de erros.
 */
Observacao.prototype.output = function() {
  this.columns.forEach(function(item, index) {
    Logger.log("[" + index + "]");
    Logger.log(item);
  });
}

/**
 * @description Adiciona uma nova coluna com o código e a unidade de medida especificados.
 * @param {string} code - O código identificador da coluna
 * @param {string} unit - A unidade de medida da coluna
 * @returns {number} O indíce do valor adicionado ou 0 caso os parâmetros estejam em formatos incorretos.
 */
Observacao.prototype.addColumn = function(code, unit) {
  var index = 0;

  if(typeof(code) === "string" && typeof(unit) == "string") {
    index = this.columns.length;
    Logger.log("Adding column " + code);
    this.columns.push(new Column(code,unit));
  }

  return index;
}

/**
 * @description Pesquisa uma coluna pelo código identificador.
 * @param {string} code - O código identificador
 * @returns {number} Um inteiro positivo representado o índice da coluna, ou -1 caso não seja encontrada.
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

/**
 * @description Adiciona um valor a coluna identificada pelo código.
 * @param {string} code - O código identificador da coluna
 * @param {any} value - O valor ser adicionado
 * @returns {number} O índice da coluna do valor adicionado, ou -1 caso não seja encontrada nenhuma coluna com o código informado.
 */
Observacao.prototype.addValue = function(code, value) {
  var index = this.findColumn(code);

  if(index >= 0) {
    this.columns[index].rows.push(value);
  }

  return -1;
}

/**
 * @description Verifica se um valor já foi adicionado a coluna.
 * @param {string} code - O código identificador da coluna
 * @param {any} value - O valor a ser pesquisado
 * @return 0 caso o valor não seja encontrado, e 1 caso seja encontrado.
 */
Observacao.prototype.searchValue = function(code, value) {
  var code_index = -1;
  var row_index = -1;

  if(typeof(code) === "string") {
    code_index = this.findColumn(code);
  }

  if(code_index >= 0) {
    this.columns[code_index].rows.forEach(function(item, item_index) {
      if(item === value) {
        row_index = item_index;
      }
    });
  }

  if(row_index < 0) {
    return 0; // Valor não adicionado
  }
  
  return 1; // Valor já adicionado
}

/**
 * @description Verifica se a unidade de medida está correta para a coluna do código especificado.
 * @param {string} code - O código identificador da coluna
 * @param {number} unit - A unidade de medida da coluna
 * @returns {number} 0 caso a unidade de medida esteja errada, e 1 caso esteja correta.
 */
Observacao.prototype.matchUnit = function(code, unit) {
  var index = 0;

  if(typeof(code) === "string") {
    if(/^erosao_frequencia_[0-9]+$/.test(code)) {
      // Código legado
      index = this.findColumn("erosao_frequencia_i");
    }
    else if(/^erosao_forma_[0-9]+$/.test(code)) {
      // Código legado
      index = this.findColumn("erosao_forma_i");
    }
    else if(/^erosa_profundid_[0-9]+$/.test(code)) {
      // Código legado
      index = this.findColumn("erosao_profundid_i");
    }
    else {
      index = this.findColumn(code);
    }
  }

  // Previne que sejam acessadas posições inválidas do vetor.
  if(index >= 0) {
    if(this.columns[index].unit === unit) {
      index = 1;
    }
    else {
      index = 0;
    }
  }

  return index;
}

/**
 * @description Cria uma instância e preenche com os dados de planilha de padrões do febr.
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet - A planilha que será usada para criar a instância
 * @returns {Observacao} Um objeto com os dados da planilha.
 */
Observacao.createStandard = function(sheet) {
  var stds = new Observacao();
  var last_row = sheet.getLastRow();
  
  stds.addColumn("observacao_id", "#metadado>");
  
  for(var row = 2; row < last_row && sheet.getRange(row,1).getValue() === "observacao"; row++) {
    var carater = sheet.getRange(row,9).getValue();

    if(carater === "obrigatório" || carater === "recomendado") {
      var code = sheet.getRange(row,2).getValue().toString();
      var unit = sheet.getRange(row,5).getValue().toString();
      stds.addColumn(code, unit);
    }
  }
  
  return stds;
}
