/**
 * Prepara as classes que serão utilizadas para realizar a validação.
 * @constructor
 * @param {string} sheet_id - 
 */
function Validate(sheet_id) {
  // A planilha a ser validada
  this.sheet_id = sheet_id;
  
  // A chave para a planilha de padrões do febr;
  this.std_id = "1Dalqi5JbW4fg9oNkXw5TykZTA39pR5GezapVeV0lJZI";

  this.type = "";
}

/**
 * @description -
 */
Validate.prototype.dataset = function() {
  this.std_sheet = new DatasetSTD(SpreadsheetApp.openById(this.std_id));
  this.sheet = new Dataset();
  this.type = "dataset";
}

/**
 * @description -
 */
Validate.prototype.observacao = function() {
  this.std_sheet = new ObservationSTD(SpreadsheetApp.openById(this.std_id));
  this.sheet = new Observation();
  this.type = "observacao";
}

Validate.prototype.run = function() {
  if(this.type === "dataset") {  
  }
  else if(this.type === "observacao") {
    ValidateObservation(this.sheet, this.std_sheet);
  }
  else if(this.type === "camada") {
  }
  else if(this.type === "metadados") { 
  }
  
}

function test() {
  var s = new Validate("1xhrj70CT2gTuohKJJU3smA7Yykba0pdVnEq9uxAvjSM");
  s.observacao();
  s.std_sheet.log();
  s.run();
}