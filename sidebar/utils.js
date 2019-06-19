/**
 * @description Função auxiliar do módulo HTML para inclusão de arquivos.
 * @param {string} filename Nome do arquivo a ser importado.
 * @author Yagi <https://yagisanatode.com>
 */
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
};