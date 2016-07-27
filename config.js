module.exports = {
  'secret' : 'cubopezlosabetodo',
  'dataBase'  : 'mongodb://localhost/cube',
  hashCode : function(pssw){    //Funcion de hash para almacenar las contraseñas de los usuarios
    var hash = 0, i, chr, len;
    if (pssw.length === 0) return hash;
    for (i = 0, len = pssw.length; i < len; i++) {
      chr   = pssw.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }

}
