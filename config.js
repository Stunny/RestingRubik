module.exports = {
  'secret' : 'cubopezlosabetodo',
  'dataBase'  : 'mongodb://localhost/cube',
  hashCode : function(pssw){
    var hash = 0, i, chr, len;
    if (this.length === 0) return hash;
    for (i = 0, len = this.length; i < len; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }

}