function someDesc(description, tag) {

  return formatDesc( tag, description );

  //функция привода полного описания к нужному формату (максимальная длина 240)

  function formatDesc(tag, desc) {

    var maxLength = 240;
    var tagLength = tag.length;

    // если длина описания меньше 240 вернуть форматированный текст полного описания
    if (desc.length < maxLength) {
      
      return strongMark(desc, tag)
    } else {
      // если длина больше 240 то отформатировать текст с колбеком обрезания
      return strongMark(desc, tag, trimText);
    }

  }

  function trimText(desc, tag) {

    var desc = desc;
    var tag = tag;
    var maxLength = 240;
    var position = desc.toLowerCase().indexOf(tag);
    var trimed;

    if (position === -1) {

      trimed = desc.substr(0, 240);
      return trimed;

    } else if (position < maxLength / 2) {

      trimed = desc.substr(0, position) + desc.substr(position, maxLength - position);
      return trimed;

    } else {

      trimed = '...' + desc.substring(position - 120, position) + desc.substring(position, position + tag.length + 120) + '...';
      return trimed

    }

  }

  function strongMark(string, tag, trim) {

    var text = (trim) ? trim(string, tag) : string;
    var reg = new RegExp(tag, 'gi');

    return result = text.replace(reg, function(str) {
      return '<strong>' + str + '</strong>'
    });

  }

}

module.exports = someDesc;
